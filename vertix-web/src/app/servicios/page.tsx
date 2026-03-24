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

/* ── Check icon for bullet points ── */
function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12.5l2.5 2.5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Services Data ── */
const services = [
  {
    num: "01",
    title: "Medicina del Deporte",
    image: "/images/servicios/medicina-deporte.jpg",
    imageAlt: "Medicina del deporte en VERTIX - evaluación deportiva profesional",
    paragraphs: [
      "La medicina del deporte va mucho más allá de tratar lesiones. En VERTIX, abordamos al deportista de manera integral, evaluando su condición física, biomecánica y factores de riesgo para diseñar planes preventivos y de tratamiento basados en evidencia científica.",
      "Nuestro enfoque combina tecnología de vanguardia con la experiencia clínica para ofrecerte un diagnóstico preciso y un plan de acción personalizado que te devuelva al máximo rendimiento de forma segura.",
      "Ya seas atleta de alto rendimiento o practicante recreativo, nuestro equipo está preparado para acompañarte en cada etapa de tu proceso deportivo.",
    ],
    bullets: [
      "Evaluación y diagnóstico de lesiones deportivas",
      "Valoración del rendimiento y composición corporal",
      "Prevención de lesiones con protocolos personalizados",
      "Prescripción de ejercicio basada en evidencia",
    ],
  },
  {
    num: "02",
    title: "Ortopedia Especializada",
    image: "/images/servicios/ortopedia.jpg",
    imageAlt: "Ortopedia especializada - diagnóstico musculoesquelético avanzado",
    paragraphs: [
      "La ortopedia es la columna vertebral de nuestra práctica clínica. Diagnosticamos y tratamos patologías del sistema musculoesquelético con un enfoque conservador y basado en la funcionalidad, priorizando siempre las intervenciones menos invasivas.",
      "Cada paciente recibe una evaluación exhaustiva que incluye análisis clínico detallado, interpretación de imágenes diagnósticas y un plan de manejo integral que aborda la causa raíz del problema, no solo los síntomas.",
      "Trabajamos de la mano con fisioterapia y entrenamiento para garantizar resultados completos y duraderos en cada caso.",
    ],
    bullets: [
      "Diagnóstico de patologías musculoesqueléticas",
      "Manejo conservador de lesiones articulares y tendinosas",
      "Infiltraciones guiadas y terapias regenerativas",
      "Seguimiento post-quirúrgico y rehabilitación",
    ],
  },
  {
    num: "03",
    title: "Fisioterapia Avanzada",
    image: "/images/servicios/fisioterapia.jpg",
    imageAlt: "Fisioterapia avanzada - terapia manual y rehabilitación funcional",
    paragraphs: [
      "Nuestra fisioterapia va más allá de las técnicas convencionales. Utilizamos terapias manuales avanzadas, ejercicio terapéutico progresivo y tecnología de última generación para restaurar tu movilidad y eliminar el dolor de raíz.",
      "Cada sesión es personalizada y orientada a objetivos funcionales claros. No seguimos protocolos genéricos: diseñamos tu rehabilitación alrededor de tus necesidades específicas, tu estilo de vida y tus metas de recuperación.",
    ],
    bullets: [
      "Terapia manual ortopédica y miofascial",
      "Ejercicio terapéutico y control motor",
      "Neuromodulación y punción seca",
      "Rehabilitación funcional post-quirúrgica",
    ],
  },
  {
    num: "04",
    title: "Entrenamiento Personalizado",
    image: "/images/servicios/entrenamiento.jpg",
    imageAlt: "Entrenamiento personalizado - acondicionamiento físico a medida",
    paragraphs: [
      "El entrenamiento personalizado es el puente entre la rehabilitación y el rendimiento. Diseñamos programas de acondicionamiento físico individualizados que complementan tu proceso de recuperación y te preparan para volver a tu actividad con confianza.",
      "Nuestros programas están basados en principios de fisiología del ejercicio y periodización, adaptados a tu condición actual, tus limitaciones y tus objetivos deportivos o de bienestar general.",
      "Monitoreamos tu progreso de manera objetiva para ajustar las cargas y garantizar una evolución segura y progresiva.",
    ],
    bullets: [
      "Programas de acondicionamiento físico individualizado",
      "Prevención de lesiones por sobreuso",
      "Readaptación deportiva y retorno al deporte",
      "Monitoreo de cargas y periodización",
    ],
  },
];

const specializations = [
  "Biomecánica",
  "Fisiología del ejercicio",
  "Valoración de cargas",
  "Retorno al deporte",
];

export default function ServiciosPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-[#2C2C2A]">
          <Image
            src="/images/servicios/medicina-deporte.jpg"
            alt="Servicios médicos especializados en VERTIX"
            fill
            priority
            quality={85}
            className="object-cover"
          />
          {/* Verde musgo overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(97,103,89,0.9)] via-[rgba(97,103,89,0.4)] to-[rgba(97,103,89,0.1)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(97,103,89,0.7)] via-[rgba(97,103,89,0.3)] to-[rgba(97,103,89,0.5)]" />
        </div>

        {/* Decorative V watermark */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          <div className="absolute right-[8%] top-1/2 -translate-y-1/2 opacity-[0.04] hidden lg:block">
            <span className="font-display text-[400px] text-warm-white leading-none select-none">V</span>
          </div>
          <div className="absolute top-[20%] left-[8%] w-px h-[200px] bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 py-32 lg:py-40 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col items-center gap-6"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <div className="w-10 h-px bg-gold" />
              <span className="text-gold text-[11px] font-semibold uppercase tracking-[4px]">
                Centro Médico Especializado
              </span>
              <div className="w-10 h-px bg-gold" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-[42px] md:text-[60px] lg:text-[72px] font-bold leading-[1.05] text-warm-white"
            >
              NUESTROS{" "}
              <span className="text-gold">SERVICIOS</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-warm-white/70 text-base lg:text-lg leading-relaxed max-w-xl"
            >
              Medicina del deporte, ortopedia, fisioterapia y entrenamiento personalizado.
              Un enfoque integral para tu recuperación y bienestar.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-4">
              <Link
                href="/contacto"
                className="group inline-flex items-center gap-3 h-[56px] px-10 bg-gold hover:bg-gold-hover text-dark font-bold rounded-full transition-colors text-base"
              >
                Agenda tu cita
                <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F3F3F0] to-transparent z-10" />
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: SERVICES DETAIL — ALTERNATING
          ═══════════════════════════════════════════ */}

      {/* ── 01: Medicina del Deporte — Image left, text right, cream bg ── */}
      <section className="py-16 lg:py-24 bg-[#F3F3F0]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Image */}
            <motion.div
              className="w-full lg:w-[50%]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="relative w-full h-[320px] lg:h-[480px] overflow-hidden"
                style={{ borderRadius: "24px 24px 120px 24px" }}
              >
                <Image
                  src={services[0].image}
                  alt={services[0].imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="w-full lg:w-[50%]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span
                variants={fadeInUp}
                className="font-display text-[64px] lg:text-[80px] text-gold/35 leading-none block"
              >
                {services[0].num}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-display text-[28px] lg:text-[40px] text-primary leading-[1.1] mt-2"
              >
                {services[0].title}
              </motion.h2>
              <motion.div variants={fadeInUp} className="w-16 h-0.5 bg-gold mt-5 mb-6" />

              {services[0].paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  variants={fadeInUp}
                  className="text-primary/75 text-sm lg:text-base leading-[1.7] mb-4"
                >
                  {p}
                </motion.p>
              ))}

              <motion.ul variants={fadeInUp} className="space-y-3 mt-6">
                {services[0].bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-3 text-primary/80 text-sm lg:text-base"
                  >
                    <span className="text-gold"><CheckIcon /></span>
                    {bullet}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={fadeInUp} className="w-full h-px bg-gold/20 mt-8 mb-6" />

              <motion.div variants={fadeInUp}>
                <Link
                  href="/contacto"
                  className="group inline-flex items-center gap-3 h-[52px] px-8 bg-gold hover:bg-gold-hover text-dark font-bold rounded-full transition-colors text-sm"
                >
                  Agenda tu cita
                  <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 02: Ortopedia Especializada — Text left, image right, verde musgo bg ── */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
            {/* Image */}
            <motion.div
              className="w-full lg:w-[50%]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="relative w-full h-[320px] lg:h-[480px] overflow-hidden"
                style={{ borderRadius: "24px 120px 24px 24px" }}
              >
                <Image
                  src={services[1].image}
                  alt={services[1].imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="w-full lg:w-[50%]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span
                variants={fadeInUp}
                className="font-display text-[64px] lg:text-[80px] text-gold/35 leading-none block"
              >
                {services[1].num}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-display text-[28px] lg:text-[40px] text-warm-white leading-[1.1] mt-2"
              >
                {services[1].title}
              </motion.h2>
              <motion.div variants={fadeInUp} className="w-16 h-0.5 bg-gold mt-5 mb-6" />

              {services[1].paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  variants={fadeInUp}
                  className="text-warm-white/65 text-sm lg:text-base leading-[1.7] mb-4"
                >
                  {p}
                </motion.p>
              ))}

              <motion.ul variants={fadeInUp} className="space-y-3 mt-6">
                {services[1].bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-3 text-warm-white/70 text-sm lg:text-base"
                  >
                    <span className="text-gold"><CheckIcon /></span>
                    {bullet}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={fadeInUp} className="w-full h-px bg-warm-white/10 mt-8 mb-6" />

              <motion.div variants={fadeInUp}>
                <Link
                  href="/contacto"
                  className="group inline-flex items-center gap-3 h-[52px] px-8 bg-gold hover:bg-gold-hover text-dark font-bold rounded-full transition-colors text-sm"
                >
                  Agenda tu cita
                  <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 03: Fisioterapia Avanzada — Image left, text right, cream bg ── */}
      <section className="py-16 lg:py-24 bg-[#F3F3F0]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Image */}
            <motion.div
              className="w-full lg:w-[50%]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="relative w-full h-[320px] lg:h-[480px] overflow-hidden"
                style={{ borderRadius: "120px 24px 24px 24px" }}
              >
                <Image
                  src={services[2].image}
                  alt={services[2].imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="w-full lg:w-[50%]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span
                variants={fadeInUp}
                className="font-display text-[64px] lg:text-[80px] text-gold/35 leading-none block"
              >
                {services[2].num}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-display text-[28px] lg:text-[40px] text-primary leading-[1.1] mt-2"
              >
                {services[2].title}
              </motion.h2>
              <motion.div variants={fadeInUp} className="w-16 h-0.5 bg-gold mt-5 mb-6" />

              {services[2].paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  variants={fadeInUp}
                  className="text-primary/75 text-sm lg:text-base leading-[1.7] mb-4"
                >
                  {p}
                </motion.p>
              ))}

              <motion.ul variants={fadeInUp} className="space-y-3 mt-6">
                {services[2].bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-3 text-primary/80 text-sm lg:text-base"
                  >
                    <span className="text-gold"><CheckIcon /></span>
                    {bullet}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={fadeInUp} className="w-full h-px bg-gold/20 mt-8 mb-6" />

              <motion.div variants={fadeInUp}>
                <Link
                  href="/contacto"
                  className="group inline-flex items-center gap-3 h-[52px] px-8 bg-gold hover:bg-gold-hover text-dark font-bold rounded-full transition-colors text-sm"
                >
                  Agenda tu cita
                  <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 04: Entrenamiento Personalizado — Text left, image right, verde musgo bg ── */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
            {/* Image */}
            <motion.div
              className="w-full lg:w-[50%]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="relative w-full h-[320px] lg:h-[480px] overflow-hidden"
                style={{ borderRadius: "24px 24px 24px 120px" }}
              >
                <Image
                  src={services[3].image}
                  alt={services[3].imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="w-full lg:w-[50%]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span
                variants={fadeInUp}
                className="font-display text-[64px] lg:text-[80px] text-gold/35 leading-none block"
              >
                {services[3].num}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-display text-[28px] lg:text-[40px] text-warm-white leading-[1.1] mt-2"
              >
                {services[3].title}
              </motion.h2>
              <motion.div variants={fadeInUp} className="w-16 h-0.5 bg-gold mt-5 mb-6" />

              {services[3].paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  variants={fadeInUp}
                  className="text-warm-white/65 text-sm lg:text-base leading-[1.7] mb-4"
                >
                  {p}
                </motion.p>
              ))}

              <motion.ul variants={fadeInUp} className="space-y-3 mt-6">
                {services[3].bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-3 text-warm-white/70 text-sm lg:text-base"
                  >
                    <span className="text-gold"><CheckIcon /></span>
                    {bullet}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={fadeInUp} className="w-full h-px bg-warm-white/10 mt-8 mb-6" />

              <motion.div variants={fadeInUp}>
                <Link
                  href="/contacto"
                  className="group inline-flex items-center gap-3 h-[52px] px-8 bg-gold hover:bg-gold-hover text-dark font-bold rounded-full transition-colors text-sm"
                >
                  Agenda tu cita
                  <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: ESPECIALISTA — DRA. INGRID
          ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#F3F3F0]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Photo */}
            <motion.div
              className="w-[260px] lg:w-[320px] shrink-0"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="relative w-full h-[340px] lg:h-[420px] overflow-hidden"
                style={{ borderRadius: "200px 200px 24px 24px" }}
              >
                <Image
                  src="/images/team/dra-ingrid.png"
                  alt="Dra. Ingrid Carolina Parra — Rehabilitadora Deportiva y Directora Clínica de VERTIX"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-10 h-px bg-gold" />
                <span className="text-gold text-[11px] font-semibold uppercase tracking-[4px]">
                  Tu Especialista
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-display text-[32px] lg:text-[44px] text-primary leading-[1.1] mt-4"
              >
                Dra. Ingrid Carolina Parra
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-gold font-semibold text-[13px] mt-3"
              >
                Rehabilitadora Deportiva · Directora Clinica
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-primary/75 text-sm lg:text-base leading-[1.7] mt-6 max-w-lg mx-auto lg:mx-0"
              >
                Especialista en rehabilitación deportiva con enfoque integral y basado en evidencia.
                Fundadora de VERTIX con la misión de transformar la recuperación de cada paciente,
                combinando ciencia, tecnología y un trato profundamente humano. Su experiencia abarca
                desde el atleta de alto rendimiento hasta el paciente que busca mejorar su calidad de vida.
              </motion.p>

              {/* Specialization tags */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8"
              >
                {specializations.map((spec, i) => (
                  <motion.span
                    key={spec}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="px-5 py-2 rounded-full bg-gold/10 text-gold text-[13px] font-semibold border border-gold/20"
                  >
                    {spec}
                  </motion.span>
                ))}
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: CTA FINAL
          ═══════════════════════════════════════════ */}
      <section className="relative w-full min-h-[380px] lg:min-h-[420px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/cta/cta-bg.jpg"
            alt="Centro médico VERTIX — comienza tu recuperación"
            fill
            className="object-cover"
          />
          {/* Verde musgo overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(97,103,89,0.9)] via-[rgba(97,103,89,0.4)] to-[rgba(97,103,89,0.1)]" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 py-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-[36px] lg:text-[52px] font-bold text-warm-white leading-[1.1]">
            Comienza tu <span className="text-gold">recuperación</span>
          </h2>

          <Link
            href="/contacto"
            className="group inline-flex items-center gap-3 h-[56px] px-10 bg-gold hover:bg-gold-hover text-dark font-bold rounded-full transition-colors text-base mt-8"
          >
            Agenda tu cita
            <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
