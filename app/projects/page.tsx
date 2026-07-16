import { Container } from "@/components/container";
import { Section } from "@/components/section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const featuredProjects = [
  {
    title: "Bolt",
    description: "Redis-inspired in-memory database written in Go. Currently exploring persistence, networking and distributed systems while building it.",
    github: "https://github.com/stevenstank/bolt",
  },
  {
    title: "Dispatch",
    description: "Distributed task runner built in Go with workers, coordinators and concurrent execution.",
    github: "https://github.com/stevenstank/dispatch",
  },
  {
    title: "SaksGram",
    description: "A social media platform built to explore authentication, real-time interactions and modern full-stack architecture.",
    github: "https://github.com/stevenstank/saks-gram",
  },
];

export default function ProjectsPage() {
  return (
    <Container>
      <Section>
        <div className="space-y-10">
          <div>
            <h1 className="text-5xl sm:text-6xl font-medium text-foreground tracking-tight mb-6" style={{ textShadow: '0 0 8px rgba(250, 250, 250, 0.15)' }}>
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
                className="p-6 rounded-lg border border-zinc-900 bg-zinc-950/30 hover:border-zinc-800 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-foreground mb-3" style={{ textShadow: '0 0 8px rgba(250, 250, 250, 0.1)' }}>
                      {project.title}
                    </h3>
                    <p className="text-base text-foreground-secondary leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-secondary transition-colors"
                    >
                      View on GitHub
                      <ArrowRight className="h-4 w-4" />
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
