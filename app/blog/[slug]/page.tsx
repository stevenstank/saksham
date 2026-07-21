import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Badge } from "@/components/badge";
import { RelatedProject } from "@/components/related-project";
import { getPostBySlug, getPosts, getAdjacentPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug('blog', slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Saksham`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getPosts('blog');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug('blog', slug);

  if (!post) {
    notFound();
  }

  const { previous, next } = await getAdjacentPosts('blog', post.slug);

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

        <article className="space-y-8 max-w-[750px] mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-medium text-foreground tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-secondary">
              <time>{post.formattedDate}</time>
              {post.formattedUpdated && (
                <>
                  <span>·</span>
                  <time>Updated {post.formattedUpdated}</time>
                </>
              )}
              <span>·</span>
              <Badge>{post.readingTime}</Badge>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>

          <div className="prose">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {post.project && post.github && post.projectHref && (
            <RelatedProject
              name={post.project}
              description={post.description}
              github={post.github}
              href={post.projectHref}
            />
          )}

          {(previous || next) && (
            <nav className="flex justify-between items-center pt-8 border-t border-zinc-900 mt-12">
              {previous ? (
                <Link
                  href={`/blog/${previous.slug}`}
                  className="flex items-center gap-2 text-sm text-foreground-secondary hover:text-foreground transition-colors group"
                >
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs text-foreground-secondary/60 mb-1">Previous</div>
                    <div className="font-medium">{previous.title}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              
              {next ? (
                <Link
                  href={`/blog/${next.slug}`}
                  className="flex items-center gap-2 text-sm text-foreground-secondary hover:text-foreground transition-colors group"
                >
                  <div className="text-right">
                    <div className="text-xs text-foreground-secondary/60 mb-1">Next</div>
                    <div className="font-medium">{next.title}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </nav>
          )}
        </article>
      </Section>
    </Container>
  );
}
