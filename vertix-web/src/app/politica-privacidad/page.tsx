import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <section className="bg-primary pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl font-bold text-white">Política de Privacidad</h1>
          <p className="text-white/70 mt-4">Última actualización: Marzo 2025</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-warm-white">
        <div className="max-w-3xl mx-auto space-y-10 text-secondary leading-relaxed">
          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Responsable del tratamiento</h2>
            <p>VERTIX Centro Médico y Rehabilitación<br />NIT: 901.941.962-6<br />Cra 47 #80-125, Barranquilla, Colombia<br />Email: centromedico_vertix@outlook.com</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Datos que recopilamos</h2>
            <p>Recopilamos datos personales como nombre, teléfono, email, y datos de salud relevantes para la prestación de nuestros servicios médicos, siempre con su consentimiento previo e informado.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Finalidad del tratamiento</h2>
            <p>Sus datos personales serán utilizados para la prestación de servicios de salud, agendamiento de citas, seguimiento médico, y comunicaciones relacionadas con su tratamiento.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Derechos del titular</h2>
            <p>De acuerdo con la Ley 1581 de 2012 y el Decreto 1377 de 2013, usted tiene derecho a conocer, actualizar, rectificar y solicitar la supresión de sus datos personales.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Seguridad de los datos</h2>
            <p>Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra acceso no autorizado, pérdida o alteración.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Contacto</h2>
            <p>Para ejercer sus derechos o realizar consultas sobre el tratamiento de sus datos personales, puede contactarnos en centromedico_vertix@outlook.com o en nuestra dirección física.</p>
          </div>
        </div>
      </section>
    </>
  );
}
