# PROMPT ESPECIALIZADO — WEB VERTIX
### Para Agente Opus 4.6 · MCP Stitch · Skill UI/UX Pro Max

---

## ROL Y CONTEXTO

Eres un experto desarrollador web frontend senior especializado en diseño de alto impacto visual para el sector salud y bienestar. Tu misión es construir la web oficial de **VERTIX — Centro Médico y Rehabilitación**, usando el MCP de Stitch para implementar componentes UI y siguiendo la skill UI/UX Pro Max para garantizar un diseño contemporáneo, diferenciado y 100% fiel a la identidad de marca.

Esta web debe sentirse **PREMIUM, HUMANA y DIFERENTE**. No caigas en los clichés visuales de webs médicas genéricas (azules institucionales, stock photos de hospitales, layouts rígidos en columnas). Vertix es movimiento, ciencia aplicada con calidez humana. Cada sección debe respirar esa esencia.

---

## IDENTIDAD DE MARCA — CONFIGURACIÓN GLOBAL ESTRICTA

### Paleta de Colores (aplicar con fidelidad absoluta)

```css
--color-primary:        #29514C;  /* Verde oscuro — color principal */
--color-secondary:      #62675A;  /* Verde grisáceo — complementario */
--color-gold:           #E8C469;  /* Dorado/amarillo — acento clave */
--color-dark:           #292927;  /* Negro casi puro — textos */
--color-light:          #E0E0E0;  /* Gris claro — fondos neutros */
--color-white:          #F3F3F1;  /* Blanco cálido */

/* Degradado dorado corporativo */
--gradient-gold: linear-gradient(135deg, #FCF0AD, #F6DB8A, #BF8E4D);
```

### Tipografía Corporativa

| Fuente | Uso |
|--------|-----|
| **AFTIKA BOLD** | Logo, nombre de marca, elementos de identidad |
| **REBELTON MEDIUM** | Headlines H1, H2, títulos de sección impactantes |
| **MANROPE REGULAR/MEDIUM** | Cuerpo de texto, párrafos, UI elements, nav |

- Fallback stack: `'Manrope', 'Montserrat', 'Arial', sans-serif`
- Cargar Manrope desde Google Fonts. Aftika y Rebelton como `@font-face` local.

### Personalidad Visual

- Minimalista pero cálido, nunca frío ni clínico
- Mucho espacio negativo (breathing room generoso)
- Fotografía real como protagonista (placeholders con aspect-ratio correcto)
- Movimiento sutil: micro-interacciones, scroll animations (Intersection Observer)
- El identificador **"V"** (logo) aparece como elemento decorativo/gráfico en secciones clave, no solo en el header
- Las **3 líneas del identificador** como recurso visual recurrente y divisor de secciones
- Formas orgánicas curvas (border-radius generoso, blobs SVG sutiles en `#29514C` con opacity baja)

---

## STACK TÉCNICO

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 14+ con App Router |
| Estilos | Tailwind CSS + CSS custom properties para design system |
| Animaciones | Framer Motion — page transitions y scroll reveals |
| Blog | MDX con next-mdx-remote, estructura lista para publicación |
| Formularios | React Hook Form + Zod para validación |
| Fuentes | next/font con Google Fonts (Manrope) + @font-face locales |
| Imágenes | next/image con placeholders blur y lazy loading |
| SEO | Metadata API de Next.js, Open Graph, Schema.org HealthcareFacility |
| Accesibilidad | WCAG 2.1 AA mínimo, focus states visibles, aria-labels |

---

## ARQUITECTURA DE PÁGINAS

```
app/
├── page.tsx                     → Home
├── nosotros/page.tsx            → Sobre Nosotros
├── servicios/page.tsx           → Servicios
├── blog/
│   ├── page.tsx                → Listado Blog
│   └── [slug]/page.tsx         → Post Individual (MDX)
├── contacto/page.tsx            → Contacto
├── politica-privacidad/page.tsx → Política de Privacidad
├── politica-datos/page.tsx      → Política de Datos
└── layout.tsx                   → Root Layout (Nav + Footer + WhatsApp)
```

---

## COMPONENTES GLOBALES
> Presentes en todas las páginas

### NAVBAR

- **Posición:** sticky top con backdrop-blur al hacer scroll
- **Fondo:** transparente → `#F3F3F1` al scrollear (transición suave)
- **Logo:** SVG del identificador V + wordmark "VERTIX" en Aftika Bold, color `#29514C`
- **Links:** Inicio · Nosotros · Servicios · Blog · Contacto
- **CTA button:** "Agenda tu cita" → pill button en `#E8C469` con texto `#292927`, hover fill `#29514C` texto blanco
- **Mobile:** hamburger menu con drawer lateral, animación slide-in, fondo `#29514C` con links en blanco y dorado
- **Indicador activo:** línea dorada `#E8C469` bajo el link activo

### FOOTER

- **Fondo:** `#29514C` (verde oscuro)
- **3 columnas:** Logo + tagline · Links rápidos · Contacto + horarios
- **Tagline:** "Ciencia, Movimiento y Bienestar" en Rebelton Medium, color `#E8C469`
- **Contacto:** Cra 47 #80-125 · +57 300 7695747 · 315 065 1717
- **Horarios:** Lunes–Sábado 7:00am – 6:30pm jornada continua
- **Legal links:** Política de Privacidad · Política de Datos
- **Copyright:** Manrope Regular, `#E0E0E0` opacity 0.6
- **Divider superior:** línea degradado dorado
- **NIT:** 901.941.962-6

### BOTÓN WHATSAPP FLOTANTE

- **Posición:** `fixed bottom-6 right-6`, z-index 999
- **Diseño:** círculo 60px, fondo `#25D366`
- **Ícono:** SVG WhatsApp blanco
- **Tooltip hover:** "¡Chatea con nosotros!" en Manrope, fondo `#29514C`, flecha apuntando al botón
- **Animación:** pulse ring verde con opacity decreciente (efecto "en línea")
- **Número:** +57 300 7695747
- **Mensaje predefinido en URL:** `"Hola! Me gustaría obtener información sobre los servicios de Vertix"`
- **Mobile:** reducir a 52px

---

## PÁGINA 1: HOME (`/`)

### Hero Section

- **Layout:** pantalla completa (100vh), split asimétrico 55/45
- **Izquierda:** contenido textual sobre fondo `#F3F3F1` con blob orgánico sutil `#29514C`
- **Derecha:** imagen fotográfica de fisioterapeuta con paciente, bordes con border-radius orgánico (60px en esquinas específicas)
- **Headline H1:** "Recuperar tu **MOVILIDAD** es recuperar tu VIDA" — Rebelton Medium, `#292927`, con "MOVILIDAD" en `#29514C` o degradado dorado
- **Subheadline:** "Rehabilitación integral con ciencia, tecnología y humanidad" — Manrope Regular 18px, `#62675A`
- **CTAs:**
  - Botón primario "Agenda tu valoración gratuita" — `#29514C`, texto blanco
  - Ghost button "Conoce nuestros servicios" — border `#29514C`
- **Elemento decorativo:** identificador "V" gigante (SVG) en `#29514C` con opacity 0.04 como watermark de fondo
- **Scroll indicator:** línea vertical animada con punto que baja

### Stats / Credenciales Strip

- **Fondo:** `#29514C`
- **4 métricas en horizontal:**
  - "3 Especialidades Integradas"
  - "Atención Personalizada"
  - "7am – 6:30pm · Jornada Continua"
  - "Valoración Gratuita"
- **Números:** Rebelton Medium `#E8C469` tamaño grande · Labels: Manrope `#F3F3F1`
- **Separadores:** línea dorada vertical

### Sección "¿Por qué Vertix?"

- **Headline:** "Un enfoque diferente al cuidado de tu cuerpo" — Rebelton Medium
- **3 cards horizontales** con ícono SVG derivado del identificador V, título corto y descripción breve:

| # | Título | Descripción |
|---|--------|-------------|
| 1 | Escucha activa | No tratamos síntomas, llegamos a la raíz |
| 2 | Ciencia + Humanidad | Evidencia científica con trato empático |
| 3 | Prevención inteligente | Te educamos para que no vuelvas a lesionarte |

- **Cards:** fondo blanco, border-radius 24px, sombra sutil
- **Hover:** border `#E8C469` + slight elevation
- **Animación:** fade-in escalonado al entrar en viewport

### Sección Servicios (Preview)

- **Headline:** "Lo que hacemos por ti" — Rebelton Medium
- **4 servicios en grid 2×2 (desktop) / 1 col (mobile):**
  1. Medicina del Deporte
  2. Ortopedia Especializada
  3. Fisioterapia Avanzada
  4. Entrenamiento Personalizado
- **Cada card:** imagen de fondo con overlay gradiente `#29514C`, título blanco en Rebelton, descripción 1 línea Manrope, link "Conocer más →"
- **Hover:** overlay se aclara, aparece arrow icon
- **CTA final:** "Ver todos los servicios" — botón outline `#29514C`

### Sección Filosofía

- **Layout:** asimétrico — texto izquierda, imagen derecha con shape orgánico
- **Quote destacada en Rebelton italic `#29514C`:**
  > *"No solo quitamos el dolor. Restauramos el movimiento."*
- **Imagen:** Ingrid Parra atendiendo paciente (placeholder con overlay branding)

### Sección Blog (Preview)

- **Headline:** "Aprende a moverte mejor"
- **3 cards** de artículos más recientes (datos mock MDX)
- **Card:** imagen · categoría tag `#E8C469` · título · fecha · "Leer más →"
- **Layout:** grid 3 columnas desktop · slider touch en mobile
- **CTA:** "Ver todos los artículos"

### CTA Final

- **Fondo:** degradado sutil `#F3F3F1` → blanco
- **Headline:** "¿Listo para recuperar tu movimiento?"
- **Sub:** "Agenda tu valoración gratuita hoy"
- **Botón:** pill grande, fondo `#E8C469`, texto `#292927`, hover `#29514C` texto blanco
- **Teléfono visible:** +57 300 7695747

---

## PÁGINA 2: NOSOTROS (`/nosotros`)

### Hero

- **Headline:** "Nacimos de una necesidad real" — Rebelton Medium
- Imagen panorámica del centro médico con overlay `#29514C` opacity 0.7
- Texto sobre overlay en blanco

### Historia

- Layout alternado imagen-texto
- Párrafos cortos (2-3 líneas máximo)
- Palabras clave resaltadas en `#E8C469` o bold: *personalizado*, *raíz del problema*, *prevención*
- Línea de tiempo vertical sutil con puntos dorados

### Misión y Visión

- **Diseño díptico:** 2 cards lado a lado

| Misión | Visión |
|--------|--------|
| Fondo `#29514C`, texto blanco, ícono SVG | Fondo `#F3F3F1`, texto `#292927`, borde izquierdo dorado |
| Máx. 3 bullet points visuales | Máx. 3 bullet points visuales |

### Valores Corporativos

- **Headline:** "Nuestros valores"
- **Grid 3×2:**

| # | Valor |
|---|-------|
| 01 | Empatía |
| 02 | Escucha Activa |
| 03 | Confianza |
| 04 | Responsabilidad |
| 05 | Profesionalismo |
| 06 | Honestidad |

- Número en Rebelton grande `#E8C469` · Nombre en Aftika Bold `#29514C` · Línea descriptiva Manrope
- **Animación:** appear con stagger al scroll

### Sección Dra. Ingrid Parra ⭐ SECCIÓN PROTAGONISTA

> Esta sección es clave. Diseño especial, no genérico.

- **Layout:** full-width, fondo `#29514C`
- **Foto:** formato circular o clip-path orgánico, prominente
- **Nombre:** "Ingrid Carolina Parra" — Rebelton Medium, blanco grande
- **Cargo:** "Rehabilitadora Deportiva" — Manrope, color `#E8C469`
- **Quote destacada en Rebelton italic, blanco:**
  > *"Mi enfoque no es solo quitar el dolor. Es restaurar tu funcionalidad, optimizar tu movimiento y educarte para que no vuelvas a lesionarte."*
- **Especialidades (pills/tags):**
  `Biomecánica` · `Fisiología del Ejercicio` · `Evaluación de Carga Deportiva` · `Retorno al Deporte`
- **Decorativo:** identificador V grande detrás de la foto, blanco opacity 0.08

### Equipo (extensible)

- Grid de cards para futuros médicos
- Por ahora: 1 card Ingrid + placeholder "Próximamente nuevos especialistas"
- Cards: foto circular · nombre Aftika Bold · cargo Manrope · especialidad tag

---

## PÁGINA 3: SERVICIOS (`/servicios`)

### Hero

- Fondo `#29514C`
- Headline blanco: "Servicios diseñados para tu recuperación"
- Identificador V decorativo en blanco, baja opacity

### Grid de Servicios

**Cada servicio = card expandible o accordion visual**

| Servicio | Ícono | Descripción |
|----------|-------|-------------|
| Medicina del Deporte | Ícono V brandbook | Diagnóstico, prevención, optimización del rendimiento |
| Ortopedia Especializada | Ícono ortopedia brandbook | Especialistas en sistema músculo-esquelético |
| Fisioterapia Avanzada | Ícono rehabilitación brandbook | Técnicas basadas en evidencia + tecnología |
| Entrenamiento Personalizado | Ícono personalizado | Entrenadores para pacientes en recuperación |

**Especificaciones de cards:**
- Desktop: grid 2×2, cards grandes con imagen de fondo
- Altura: 400px · Imagen + overlay gradiente verde · Content al bottom
- Hover: card se eleva + aparece contenido con smooth transition
- Mobile: stack vertical, cards 260px

### Nuestro Proceso

Timeline horizontal (desktop) / vertical (mobile):

```
① Valoración Gratuita  →  ② Diagnóstico  →  ③ Tratamiento  →  ④ Prevención
```

- Número circular dorado · Título Rebelton · Descripción Manrope
- Línea conectora: degradado dorado

### CTA Servicios

> "¿No sabes qué servicio necesitas?" + botón "Habla con nosotros"

---

## PÁGINA 4: BLOG (`/blog`)

### Estructura MDX

```
content/blog/
├── lesiones-deportivas-mas-comunes.mdx
├── importancia-fisioterapia-preventiva.mdx
└── como-volver-al-deporte-tras-lesion.mdx
```

### Frontmatter por Post

```yaml
---
title: "Título del artículo"
excerpt: "Descripción breve para el card"
date: "2025-03-01"
category: "Fisioterapia" | "Ortopedia" | "Prevención" | "Deporte"
coverImage: "/images/blog/nombre-imagen.jpg"
author: "Ingrid Parra"
readTime: "5 min"
---
```

### Página Listado

- Hero pequeño: fondo `#29514C`, headline blanco
- Filtros por categoría: pills horizontales scrolleables en mobile
- **Grid:** 3 col desktop · 2 col tablet · 1 col mobile
- **Card:** imagen 16:9 · categoría pill `#E8C469` · título H3 Rebelton · excerpt 2 líneas · autor + fecha + tiempo lectura · "Leer →"
- Paginación: anterior/siguiente + número de página

### Página Post Individual

- Breadcrumb: Inicio > Blog > Título
- Header: imagen hero · categoría pill · título H1 Rebelton · autor con avatar · fecha · tiempo lectura
- **Body typography:**
  - H2: Rebelton `#29514C`
  - Párrafos: Manrope 18px, line-height 1.7
  - Blockquotes: borde izquierdo `#E8C469`
- **Sidebar desktop:** tabla de contenidos sticky + CTA agendar cita
- **Footer del post:** 3 artículos relacionados
- **Share:** WhatsApp · Instagram (copy link)

---

## PÁGINA 5: CONTACTO (`/contacto`)

### Layout

Split 50/50:

| Izquierda | Derecha |
|-----------|---------|
| Fondo `#29514C`, texto blanco | Fondo `#F3F3F1` |
| Info de contacto + mapa | Formulario |

### Info de Contacto

- Logo blanco + identificador V decorativo
- Headline: "¿Hablamos?" — Rebelton blanco grande
- Items con iconos SVG:
  - 📍 Cra 47 #80-125, Barranquilla
  - 📞 +57 300 7695747
  - 📞 315 065 1717
  - 🕐 Lunes–Sábado 7:00am – 6:30pm
  - 📧 centromedico_vertix@outlook.com
- Mapa embebido (Google Maps iframe) con pin personalizado
- Links sociales: Instagram icon

### Formulario

```
React Hook Form + Zod
```

| Campo | Tipo | Validación |
|-------|------|------------|
| Nombre completo | text input | required |
| Teléfono | tel input | required, formato colombiano |
| Email | email input | required |
| Servicio de interés | select | Medicina del Deporte / Ortopedia / Fisioterapia / Entrenamiento / No sé |
| ¿Cuéntanos qué te pasa? | textarea | optional |
| Acepto política de datos | checkbox | required, con link |

- **Submit:** botón grande "Enviar mensaje" — `#29514C` hover `#E8C469`

### Estados del Formulario

| Estado | Diseño |
|--------|--------|
| Loading | Skeleton / spinner `#E8C469` |
| Success | Mensaje verde + check: "¡Gracias! Te contactamos en menos de 24h" |
| Error | Mensaje inline por campo, color `#DC2626` |

### Sección Inferior

> "O si lo prefieres, escríbenos directamente a WhatsApp" + botón WhatsApp verde

---

## PÁGINAS LEGALES

### `/politica-privacidad` y `/politica-datos`

- Header: fondo `#29514C`, título blanco
- Body: container `max-w-3xl` centered · Manrope 16px · line-height 1.8
- H2 en Rebelton `#29514C`
- Última actualización visible
- **Datos del responsable:**
  - VERTIX Centro Médico · NIT: 901.941.962-6
  - Cra 47 #80-125, Barranquilla
  - centromedico_vertix@outlook.com
- Referencia a **Ley 1581 de 2012** y **Decreto 1377 de 2013**

---

## ANIMACIONES Y MICROINTERACCIONES

### Principios

- Movimiento con propósito, nunca decorativo por decorativo
- Duration: 300–600ms · Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Respetar `prefers-reduced-motion`

### Implementar con Framer Motion

| Animación | Descripción |
|-----------|-------------|
| Page transitions | fade + slight translateY al entrar |
| Scroll reveals | fade-up al entrar en viewport |
| Hero text | palabras aparecen con stagger sutil |
| Cards hover | translateY(-4px) + shadow elevation + border color change |
| Stats counter | números suben animados al entrar en pantalla |
| Navbar | smooth transition fondo al scroll |
| Logo V | el SVG del identificador se "dibuja" con stroke animation |
| CTA buttons | hover con background sweep de izquierda a derecha |

---

## SEO Y PERFORMANCE

### Metadata por Página

```typescript
// Ejemplo Home
export const metadata: Metadata = {
  title: 'VERTIX — Centro Médico y Rehabilitación | Barranquilla',
  description: 'Rehabilitación integral con medicina del deporte, ortopedia especializada y fisioterapia avanzada. Agenda tu valoración gratuita. Barranquilla, Colombia.',
  keywords: [
    'fisioterapia barranquilla',
    'rehabilitación deportiva',
    'ortopedia barranquilla',
    'medicina del deporte colombia'
  ],
  openGraph: {
    title: 'VERTIX — Ciencia, Movimiento y Bienestar',
    description: 'Rehabilitación integral premium en Barranquilla.',
    url: 'https://vertix.com.co',
    siteName: 'VERTIX Centro Médico',
    locale: 'es_CO',
    type: 'website',
  }
}
```

### Schema.org (JSON-LD en `layout.tsx`)

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "VERTIX Centro Médico y Rehabilitación",
  "description": "Rehabilitación integral con medicina del deporte, ortopedia especializada y fisioterapia avanzada.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cra 47 #80-125",
    "addressLocality": "Barranquilla",
    "addressCountry": "CO"
  },
  "telephone": "+573007695747",
  "openingHours": "Mo-Sa 07:00-18:30",
  "priceRange": "$$",
  "medicalSpecialty": ["Orthopedic", "PhysicalTherapy", "SportsMedicine"]
}
```

### Performance Targets

| Métrica | Objetivo |
|---------|----------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Lighthouse Score | ≥ 90 en todas las categorías |

**Optimizaciones obligatorias:**
- `next/image` para todas las imágenes (WebP automático)
- `font-display: swap`
- Critical CSS inline
- Lazy load componentes pesados (mapa, video si aplica)
- Route-based code splitting (automático en Next.js App Router)

---

## PLACEHOLDERS FOTOGRÁFICOS

En ausencia de fotos reales, usar placeholders con:
- Aspect ratios correctos (no distorsionar)
- Color dominante alineado a paleta: tonos verdes, piel natural, ropa médica verde
- Alt text descriptivo para SEO
- `next/image` con `placeholder="blur"` y `blurDataURL` en base64

**Escenas que se necesitan (comunicar al cliente):**

| # | Escena | Formato | Uso |
|---|--------|---------|-----|
| 1 | Fisioterapeuta atendiendo paciente | Horizontal 16:9 | Hero home |
| 2 | Retrato Dra. Ingrid Parra | Vertical 3:4 | Sección nosotros |
| 3 | Interior clínica | Horizontal panorámica | Hero nosotros |
| 4 | Equipamiento / tecnología médica | Horizontal | Servicios |
| 5–10 | Ejercicios de rehabilitación (variaciones) | Mixto | Servicios y blog |

---

## INSTRUCCIONES FINALES PARA EL AGENTE

### Orden de Ejecución

1. **Leer** la skill UI/UX Pro Max completa antes de escribir una sola línea de código
2. **Configurar** el design system — CSS custom properties + Tailwind config con colores y fonts de Vertix — ANTES de construir componentes
3. **Construir** de afuera hacia adentro: Layout global → Componentes compartidos → Páginas
4. **Cada componente** debe ser mobile-first. Breakpoints: `sm:640px` · `md:768px` · `lg:1024px` · `xl:1280px`
5. **Usar** Stitch MCP para los componentes UI que aceleren el desarrollo (cards, forms, navigation patterns)

### Reglas de Calidad

- **NO** usar templates genéricos médicos. El resultado debe ser visualmente indistinguible de una web hecha por un estudio de diseño premium de Bogotá o Medellín
- **Validar** coherencia de marca en cada sección: ¿aparece el verde? ¿hay toque dorado? ¿la tipografía es la correcta? ¿el espaciado es generoso?
- **WhatsApp button:** implementar en el root layout, visible en TODAS las páginas sin excepción
- **Accesibilidad:** skip-to-content link, todos los íconos con `aria-label`, contraste WCAG AA mínimo

### Entregable Final

Al finalizar, generar un archivo `DESIGN_TOKENS.md` documentando todos los tokens de diseño implementados para referencia futura del equipo.

---

## INFORMACIÓN DE CONTACTO DEL CLIENTE

```
Centro Médico VERTIX
NIT: 901.941.962-6
Dirección: Cra 47 #80-125, Barranquilla, Colombia
Teléfono 1: +57 300 7695747
Teléfono 2: 315 065 1717
Email: centromedico_vertix@outlook.com
Horario: Lunes–Sábado 7:00am – 6:30pm (jornada continua)
Instagram: @vertix.fisio
```

---

*Prompt preparado para construcción de web VERTIX · Mayo 2025*
*Versión 1.0 — Basado en Manual de Identidad Corporativa y Brandbook oficial*
