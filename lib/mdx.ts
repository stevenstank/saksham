import { Marked, type Tokens } from "marked";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';
import { highlightCode } from './shiki';

// reading-time is a CommonJS module, use require
const readingTime = require('reading-time');

const CONTENT_DIR = path.join(process.cwd(), 'content');

// The grammars loaded in lib/shiki.ts. Anything else is rendered as plain
// text rather than crashing the build on a missing grammar.
const HIGHLIGHT_LANGS = new Set([
  'typescript', 'javascript', 'go', 'rust', 'python', 'bash', 'json', 'yaml', 'toml',
]);

const LANG_ALIASES: Record<string, string> = {
  sh: 'bash',
  shell: 'bash',
  console: 'bash',
  ts: 'typescript',
  js: 'javascript',
  golang: 'go',
  yml: 'yaml',
};

function normalizeLang(lang?: string): string {
  const raw = (lang || '').trim().toLowerCase().split(/\s+/)[0];
  const resolved = LANG_ALIASES[raw] ?? raw;
  return HIGHLIGHT_LANGS.has(resolved) ? resolved : 'text';
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// A code token carries its pre-rendered Shiki markup across from walkTokens
// (which may be async) to the renderer (which may not).
type HighlightedCode = Tokens.Code & { highlighted?: string };

const markdown = new Marked({
  async: true,
  walkTokens: async (token) => {
    if (token.type !== 'code') return;
    const code = token as HighlightedCode;
    const lang = normalizeLang(code.lang);
    try {
      code.highlighted = await highlightCode(code.text, lang);
    } catch {
      // Fall through to the escaped-plaintext renderer below.
    }
  },
  renderer: {
    code(token: Tokens.Code) {
      const lang = normalizeLang(token.lang);
      const highlighted = (token as HighlightedCode).highlighted;
      const body = highlighted ?? `<pre class="shiki"><code>${escapeHtml(token.text)}</code></pre>`;
      return `<div class="code-block" data-lang="${escapeHtml(lang)}">${body}</div>`;
    },
  },
});

// Caching is a build-time optimization only. getPosts is called by several
// pages and by generateStaticParams, and re-reading, parsing and Shiki-
// highlighting every post each time is wasted work during a production build.
//
// In development it is actively wrong: content/ is not part of the module
// graph, so editing a post triggers no HMR and nothing invalidates this map.
// The post stays stale until the dev server is restarted.
const CACHE_POSTS = process.env.NODE_ENV === 'production';

let postsCache: Map<string, any[]> | null = null;

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  formattedDate: string;
  updated?: string;
  formattedUpdated?: string;
  tags: string[];
  readingTime: string;
  content: string;
  published: boolean;
  project?: string;
  github?: string;
  projectHref?: string;
}

export async function getPosts(type: 'blog' | 'projects'): Promise<Post[]> {
  const cacheKey = type;
  
  if (CACHE_POSTS && postsCache?.has(cacheKey)) {
    return postsCache.get(cacheKey)!;
  }

  const dir = path.join(CONTENT_DIR, type);
  
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter(file => file.endsWith('.mdx'));
  
  const posts = await Promise.all(files.map(async (filename) => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const date = data.date || '';
    const updated = data.updated || '';
    const slug = filename.replace('.mdx', '');
    
    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date,
      formattedDate: date ? format(new Date(date), 'MMM d, yyyy') : '',
      updated,
      formattedUpdated: updated ? format(new Date(updated), 'MMM d, yyyy') : undefined,
      tags: data.tags || [],
      readingTime: readingTime(content).text,
      content: await markdown.parse(content),
      published: data.published !== false,
      project: data.project,
      github: data.github,
      projectHref: data.projectHref,
    };
  }));

  const publishedPosts = posts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (CACHE_POSTS) {
    if (!postsCache) {
      postsCache = new Map();
    }
    postsCache.set(cacheKey, publishedPosts);
  }

  return publishedPosts;
}

export async function getPostBySlug(type: 'blog' | 'projects', slug: string): Promise<Post | null> {
  const posts = await getPosts(type);
  return posts.find(post => post.slug === slug) || null;
}

export async function getAdjacentPosts(type: 'blog' | 'projects', currentSlug: string): Promise<{ previous: Post | null; next: Post | null }> {
  const posts = await getPosts(type);
  const currentIndex = posts.findIndex(post => post.slug === currentSlug);
  
  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: currentIndex > 0 ? posts[currentIndex - 1] : null,
    next: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
  };
}
