import { cn } from "@/lib/utils";

interface TerminalProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function Terminal({ children, title = "terminal", className }: TerminalProps) {
  return (
    <div className={cn("my-6 rounded-lg border border-zinc-900 overflow-hidden", className)}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-900 bg-zinc-950">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-zinc-700" />
          <div className="h-3 w-3 rounded-full bg-zinc-700" />
          <div className="h-3 w-3 rounded-full bg-zinc-700" />
        </div>
        <span className="ml-4 text-xs text-foreground-secondary font-mono">{title}</span>
      </div>
      <div className="p-4 bg-zinc-950/50">
        <pre className="text-sm font-mono text-foreground-secondary">{children}</pre>
      </div>
    </div>
  );
}
