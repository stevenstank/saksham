import { createHighlighter } from 'shiki';

// The promise is cached rather than the resolved highlighter: getHighlighter is
// called concurrently (every code fence in a post is highlighted in parallel),
// and caching only the resolved value lets every one of those calls race past
// the nil check and build its own instance.
let highlighterPromise: ReturnType<typeof createHighlighter> | null = null;

export async function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-dark'],
      langs: ['typescript', 'javascript', 'go', 'rust', 'python', 'bash', 'json', 'yaml', 'toml'],
    });
  }
  return highlighterPromise;
}

export async function highlightCode(code: string, lang: string = 'text') {
  const highlighter = await getHighlighter();
  return highlighter.codeToHtml(code, {
    lang: lang as any,
    theme: 'github-dark',
  });
}
