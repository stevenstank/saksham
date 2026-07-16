import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  readingTime: string;
  href: string;
  className?: string;
}

export function BlogCard({ title, description, date, readingTime, href, className }: BlogCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block p-8 rounded-lg border border-zinc-900 bg-zinc-950/30 hover:border-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-900/20",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 text-sm text-foreground-secondary mb-3">
            <time>{date}</time>
            <span>·</span>
            <span>{readingTime}</span>
          </div>
          <h3 className="text-xl font-medium text-foreground group-hover:text-accent transition-all duration-300" style={{ textShadow: '0 0 8px rgba(250, 250, 250, 0.1)' }}>
            {title}
          </h3>
          <p className="mt-3 text-base text-foreground-secondary line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
        <ArrowRight className="ml-4 h-6 w-6 text-foreground-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </div>
    </Link>
  );
}
