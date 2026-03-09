"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Pages with dark heroes — use light text when not scrolled
  const darkHeroPages = ["/servicios", "/nosotros", "/blog", "/contacto", "/politica-privacidad", "/politica-datos"];
  const hasDarkHero = darkHeroPages.includes(pathname);
  const isDarkContext = hasDarkHero && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-warm-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <Link href="/" className={`flex items-center gap-2 transition-colors duration-300 ${scrolled ? "text-primary" : isDarkContext ? "text-white" : "text-primary"}`}>
            <Logo height={28} />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors hover:text-gold ${
                  scrolled
                    ? pathname === link.href ? "text-primary" : "text-dark/70"
                    : pathname === link.href ? isDarkContext ? "text-white" : "text-primary" : isDarkContext ? "text-white/70" : "text-dark/70"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </Link>
            ))}
          </div>

          <Link
            href="/contacto"
            className={`hidden md:flex items-center justify-center h-11 px-6 font-bold rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-primary hover:bg-gold text-white hover:text-dark"
                : isDarkContext
                  ? "bg-gold hover:bg-gold-hover text-dark"
                  : "bg-gold hover:bg-primary text-dark hover:text-white"
            }`}
          >
            Agenda tu cita
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? "text-primary" : isDarkContext ? "text-white" : "text-primary"}`}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-dark/50 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-primary z-50 md:hidden p-8 flex flex-col gap-8"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="self-end text-white p-2"
                aria-label="Cerrar menú"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xl font-medium transition-colors ${
                      pathname === link.href ? "text-gold" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/contacto"
                className="mt-auto flex items-center justify-center h-12 px-6 bg-gold text-dark font-bold rounded-full"
              >
                Agenda tu cita
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
