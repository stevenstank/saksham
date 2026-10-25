import { Container } from "@/components/container";
import { Section } from "@/components/section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  github: string;
  tech: string[];
  status: string;
  /** Renders the larger, accent-bordered treatment with the highlights grid. */
  featured?: boolean;
  /** Pill shown next to the status on featured projects. */
  category?: string;
  /** Short engineering notes shown only on featured projects. */
  highlights?: { label: string; detail: string }[];
  /** Link to a long-form writeup on the blog. */
  writeup?: { href: string; label: string };
}

const featuredProjects: Project[] = [
  {
    title: "Atlas",
    description:
      "An explicit-state model checker and assignment optimizer in Go. It checks safety invariants, produces counterexample traces, and solves assignment problems with branch-and-bound.",
    github: "https://github.com/stevenstank/atlas",
    tech: ["Go 1.26", "Stdlib only", "Model Checking", "Branch-and-Bound"],
    status: "Released · v0.1.0",
    featured: true,
    category: "Systems Engineering / Go",
    writeup: {
      href: "/blog#building-atlas-inside-a-go-model-checker",
      label: "Writeup coming soon",
    },
  },
  {
    title: "Forge",
    description:
      "A container runtime built from scratch in Go using Linux primitives and raw kernel interfaces.",
    github: "https://github.com/stevenstank/forge",
    tech: ["Go", "Linux Namespaces", "cgroups v2", "netlink", "OCI Images", "Syscalls"],
    status: "Built",
    featured: true,
    writeup: {
      href: "/blog/inside-forge-container-runtime-from-scratch",
      label: "Read the writeup",
    },
   
  },
  {
    title: "Bolt",
    description: "Redis-inspired in-memory database written in Go. Currently exploring persistence, networking and distributed systems while building it.",
    github: "https://github.com/stevenstank/bolt",
    tech: ["Go", "Redis Protocol", "Distributed Systems"],
    status: "Built",
    writeup: {
      href: "/blog/why-i-built-my-own-redis",
      label: "Read the writeup",
    },
  },
  {
    title: "Dispatch",
    description: "Distributed task runner built in Go with workers, coordinators and concurrent execution.",
    github: "https://github.com/stevenstank/dispatch",
    tech: ["Go", "Concurrency", "Task Queue"],
    status: "Built",
  },
  {
    title: "SaksGram",
    description: "A social media platform built to explore authentication, real-time interactions and modern full-stack architecture.",
    github: "https://github.com/stevenstank/saks-gram",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Real-time"],
    status: "Built",
  },
];

function StatusBadge({ status }: { status: string }) {
  const colors = {
    Building: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    Completed: "bg-green-500/10 text-green-400 border-green-500/20",
    Released: "bg-green-500/10 text-green-400 border-green-500/20",
    Archived: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
  };
  // "Released · v0.1.0" carries its version, so match on the first word.
  const key = status.split(" ")[0] as keyof typeof colors;
  return (
    <span className={cn("text-xs px-2 py-1 rounded-full border whitespace-nowrap", colors[key] || colors.Building)}>
      {status}
    </span>
  );
}

export default function ProjectsPage() {
  return (
    <Container>
      <Section>
        <div className="space-y-10">
          <div>
            <h1 className="text-5xl sm:text-6xl font-medium text-[#F4B942] tracking-tight mb-6 sm:mb-8" style={{ textShadow: '0 0 8px rgba(244, 185, 66, 0.2), 0 0 16px rgba(244, 185, 66, 0.1)' }}>
              Projects
            </h1>
            <p className="text-lg sm:text-xl text-foreground-secondary max-w-3xl leading-relaxed">
              Engineering case studies and open source projects focused on distributed systems, databases, and developer tooling.
            </p>
          </div>

          <div className="grid gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                id={project.title.toLowerCase()}
                className={cn(
                  "p-5 sm:p-6 rounded-xl border bg-zinc-950/30 transition-all duration-300 hover:-translate-y-1 scroll-mt-24",
                  project.featured
                    ? "border-[#C98F1D]/40 hover:border-[#C98F1D]/70 hover:shadow-lg hover:shadow-[#F4B942]/10"
                    : "border-zinc-900 hover:border-zinc-800 hover:shadow-lg hover:shadow-zinc-900/20"
                )}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-x-3 gap-y-2 mb-2 flex-wrap">
                      <h3 className="text-xl font-medium text-foreground" style={{ textShadow: '0 0 8px rgba(250, 250, 250, 0.1)' }}>
                        {project.title}
                      </h3>
                      <StatusBadge status={project.status} />
                      {project.featured && (
                        <span
                          className="text-xs px-2 py-1 rounded-full border border-[#C98F1D] text-[#F7C75A] bg-[#131313]"
                          style={{ textShadow: '0 0 6px rgba(247, 199, 90, 0.3)' }}
                        >
                          {project.category ?? "Systems deep dive"}
                        </span>
                      )}
                    </div>
                    <p className="text-base text-foreground-secondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {project.highlights && (
                  <div className="grid gap-3 sm:grid-cols-2 mt-6">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight.label}
                        className="rounded-lg border border-zinc-900 bg-zinc-950/40 p-3 sm:p-4"
                      >
                        <div className="text-sm font-medium text-[#F4B942] mb-1.5">
                          {highlight.label}
                        </div>
                        <p className="text-sm text-foreground-secondary leading-relaxed">
                          {highlight.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-zinc-900/50">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs text-foreground-secondary px-2 py-1 rounded-md bg-zinc-900/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
                    {project.writeup && (
                      <Link
                        href={project.writeup.href}
                        className="inline-flex items-center gap-2 py-2 whitespace-nowrap text-sm text-accent hover:text-accent-secondary transition-all duration-300 hover:gap-3 group"
                      >
                        {project.writeup.label}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 py-2 whitespace-nowrap text-sm text-accent hover:text-accent-secondary transition-all duration-300 hover:gap-3 group"
                    >
                      <FaGithub className="h-4 w-4" />
                      GitHub
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Container>
  );
}
