"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

/* ── Animated Counter ── */
function Counter({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return <span ref={ref}>{value}{suffix}</span>;
}

/* ── Specialty Data ── */
const specialties = [
  {
    id: "biomecanica",
    name: "Biomecánica",
    desc: "Análisis detallado del movimiento humano para identificar patrones disfuncionales y diseñar intervenciones precisas que optimicen la función corporal.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="20" x2="12" y2="16" />
        <line x1="16" y1="20" x2="12" y2="16" />
        <line x1="7" y1="12" x2="17" y2="12" />
      </svg>
    ),
  },
  {
    id: "fisiologia",
    name: "Fisiología del Ejercicio",
    desc: "Comprensión profunda de las respuestas fisiológicas al ejercicio para diseñar programas de rehabilitación y acondicionamiento basados en evidencia.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l3-9 4 18 3-9h4" />
      </svg>
    ),
  },
  {
    id: "carga",
    name: "Evaluación de Carga",
    desc: "Monitoreo y control de las cargas de entrenamiento para prevenir lesiones por sobreuso y optimizar la periodización del deportista.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" />
        <path d="M6 20v-6" />
        <path d="M18 20V4" />
      </svg>
    ),
  },
  {
    id: "retorno",
    name: "Retorno al Deporte",
    desc: "Protocolo progresivo y basado en criterios objetivos para garantizar un regreso seguro a la actividad deportiva tras una lesión.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const historyItems = [
  {
    title: "El inicio de VERTIX",
    text: "Una visión clara: transformar la rehabilitación tradicional en una experiencia verdaderamente personalizada. Nació de la convicción de que cada paciente merece un enfoque único.",
    highlight: "personalizada",
  },
  {
    title: "Nuestra metodología",
    text: "Desarrollamos un enfoque integral, centrado en encontrar la raíz del problema de cada paciente. Combinamos ciencia, tecnología y humanidad para resultados duraderos.",
    highlight: "raíz del problema",
  },
  {
    title: "El futuro de la salud",
    text: "Innovando constantemente en técnicas de prevención y cuidado deportivo de alto rendimiento. Cada día nos acerca más a nuestra visión de bienestar integral.",
    highlight: "prevención",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-primary/70 z-10" />
        <div className="absolute inset-0 bg-light" />
        <motion.div
          className="relative z-20 text-center px-6 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
            Nacimos de una necesidad real
          </h1>
          <p className="mt-6 text-white/90 text-lg md:text-xl max-w-xl mx-auto">
            Rehabilitación médica personalizada y deportiva de alto nivel en Barranquilla, Colombia.
          </p>
        </motion.div>
      </section>

      {/* Historia */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-[900px] mx-auto px-6">
          <motion.h2
            className="font-display text-4xl font-bold text-primary text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Nuestra Historia
          </motion.h2>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gold/30 -translate-x-1/2 hidden md:block" />

            <div className="space-y-16">
              {historyItems.map((item, i) => (
                <motion.div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-center gap-10 ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  {/* Gold dot on timeline */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold z-10 hidden md:block shadow-md" />

                  <div className="w-full md:w-1/2 aspect-video rounded-2xl bg-light overflow-hidden shadow-md">
                    <div className="w-full h-full bg-secondary/10 flex items-center justify-center text-secondary/30">
                      Imagen {i + 1}
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="font-display text-2xl font-bold text-primary mb-4">{item.title}</h3>
                    <p className="text-secondary leading-relaxed">
                      {item.text.split(item.highlight).map((part, j) => (
                        <span key={j}>
                          {part}
                          {j < item.text.split(item.highlight).length - 1 && (
                            <span className="text-gold font-semibold">{item.highlight}</span>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión */}
            <motion.div
              className="bg-primary rounded-[24px] p-10 text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-3xl font-bold mb-6">Misión</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                  <span>Brindar rehabilitación integral personalizada basada en evidencia científica</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                  <span>Restaurar la funcionalidad y optimizar el movimiento de cada paciente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                  <span>Educar y empoderar a nuestros pacientes en la prevención de lesiones</span>
                </li>
              </ul>
            </motion.div>

            {/* Visión */}
            <motion.div
              className="bg-warm-white rounded-[24px] p-10 border-l-4 border-gold"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-3xl font-bold text-dark mb-6">Visión</h3>
              <ul className="space-y-4 text-secondary">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                  <span>Ser el referente en rehabilitación integral premium en la región Caribe</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                  <span>Liderar la innovación en medicina deportiva y rehabilitación funcional</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                  <span>Transformar la experiencia de rehabilitación en Colombia</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.h2
            className="font-display text-4xl font-bold text-primary text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Nuestros valores
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: "01", name: "Empatía", desc: "Nos ponemos en tu lugar para entender lo que necesitas." },
              { num: "02", name: "Escucha Activa", desc: "Tu historia y tus síntomas son el punto de partida." },
              { num: "03", name: "Confianza", desc: "Construimos relaciones basadas en la transparencia." },
              { num: "04", name: "Responsabilidad", desc: "Cada decisión clínica es respaldada por evidencia." },
              { num: "05", name: "Profesionalismo", desc: "Formación continua y estándares de excelencia." },
              { num: "06", name: "Honestidad", desc: "Te decimos lo que necesitas escuchar, no lo que quieres." },
            ].map((val, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-3 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="font-display text-5xl font-bold text-gold">{val.num}</span>
                <h3 className="text-xl font-bold text-primary">{val.name}</h3>
                <p className="text-secondary">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Dra. Ingrid Parra — Interactive Showcase ═══ */}
      <DraIngridSection />

      {/* Equipo */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 text-center">
          <motion.h2
            className="font-display text-4xl font-bold text-primary mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Nuestro Equipo
          </motion.h2>
          <p className="text-secondary mb-12 max-w-lg mx-auto">
            Profesionales comprometidos con tu bienestar y recuperación integral.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Ingrid card */}
            <motion.div
              className="bg-white rounded-[24px] p-8 shadow-sm border border-gold/20 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="absolute top-4 right-4 px-2 py-0.5 bg-gold/10 text-gold text-[10px] font-bold rounded-full uppercase tracking-wider">
                Fundadora
              </span>
              <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center text-primary/30 ring-2 ring-gold/30 ring-offset-2">
                Foto
              </div>
              <h3 className="font-bold text-primary text-lg">Ingrid Carolina Parra</h3>
              <p className="text-secondary text-sm mb-3">Rehabilitadora Deportiva</p>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {["Biomecánica", "Fisiología"].map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-gold/10 text-gold text-[11px] font-medium">{t}</span>
                ))}
              </div>
            </motion.div>
            {/* Placeholder 1 */}
            <motion.div
              className="bg-white/50 border-2 border-dashed border-primary/15 rounded-[24px] p-8 flex flex-col items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-primary/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary/30">
                  <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <p className="text-secondary/50 font-medium text-sm">Próximamente</p>
            </motion.div>
            {/* Placeholder 2 */}
            <motion.div
              className="bg-white/50 border-2 border-dashed border-primary/15 rounded-[24px] p-8 flex flex-col items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-primary/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary/30">
                  <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <p className="text-secondary/50 font-medium text-sm">Próximamente</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   DRA. INGRID PARRA — Interactive Showcase Component
   ═══════════════════════════════════════════════════════ */
function DraIngridSection() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-primary overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-bold text-white/[0.03] leading-none">
          V
        </span>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/[0.04] blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/[0.03] blur-3xl translate-y-1/3 -translate-x-1/3" />
      </div>

      {/* ── Top: Hero intro ── */}
      <div className="relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Photo with orbital ring */}
            <motion.div
              className="relative flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Orbital ring */}
              <motion.div
                className="absolute -inset-5 rounded-full border border-gold/30"
                animate={isInView ? { rotate: 360 } : {}}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold shadow-lg shadow-gold/50" />
              </motion.div>
              {/* Second ring */}
              <motion.div
                className="absolute -inset-10 rounded-full border border-white/10"
                animate={isInView ? { rotate: -360 } : {}}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-white/40" />
              </motion.div>

              {/* Photo circle */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-white/10 shadow-2xl shadow-black/20 ring-4 ring-gold/20">
                <div className="w-full h-full bg-white/5 flex items-center justify-center text-white/20">
                  Foto Dra. Ingrid
                </div>
              </div>
            </motion.div>

            {/* Name + Role + Quote */}
            <motion.div
              className="text-center lg:text-left flex-1"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p
                className="text-gold font-bold tracking-widest uppercase text-sm mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                Fundadora &amp; Directora Clínica
              </motion.p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
                Ingrid Carolina
                <br />
                <span className="text-gradient-gold">Parra</span>
              </h2>
              <p className="text-white/60 text-lg mb-8">Rehabilitadora Deportiva</p>

              <motion.blockquote
                className="relative font-display text-xl md:text-2xl text-white/85 leading-relaxed mb-10 max-w-xl"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 1 }}
              >
                <span className="absolute -left-4 -top-4 text-gold/30 text-6xl font-serif">&ldquo;</span>
                Mi enfoque no es solo quitar el dolor. Es restaurar tu funcionalidad, optimizar tu movimiento y educarte para que no vuelvas a lesionarte.
                <span className="text-gold/30 text-6xl font-serif leading-none">&rdquo;</span>
              </motion.blockquote>

              {/* Stats row */}
              <motion.div
                className="flex flex-wrap gap-8 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                {[
                  { value: 500, suffix: "+", label: "Pacientes\natendidos" },
                  { value: 4, suffix: "", label: "Especialidades\nclínicas" },
                  { value: 8, suffix: "+", label: "Años de\nexperiencia" },
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <p className="text-3xl md:text-4xl font-bold text-gold">
                      <Counter target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-white/50 text-xs uppercase tracking-wider mt-1 whitespace-pre-line leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Bottom: Interactive Specialties Tabs ── */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
          >
            <h3 className="text-white/40 font-bold tracking-widest uppercase text-xs mb-8">
              Áreas de especialización
            </h3>

            {/* Tab buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              {specialties.map((spec, i) => (
                <motion.button
                  key={spec.id}
                  onClick={() => setActiveTab(i)}
                  className={`relative flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === i
                      ? "bg-gold text-dark shadow-lg shadow-gold/20"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className={activeTab === i ? "text-dark" : "text-gold"}>{spec.icon}</span>
                  {spec.name}
                </motion.button>
              ))}
            </div>

            {/* Tab content */}
            <div className="relative min-h-[120px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row items-start gap-8"
                >
                  {/* Left: number + description */}
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="font-display text-6xl font-bold text-gold/20">
                        0{activeTab + 1}
                      </span>
                      <h4 className="font-display text-2xl md:text-3xl font-bold text-white">
                        {specialties[activeTab].name}
                      </h4>
                    </div>
                    <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
                      {specialties[activeTab].desc}
                    </p>
                  </div>

                  {/* Right: decorative progress */}
                  <div className="hidden md:flex flex-col items-center gap-2 pt-4">
                    {specialties.map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-1.5 rounded-full transition-all duration-500 ${
                          i === activeTab ? "h-10 bg-gold" : "h-3 bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA */}
            <motion.div
              className="mt-12 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center gap-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
            >
              <p className="text-white/50 text-sm">
                ¿Quieres una valoración personalizada con la Dra. Parra?
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center h-12 px-8 bg-gold hover:bg-gold-hover text-dark font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-gold/20 text-sm"
              >
                Agenda tu cita ahora
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
