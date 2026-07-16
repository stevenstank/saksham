import { cn } from "@/lib/utils";
import { AlertCircle, Info, CheckCircle, Lightbulb } from "lucide-react";

type CalloutType = "info" | "warning" | "success" | "tip";

interface CalloutProps {
  children: React.ReactNode;
  type?: CalloutType;
  className?: string;
}

const icons = {
  info: Info,
  warning: AlertCircle,
  success: CheckCircle,
  tip: Lightbulb,
};

const colors = {
  info: "text-blue-400 border-blue-900/50 bg-blue-950/20",
  warning: "text-yellow-400 border-yellow-900/50 bg-yellow-950/20",
  success: "text-green-400 border-green-900/50 bg-green-950/20",
  tip: "text-accent border-accent/50 bg-accent/10",
};

export function Callout({ children, type = "info", className }: CalloutProps) {
  const Icon = icons[type];
  const colorClass = colors[type];

  return (
    <div className={cn("my-6 rounded-lg border p-4", colorClass, className)}>
      <div className="flex items-start gap-3">
        <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
        <div className="flex-1 text-sm text-foreground-secondary">{children}</div>
      </div>
    </div>
  );
}
