"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { IconMapPin, IconPhone, IconClock, IconMail, IconCheckCircle } from "@/components/Icons";

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre es requerido"),
  telefono: z.string().min(7, "Ingresa un teléfono válido"),
  email: z.string().email("Ingresa un email válido"),
  servicio: z.string().min(1, "Selecciona un servicio"),
  mensaje: z.string().optional(),
  politica: z.literal(true, { message: "Debes aceptar la política de datos" }),
});

type ContactForm = z.infer<typeof contactSchema>;

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
      <section className="min-h-screen flex flex-col lg:flex-row pt-20 bg-primary">
        {/* Left - Contact Info */}
        <div className="w-full lg:w-1/2 bg-primary text-white p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span className="text-[20vw] font-bold text-white/[0.05] leading-none">V</span>
          </div>
          <div className="relative z-10">
            <motion.h1
              className="font-display text-4xl lg:text-5xl font-bold mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Hablamos?
            </motion.h1>
            <ul className="space-y-6 text-lg">
              <li className="flex items-start gap-4">
                <IconMapPin size={22} className="text-gold shrink-0 mt-0.5" />
                <span>Cra 47 #80-125, Barranquilla</span>
              </li>
              <li className="flex items-center gap-4">
                <IconPhone size={22} className="text-gold shrink-0" />
                <a href="tel:+573007695747" className="hover:text-gold transition-colors">+57 300 7695747</a>
              </li>
              <li className="flex items-center gap-4">
                <IconPhone size={22} className="text-gold shrink-0" />
                <a href="tel:+573150651717" className="hover:text-gold transition-colors">315 065 1717</a>
              </li>
              <li className="flex items-start gap-4">
                <IconClock size={22} className="text-gold shrink-0 mt-0.5" />
                <span>Lunes – Sábado<br />7:00am – 6:30pm</span>
              </li>
              <li className="flex items-center gap-4">
                <IconMail size={22} className="text-gold shrink-0" />
                <a href="mailto:centromedico_vertix@outlook.com" className="hover:text-gold transition-colors">centromedico_vertix@outlook.com</a>
              </li>
            </ul>

            {/* Google Maps */}
            <div className="mt-10 w-full aspect-video rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1234!2d-74.8123!3d10.9878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU5JzE2LjEiTiA3NMKwNDgnNDQuMyJX!5e0!3m2!1ses!2sco!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Instagram */}
            <a
              href="https://instagram.com/vertix.fisio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors mt-6"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @vertix.fisio
            </a>
          </div>
        </div>

        {/* Right - Form */}
        <div className="w-full lg:w-1/2 bg-warm-white p-10 lg:p-16 flex flex-col justify-center">
          <h2 className="font-display text-3xl font-bold text-primary mb-8">Envíanos un mensaje</h2>

          {submitted ? (
            <motion.div
              className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <span className="block mb-4"><IconCheckCircle size={48} className="text-green-600 mx-auto" /></span>
              <h3 className="text-xl font-bold text-green-800 mb-2">¡Gracias!</h3>
              <p className="text-green-700">Te contactamos en menos de 24h.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Nombre completo</label>
                <input
                  {...register("nombre")}
                  className="w-full h-12 px-4 rounded-xl border border-primary/20 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="Tu nombre"
                />
                {errors.nombre && <p className="mt-1 text-sm text-red-600">{errors.nombre.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-dark mb-2">Teléfono</label>
                <input
                  {...register("telefono")}
                  type="tel"
                  className="w-full h-12 px-4 rounded-xl border border-primary/20 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="+57 300 000 0000"
                />
                {errors.telefono && <p className="mt-1 text-sm text-red-600">{errors.telefono.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-dark mb-2">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full h-12 px-4 rounded-xl border border-primary/20 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-dark mb-2">Servicio de interés</label>
                <select
                  {...register("servicio")}
                  className="w-full h-12 px-4 rounded-xl border border-primary/20 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="medicina-deporte">Medicina del Deporte</option>
                  <option value="ortopedia">Ortopedia</option>
                  <option value="fisioterapia">Fisioterapia</option>
                  <option value="entrenamiento">Entrenamiento Personalizado</option>
                  <option value="no-se">No sé / Necesito orientación</option>
                </select>
                {errors.servicio && <p className="mt-1 text-sm text-red-600">{errors.servicio.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-dark mb-2">¿Cuéntanos qué te pasa?</label>
                <textarea
                  {...register("mensaje")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                  placeholder="Describe brevemente tu situación (opcional)"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  {...register("politica")}
                  type="checkbox"
                  className="mt-1 w-5 h-5 rounded border-primary/30 text-primary focus:ring-primary"
                />
                <label className="text-sm text-secondary">
                  Acepto la{" "}
                  <a href="/politica-datos" className="text-primary underline hover:text-gold">
                    política de tratamiento de datos
                  </a>
                </label>
              </div>
              {errors.politica && <p className="text-sm text-red-600">{errors.politica.message}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-primary hover:bg-gold text-white hover:text-dark font-bold rounded-full transition-all text-lg disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-3">
                    <svg className="w-5 h-5 animate-spin text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  "Enviar mensaje"
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12 bg-warm-white text-center">
        <p className="text-secondary text-lg mb-4">O si lo prefieres, escríbenos directamente a WhatsApp</p>
        <a
          href="https://wa.me/573007695747?text=Hola!%20Me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Vertix"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 h-14 px-8 bg-whatsapp text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.938 6.937 0 3.825-3.113 6.938-6.938 6.938z"/></svg>
          Escríbenos por WhatsApp
        </a>
      </section>
    </>
  );
}
