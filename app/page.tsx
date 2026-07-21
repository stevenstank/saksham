import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Badge } from "@/components/badge";
import { SocialLinks } from "@/components/social-links";
import { FadeIn } from "@/components/fade-in";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Section className="pt-24 pb-16">
        <FadeIn>
          <div className="space-y-8">
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight">
                <span className="text-[#F4B942]" style={{ textShadow: '0 0 8px rgba(244, 185, 66, 0.2), 0 0 16px rgba(244, 185, 66, 0.1)' }}>
                  hi, i'm
                </span>
                <br />
                <span className="text-[#FAFAFA]" style={{ textShadow: '0 0 8px rgba(250, 250, 250, 0.15), 0 0 16px rgba(250, 250, 250, 0.08)' }}>
                  saksham.
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge>Go</Badge>
              <Badge>Distributed Systems</Badge>
              <Badge>Backend</Badge>
              <Badge>NextJS</Badge>
            </div>

            <div className="max-w-2xl space-y-5">
              <p className="text-xl text-foreground-secondary leading-relaxed">
                I'm a computer science student who enjoys building software from the ground up.
              </p>
              <p className="text-xl text-foreground-secondary leading-relaxed">
                Backend engineering and distributed systems slowly became the rabbit holes I kept coming back to. Most of the projects here started with a simple question, and the fastest way I've found to answer it is to build it myself.
              </p>
              <p className="text-xl text-foreground-secondary leading-relaxed">
                This website is where I share my <Link href="/projects" className="text-foreground hover:text-accent transition-colors underline decoration-dotted underline-offset-4 hover:decoration-solid">projects</Link> and write about everything I learn along the way on my <Link href="/blog" className="text-foreground hover:text-accent transition-colors underline decoration-dotted underline-offset-4 hover:decoration-solid">blog</Link>.
              </p>
              <p className="text-xl text-foreground-secondary leading-relaxed">
                Currently exploring distributed systems, backend engineering, and writing more than just code.
              </p>
            </div>

            <SocialLinks showLabels />
          </div>
        </FadeIn>
      </Section>
    </Container>
  );
}
