import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/badge";

interface BlogCardProps {
  title: string;
  description: string;
  formattedDate: string;
  readingTime: string;
  tags: string[];
  href: string;
  className?: string;
}

const cardClassName =
  "block p-6 sm:p-8 rounded-lg border border-zinc-900 bg-zinc-950/30 transition-all duration-300";

function Tags({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge key={tag}>{tag}</Badge>
      ))}
    </div>
  );
}

export function BlogCard({ title, description, formattedDate, readingTime, tags, href, className }: BlogCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group",
        cardClassName,
        "hover:border-zinc-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-900/20",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-foreground-secondary mb-3">
            <time className="whitespace-nowrap">{formattedDate}</time>
            <span aria-hidden="true">·</span>
            <span className="whitespace-nowrap">{readingTime}</span>
          </div>
          <h3 className="text-xl font-medium text-foreground group-hover:text-accent transition-all duration-300" style={{ textShadow: '0 0 8px rgba(250, 250, 250, 0.1)' }}>
            {title}
          </h3>
          <p className="mt-3 text-base text-foreground-secondary line-clamp-2 leading-relaxed">
            {description}
          </p>
          <Tags tags={tags} />
        </div>
        {/* Hover-only affordance, so it would just reserve an empty gutter on touch screens. */}
        <ArrowRight className="hidden sm:block ml-4 h-6 w-6 shrink-0 text-foreground-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </div>
    </Link>
  );
}

interface UpcomingBlogCardProps {
  /** Used as the element id, so /blog#<slug> can point at the announcement. */
  slug: string;
  title: string;
  description: string;
  tags: string[];
  project?: string;
  projectHref?: string;
  className?: string;
}

/** A post announced on /blog before it is written: no date, no route, not a link. */
export function UpcomingBlogCard({ slug, title, description, tags, project, projectHref, className }: UpcomingBlogCardProps) {
  return (
    <article id={slug} className={cn(cardClassName, "scroll-mt-24 border-dashed", className)}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-foreground-secondary mb-3">
        <span
          className="text-xs font-medium tracking-widest px-2 py-1 rounded-full border border-[#C98F1D]/60 text-[#F7C75A] bg-[#131313] whitespace-nowrap"
          style={{ textShadow: '0 0 6px rgba(247, 199, 90, 0.3)' }}
        >
          COMING SOON
        </span>
        {project && <span className="whitespace-nowrap">{project}</span>}
      </div>
      <h3 className="text-xl font-medium text-foreground" style={{ textShadow: '0 0 8px rgba(250, 250, 250, 0.1)' }}>
        {title}
      </h3>
      <p className="mt-3 text-base text-foreground-secondary leading-relaxed">
        {description}
      </p>
      <Tags tags={tags} />
      {project && projectHref && (
        <Link
          href={projectHref}
          className="mt-4 inline-flex items-center gap-2 py-2 text-sm text-accent hover:text-accent-secondary transition-all duration-300 hover:gap-3 group"
        >
          View {project}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </article>
  );
}
