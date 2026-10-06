import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Building2, Store, Sparkles, ChevronDown } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AccentBand } from "@/components/AccentBand";

export const metadata: Metadata = {
  title: "Interiorismo Comercial en Zaragoza | Noelia Villalba",
  description:
    "Interiorismo comercial en Zaragoza para negocios que quieren diferenciarse. Oficinas, locales, clínicas y espacios de trabajo donde arquitectura, diseño y negocio se unen.",
};

const commercialSpaces = [
  {
    title: "Diseño de oficinas y espacios de trabajo",
    description:
      "Entornos que combinan zonas operativas, salas de reuniones y áreas de descanso. Espacios pensados para favorecer la productividad y el bienestar del equipo, proyectando rigor y solvencia ante clientes y visitas.",
    imageSrc: "/images/galeria-6.webp",
    tag: "Oficinas & Coworking",
    features: [
      "Zonificación acústica y confort postural",
      "Iluminación técnica para puestos de trabajo",
      "Espacios de reunión formales e informales",
    ],
  },
  {
    title: "Interiorismo para tiendas y comercios",
    description:
      "Distribución de flujos de circulación, escaparates y exposición estratégica de producto. Diseñamos locales atractivos y funcionales que invitan a entrar, explorar y conectar con la marca.",
    imageSrc: "/images/galeria-8.webp",
    tag: "Retail & Tiendas",
    features: [
      "Circulación intuitiva que maximiza ventas",
      "Iluminación focal que realza el producto",
      "Mobiliario expositivo versátil y duradero",
    ],
  },
  {
    title: "Clínicas, centros de bienestar y estética",
    description:
      "Espacios donde la acústica, la iluminación cálida, la privacidad y la pulcritud conviven en equilibrio. Diseños que transmiten serenidad, confianza y bienestar desde la recepción hasta las cabinas o consultas.",
    imageSrc: "/images/extra-commercial.webp",
    tag: "Salud & Bienestar",
    features: [
      "Recepciones cálidas que reducen la ansiedad",
      "Aislamiento acústico entre consultas",
      "Materiales higiénicos de alta resistencia",
    ],
  },
];

const coreFocusPoints = [
  {
    title: "La imagen de marca",
    description:
      "Traduzco la personalidad, valores y posicionamiento de tu empresa en un lenguaje espacial coherente: materiales, iluminación y texturas que hacen que tu negocio sea reconocible e inolvidable.",
  },
  {
    title: "La experiencia del usuario",
    description:
      "Estudio minucioso de recorridos, ergonomía, puntos de atención al cliente y confort acústico y lumínico para que clientes y trabajadores vivan una experiencia agradable y fluida.",
  },
  {
    title: "La optimización del espacio y del presupuesto",
    description:
      "Aprovechamiento de cada metro cuadrado de superficie útil, cumplimiento de normativas de accesibilidad y selección de materiales resistentes y de bajo mantenimiento adaptados al tránsito comercial.",
  },
];

const methodologySteps = [
  {
    title: "Reunión inicial",
    description:
      "Conocemos a fondo tu modelo de negocio, tus clientes objetivo, tus requerimientos de operatividad diaria y los plazos de apertura.",
  },
  {
    title: "Estudio del espacio",
    description:
      "Toma exhaustiva de medidas en el local, comprobación de instalaciones existentes, análisis de flujos y revisión de normativas urbanísticas y de accesibilidad.",
  },
  {
    title: "Concepto creativo",
    description:
      "Definición de la propuesta conceptual: atmósfera, sensaciones, paleta de colores corporativos y selección de materiales base.",
  },
  {
    title: "Propuesta con planos",
    description:
      "Desarrollo de planos detallados de distribución, alzados técnicos, detalles constructivos e infografías para visualizar con exactitud el resultado final.",
  },
  {
    title: "Selección de materiales e iluminación",
    description:
      "Prescripción de pavimentos técnicos, revestimientos de alta resistencia al desgaste, mobiliario profesional y proyecto lumínico específico para ensalzar el producto y el espacio.",
  },
  {
    title: "Coordinación técnica",
    description:
      "Seguimiento y control de la ejecución en obra junto a los gremios para asegurar que los acabados se ajustan al proyecto y que los tiempos de apertura se cumplen.",
  },
];

const commercialFaqs = [
  {
    question: "¿Gestionas licencias de actividad y normativas en Zaragoza?",
    answer:
      "Diseño el proyecto cumpliendo rigurosamente la normativa urbanística y de accesibilidad de Zaragoza (anchos de paso, aseos adaptados, salidas de emergencia, ventilación), colaborando de forma fluida con ingenieros y arquitectos técnicos para la tramitación de las licencias necesarias.",
  },
  {
    question: "¿Es posible adaptar el proyecto a plazos estrictos de apertura?",
    answer:
      "Sí. Sabemos que cada día con el local cerrado repercute en los costes del negocio. Planificamos los pedidos de materiales con antelación y fijamos un calendario de coordinación de gremios con compromisos firmes de entrega.",
  },
  {
    question: "¿Trabajas tanto en locales de nueva apertura como en reformas de negocios en marcha?",
    answer:
      "Sí, intervenimos tanto en locales en bruto como en renovaciones de negocios existentes que necesitan actualizar su imagen de marca, reorganizar sus puestos o aumentar su capacidad de venta.",
  },
];

export default function InteriorismoComercialZaragozaPage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section: gradient + accent with extra-commercial.webp */}
      <PageHero
        title="Interiorismo comercial en Zaragoza"
        subtitle="Interiorismo comercial para negocios que quieren diferenciarse"
        imageSrc="/images/extra-commercial.webp"
        imageAlt="Interiorismo comercial y de espacios de trabajo en Zaragoza - Noelia Villalba"
        variant="gradient"
        theme="accent"
        primaryCta={{
          label: "Hablar de tu espacio comercial",
          href: "/contacto",
        }}
        secondaryCta={{
          label: "Ver proyectos comerciales",
          href: "/proyectos",
        }}
      />

      {/* 2. Intro Section with Photo galeria-7.webp */}
      <section className="py-20 lg:py-28 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <span className="text-xs uppercase tracking-widest text-[#85B7B4] font-semibold">
                Estrategia & Espacio
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-950 leading-[1.15] mt-2">
                Interiorismo comercial en Zaragoza: donde arquitectura, diseño y negocio se unen
              </h2>
              <div className="mt-6 space-y-4 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
                <p>
                  Diseñar un espacio comercial es mucho más que decorar un local. Es hacer que tu negocio comunique quién eres antes de que pronuncies una sola palabra.
                </p>
                <p>
                  El espacio físico de una empresa es su escaparate más poderoso. Cuando un cliente entra en tu local u oficina, percibe instantáneamente el nivel de profesionalidad, cuidado y valor de lo que ofreces. Mi trabajo une la visión arquitectónica, la estética y la estrategia comercial para crear espacios que no solo resulten atractivos, sino que impulsen los resultados tangibles de tu negocio.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-white bg-zinc-950 hover:bg-zinc-900 transition-all duration-200 shadow-md"
                >
                  Hablar de tu espacio comercial
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden bg-neutral-100 shadow-md border border-zinc-200 group">
                <img
                  src="/images/galeria-7.webp"
                  alt="Espacio comercial diseñado en Zaragoza por Noelia Villalba"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-[#85B7B4] font-semibold">
                    Zaragoza Retail
                  </span>
                  <h3 className="text-base sm:text-lg font-light text-white mt-1">
                    Espacios que transmiten confianza y potencian la venta
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 3 Commercial Spaces with Photos (galeria-6, galeria-8, extra-commercial) */}
      <section className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-14">
            <span className="text-xs uppercase tracking-widest text-[#85B7B4] font-semibold">
              Tipología de proyectos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-950 mt-2">
              ¿Qué espacios comerciales diseño en Zaragoza?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
              Proyectos a medida para diferentes sectores de actividad profesional con exigencias técnicas específicas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commercialSpaces.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-zinc-200 overflow-hidden flex flex-col justify-between group hover:border-zinc-950 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full bg-neutral-100 overflow-hidden">
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-zinc-950/85 text-white text-[11px] font-medium tracking-wide uppercase px-3 py-1">
                      {item.tag}
                    </div>
                  </div>
                  <div className="p-8 text-left">
                    <h3 className="text-xl sm:text-2xl font-light tracking-tight text-zinc-950">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-6 pt-6 border-t border-zinc-100">
                      <ul className="space-y-2">
                        {item.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start text-xs sm:text-sm text-zinc-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#85B7B4] mt-1.5 mr-2.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0 text-left">
                  <div className="pt-6 border-t border-zinc-100">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center text-sm font-medium text-zinc-950 group-hover:text-[#4D7876] transition-colors"
                    >
                      <span>Consultar este tipo de espacio</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Focus Points */}
      <section className="py-20 lg:py-28 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-14">
            <span className="text-xs uppercase tracking-widest text-[#85B7B4] font-semibold">
              Retorno y valor
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-950 mt-2">
              En qué me centro en cada proyecto de interiorismo comercial
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
              Tres pilares fundamentales para que tu inversión genere un impacto real y duradero en la cuenta de resultados:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreFocusPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-9 border border-zinc-200 bg-[#FAFAFA] text-left flex flex-col justify-start rounded-2xl hover:border-zinc-950 transition-colors duration-200"
              >
                <h3 className="text-xl sm:text-2xl font-light tracking-tight text-zinc-950 mb-3">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ACCENT SECTION 1: Cómo trabajo el interiorismo comercial con noelia-principal.webp */}
      <section className="py-20 lg:py-28 bg-[#85B7B4] text-zinc-950 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Photo noelia-principal.webp */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 shadow-xl border border-black/15">
                <img
                  src="/images/noelia-principal.webp"
                  alt="Noelia Villalba en su estudio coordinando proyectos comerciales en Zaragoza"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-white font-medium block mb-1">
                    Metodología de estudio
                  </span>
                  <p className="text-base font-medium">
                    Control riguroso de cada fase hasta la apertura
                  </p>
                </div>
              </div>
            </div>

            {/* Right 6 Process Steps */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <span className="text-xs uppercase tracking-widest text-zinc-900 font-semibold">
                Proceso paso a paso
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-950 leading-[1.15] mt-2">
                Cómo trabajo el interiorismo comercial desde mi estudio en Zaragoza
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-900/90 font-normal leading-relaxed">
                Un proceso secuencial y riguroso desde la primera toma de contacto hasta la apertura del espacio comercial:
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {methodologySteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-white/90 backdrop-blur-xs border border-black/10 p-5 rounded-xl text-left"
                  >
                    <h3 className="text-base font-bold text-zinc-950 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-zinc-800 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-white bg-zinc-950 hover:bg-zinc-900 transition-all duration-200 shadow-md"
                >
                  Solicitar consulta para mi negocio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Commercial FAQs */}
      <section className="py-20 lg:py-28 bg-white border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <span className="text-xs uppercase tracking-widest text-[#85B7B4] font-semibold">
              Preguntas de empresas
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-950 mt-2">
              Dudas habituales en proyectos comerciales en Zaragoza
            </h2>
            <p className="mt-3 text-base text-zinc-600 font-light leading-relaxed">
              Respuestas sobre plazos, normativas y viabilidad para la apertura o renovación de tu negocio.
            </p>
          </div>

          <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200">
            {commercialFaqs.map((faq, idx) => (
              <details key={idx} className="group py-6 [&::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-normal text-lg sm:text-xl text-zinc-950 cursor-pointer list-none select-none">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-zinc-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-4" />
                </summary>
                <div className="mt-4 text-base text-zinc-600 font-light leading-relaxed pr-6">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 text-left">
            <p className="text-base text-zinc-600 font-light">
              ¿Tienes un local u oficina que deseas evaluar en Zaragoza?{" "}
              <Link
                href="/contacto"
                className="font-medium text-zinc-950 underline hover:text-[#4D7876] transition-colors"
              >
                Concierta una reunión técnica con Noelia
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 7. ACCENT SECTION 2: ¿Por qué invertir en interiorismo comercial en Zaragoza? */}
      <AccentBand
        title="¿Por qué invertir en interiorismo comercial en Zaragoza? Porque tu espacio ya está comunicando algo"
        description="La pregunta es si ese mensaje está trabajando a tu favor o en tu contra. El interiorismo comercial no es decoración: es estrategia con forma de espacio para conectar con tus clientes y destacar en el mercado."
        cta={{
          label: "Quiero darle un cambio a mi negocio",
          href: "/contacto",
        }}
        secondaryCta={{
          label: "Ver proyectos comerciales",
          href: "/proyectos",
        }}
        align="center"
      />
    </div>
  );
}
