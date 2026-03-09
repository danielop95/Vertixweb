import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageTransition } from "@/components/PageTransition";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const rebelton = localFont({
  src: "../../public/fonts/rebelton-medium.woff2",
  variable: "--font-rebelton",
  display: "swap",
  weight: "500",
});

export const metadata: Metadata = {
  title: {
    default: "VERTIX — Centro Médico y Rehabilitación | Barranquilla",
    template: "%s | VERTIX Centro Médico",
  },
  description:
    "Rehabilitación integral con medicina del deporte, ortopedia especializada y fisioterapia avanzada. Agenda tu valoración gratuita. Barranquilla, Colombia.",
  keywords: [
    "fisioterapia barranquilla",
    "rehabilitación deportiva",
    "ortopedia barranquilla",
    "medicina del deporte colombia",
    "centro médico barranquilla",
  ],
  openGraph: {
    title: "VERTIX — Ciencia, Movimiento y Bienestar",
    description: "Rehabilitación integral premium en Barranquilla.",
    url: "https://vertix.com.co",
    siteName: "VERTIX Centro Médico",
    locale: "es_CO",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "VERTIX Centro Médico y Rehabilitación",
  description:
    "Rehabilitación integral con medicina del deporte, ortopedia especializada y fisioterapia avanzada.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cra 47 #80-125",
    addressLocality: "Barranquilla",
    addressCountry: "CO",
  },
  telephone: "+573007695747",
  openingHours: "Mo-Sa 07:00-18:30",
  priceRange: "$$",
  medicalSpecialty: ["Orthopedic", "PhysicalTherapy", "SportsMedicine"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${manrope.variable} ${rebelton.variable} font-sans antialiased overflow-x-hidden`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-dark focus:rounded-full"
        >
          Saltar al contenido principal
        </a>
        <Navbar />
        <main id="main-content"><PageTransition>{children}</PageTransition></main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
