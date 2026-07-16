import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Badge } from "@/components/badge";
import { getPostBySlug, getPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const posts = getPosts('blog');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug('blog', params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Container>
      <Section>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all posts
        </Link>

        <article className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-medium text-foreground tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-secondary">
              <time>{post.date}</time>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>

          <div className="prose prose-invert prose-zinc max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </Section>
    </Container>
  );
}
