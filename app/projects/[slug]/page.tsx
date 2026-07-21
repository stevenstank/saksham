import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Badge } from "@/components/badge";
import { getPostBySlug, getPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const projects = await getPosts('projects');
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getPostBySlug('projects', params.slug);

  if (!project) {
    notFound();
  }

  return (
    <Container>
      <Section>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all projects
        </Link>

        <article className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-medium text-foreground tracking-tight">
              {project.title}
            </h1>
            
            <p className="text-xl text-foreground-secondary max-w-3xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            <a
              href={`https://github.com/saksham/${project.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-secondary transition-colors"
            >
              View on GitHub
            </a>
          </div>

          <div className="prose prose-invert prose-zinc max-w-none">
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </div>
        </article>
      </Section>
    </Container>
  );
}
