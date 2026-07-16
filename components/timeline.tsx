import { cn } from "@/lib/utils";

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("space-y-12", className)}>
      {items.map((item, index) => (
        <div key={index} className="relative pl-10 pb-12 border-l border-zinc-900 last:pb-0 last:border-l-0">
          <div className="absolute left-0 top-0 h-3 w-3 -translate-x-[6px] rounded-full bg-zinc-700" />
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-foreground" style={{ textShadow: '0 0 8px rgba(250, 250, 250, 0.1)' }}>{item.title}</h3>
            <p className="text-base text-accent">{item.organization}</p>
            <p className="text-sm text-foreground-secondary">{item.period}</p>
            {item.description && (
              <p className="mt-3 text-base text-foreground-secondary leading-relaxed">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
