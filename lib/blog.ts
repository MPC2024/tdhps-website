import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  modified: string;
  excerpt: string;
  featuredImage?: string;
  categories: string[];
  tags: string[];
  author: string;
  content?: string;
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        modified: data.modified ?? "",
        excerpt: data.excerpt ?? "",
        featuredImage: data.featuredImage || undefined,
        categories: data.categories ?? [],
        tags: data.tags ?? [],
        author: data.author ?? "The Dog House Pet Salon",
      } as BlogPost;
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlug(
  slug: string
): BlogPost & { content: string } {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    modified: data.modified ?? "",
    excerpt: data.excerpt ?? "",
    featuredImage: data.featuredImage || undefined,
    categories: data.categories ?? [],
    tags: data.tags ?? [],
    author: data.author ?? "The Dog House Pet Salon",
    content,
  };
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}
