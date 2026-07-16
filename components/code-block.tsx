import { cn } from "@/lib/utils";
import { highlightCode } from "@/lib/shiki";

interface CodeBlockProps {
  children: string;
  language?: string;
  className?: string;
}

export async function CodeBlock({ children, language = "text", className }: CodeBlockProps) {
  const highlighted = await highlightCode(children, language);
  
  return (
    <div className={cn("relative group", className)}>
      <div className="absolute top-3 right-3 text-xs text-foreground-secondary font-mono z-10">
        {language}
      </div>
      <div 
        className="overflow-x-auto rounded-lg bg-zinc-950 border border-zinc-900 text-sm"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  );
}
