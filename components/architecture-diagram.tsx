import { cn } from "@/lib/utils";

interface ArchitectureDiagramProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function ArchitectureDiagram({ children, title, className }: ArchitectureDiagramProps) {
  return (
    <div className={cn("my-6", className)}>
      {title && (
        <h4 className="text-sm font-medium text-foreground mb-4">{title}</h4>
      )}
      <div className="p-6 rounded-lg border border-zinc-900 bg-zinc-950/30">
        {children}
      </div>
    </div>
  );
}
