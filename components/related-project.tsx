import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface RelatedProjectProps {
  name: string;
  description: string;
  github: string;
  href: string;
}

export function RelatedProject({ name, description, github, href }: RelatedProjectProps) {
  return (
    <div className="mt-16 pt-8 border-t border-zinc-900">
      <h3 className="text-sm text-foreground-secondary mb-4">Related Project</h3>
      <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/30 hover:border-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-900/20">
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-medium text-foreground mb-2" style={{ textShadow: '0 0 8px rgba(250, 250, 250, 0.1)' }}>
              {name}
            </h4>
            <p className="text-base text-foreground-secondary leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-foreground transition-colors"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>
            <Link
              href={href}
              className="inline-flex items-center gap-2 text-sm text-[#F4B942] hover:text-[#f5c76b] transition-colors"
            >
              View Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
