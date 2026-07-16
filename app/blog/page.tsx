import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { BlogCard } from "@/components/blog-card";
import { getPosts } from "@/lib/mdx";

export default function BlogPage() {
  const posts = getPosts('blog');

  return (
    <Container>
      <Section>
        <div className="space-y-10">
          <div>
            <h1 className="text-5xl sm:text-6xl font-medium text-foreground tracking-tight mb-6" style={{ textShadow: '0 0 8px rgba(250, 250, 250, 0.15)' }}>
              Blog
            </h1>
            <p className="text-xl text-foreground-secondary max-w-3xl leading-relaxed">
              I mostly write about the things I'm building, the bugs that wasted my time, and the engineering rabbit holes worth going down.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="p-16 rounded-lg border border-zinc-900 bg-zinc-950/30 text-center">
              <p className="text-lg text-foreground-secondary mb-2">No posts yet.</p>
              <p className="text-base text-foreground-secondary">Good engineering takes time. The first one is cooking.</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  readingTime={post.readingTime}
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
