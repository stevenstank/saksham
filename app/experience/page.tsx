import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { cn } from "@/lib/utils";

const experience = [
  {
    title: "Software Engineering Intern",
    organization: "Stealth Startup",
    period: "April 2026 — Present",
    description: "Worked across backend and full-stack features, shipped production code, built internal tools, improved existing systems and spent far too much time debugging things that turned out to be one missing semicolon.",
    tech: ["Go", "Next.js", "TypeScript", "Strapi", "PostgreSQL", "AI"],
  },
];

export default function ExperiencePage() {
  return (
    <Container>
      <Section>
        <div className="space-y-10">
          <div>
            <h1 className="text-5xl sm:text-6xl font-medium text-[#F4B942] tracking-tight mb-8" style={{ textShadow: '0 0 8px rgba(244, 185, 66, 0.2), 0 0 16px rgba(244, 185, 66, 0.1)' }}>
              Experience
            </h1>
            <p className="text-xl text-foreground-secondary max-w-3xl leading-relaxed">
              My professional journey in developing.
            </p>
          </div>

          <div className="space-y-12">
            {experience.map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l border-zinc-900 last:pb-0 last:border-l-0">
                <div className="absolute left-0 top-0 h-3 w-3 -translate-x-[6px] rounded-full bg-zinc-700" />
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-foreground-secondary">{item.period}</p>
                    <h3 className="text-2xl font-medium text-foreground" style={{ textShadow: '0 0 8px rgba(250, 250, 250, 0.1)' }}>{item.title}</h3>
                    <p className="text-base text-accent">{item.organization}</p>
                  </div>
                  <p className="text-base text-foreground-secondary leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tech.map((tech) => (
                      <span key={tech} className="text-xs text-foreground-secondary px-2 py-1 rounded-md bg-zinc-900/50 border border-zinc-800">
                        {tech}
                      </span>
                    ))}
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
