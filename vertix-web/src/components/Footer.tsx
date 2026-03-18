import Link from "next/link";
import { IconMapPin, IconPhone, IconClock, IconMail } from "@/components/Icons";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 relative">
      <div className="h-1 absolute top-0 left-0 w-full" style={{ background: 'var(--gradient-gold)' }} />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 text-white">
              <Logo height={44} />
            </Link>
            <p className="font-display text-lg text-gold">
              Ciencia, Movimiento y Bienestar
            </p>
            <p className="text-white/70 max-w-sm">
              Centro premium de rehabilitación y medicina deportiva en
              Barranquilla, Colombia.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-6">
            <h4 className="font-display text-gold text-lg">Enlaces Rápidos</h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Inicio" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/servicios", label: "Servicios" },
                { href: "/blog", label: "Blog" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6">
            <h4 className="font-display text-gold text-lg">
              Contacto &amp; Horarios
            </h4>
            <ul className="flex flex-col gap-4 text-white/80">
              <li className="flex items-start gap-3">
                <IconMapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span>
                  Cra 47 #80-125
                  <br />
                  Barranquilla, Colombia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone size={18} className="text-gold shrink-0" />
                <a
                  href="tel:+573007695747"
                  className="hover:text-gold transition-colors"
                >
                  +57 300 7695747
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone size={18} className="text-gold shrink-0" />
                <a
                  href="tel:+573150651717"
                  className="hover:text-gold transition-colors"
                >
                  315 065 1717
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IconClock size={18} className="text-gold shrink-0 mt-0.5" />
                <span>
                  Lunes – Sábado
                  <br />
                  7:00am – 6:30pm
                  <br />
                  Jornada continua
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IconMail size={18} className="text-gold shrink-0" />
                <a
                  href="mailto:centromedico_vertix@outlook.com"
                  className="hover:text-gold transition-colors"
                >
                  centromedico_vertix@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} VERTIX Centro Médico &middot; NIT:
            901.941.962-6
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <Link
              href="/politica-privacidad"
              className="hover:text-white transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/politica-datos"
              className="hover:text-white transition-colors"
            >
              Política de Datos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
