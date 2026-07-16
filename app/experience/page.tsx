import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Timeline } from "@/components/timeline";

const experience = [
  {
    title: "Software Engineering Intern",
    organization: "Stealth Startup",
    period: "April 2026 — Present",
    description: "Building production features for an education platform across backend and full-stack systems. Worked on authentication, APIs, CMS integrations, AI-powered features, performance improvements, and shipping real features used by users.",
  },
];

export default function ExperiencePage() {
  return (
    <Container>
      <Section>
        <div className="space-y-10">
          <div>
            <h1 className="text-5xl sm:text-6xl font-medium text-foreground tracking-tight mb-6" style={{ textShadow: '0 0 8px rgba(250, 250, 250, 0.15)' }}>
              Experience
            </h1>
            <p className="text-xl text-foreground-secondary max-w-3xl leading-relaxed">
              My professional journey in backend engineering and distributed systems.
            </p>
          </div>

          <Timeline items={experience} />
        </div>
      </Section>
    </Container>
  );
}
