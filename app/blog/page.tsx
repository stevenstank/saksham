import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { BlogCard } from "@/components/blog-card";
import { getPosts } from "@/lib/mdx";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function BlogPage() {
  const posts = await getPosts('blog');

  return (
    <Container>
      <Section>
        <div className="space-y-10">
          <div>
            <h1 className="text-5xl sm:text-6xl font-medium text-[#F4B942] tracking-tight mb-8" style={{ textShadow: '0 0 8px rgba(244, 185, 66, 0.2), 0 0 16px rgba(244, 185, 66, 0.1)' }}>
              Blog
            </h1>
            <p className="text-xl text-foreground-secondary max-w-3xl leading-relaxed">
              I mostly write about the things I'm building, the bugs that wasted my time, and the engineering rabbit holes worth going down.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="py-20 text-center">
              <div className="text-4xl mb-6" style={{ textShadow: '0 0 12px rgba(244, 185, 66, 0.2)' }}>✦</div>
              <h2 className="text-2xl font-medium text-foreground mb-4">No posts yet.</h2>
              <p className="text-lg text-foreground-secondary max-w-xl mx-auto mb-8 leading-relaxed italic">
                "The first post is taking longer because I'm probably rebuilding something I could've just used."
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary transition-all duration-300 hover:gap-3 group"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ) : (
            <div className="grid gap-6">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  description={post.description}
                  formattedDate={post.formattedDate}
                  readingTime={post.readingTime}
                  tags={post.tags}
                  href={`/blog/${post.slug}`}
                />
              ))}
            </div>
          )}
        </div>
      </Section>
    </Container>
  );
}
