"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
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

/* ── Animated Counter ── */
function AnimatedCounter({ target, duration = 1.5 }: { target: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      setValue(Math.round(progress * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return <span ref={ref}>{value}</span>;
}

/* ── Fade-in text for non-numeric stats ── */
function FadeInValue({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
}

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
      <section className="relative w-full min-h-screen overflow-hidden organic-blob pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 min-h-[calc(100vh-80px)]">
          <motion.div
            className="w-full lg:w-[55%] flex flex-col gap-8 z-10"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h1
              variants={fadeInUp}
              className="font-display text-5xl lg:text-7xl font-bold leading-[1.1] text-dark"
            >
              Recuperar tu{" "}
              <span className="text-gradient-gold">MOVILIDAD</span> es
              recuperar tu VIDA
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg lg:text-xl text-secondary max-w-lg leading-relaxed"
            >
              Rehabilitación integral con ciencia, tecnología y humanidad
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                href="/contacto"
                className="flex items-center justify-center h-14 px-8 bg-primary hover:bg-primary-light text-white font-bold rounded-full transition-all shadow-lg shadow-primary/20 text-lg"
              >
                Agenda tu valoración gratuita
              </Link>
              <Link
                href="/servicios"
                className="flex items-center justify-center h-14 px-8 border-2 border-primary/20 text-primary font-bold rounded-full hover:bg-primary/5 transition-colors text-lg"
              >
                Conoce nuestros servicios
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-[45%] z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="relative w-full aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl bg-light">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent z-10" />
              <div className="w-full h-full bg-secondary/20 flex items-center justify-center text-secondary/40 text-lg">
                Imagen: Fisioterapeuta con paciente
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <motion.div
            className="w-0.5 h-12 bg-primary/30 relative overflow-hidden rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="w-full h-3 bg-primary rounded-full"
              animate={{ y: [0, 36, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        {/* V Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[40vw] font-bold text-primary/[0.04] leading-none">
            V
          </span>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="w-full bg-primary py-12 lg:py-16 relative z-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x-2 divide-gold/30">
            {[
              { icon: <IconMedical size={28} className="text-gold" />, label: "Especialidades Integradas", value: "3", isNumeric: true, numericTarget: 3 },
              { icon: <IconUsers size={28} className="text-gold" />, label: "Atención", value: "Personalizada", isNumeric: false, numericTarget: 0 },
              { icon: <IconClock size={28} className="text-gold" />, label: "Horario", value: "7am – 6:30pm", isNumeric: false, numericTarget: 0 },
              { icon: <IconShieldCheck size={28} className="text-gold" />, label: "Valoración", value: "Gratuita", isNumeric: false, numericTarget: 0 },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center justify-center text-center px-4 gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="mb-2">{stat.icon}</span>
                <p className="text-white/80 text-sm lg:text-base font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="text-white text-2xl lg:text-3xl font-bold leading-tight">
                  {stat.isNumeric ? (
                    <AnimatedCounter target={stat.numericTarget} />
                  ) : i === 3 ? (
                    <span className="text-gold">
                      <FadeInValue>{stat.value}</FadeInValue>
                    </span>
                  ) : (
                    <FadeInValue>{stat.value}</FadeInValue>
                  )}
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
              <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
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
            ¿Listo para recuperar tu movimiento?
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
