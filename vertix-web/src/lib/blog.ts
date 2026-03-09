import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface PostFrontmatter {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image?: string;
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
}

export interface Post extends PostMeta {
  content: string;
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;

  return {
    slug,
    title: fm.title,
    excerpt: fm.excerpt,
    category: fm.category,
    date: fm.date,
    readTime: fm.readTime,
    author: fm.author,
    image: fm.image,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug);
      if (!post) return null;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content, ...meta } = post;
      return meta;
    })
    .filter((p): p is PostMeta => p !== null);

  // Sort by date descending (most recent first)
  posts.sort((a, b) => {
    return parseSpanishDate(b.date) - parseSpanishDate(a.date);
  });

  return posts;
}

/** Parse dates in "1 Mar 2025" Spanish format */
function parseSpanishDate(dateStr: string): number {
  const months: Record<string, number> = {
    Ene: 0, Feb: 1, Mar: 2, Abr: 3, May: 4, Jun: 5,
    Jul: 6, Ago: 7, Sep: 8, Oct: 9, Nov: 10, Dic: 11,
  };
  const parts = dateStr.split(" ");
  const day = parseInt(parts[0], 10);
  const month = months[parts[1]] ?? 0;
  const year = parseInt(parts[2], 10);
  return new Date(year, month, day).getTime();
}

/** Extract headings from MDX content for table of contents */
export function extractHeadings(content: string): { id: string; label: string }[] {
  const headingRegex = /^##\s+(.+)$/gm;
  const headings: { id: string; label: string }[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const label = match[1].trim();
    const id = label
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    headings.push({ id, label });
  }

  return headings;
}
