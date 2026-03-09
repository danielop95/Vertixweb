"use client";

import { motion } from "framer-motion";
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
}

const categories = ["Todos", "Fisioterapia", "Ortopedia", "Prevención", "Deporte"];

const POSTS_PER_PAGE = 3;

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
      <section className="bg-primary py-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.h1
            className="font-display text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Aprende a moverte mejor
          </motion.h1>
          <p className="text-white/80 text-lg">Artículos sobre salud, movimiento y bienestar</p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-16 px-6 bg-warm-white">
        <div className="max-w-[1200px] mx-auto">
          {/* Category pills */}
          <div className="flex gap-3 mb-12 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                  active === cat
                    ? "bg-gold text-dark"
                    : "border border-primary/20 text-primary hover:bg-primary/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-4">
                  <div className="w-full aspect-video rounded-2xl overflow-hidden bg-light relative">
                    <div className="absolute top-4 left-4 z-10 bg-gold text-dark text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                      {post.category}
                    </div>
                    <div className="w-full h-full bg-secondary/10 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-primary group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-secondary line-clamp-2 text-sm">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-secondary/70 mt-1">
                      <span>{post.author}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center text-primary hover:bg-primary/10 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Página anterior"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 flex items-center justify-center text-sm font-medium transition-colors ${
                    currentPage === page
                      ? "bg-primary text-white rounded-full"
                      : "text-primary hover:bg-primary/10 rounded-full"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center text-primary hover:bg-primary/10 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Página siguiente"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
