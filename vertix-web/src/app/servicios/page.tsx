"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  { title: "Medicina del Deporte", desc: "Evaluación y tratamiento de lesiones deportivas, optimización del rendimiento y prevención con especialistas de alto nivel.", img: "/images/servicios/medicina-deporte.webp" },
  { title: "Ortopedia Especializada", desc: "Diagnóstico preciso y soluciones avanzadas para condiciones musculoesqueléticas.", img: "/images/servicios/ortopedia.webp" },
  { title: "Fisioterapia Avanzada", desc: "Terapias manuales e instrumentadas enfocadas en restaurar la movilidad, aliviar el dolor y recuperar la función óptima.", img: "/images/servicios/fisioterapia.webp" },
  { title: "Entrenamiento Personalizado", desc: "Programas de acondicionamiento físico diseñados a medida para complementar tu rehabilitación.", img: "/images/servicios/entrenamiento.webp" },
];

export default function ServiciosPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary pt-36 md:pt-40 pb-24 md:pb-32 px-6 overflow-hidden flex items-center justify-center min-h-[50vh]">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none text-white font-bold text-[40vw] leading-none select-none">
          V
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <motion.h1
            className="text-white text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Servicios diseñados para tu recuperación
          </motion.h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl">
            Enfoque integral y tecnología de vanguardia para restaurar tu bienestar.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <motion.div
                key={i}
                className={`group relative max-sm:h-[260px] rounded-[24px] overflow-hidden cursor-pointer bg-light transition-all duration-500 ease-in-out ${
                  isExpanded
                    ? "border-2 border-gold"
                    : "border-2 border-transparent h-[400px]"
                }`}
                style={!isExpanded ? { height: undefined } : {}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent transition-all duration-300 ${
                    isExpanded ? "from-primary/95" : "group-hover:from-primary/95"
                  }`}
                />
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col gap-3 transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-white text-3xl font-display font-bold">{service.title}</h3>
                  <AnimatePresence>
                    {isExpanded ? (
                      <motion.p
                        className="text-white/90 text-sm max-w-md"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.desc}
                      </motion.p>
                    ) : (
                      <p className="text-white/90 text-sm max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {service.desc}
                      </p>
                    )}
                  </AnimatePresence>
                  <div className="flex items-center gap-2 text-gold font-bold text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    Conocer más →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto border-t border-primary/10">
        <div className="mb-16 text-center">
          <h2 className="text-primary text-4xl font-display font-bold">Nuestro Proceso</h2>
          <p className="mt-4 text-secondary max-w-2xl mx-auto">Un camino estructurado hacia tu recuperación integral.</p>
        </div>

        {/* Desktop horizontal */}
        <div className="hidden md:flex items-center justify-between relative px-10">
          <div className="absolute left-16 right-16 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-gold/30 via-gold to-gold/30 z-0" />
          {["Valoración Gratuita", "Diagnóstico", "Tratamiento", "Prevención"].map((step, i) => (
            <motion.div
              key={i}
              className="relative z-10 flex flex-col items-center gap-4 bg-warm-white px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary border-2 border-gold flex items-center justify-center text-gold font-display text-2xl font-bold shadow-lg">
                {i + 1}
              </div>
              <p className="text-dark text-lg font-bold text-center">{step}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden flex flex-col gap-8 relative px-4">
          <div className="absolute left-[39px] top-4 bottom-4 w-1 bg-gradient-to-b from-gold/30 via-gold to-gold/30 z-0" />
          {["Valoración Gratuita", "Diagnóstico", "Tratamiento", "Prevención"].map((step, i) => (
            <div key={i} className="relative z-10 flex items-center gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-primary border-2 border-gold flex items-center justify-center text-gold font-display text-xl font-bold shadow-lg">
                {i + 1}
              </div>
              <p className="text-dark text-lg font-bold">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-white py-24 px-6 text-center border-t border-primary/5">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          <h2 className="text-primary text-4xl md:text-5xl font-display font-bold">
            No sabes qué servicio necesitas?
          </h2>
          <p className="text-secondary text-lg">
            Permítenos orientarte. Nuestro equipo evaluará tu caso para recomendarte el mejor camino.
          </p>
          <Link
            href="/contacto"
            className="flex items-center justify-center h-14 px-8 bg-gold text-dark text-lg font-bold rounded-full hover:bg-primary hover:text-white transition-all shadow-md"
          >
            Habla con nosotros
          </Link>
        </div>
      </section>
    </>
  );
}
