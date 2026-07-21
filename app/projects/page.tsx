import { Container } from "@/components/container";
import { Section } from "@/components/section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const featuredProjects = [
  {
    title: "Bolt",
    description: "Redis-inspired in-memory database written in Go. Currently exploring persistence, networking and distributed systems while building it.",
    github: "https://github.com/stevenstank/bolt",
    tech: ["Go", "Redis Protocol", "Distributed Systems"],
    status: "Built",
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
    Archived: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
  };
  return (
    <span className={cn("text-xs px-2 py-1 rounded-full border", colors[status as keyof typeof colors] || colors.Building)}>
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
            <h1 className="text-5xl sm:text-6xl font-medium text-[#F4B942] tracking-tight mb-8" style={{ textShadow: '0 0 8px rgba(244, 185, 66, 0.2), 0 0 16px rgba(244, 185, 66, 0.1)' }}>
              Projects
            </h1>
            <p className="text-xl text-foreground-secondary max-w-3xl leading-relaxed">
              Engineering case studies and open source projects focused on distributed systems, databases, and developer tooling.
            </p>
          </div>

          <div className="grid gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/30 hover:border-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-900/20"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-medium text-foreground" style={{ textShadow: '0 0 8px rgba(250, 250, 250, 0.1)' }}>
                        {project.title}
                      </h3>
                      <StatusBadge status={project.status} />
                    </div>
                    <p className="text-base text-foreground-secondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-zinc-900/50">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs text-foreground-secondary px-2 py-1 rounded-md bg-zinc-900/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-secondary transition-all duration-300 hover:gap-3 group"
                  >
                    <FaGithub className="h-4 w-4" />
                    GitHub
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Container>
  );
}
