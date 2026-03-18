"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ── Animation variants ── */
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

/* ── Data ── */
const timelineItems = [
  {
    year: "2018",
    title: "La semilla",
    description:
      "La Dra. Ingrid Carolina Parra identifico un vacio en la rehabilitacion deportiva de Barranquilla: tratamientos genericos que ignoraban la raiz del problema. Decidio que era momento de cambiar eso.",
  },
  {
    year: "2021",
    title: "Nace VERTIX",
    description:
      "Con una vision clara de medicina personalizada y basada en evidencia, abre sus puertas VERTIX: un centro medico donde cada paciente recibe un plan disenado exclusivamente para su cuerpo y sus metas.",
  },
  {
    year: "2024",
    title: "Crecimiento y referencia",
    description:
      "VERTIX se consolida como referente en medicina deportiva y rehabilitacion funcional en la region Caribe, ampliando su equipo y sumando nuevas especialidades al servicio de la comunidad.",
  },
];

const valores = [
  {
    num: "01",
    name: "Excelencia clinica",
    desc: "Cada decision esta respaldada por evidencia cientifica y formacion continua de primer nivel.",
  },
  {
    num: "02",
    name: "Empatia",
    desc: "Nos ponemos en tu lugar. Entendemos que detras de cada lesion hay una historia y una meta personal.",
  },
  {
    num: "03",
    name: "Innovacion",
    desc: "Integramos las tecnicas mas avanzadas y la tecnologia de vanguardia en cada tratamiento.",
  },
  {
    num: "04",
    name: "Integridad",
    desc: "Transparencia total. Te decimos lo que necesitas escuchar, no lo que quieres oir.",
  },
  {
    num: "05",
    name: "Prevencion",
    desc: "No solo tratamos lesiones: te educamos y empoderamos para que no vuelvan a ocurrir.",
  },
  {
    num: "06",
    name: "Trabajo en equipo",
    desc: "Colaboracion interdisciplinaria para abordar tu salud desde todos los angulos necesarios.",
  },
];

const specializations = [
  "Medicina del Deporte",
  "Rehabilitacion Deportiva",
  "Biomecanica Clinica",
  "Fisiologia del Ejercicio",
  "Evaluacion de Carga",
  "Retorno al Deporte",
];

/* ═══════════════════════════════════════════════════════
   NOSOTROS PAGE
   ═══════════════════════════════════════════════════════ */
export default function NosotrosPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt="Centro medico VERTIX"
            fill
            className="object-cover"
            priority
          />
          {/* Verde musgo gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(97,103,89,0.9)] via-[rgba(97,103,89,0.4)] to-[rgba(97,103,89,0.1)]" />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl pt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Sobre nosotros
          </motion.p>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
            NACIMOS DE UNA
            <br />
            <span className="text-gold">NECESIDAD REAL</span>
          </h1>

          <motion.p
            className="mt-8 text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Porque la rehabilitacion no deberia ser generica. En VERTIX, cada tratamiento esta disenado
            para tu cuerpo, tu historia y tus metas.
          </motion.p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: HISTORIA / TIMELINE
          ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#F3F3F0]">
        <div className="max-w-[900px] mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeInUp} className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Nuestra historia
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl text-[#2C2C2A]">
              De una vision a una realidad
            </motion.h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical gold line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#ECC794]/30 md:-translate-x-[1px]" />

            <div className="space-y-16 md:space-y-20">
              {timelineItems.map((item, i) => (
                <motion.div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Gold dot */}
                  <div className="absolute left-6 md:left-1/2 top-1 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-[#ECC794] shadow-md shadow-[#ECC794]/30" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#ECC794]/30 animate-ping" />
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${i % 2 === 1 ? "md:text-right" : "md:text-left"}`}>
                    <span className="font-display text-5xl text-[#ECC794]/40 font-bold">{item.year}</span>
                    <h3 className="font-display text-2xl text-[#2C2C2A] mt-2 mb-3">{item.title}</h3>
                    <p className="text-[#616759] leading-relaxed">{item.description}</p>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: MISION Y VISION
          ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#616759]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeInUp} className="text-[#ECC794] font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Lo que nos mueve
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl text-white">
              Mision y Vision
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mision */}
            <motion.div
              className="relative bg-white/[0.07] backdrop-blur-sm rounded-[24px] rounded-tl-[80px] p-10 lg:p-12 border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Gold accent bar */}
              <div className="w-12 h-1 bg-[#ECC794] rounded-full mb-8" />
              <h3 className="font-display text-3xl text-white mb-6">Mision</h3>
              <p className="text-white/80 leading-relaxed text-lg mb-8">
                Brindar rehabilitacion integral y personalizada, basada en evidencia cientifica, que restaure
                la funcionalidad y optimice el movimiento de cada paciente.
              </p>
              <ul className="space-y-4">
                {[
                  "Evaluacion clinica profunda y personalizada",
                  "Tratamientos basados en evidencia cientifica",
                  "Educacion y empoderamiento del paciente",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <span className="w-2 h-2 rounded-full bg-[#ECC794] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="relative bg-white/[0.07] backdrop-blur-sm rounded-[24px] rounded-br-[80px] p-10 lg:p-12 border border-white/10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Gold accent bar */}
              <div className="w-12 h-1 bg-[#ECC794] rounded-full mb-8" />
              <h3 className="font-display text-3xl text-white mb-6">Vision</h3>
              <p className="text-white/80 leading-relaxed text-lg mb-8">
                Ser el referente en rehabilitacion integral y medicina deportiva en la region Caribe,
                transformando la experiencia de cuidado y recuperacion en Colombia.
              </p>
              <ul className="space-y-4">
                {[
                  "Referente regional en rehabilitacion premium",
                  "Liderazgo en innovacion y tecnologia medica",
                  "Impacto positivo en la salud de la comunidad",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <span className="w-2 h-2 rounded-full bg-[#ECC794] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: VALORES
          ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#F3F3F0]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeInUp} className="text-[#ECC794] font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Nuestros principios
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl text-[#2C2C2A]">
              Los valores que nos definen
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {valores.map((val, i) => (
              <motion.div
                key={i}
                className="group bg-white rounded-[24px] rounded-tr-[60px] p-8 lg:p-10 border border-[#616759]/[0.08] hover:border-[#ECC794]/40 transition-all duration-500 hover:shadow-lg hover:shadow-[#ECC794]/[0.06]"
                variants={fadeInUp}
              >
                <span className="font-display text-5xl text-[#ECC794]/60 group-hover:text-[#ECC794] transition-colors duration-500">
                  {val.num}
                </span>
                <h3 className="font-display text-xl text-[#2C2C2A] mt-4 mb-3">{val.name}</h3>
                <p className="text-[#616759] leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: EQUIPO
          ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeInUp} className="text-[#ECC794] font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Quienes somos
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl text-[#2C2C2A]">
              Nuestro equipo
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[#616759] mt-4 max-w-lg mx-auto">
              Profesionales comprometidos con tu bienestar, especializados en devolverte al maximo nivel.
            </motion.p>
          </motion.div>

          {/* Featured: Dra. Ingrid */}
          <motion.div
            className="relative bg-[#616759] rounded-[24px] rounded-bl-[80px] overflow-hidden mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Photo */}
              <div className="relative w-full lg:w-[420px] h-[400px] lg:h-[520px] shrink-0">
                <Image
                  src="/images/team/dra-ingrid.png"
                  alt="Dra. Ingrid Carolina Parra - Fundadora de VERTIX"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#616759] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#616759]" />
              </div>

              {/* Info */}
              <div className="relative z-10 flex-1 p-8 lg:p-12 lg:pl-4 flex flex-col justify-center">
                <p className="text-[#ECC794] font-bold tracking-[0.2em] uppercase text-xs mb-4">
                  Fundadora & Directora Clinica
                </p>
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-2">
                  Dra. Ingrid Carolina
                  <br />
                  <span className="text-[#ECC794]">Parra</span>
                </h3>
                <p className="text-white/60 text-lg mb-8">Rehabilitadora Deportiva</p>

                {/* Quote */}
                <blockquote className="relative text-white/80 text-lg leading-relaxed mb-8 max-w-xl pl-6 border-l-2 border-[#ECC794]/40">
                  Mi enfoque no es solo quitar el dolor. Es restaurar tu funcionalidad, optimizar tu movimiento
                  y educarte para que no vuelvas a lesionarte.
                </blockquote>

                {/* Specializations */}
                <div>
                  <p className="text-white/40 font-bold tracking-[0.15em] uppercase text-xs mb-4">
                    Especializaciones
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {specializations.map((spec) => (
                      <span
                        key={spec}
                        className="px-4 py-2 rounded-full bg-white/[0.08] text-white/80 text-sm border border-white/10"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Placeholder team members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[1, 2].map((_, i) => (
              <motion.div
                key={i}
                className="bg-[#F3F3F0] border-2 border-dashed border-[#616759]/15 rounded-[24px] rounded-tr-[60px] p-10 flex flex-col items-center justify-center gap-4 min-h-[220px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#616759]/20 flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="text-[#616759]/30"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
                <p className="font-display text-lg text-[#616759]/40">Proximamente</p>
                <p className="text-[#616759]/30 text-sm">Nuevo talento sumandose al equipo</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6: CTA FINAL
          ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[360px] lg:h-[380px] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cta/cta-bg.jpg"
            alt="Centro medico VERTIX"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(97,103,89,0.9)] via-[rgba(97,103,89,0.7)] to-[rgba(97,103,89,0.5)]" />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 py-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-[36px] lg:text-[48px] text-white leading-[1.2]">
            AGENDA TU <span className="text-[#ECC794]">CITA</span>
          </h2>
          <p className="text-white/60 text-base mt-4 max-w-md mx-auto">
            Da el primer paso hacia tu recuperacion. Nuestro equipo esta listo para ayudarte.
          </p>
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-3 h-[56px] px-10 bg-[#ECC794] hover:bg-[#d4b37a] text-[#2C2C2A] font-bold rounded-full transition-colors text-[15px] mt-8"
          >
            Agenda tu cita
            <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <p className="text-white/50 text-[13px] mt-5">
            +57 300 769 5747
          </p>
        </motion.div>
      </section>
    </>
  );
}
