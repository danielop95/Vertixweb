import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs, getAllPosts, extractHeadings } from "@/lib/blog";
import ShareButtons from "./ShareButtons";
import type { ComponentPropsWithoutRef } from "react";

/* ---------- static params ---------- */

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

/* ---------- metadata ---------- */

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | VERTIX`,
    description: post.excerpt,
  };
}

/* ---------- custom MDX components ---------- */

const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => {
    const text = typeof props.children === "string" ? props.children : "";
    const id =
      text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") || undefined;
    return (
      <h2
        id={id}
        className="font-display text-2xl text-primary mt-12 mb-4 scroll-mt-24"
        {...props}
      />
    );
  },
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="font-display text-xl text-primary mt-8 mb-3"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="text-dark/70 leading-[1.8] mb-5 text-[16px]" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-[3px] border-gold pl-6 my-8 text-primary/80"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc pl-6 space-y-2 text-dark/70 mb-6 leading-[1.8]" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal pl-6 space-y-2 text-dark/70 mb-6 leading-[1.8]" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a className="text-gold hover:text-gold-hover underline underline-offset-2 transition-colors" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-primary" {...props} />
  ),
};

/* ---------- placeholder images ---------- */

const placeholderImages = [
  "/images/blog/blog-1.jpg",
  "/images/blog/blog-2.jpg",
  "/images/blog/blog-3.jpg",
];

/* ---------- page ---------- */

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const tocItems = extractHeadings(post.content);

  // Related articles: same category first, exclude current, limit 3
  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => (a.category === post.category ? -1 : 0) - (b.category === post.category ? -1 : 0))
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-36 pb-16 px-6">
        <div className="max-w-[720px] mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white/80 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Volver al blog
          </Link>

          {/* Category */}
          <span className="inline-block bg-gold text-dark text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8">
            {post.title}
          </h1>

          {/* Author & Meta */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-gold text-sm font-bold">
              IP
            </div>
            <div>
              <p className="text-white text-sm font-medium">Dra. {post.author}</p>
              <div className="flex items-center gap-2 text-white/40 text-xs mt-0.5">
                <span>{post.date}</span>
                <span className="text-gold">|</span>
                <span>{post.readTime} de lectura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Body + Sidebar */}
      <section className="py-14 px-6 bg-warm-white">
        <div className="max-w-[1200px] mx-auto flex gap-16">
          {/* Main Content */}
          <article className="flex-1 max-w-[720px] mx-auto lg:mx-0">
            <div className="prose prose-lg max-w-none">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            {/* Share Buttons */}
            <ShareButtons title={post.title} />
          </article>

          {/* Sidebar */}
          <aside className="w-[280px] hidden lg:block flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Table of Contents */}
              {tocItems.length > 0 && (
                <div className="bg-white rounded-[16px] p-6">
                  <h4 className="font-display text-sm text-primary uppercase tracking-[0.15em] mb-5">
                    Contenido
                  </h4>
                  <div className="w-8 h-[2px] bg-gold mb-5" />
                  <nav className="space-y-3">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-primary/50 hover:text-primary transition-colors duration-300 leading-snug"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* CTA Card */}
              <div className="bg-primary rounded-[16px] p-6 text-white">
                <h4 className="font-display text-lg mb-2">Necesitas ayuda?</h4>
                <p className="text-white/50 text-sm mb-6 leading-relaxed">
                  Nuestro equipo puede evaluar tu caso y disenar un plan personalizado.
                </p>
                <a
                  href="/contacto"
                  className="block w-full text-center py-3 bg-gold text-dark font-semibold text-sm rounded-full hover:bg-gold-hover transition-colors duration-300"
                >
                  Agenda tu valoracion gratuita
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-[2px] bg-gold" />
              <h3 className="font-display text-2xl text-primary">Articulos relacionados</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((rp, i) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group flex flex-col bg-warm-white rounded-[16px] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                >
                  <div className="relative w-full h-[160px] overflow-hidden bg-secondary/10">
                    <Image
                      src={placeholderImages[i % 3]}
                      alt={rp.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-gold text-dark text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {rp.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-display text-primary text-lg group-hover:text-gold transition-colors duration-300 leading-tight">
                      {rp.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-primary/40 mt-3">
                      <span>{rp.readTime}</span>
                      <span className="text-gold">|</span>
                      <span>{rp.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
