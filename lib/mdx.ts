import { marked } from "marked";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';

// reading-time is a CommonJS module, use require
const readingTime = require('reading-time');

const CONTENT_DIR = path.join(process.cwd(), 'content');

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
  
  if (postsCache?.has(cacheKey)) {
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
      content: await marked.parse(content),
      published: data.published !== false,
      project: data.project,
      github: data.github,
      projectHref: data.projectHref,
    };
  }));

  const publishedPosts = posts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (!postsCache) {
    postsCache = new Map();
  }
  postsCache.set(cacheKey, publishedPosts);

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
