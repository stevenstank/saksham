import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-300",
        "bg-[#131313]",
        "border-[#C98F1D]",
        "text-[#F7C75A]",
        "hover:-translate-y-0.5",
        "hover:border-[#FFD369]",
        "hover:shadow-[0_0_20px_rgba(255,211,105,0.35)]",
        className
      )}
      style={{ textShadow: '0 0 6px rgba(247, 199, 90, 0.3)' }}
    >
      {children}
    </span>
  );
}
