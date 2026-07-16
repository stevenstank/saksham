import type { MDXComponents } from 'mdx/types';
import { CodeBlock } from '@/components/code-block';
import { Callout } from '@/components/callout';
import { Terminal } from '@/components/terminal';
import { FileTree } from '@/components/file-tree';
import { ArchitectureDiagram } from '@/components/architecture-diagram';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: ({ children }) => <CodeBlock>{children as string}</CodeBlock>,
    Callout,
    Terminal,
    FileTree,
    ArchitectureDiagram,
  };
}
