import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
        className="font-display text-2xl font-bold text-primary mt-10 mb-4"
        {...props}
      />
    );
  },
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="text-secondary leading-relaxed mb-4" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-4 border-gold pl-6 my-8 italic text-primary"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc pl-6 space-y-2 text-secondary mb-6" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal pl-6 space-y-2 text-secondary mb-6" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a className="text-gold hover:underline" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-bold text-primary" {...props} />
  ),
};

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
      {/* Hero Image */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-primary overflow-hidden">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        ) : (
          <div className="w-full h-full bg-secondary/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="max-w-[1200px] mx-auto">
            <span className="inline-block bg-gold text-dark text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
              {post.category}
            </span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-warm-white py-4 px-6">
        <div className="max-w-[1200px] mx-auto text-sm text-secondary">
          <Link href="/" className="hover:text-primary">Inicio</Link>
          {" > "}
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          {" > "}
          <span className="text-primary">Artículo</span>
        </div>
      </div>

      {/* Post Header */}
      <section className="bg-warm-white pb-8 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-secondary text-sm">
            <div className="w-10 h-10 rounded-full bg-primary/10" />
            <span className="font-medium">{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} de lectura</span>
          </div>
        </div>
      </section>

      {/* Post Body + Sidebar */}
      <section className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto flex gap-12">
          {/* Main Content */}
          <div className="flex-1 prose prose-lg max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />

            {/* Share Buttons */}
            <ShareButtons title={post.title} />
          </div>

          {/* Sidebar */}
          <aside className="w-[280px] hidden lg:block">
            <div className="sticky top-24 space-y-8">
              {/* Table of Contents */}
              <div className="bg-warm-white rounded-2xl p-6">
                <h4 className="font-display text-sm font-bold text-primary uppercase tracking-wide mb-4">
                  Contenido
                </h4>
                <nav className="space-y-3">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-secondary hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* CTA Card */}
              <div className="bg-primary rounded-2xl p-6 text-white">
                <h4 className="font-display text-lg font-bold mb-2">Necesitas ayuda?</h4>
                <p className="text-white/70 text-sm mb-5">
                  Nuestro equipo puede evaluar tu caso y diseñar un plan personalizado.
                </p>
                <a
                  href="/contacto"
                  className="block w-full text-center py-3 bg-gold text-dark font-bold text-sm rounded-full hover:bg-gold/90 transition-colors"
                >
                  Agenda tu valoración gratuita
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 px-6 bg-warm-white">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="font-display text-2xl font-bold text-primary mb-8">Artículos relacionados</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((rp) => (
              <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group cursor-pointer">
                <div className="aspect-video rounded-2xl bg-light mb-4 relative overflow-hidden">
                  <div className="absolute top-3 left-3 z-10 bg-gold text-dark text-xs font-bold px-3 py-1 rounded-full">
                    {rp.category}
                  </div>
                  {rp.image ? (
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary/10 group-hover:scale-105 transition-transform duration-500" />
                  )}
                </div>
                <h4 className="font-bold text-primary group-hover:text-gold transition-colors">
                  {rp.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
