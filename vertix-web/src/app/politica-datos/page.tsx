import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Tratamiento de Datos",
};

export default function PoliticaDatosPage() {
  return (
    <>
      <section className="bg-primary pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl font-bold text-white">Política de Tratamiento de Datos</h1>
          <p className="text-white/70 mt-4">Última actualización: Marzo 2025</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-warm-white">
        <div className="max-w-3xl mx-auto space-y-10 text-secondary leading-relaxed">
          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Identificación del responsable</h2>
            <p>VERTIX Centro Médico y Rehabilitación<br />NIT: 901.941.962-6<br />Dirección: Cra 47 #80-125, Barranquilla, Colombia<br />Correo: centromedico_vertix@outlook.com<br />Teléfono: +57 300 7695747</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Marco legal</h2>
            <p>Esta política se rige por la Ley Estatutaria 1581 de 2012, el Decreto Reglamentario 1377 de 2013, y demás normas que las modifiquen o complementen, relativas a la protección de datos personales en Colombia.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Tratamiento y finalidad</h2>
            <p>Los datos personales recolectados serán tratados para: gestión de citas médicas, prestación de servicios de salud, facturación, comunicación sobre servicios y seguimiento clínico del paciente.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Derechos de los titulares</h2>
            <p>Los titulares de datos personales tienen derecho a: acceder a sus datos, conocer el tratamiento dado, solicitar actualización o corrección, solicitar la supresión cuando no sea necesaria su conservación, y revocar la autorización otorgada.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Procedimiento para ejercer derechos</h2>
            <p>Para ejercer sus derechos, envíe una solicitud a centromedico_vertix@outlook.com indicando su nombre completo, número de identificación, descripción de la solicitud y datos de contacto. Se atenderá en un plazo máximo de 15 días hábiles.</p>
          </div>
        </div>
      </section>
    </>
  );
}
