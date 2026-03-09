"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconMedical, IconUsers, IconClock, IconShieldCheck, IconPhone } from "@/components/Icons";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ── SVG Icons derived from V shape ── */
function VIconLeaf() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 4L8 22C8 22 10 18 14 14C18 10 22 9 22 9L14 4Z"
        stroke="#29514C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14V24"
        stroke="#29514C"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 20C12 18 14 17 14 14"
        stroke="#29514C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function VIconScience() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 4L14 18L18 4"
        stroke="#29514C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 22H20"
        stroke="#29514C"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="14" cy="20" r="2" stroke="#29514C" strokeWidth="1.5" />
      <circle cx="9" cy="12" r="1.5" stroke="#29514C" strokeWidth="1.5" />
      <circle cx="19" cy="12" r="1.5" stroke="#29514C" strokeWidth="1.5" />
    </svg>
  );
}

function VIconShield() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 3L5 7V13C5 19 9 23.5 14 25C19 23.5 23 19 23 13V7L14 3Z"
        stroke="#29514C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11L14 18L17 11"
        stroke="#29514C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const vIcons = [<VIconLeaf key="leaf" />, <VIconScience key="science" />, <VIconShield key="shield" />];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full min-h-screen overflow-hidden pt-24 lg:pt-28"
        style={{ background: "linear-gradient(180deg, #e8f0ee 0%, #F3F3F1 50%, #F3F3F1 100%)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-0 min-h-[calc(100vh-112px)]">
            {/* Left content */}
            <div className="w-full lg:w-[55%] flex flex-col gap-8 z-10 py-12 lg:py-0">
              {/* Trust badges */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {[
                  { icon: <IconShieldCheck size={16} className="text-primary" />, label: "Confianza" },
                  { icon: <IconMedical size={16} className="text-primary" />, label: "Especialistas" },
                  { icon: <IconUsers size={16} className="text-primary" />, label: "Atención humana" },
                ].map((badge, i) => (
                  <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/15 bg-white/60 text-dark text-sm font-medium">
                    {badge.icon}
                    {badge.label}
                  </span>
                ))}
              </motion.div>

              {/* Heading */}
              <motion.h1
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-dark"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              >
                Recuperar tu{" "}
                <span className="text-gradient-gold">movilidad,</span>{" "}
                a un paso de ti
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-secondary text-lg lg:text-xl max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Medicina del deporte, ortopedia y fisioterapia avanzada. Agenda en línea y comienza tu recuperación.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap items-center gap-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link
                  href="/contacto"
                  className="group inline-flex items-center gap-3 h-14 px-8 bg-primary hover:bg-primary-light text-white font-bold rounded-full transition-colors text-base cursor-pointer"
                >
                  Agenda tu cita
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/servicios"
                  className="group inline-flex items-center gap-3 h-14 px-8 border-2 border-dark/15 text-dark font-bold rounded-full hover:border-primary hover:text-primary transition-colors text-base cursor-pointer"
                >
                  Explorar servicios
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>

              {/* Floating stats cards */}
              <motion.div
                className="flex flex-wrap gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                {/* Doctor card */}
                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 pr-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-white">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <IconMedical size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-dark font-bold text-sm">Dra. Ingrid Parra</p>
                    <p className="text-secondary text-xs">Rehabilitación Deportiva</p>
                  </div>
                </div>

                {/* Stats card */}
                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 pr-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-white">
                  <div className="w-14 h-14 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                    <IconUsers size={24} className="text-gold-hover" />
                  </div>
                  <div>
                    <p className="text-dark font-bold text-lg leading-none">3</p>
                    <p className="text-secondary text-xs">Especialidades integradas</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right — Hero image area */}
            <motion.div
              className="w-full lg:w-[45%] lg:absolute lg:right-0 lg:bottom-0 lg:top-0 flex items-end justify-center z-0"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className="relative w-full h-[500px] lg:h-full flex items-end justify-center">
                {/* Soft gradient behind image */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[80%] rounded-full opacity-40"
                  style={{ background: "radial-gradient(ellipse, rgba(41,81,76,0.15) 0%, transparent 70%)" }}
                />
                {/* Image placeholder — replace with actual photo */}
                <div className="relative w-full max-w-[480px] h-full rounded-t-[40px] overflow-hidden bg-gradient-to-b from-primary/5 to-primary/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Stylized V silhouette as placeholder */}
                    <svg width="200" height="240" viewBox="0 0 200 240" fill="none" className="opacity-10">
                      <path d="M20 20L100 220L180 20" stroke="#29514C" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-warm-white/80 to-transparent" />
                </div>

                {/* Floating badge — bottom right */}
                <motion.div
                  className="absolute bottom-12 right-0 lg:right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <IconClock size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-dark font-bold text-sm">Horario</p>
                      <p className="text-secondary text-xs">Lun–Sáb · 7am–6:30pm</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating badge — top left */}
                <motion.div
                  className="absolute top-20 left-0 lg:-left-8 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white z-10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-gold text-lg">★★★★★</span>
                    <span className="text-dark text-sm font-bold">Valoración gratuita</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PATIENT JOURNEY STRIP */}
      <section className="w-full bg-primary py-14 lg:py-16 mt-12 lg:mt-16 relative z-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x-2 divide-gold/30">
            {[
              { step: "01", label: "Evaluación", desc: "Diagnóstico integral de tu condición" },
              { step: "02", label: "Plan a medida", desc: "Tratamiento adaptado a tus metas" },
              { step: "03", label: "Rehabilitación", desc: "Tecnología y terapia de vanguardia" },
              { step: "04", label: "Prevención", desc: "Seguimiento para evitar recaídas" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center justify-center text-center px-4 gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-gold font-display text-3xl lg:text-4xl font-bold mb-1">
                  {item.step}
                </span>
                <p className="text-white text-lg lg:text-xl font-bold leading-tight">
                  {item.label}
                </p>
                <p className="text-white/60 text-sm mt-1">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY VERTIX */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary mb-6">
              Un enfoque diferente al cuidado de tu cuerpo
            </h2>
            <p className="text-secondary text-lg">
              En VERTIX no tratamos síntomas, tratamos personas.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              {
                title: "Escucha activa",
                desc: "No tratamos síntomas, llegamos a la raíz del problema.",
                iconIdx: 0,
              },
              {
                title: "Ciencia + Humanidad",
                desc: "Evidencia científica con trato empático y personalizado.",
                iconIdx: 1,
              },
              {
                title: "Prevención inteligente",
                desc: "Te educamos para que no vuelvas a lesionarte.",
                iconIdx: 2,
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-[24px] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/5 hover:border-gold hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  {vIcons[card.iconIdx]}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {card.title}
                </h3>
                <p className="text-secondary leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW — 2x2 Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-gold font-bold tracking-wider uppercase text-sm mb-2 block">
                Nuestras Especialidades
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary">
                Lo que hacemos por ti
              </h2>
            </div>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full h-12 px-6 font-bold transition-all"
            >
              Ver todos los servicios →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Medicina del Deporte",
                desc: "Optimización del rendimiento y prevención de lesiones para atletas de todos los niveles.",
              },
              {
                title: "Ortopedia Especializada",
                desc: "Diagnóstico y tratamiento preciso de afecciones musculoesqueléticas.",
              },
              {
                title: "Fisioterapia",
                desc: "Rehabilitación funcional basada en evidencia para recuperar tu movimiento.",
              },
              {
                title: "Entrenamiento",
                desc: "Programas personalizados para fortalecer tu cuerpo y prevenir futuras lesiones.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="relative rounded-[32px] overflow-hidden group cursor-pointer bg-light h-[400px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Image bg placeholder */}
                <div className="absolute inset-0 bg-secondary/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary/40 to-transparent transition-opacity group-hover:opacity-90" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/80 max-w-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {service.desc}
                  </p>
                  <Link
                    href="/servicios"
                    className="text-gold font-bold mt-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75"
                  >
                    Conocer más →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY — Asymmetric with image */}
      <section className="py-32 bg-warm-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px] -z-10" />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text — left 60% */}
            <motion.div
              className="w-full lg:w-[60%]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold text-6xl opacity-50 mb-8 block">
                &ldquo;
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
                No solo quitamos el dolor.
                <br />
                <span className="text-gradient-gold">
                  Restauramos el movimiento.
                </span>
              </h2>
              <div className="mt-12 w-24 h-1 bg-gold rounded-full" />
            </motion.div>

            {/* Image — right 40% */}
            <motion.div
              className="w-full lg:w-[40%]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div
                className="w-full aspect-[3/4] bg-secondary/10 overflow-hidden shadow-xl"
                style={{ borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%" }}
              >
                <div className="w-full h-full flex items-center justify-center text-secondary/40 text-base">
                  Imagen: Filosofía Vertix
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-4xl font-bold text-primary">
              Aprende a moverte mejor
            </h2>
            <Link
              href="/blog"
              className="text-primary font-bold flex items-center gap-2 hover:text-gold transition-colors"
            >
              Ver todos los artículos →
            </Link>
          </div>

          {/* Mobile: horizontal scroll / Desktop: grid */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-x-visible pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
            {[
              {
                cat: "Prevención",
                title: "Cómo evitar lesiones comunes al empezar a correr",
                excerpt:
                  "Una guía completa para principiantes sobre biomecánica básica y preparación física.",
              },
              {
                cat: "Recuperación",
                title: "El rol del descanso activo en tu terapia",
                excerpt:
                  "Por qué detenerse completamente a veces es contraproducente para curar ciertas lesiones.",
              },
              {
                cat: "Nutrición",
                title: "Alimentos que reducen la inflamación articular",
                excerpt:
                  "Complementa tu tratamiento de fisioterapia con estas recomendaciones nutricionales clave.",
              },
            ].map((post, i) => (
              <motion.article
                key={i}
                className="min-w-[280px] snap-center flex flex-col gap-5 group cursor-pointer md:min-w-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="w-full aspect-video rounded-[24px] overflow-hidden bg-light relative">
                  <div className="absolute top-4 left-4 z-10 bg-gold text-dark text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    {post.cat}
                  </div>
                  <div className="w-full h-full bg-secondary/10 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col gap-2 px-2">
                  <h3 className="text-xl font-bold text-primary group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-secondary line-clamp-2">{post.excerpt}</p>
                  <p className="text-secondary/60 text-sm mt-1">
                    Ingrid Parra · 1 Mar 2025 · 5 min
                  </p>
                  <Link
                    href="/blog"
                    className="text-primary font-bold text-sm mt-1 hover:text-gold transition-colors"
                  >
                    Leer más →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-b from-warm-white to-white border-t border-primary/5">
        <motion.div
          className="max-w-[800px] mx-auto px-6 text-center flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary">
            Listo para recuperar tu movimiento?
          </h2>
          <p className="text-lg text-secondary">
            Agenda tu valoración gratuita hoy mismo y comencemos a trazar tu
            plan de recuperación personalizado.
          </p>
          <Link
            href="/contacto"
            className="flex items-center justify-center h-16 px-10 bg-gold hover:bg-primary text-dark hover:text-white text-xl font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-gold/20"
          >
            Agenda tu cita ahora
          </Link>
          <p className="text-primary font-bold text-lg mt-4 flex items-center gap-2">
            <IconPhone size={20} className="text-primary" /> +57 300 7695747
          </p>
        </motion.div>
      </section>
    </>
  );
}
