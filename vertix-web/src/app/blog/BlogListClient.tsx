"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface BlogPostItem {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  image?: string;
}

const categories = ["Todos", "Fisioterapia", "Ortopedia", "Prevención", "Deporte"];

const POSTS_PER_PAGE = 6;

const placeholderImages = [
  "/images/blog/blog-1.jpg",
  "/images/blog/blog-2.jpg",
  "/images/blog/blog-3.jpg",
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export default function BlogListClient({ posts }: { posts: BlogPostItem[] }) {
  const [active, setActive] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = active === "Todos" ? posts : posts.filter((p) => p.category === active);
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginatedPosts = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryChange = (cat: string) => {
    setActive(cat);
    setCurrentPage(1);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-36 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.span
            className="inline-block text-gold text-sm font-medium uppercase tracking-[0.2em] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Vertix Centro Medico
          </motion.span>
          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            BLOG
          </motion.h1>
          <motion.div
            className="w-12 h-[2px] bg-gold mx-auto mb-5"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />
          <motion.p
            className="text-white/70 text-lg max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            Articulos sobre salud, movimiento y bienestar
          </motion.p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-warm-white pt-12 pb-4 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  active === cat
                    ? "bg-gold text-dark"
                    : "border border-primary/30 text-primary hover:border-primary/60 hover:bg-primary/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 pb-20 px-6 bg-warm-white">
        <div className="max-w-[1200px] mx-auto">
          {paginatedPosts.length === 0 ? (
            <motion.div
              className="text-center py-20"
              {...fadeInUp}
            >
              <p className="text-primary/50 text-lg">No hay articulos en esta categoria todavia.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.1,
                  }}
                  className="group"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex flex-col bg-white rounded-[16px] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                  >
                    {/* Image */}
                    <div className="relative w-full h-[180px] overflow-hidden bg-secondary/10">
                      <Image
                        src={placeholderImages[i % 3]}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-gold text-dark text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-3 p-6">
                      <h3 className="font-display text-xl text-primary group-hover:text-gold transition-colors duration-300 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-secondary text-sm leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-primary/40 mt-1 pt-3 border-t border-primary/5">
                        <span>{post.readTime} de lectura</span>
                        <span className="text-gold">|</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              className="flex items-center justify-center gap-2 mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center text-primary hover:bg-primary/10 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Pagina anterior"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 flex items-center justify-center text-sm font-medium rounded-full transition-all duration-300 ${
                    currentPage === page
                      ? "bg-gold text-dark"
                      : "text-primary hover:bg-primary/10"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center text-primary hover:bg-primary/10 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Pagina siguiente"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
