import { getAllPosts } from "@/lib/blog";
import BlogListClient, { type BlogPostItem } from "./BlogListClient";

export const metadata = {
  title: "Blog | VERTIX",
  description: "Artículos sobre salud, movimiento y bienestar — fisioterapia, ortopedia y prevención deportiva.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  const items: BlogPostItem[] = posts.map((p) => ({
    slug: p.slug,
    category: p.category,
    title: p.title,
    excerpt: p.excerpt,
    date: p.date,
    readTime: p.readTime,
    author: p.author,
    image: p.image,
  }));

  return <BlogListClient posts={items} />;
}
