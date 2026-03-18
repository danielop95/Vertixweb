"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import {
  IconMapPin,
  IconPhone,
  IconClock,
  IconMail,
  IconCheckCircle,
  IconInstagram,
} from "@/components/Icons";

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre es requerido"),
  telefono: z.string().min(7, "Ingresa un teléfono válido"),
  email: z.string().email("Ingresa un email válido"),
  servicio: z.string().min(1, "Selecciona un servicio"),
  mensaje: z.string().optional(),
  politica: z.literal(true, { message: "Debes aceptar la política de datos" }),
});

type ContactForm = z.infer<typeof contactSchema>;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const contactItems = [
  {
    icon: IconMapPin,
    label: "Dirección",
    content: "Cra 47 #80-125, Barranquilla, Colombia",
    href: "https://maps.google.com/?q=Cra+47+%2380-125+Barranquilla+Colombia",
  },
  {
    icon: IconPhone,
    label: "Teléfono",
    content: "+57 300 7695747",
    href: "tel:+573007695747",
  },
  {
    icon: IconPhone,
    label: "Teléfono",
    content: "315 065 1717",
    href: "tel:+573150651717",
  },
  {
    icon: IconMail,
    label: "Email",
    content: "centromedico_vertix@outlook.com",
    href: "mailto:centromedico_vertix@outlook.com",
  },
  {
    icon: IconClock,
    label: "Horario",
    content: "Lunes – Sábado, 7:00am – 6:30pm\nJornada continua",
  },
  {
    icon: IconInstagram,
    label: "Instagram",
    content: "@vertix.fisio",
    href: "https://instagram.com/vertix.fisio",
    external: true,
  },
];

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    console.log(data);
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-primary pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.span
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Centro Médico Vertix
          </motion.span>
          <motion.h1
            className="font-display text-5xl font-bold text-white lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1,
            }}
          >
            CONTACTO
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-lg text-lg text-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
          >
            Estamos aquí para ayudarte
          </motion.p>
        </div>
      </section>

      {/* ── Main: Info + Form ── */}
      <section className="bg-warm-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          {/* Left column — Contact info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Gold label */}
            <motion.span
              variants={fadeInUp}
              className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold"
            >
              Información de contacto
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="font-display mb-10 text-3xl font-bold text-dark lg:text-4xl"
            >
              Visítanos o escríbenos
            </motion.h2>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-start gap-4 rounded-2xl border border-primary/10 bg-white p-5 transition-colors hover:border-gold/40">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary/50">
                        {item.label}
                      </p>
                      <p className="mt-1 whitespace-pre-line text-[15px] text-dark">
                        {item.content}
                      </p>
                    </div>
                  </div>
                );

                return (
                  <motion.div key={i} variants={fadeInUp}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="block"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* WhatsApp button */}
            <motion.div variants={fadeInUp} className="mt-8">
              <a
                href="https://wa.me/573007695747?text=Hola!%20Me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Vertix"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-3.5 font-bold text-white transition-transform hover:scale-[1.03] active:scale-100"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.938 6.937 0 3.825-3.113 6.938-6.938 6.938z" />
                </svg>
                Chatea con nosotros
              </a>
            </motion.div>
          </motion.div>

          {/* Right column — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15,
            }}
          >
            <div className="rounded-2xl bg-white p-8 shadow-sm lg:p-10">
              <h2 className="font-display mb-8 text-2xl font-bold text-dark lg:text-3xl">
                AGENDA TU CITA
              </h2>

              {submitted ? (
                <motion.div
                  className="rounded-2xl bg-green-50 border border-green-200 p-10 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="mb-4 block">
                    <IconCheckCircle
                      size={48}
                      className="mx-auto text-green-600"
                    />
                  </span>
                  <h3 className="font-display text-xl font-bold text-green-800 mb-2">
                    Mensaje enviado
                  </h3>
                  <p className="text-green-700">
                    Te contactamos en menos de 24h.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  {/* Nombre */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-dark">
                      Nombre completo
                    </label>
                    <input
                      {...register("nombre")}
                      className="h-12 w-full rounded-xl border border-primary/15 bg-warm-white px-4 text-dark outline-none transition-all placeholder:text-primary/40 focus:border-gold focus:ring-2 focus:ring-gold/20"
                      placeholder="Tu nombre"
                    />
                    {errors.nombre && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.nombre.message}
                      </p>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-dark">
                      Teléfono
                    </label>
                    <input
                      {...register("telefono")}
                      type="tel"
                      className="h-12 w-full rounded-xl border border-primary/15 bg-warm-white px-4 text-dark outline-none transition-all placeholder:text-primary/40 focus:border-gold focus:ring-2 focus:ring-gold/20"
                      placeholder="+57 300 000 0000"
                    />
                    {errors.telefono && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.telefono.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-dark">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="h-12 w-full rounded-xl border border-primary/15 bg-warm-white px-4 text-dark outline-none transition-all placeholder:text-primary/40 focus:border-gold focus:ring-2 focus:ring-gold/20"
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Servicio */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-dark">
                      Servicio de interés
                    </label>
                    <select
                      {...register("servicio")}
                      className="h-12 w-full appearance-none rounded-xl border border-primary/15 bg-warm-white px-4 text-dark outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="medicina-deporte">
                        Medicina del Deporte
                      </option>
                      <option value="ortopedia">Ortopedia</option>
                      <option value="fisioterapia">Fisioterapia</option>
                      <option value="entrenamiento">
                        Entrenamiento Personalizado
                      </option>
                      <option value="no-se">
                        No sé / Necesito orientación
                      </option>
                    </select>
                    {errors.servicio && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.servicio.message}
                      </p>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-dark">
                      Mensaje
                    </label>
                    <textarea
                      {...register("mensaje")}
                      rows={4}
                      className="w-full resize-none rounded-xl border border-primary/15 bg-warm-white px-4 py-3 text-dark outline-none transition-all placeholder:text-primary/40 focus:border-gold focus:ring-2 focus:ring-gold/20"
                      placeholder="Describe brevemente tu situación (opcional)"
                    />
                  </div>

                  {/* Política */}
                  <div className="flex items-start gap-3">
                    <input
                      {...register("politica")}
                      type="checkbox"
                      className="mt-1 h-5 w-5 rounded border-primary/30 text-gold accent-gold focus:ring-gold"
                    />
                    <label className="text-sm text-primary/70">
                      Acepto la{" "}
                      <a
                        href="/politica-datos"
                        className="text-dark underline underline-offset-2 hover:text-gold transition-colors"
                      >
                        política de tratamiento de datos
                      </a>
                    </label>
                  </div>
                  {errors.politica && (
                    <p className="text-sm text-red-600">
                      {errors.politica.message}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-[52px] w-full rounded-full bg-gold font-bold text-dark transition-all hover:bg-gold-hover active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-3">
                        <svg
                          className="h-5 w-5 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      "Agendar cita"
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="w-full">
        <div className="h-[400px] w-full lg:h-[480px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1234!2d-74.8123!3d10.9878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU5JzE2LjEiTiA3NMKwNDgnNDQuMyJX!5e0!3m2!1ses!2sco!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Vertix Centro Médico"
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary py-16 lg:py-20">
        <motion.div
          className="mx-auto max-w-3xl px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">
            ¿Prefieres llamarnos?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/70">
            Nuestro equipo te atenderá con gusto de lunes a sábado.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+573007695747"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-3.5 font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <IconPhone size={18} />
              +57 300 7695747
            </a>
            <a
              href="https://wa.me/573007695747?text=Hola!%20Me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Vertix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-3.5 font-bold text-white transition-transform hover:scale-[1.03] active:scale-100"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.938 6.937 0 3.825-3.113 6.938-6.938 6.938z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
