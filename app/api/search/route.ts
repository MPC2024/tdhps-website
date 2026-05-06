import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog";

export async function GET() {
  const posts = getAllPosts();
  const blogResults = posts.map((post) => ({
    id: `blog-${post.slug}`,
    title: post.title,
    type: "blog" as const,
    href: `/blog/${post.slug}`,
    excerpt: post.excerpt || "",
  }));

  return NextResponse.json({ results: blogResults });
}
