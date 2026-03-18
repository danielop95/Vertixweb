"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ── Arrow icon ── */
function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Star icon ── */
function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1l2.2 4.5L15 6.3l-3.5 3.4.8 4.8L8 12.3 3.7 14.5l.8-4.8L1 6.3l4.8-.8L8 1z" />
    </svg>
  );
}

const services = [
  {
    title: "Medicina del Deporte",
    desc: "Evaluación y tratamiento de lesiones deportivas para atletas de todos los niveles.",
    image: "/images/servicios/medicina-deporte.jpg",
  },
  {
    title: "Ortopedia Especializada",
    desc: "Diagnóstico preciso de condiciones musculoesqueléticas.",
    image: "/images/servicios/ortopedia.jpg",
  },
  {
    title: "Fisioterapia Avanzada",
    desc: "Terapias manuales e instrumentales de vanguardia.",
    image: "/images/servicios/fisioterapia.jpg",
  },
  {
    title: "Entrenamiento Personalizado",
    desc: "Programas de acondicionamiento y prevención de lesiones.",
    image: "/images/servicios/entrenamiento.jpg",
  },
];

const testimonials = [
  {
    name: "Carlos M.",
    detail: "Corredor de maratón",
    quote: "Después de meses sin poder correr, volví a entrenar gracias al equipo de VERTIX.",
  },
  {
    name: "María L.",
    detail: "Paciente de fisioterapia",
    quote: "El trato humano y profesional me hizo sentir en confianza desde la primera consulta.",
  },
  {
    name: "Andrés R.",
    detail: "Futbolista amateur",
    quote: "Excelente diagnóstico y un plan de rehabilitación que realmente funcionó.",
  },
];

const blogPosts = [
  {
    cat: "Ortopedia",
    title: "Cuándo consultar a un ortopedista",
    readTime: "5 min lectura",
    image: "/images/blog/blog-1.jpg",
    slug: "/blog/cuando-consultar-ortopedista",
  },
  {
    cat: "Deporte",
    title: "Nutrición para la recuperación deportiva",
    readTime: "6 min lectura",
    image: "/images/blog/blog-2.jpg",
    slug: "/blog/nutricion-recuperacion-deportiva",
  },
  {
    cat: "Fisioterapia",
    title: "Importancia de la fisioterapia preventiva",
    readTime: "4 min lectura",
    image: "/images/blog/blog-3.jpg",
    slug: "/blog/importancia-fisioterapia-preventiva",
  },
];

const values = [
  "Escucha activa",
  "Ciencia + Humanidad",
  "Prevención inteligente",
  "Atención integral",
];

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO CINEMATICO FULL-BLEED
          ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-[#2C2C2A]">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt="Fisioterapia profesional en clínica moderna"
            fill
            priority
            quality={85}
            className="object-cover"
          />
          {/* Multi-layer overlay — verde musgo más marcado */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(97,103,89,0.95)] via-[rgba(97,103,89,0.8)] to-[rgba(97,103,89,0.45)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(97,103,89,0.6)] via-[rgba(97,103,89,0.1)] to-[rgba(97,103,89,0.4)]" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none overflow-hidden">
          {/* Gold accent line */}
          <div className="absolute top-[20%] left-[8%] w-px h-[200px] bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />
          {/* Subtle V watermark */}
          <div className="absolute right-[8%] top-1/2 -translate-y-1/2 opacity-[0.04] hidden lg:block">
            <span className="font-display text-[400px] text-warm-white leading-none select-none">V</span>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-28 py-32 lg:py-0">
          <div className="flex flex-col items-start gap-12 min-h-screen lg:py-40 justify-center">
            {/* Left — Main content */}
            <motion.div
              className="max-w-[600px] flex flex-col gap-7"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              {/* Gold divider + label */}
              <motion.div variants={fadeInUp} className="flex items-center gap-4">
                <div className="w-10 h-px bg-gold" />
                <span className="text-gold text-[11px] font-semibold uppercase tracking-[4px]">
                  Ciencia, Movimiento y Bienestar
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-display text-[42px] md:text-[60px] lg:text-[72px] font-bold leading-[1.05] text-warm-white"
              >
                Recuperar tu{" "}
                <span className="text-gold">movilidad,</span>{" "}
                a un paso de ti
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-warm-white/60 text-base lg:text-lg leading-relaxed max-w-lg"
              >
                Medicina del deporte, ortopedia y fisioterapia avanzada en Barranquilla. Tu recuperación comienza aquí.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-5 pt-4">
                <Link
                  href="/contacto"
                  className="group inline-flex items-center gap-3 h-[58px] px-10 bg-gold hover:bg-gold-hover text-dark font-bold rounded-full transition-colors text-base"
                >
                  Agenda tu cita
                  <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/servicios"
                  className="group inline-flex items-center gap-3 h-[58px] px-10 border border-warm-white/30 hover:border-warm-white/60 text-warm-white font-semibold rounded-full transition-colors text-base"
                >
                  Explorar servicios
                  <ArrowUpRight className="opacity-60 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-6 pt-6 border-t border-warm-white/10 mt-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-gold text-sm">★★★★★</span>
                  <span className="text-warm-white/50 text-xs">5.0 valoración</span>
                </div>
                <div className="w-px h-4 bg-warm-white/15" />
                <span className="text-warm-white/50 text-xs">Lun–Sáb · 7am–6:30pm</span>
                <div className="w-px h-4 bg-warm-white/15 hidden md:block" />
                <span className="text-warm-white/50 text-xs hidden md:block">4 especialidades</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm-white to-transparent z-10" />
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: INTRO DRA. INGRID + VALORES
          ═══════════════════════════════════════════ */}
      <section className="py-14 lg:py-20 bg-warm-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Photo */}
            <motion.div
              className="w-[240px] lg:w-[280px] shrink-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-full h-[300px] lg:h-[340px] overflow-hidden" style={{ borderRadius: "200px 200px 24px 24px" }}>
                <Image
                  src="/images/team/dra-ingrid.png"
                  alt="Dra. Ingrid Carolina Parra — Rehabilitadora Deportiva"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-secondary text-[11px] font-semibold uppercase tracking-[3px]">
                Conoce a tu especialista
              </span>
              <h2 className="font-display text-3xl lg:text-4xl text-primary mt-3 leading-[1.2]">
                Dra. Ingrid Carolina <span className="text-gold">Parra</span>
              </h2>
              <p className="text-gold font-semibold text-[13px] mt-2">
                Rehabilitadora Deportiva · Directora Clínica
              </p>
              <p className="text-primary/80 text-sm lg:text-base leading-relaxed mt-5 max-w-lg mx-auto lg:mx-0">
                Especialista en rehabilitación deportiva con enfoque integral. Fundadora de VERTIX con la misión de transformar la recuperación de cada paciente combinando ciencia, tecnología y un trato profundamente humano.
              </p>

              {/* Value tags */}
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-2 mt-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                {values.map((val) => (
                  <motion.span
                    key={val}
                    variants={fadeInUp}
                    className="text-[11px] font-medium text-primary border border-secondary/40 rounded-full px-4 py-1.5"
                  >
                    {val}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: SERVICIOS — BENTO EDITORIAL
          ═══════════════════════════════════════════ */}
      <section className="pt-4 pb-16 lg:pb-24 bg-warm-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          {/* Header — left aligned with gold line */}
          <motion.div
            className="flex items-start gap-6 mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="w-px h-16 bg-gold hidden lg:block mt-2" />
            <div>
              <p className="text-gold text-[11px] font-semibold uppercase tracking-[3px] mb-3">
                Lo que hacemos por ti
              </p>
              <h2 className="font-display text-[32px] lg:text-[44px] text-primary leading-[1.1]">
                Nuestras especialidades
              </h2>
            </div>
          </motion.div>

          {/* Bento grid — asymmetric layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
            {/* Card 1 — Large, spans 7 cols */}
            <motion.div
              className="lg:col-span-7 relative overflow-hidden group cursor-pointer h-[280px] lg:h-[420px]"
              style={{ borderRadius: "24px 24px 24px 80px" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image src={services[0].image} alt={services[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(97,103,89,0.9)] via-[rgba(97,103,89,0.4)] to-[rgba(97,103,89,0.1)]" />
              <div className="absolute top-6 left-7">
                <span className="font-display text-[64px] lg:text-[80px] text-warm-white/10 leading-none">01</span>
              </div>
              <div className="absolute inset-0 p-7 lg:p-10 flex flex-col justify-end">
                <div className="w-10 h-0.5 bg-gold mb-4 transition-all duration-500 group-hover:w-16" />
                <h3 className="font-display text-2xl lg:text-3xl text-warm-white">{services[0].title}</h3>
                <p className="text-warm-white/60 text-sm mt-2 max-w-md opacity-100 lg:opacity-0 lg:translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  {services[0].desc}
                </p>
                <Link href="/servicios" className="inline-flex items-center gap-2 text-gold text-sm font-semibold mt-4 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Conocer más <ArrowUpRight />
                </Link>
              </div>
            </motion.div>

            {/* Card 2 — Medium, spans 5 cols */}
            <motion.div
              className="lg:col-span-5 relative overflow-hidden group cursor-pointer h-[280px] lg:h-[420px]"
              style={{ borderRadius: "24px 80px 24px 24px" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image src={services[1].image} alt={services[1].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(97,103,89,0.9)] via-[rgba(97,103,89,0.4)] to-[rgba(97,103,89,0.1)]" />
              <div className="absolute top-6 right-7">
                <span className="font-display text-[64px] lg:text-[80px] text-warm-white/10 leading-none">02</span>
              </div>
              <div className="absolute inset-0 p-7 lg:p-10 flex flex-col justify-end">
                <div className="w-10 h-0.5 bg-gold mb-4 transition-all duration-500 group-hover:w-16" />
                <h3 className="font-display text-2xl lg:text-3xl text-warm-white">{services[1].title}</h3>
                <p className="text-warm-white/60 text-sm mt-2 max-w-sm opacity-100 lg:opacity-0 lg:translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  {services[1].desc}
                </p>
                <Link href="/servicios" className="inline-flex items-center gap-2 text-gold text-sm font-semibold mt-4 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Conocer más <ArrowUpRight />
                </Link>
              </div>
            </motion.div>

            {/* Card 3 — Medium, spans 5 cols */}
            <motion.div
              className="lg:col-span-5 relative overflow-hidden group cursor-pointer h-[280px] lg:h-[380px]"
              style={{ borderRadius: "80px 24px 24px 24px" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image src={services[2].image} alt={services[2].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(97,103,89,0.9)] via-[rgba(97,103,89,0.4)] to-[rgba(97,103,89,0.1)]" />
              <div className="absolute top-6 left-7">
                <span className="font-display text-[64px] lg:text-[80px] text-warm-white/10 leading-none">03</span>
              </div>
              <div className="absolute inset-0 p-7 lg:p-10 flex flex-col justify-end">
                <div className="w-10 h-0.5 bg-gold mb-4 transition-all duration-500 group-hover:w-16" />
                <h3 className="font-display text-2xl lg:text-3xl text-warm-white">{services[2].title}</h3>
                <p className="text-warm-white/60 text-sm mt-2 max-w-sm opacity-100 lg:opacity-0 lg:translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  {services[2].desc}
                </p>
                <Link href="/servicios" className="inline-flex items-center gap-2 text-gold text-sm font-semibold mt-4 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Conocer más <ArrowUpRight />
                </Link>
              </div>
            </motion.div>

            {/* Card 4 — Large, spans 7 cols */}
            <motion.div
              className="lg:col-span-7 relative overflow-hidden group cursor-pointer h-[280px] lg:h-[380px]"
              style={{ borderRadius: "24px 24px 80px 24px" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image src={services[3].image} alt={services[3].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(97,103,89,0.9)] via-[rgba(97,103,89,0.4)] to-[rgba(97,103,89,0.1)]" />
              <div className="absolute top-6 right-7">
                <span className="font-display text-[64px] lg:text-[80px] text-warm-white/10 leading-none">04</span>
              </div>
              <div className="absolute inset-0 p-7 lg:p-10 flex flex-col justify-end">
                <div className="w-10 h-0.5 bg-gold mb-4 transition-all duration-500 group-hover:w-16" />
                <h3 className="font-display text-2xl lg:text-3xl text-warm-white">{services[3].title}</h3>
                <p className="text-warm-white/60 text-sm mt-2 max-w-md opacity-100 lg:opacity-0 lg:translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  {services[3].desc}
                </p>
                <Link href="/servicios" className="inline-flex items-center gap-2 text-gold text-sm font-semibold mt-4 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Conocer más <ArrowUpRight />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="flex justify-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link
              href="/servicios"
              className="inline-flex items-center gap-3 h-[52px] px-8 border border-primary/30 hover:border-gold hover:text-gold text-primary font-semibold rounded-full transition-colors text-sm"
            >
              Ver todos los servicios
              <ArrowUpRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: FILOSOFÍA — IMAGEN + TEXTO
          ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Image */}
            <motion.div
              className="w-full lg:w-[55%]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-full h-[300px] lg:h-[400px] overflow-hidden" style={{ borderRadius: "24px 24px 120px 24px" }}>
                <Image
                  src="/images/filosofia/filosofia-bg.png"
                  alt="Filosofía VERTIX — atención personalizada"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="w-full lg:w-[45%]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-display text-[64px] text-gold leading-[0.5] block mb-4">
                &ldquo;
              </span>
              <h2 className="font-display text-2xl lg:text-[28px] text-warm-white leading-[1.3]">
                No tratamos síntomas,
                <br />
                tratamos <span className="text-gold">personas</span>
              </h2>
              <p className="text-warm-white/65 text-sm leading-[1.7] mt-6">
                En VERTIX creemos que cada paciente merece un enfoque integral.
                Combinamos ciencia, empatía y tecnología para devolverte lo que
                más importa: tu movimiento.
              </p>
              <div className="mt-8">
                <p className="text-gold font-semibold text-[13px]">
                  — Dra. Ingrid Carolina Parra
                </p>
                <p className="text-warm-white/50 text-[13px] mt-1">
                  Rehabilitadora Deportiva | Directora Clínica
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: TESTIMONIOS DE PACIENTES
          ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-warm-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.h2
            className="font-display text-[32px] lg:text-[40px] text-primary text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Lo que dicen nuestros pacientes
          </motion.h2>

          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-x-visible pb-4 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="min-w-[280px] snap-start bg-white rounded-2xl p-7 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 lg:min-w-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 text-gold">
                  {[...Array(5)].map((_, j) => (
                    <StarIcon key={j} />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-base italic text-primary leading-[1.6] flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-semibold text-base shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-primary text-[13px] font-semibold">{t.name}</p>
                    <p className="text-secondary text-[11px]">{t.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6: BLOG PREVIEW
          ═══════════════════════════════════════════ */}
      <section className="pt-4 pb-16 lg:pb-20 bg-warm-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="w-20 h-px bg-gold/30 mx-auto mb-14" />
          <div className="flex items-end justify-between mb-10">
            <motion.h2
              className="font-display text-[32px] lg:text-[40px] text-primary"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Artículos recientes
            </motion.h2>
            <Link
              href="/blog"
              className="hidden md:inline-flex text-gold font-semibold text-[13px] hover:text-gold-hover transition-colors items-center gap-1"
            >
              Ver todos <ArrowUpRight />
            </Link>
          </div>

          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-x-visible pb-4 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                className="min-w-[280px] snap-start bg-white rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 lg:min-w-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={post.slug}>
                  <div className="relative h-[180px] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-gold text-[11px] font-semibold uppercase tracking-[1px]">
                      {post.cat}
                    </span>
                    <h3 className="font-display text-xl text-primary mt-2 leading-[1.3] group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-secondary text-xs mt-2">{post.readTime}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <Link
            href="/blog"
            className="md:hidden inline-flex text-gold font-semibold text-sm mt-6 items-center gap-1"
          >
            Ver todos los artículos <ArrowUpRight />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7: CTA FINAL
          ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[320px] lg:h-[320px] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cta/cta-bg.jpg"
            alt="Centro médico VERTIX"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 py-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-[36px] lg:text-[44px] font-light text-warm-white leading-[1.2]">
            Comienza tu <span className="text-gold">recuperación</span>
          </h2>
          <p className="text-warm-white/60 text-sm mt-4">
            Agenda tu valoración y da el primer paso
          </p>
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-3 h-[56px] px-10 bg-gold hover:bg-gold-hover text-dark font-semibold rounded-full transition-colors text-[15px] mt-8"
          >
            Agenda tu cita
            <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <p className="text-warm-white/50 text-[13px] mt-5">
            +57 300 769 5747
          </p>
        </motion.div>
      </section>
    </>
  );
}
