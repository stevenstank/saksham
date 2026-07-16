import { createHighlighter } from 'shiki';

let highlighter: Awaited<ReturnType<typeof createHighlighter>> | null = null;

export async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['github-dark'],
      langs: ['typescript', 'javascript', 'go', 'rust', 'python', 'bash', 'json', 'yaml', 'toml'],
    });
  }
  return highlighter;
}

export async function highlightCode(code: string, lang: string = 'text') {
  const highlighter = await getHighlighter();
  return highlighter.codeToHtml(code, {
    lang: lang as any,
    theme: 'github-dark',
  });
}
