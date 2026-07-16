import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  content: string;
}

export function getPosts(type: 'blog' | 'projects'): Post[] {
  const dir = path.join(CONTENT_DIR, type);
  
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter(file => file.endsWith('.mdx'));
  
  const posts = files.map(filename => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    return {
      slug: filename.replace('.mdx', ''),
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      tags: data.tags || [],
      readingTime: data.readingTime || '',
      content,
    };
  });

  return posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(type: 'blog' | 'projects', slug: string): Post | null {
  const posts = getPosts(type);
  return posts.find(post => post.slug === slug) || null;
}
