import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, ArrowRight, Check, Hammer, ShieldCheck, Ruler } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AccentBand } from "@/components/AccentBand";

export const metadata: Metadata = {
  title: "Reformas en Zaragoza con Diseño y Dirección | Noelia Villalba",
  description:
    "Reformas integrales y parciales en Zaragoza firmadas por Noelia Villalba. Diseño riguroso, dirección de obra y acompañamiento personal para cambiar tu casa y tu día a día.",
};

const whenReformMakesSense = [
  {
    title: "Distribución desactualizada",
    description:
      "La distribución actual no responde a cómo vives hoy: estancias compartimentadas, pasillos oscuros o cocinas aisladas que limitan la vida compartida.",
  },
  {
    title: "Vivienda de segunda mano",
    description:
      "Has comprado una casa con años y necesitas actualizarla por completo a tus necesidades, estilo de vida y exigencias de confort contemporáneo.",
  },
  {
    title: "Instalaciones obsoletas",
    description:
      "Fontanería, electricidad o climatización que requieren una renovación técnica integral para garantizar seguridad, eficiencia y durabilidad.",
  },
  {
    title: "Falta de luz y sensación de agobio",
    description:
      "Espacios que precisan abrirse para captar luz natural, mejorar la ventilación y crear una sensación real de amplitud y continuidad.",
  },
  {
    title: "Nueva etapa vital",
    description:
      "Cambios familiares, necesidad de teletrabajo o reorganización del hogar que hacen indispensable replantear el uso de cada estancia.",
  },
];

const modalities = [
  {
    title: "Reforma integral con diseño & dirección completa",
    subtitle: "Cuando la casa necesita un nuevo mapa",
    description:
      "Replantear distribución, circulación, almacenaje, luz. Un proyecto integral donde rediseñamos cada metro cuadrado, coordinamos a todos los gremios en Zaragoza y velamos por la ejecución exacta hasta la entrega de llaves.",
    imageSrc: "/images/galeria-1.webp",
    features: [
      "Proyecto técnico de distribución y demoliciones",
      "Renovación completa de instalaciones",
      "Coordinación integral de albañilería, fontanería, electricidad y carpintería",
      "Supervisión presencial continua en obra",
    ],
  },
  {
    title: "Reforma parcial con coherencia estética y funcional",
    subtitle: "Mejorar una parte sin romper la armonía",
    description:
      "Intervención focalizada en estancias clave (como cocina, baños o zona de día) integrada con naturalidad en el conjunto de la vivienda, cuidando los nexos visuales y la continuidad de materiales.",
    imageSrc: "/images/galeria-11.webp",
    features: [
      "Intervención en cocinas abiertas o baños principales",
      "Conexión fluida con las estancias contiguas",
      "Selección de pavimentos y revestimientos coherentes",
      "Plazos acotados y control de afecciones en la vivienda",
    ],
  },
];

const pillars = [
  {
    title: "Distribución y recorridos",
    description:
      "Optimizar cada metro útil para que el flujo diario sea fluido, intuitivo y sin obstáculos innecesarios.",
  },
  {
    title: "Almacenaje con sentido",
    description:
      "Soluciones a medida y armarios empotrados que mantienen el orden de la casa sin saturar el espacio visual.",
  },
  {
    title: "Luz y amplitud",
    description:
      "Multiplicar la entrada de luz natural y diseñar una iluminación artificial cálida, zonificada y funcional.",
  },
  {
    title: "Detalles prácticos",
    description:
      "Selección rigurosa de materiales nobles y resistentes pensados para convivir con ellos con facilidad.",
  },
  {
    title: "Coherencia estética",
    description:
      "Una paleta de acabados serena y armónica que aporta continuidad, elegancia y atemporalidad a todo el hogar.",
  },
];

const concerns = [
  {
    worry: "Me da miedo gastar y no acertar",
    solution:
      "Tomamos cada decisión sobre plano, infografías y muestras reales antes de tocar una sola pared. No hay improvisaciones en obra ni gastos imprevistos: el proyecto y el presupuesto están definidos con total transparencia desde el inicio.",
  },
  {
    worry: "No quiero perder el control ni lidiar con gremios",
    solution:
      "Tienes una única interlocutora directa. Asumo la dirección del proyecto y la coordinación cercana de gremios en Zaragoza, informándote de los avances y resolviendo cualquier imprevisto técnico sobre la marcha.",
  },
  {
    worry: "No quiero que mi casa quede fría o impersonal",
    solution:
      "No impongo tendencias pasajeras ni catálogos impersonales. Trabajo escuchando tus gustos, tus recuerdos y tu forma real de vivir para que tu casa tenga alma, calidez e identidad propia.",
  },
];

const faqs = [
  {
    question: "¿Cuánto cuesta una reforma en Zaragoza?",
    answer:
      "El coste depende de la superficie, el estado previo de las instalaciones, el nivel de intervención y los acabados elegidos. Tras una primera reunión y visita técnica a la vivienda, te presento un presupuesto claro y detallado sin partidas ambiguas.",
  },
  {
    question: "¿Cuánto dura una reforma?",
    answer:
      "Una reforma integral suele llevar entre 2 y 4 meses de obra activa en función de la envergadura técnica. La planificación previa en fase de diseño es la clave para fijar un calendario riguroso y evitar demoras.",
  },
  {
    question: "¿Se puede hacer una reforma por fases?",
    answer:
      "Sí, siempre que tengamos un proyecto global definido de antemano. Diseñar el conjunto permite ejecutar primero las estancias prioritarias y abordar el resto más adelante sin perder coherencia constructiva ni estética.",
  },
  {
    question: "¿Es importante diseñar antes de empezar la reforma?",
    answer:
      "Es imprescindible. Definir planos de distribución, electricidad, fontanería y materiales antes de comenzar evita modificaciones costosas durante la obra, reduce incertidumbres y asegura que el resultado sea exactamente el proyectado.",
  },
  {
    question: "¿Y si todavía no sé si necesito reforma o solo un rediseño?",
    answer:
      "En nuestra primera toma de contacto analizamos tu espacio y tus objetivos. Si tus necesidades pueden resolverse mediante un proyecto de interiorismo sin necesidad de meter albañilería, te lo aconsejaré con total transparencia.",
  },
];

export default function ReformasZaragozaPage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section: gradient + accent */}
      <PageHero
        title="Reformas en Zaragoza con Diseño y la Dirección de Noelia Villalba"
        subtitle="Una reforma bien pensada cambia tu casa … y tu día a día"
        imageSrc="/images/galeria-5.webp"
        imageAlt="Reformas en Zaragoza con diseño y dirección de Noelia Villalba"
        variant="gradient"
        theme="accent"
        primaryCta={{
          label: "Solicitar presupuesto de reforma",
          href: "/contacto",
        }}
        secondaryCta={{
          label: "Ver proyectos de reforma",
          href: "/proyectos",
        }}
      />

      {/* 2. Intro Section with Photo noelia-v4.webp */}
      <section className="py-20 lg:py-28 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] overflow-hidden bg-neutral-100 shadow-lg border border-zinc-200">
                <img
                  src="/images/noelia-v4.webp"
                  alt="Noelia Villalba dirigiendo un proyecto de reforma en Zaragoza"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent p-6 text-white">
                  <p className="text-sm font-medium">Noelia Villalba</p>
                  <p className="text-xs text-zinc-300">Dirección y diseño de reformas en Zaragoza</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <span className="text-xs uppercase tracking-widest text-[#85B7B4] font-semibold">
                Criterio y ejecución
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-950 leading-[1.15] mt-2">
                Reformar para personas que quieren algo más que cambiar suelos y pintar paredes
              </h2>
              <div className="mt-6 space-y-4 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
                <p>
                  Soy Noelia Villalba, interiorista, y realizo reformas en Zaragoza para personas que buscan una transformación real, con sentido y tranquilidad.
                </p>
                <p>
                  Una reforma no consiste solo en sustituir revestimientos: consiste en replantear la forma en que habitas tu hogar. Conectar estancias, multiplicar la luz natural, resolver de raíz el almacenaje y elegir materiales honestos que envejezcan con elegancia. Mi labor consiste en diseñar ese cambio con criterio técnico y acompañarte en cada paso de la obra para que la vivas sin angustias.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contacto"
                  className="inline-flex items-center text-sm font-medium text-zinc-950 hover:text-[#4D7876] transition-colors"
                >
                  <span>Consultar tu proyecto con Noelia</span>
                  <span className="ml-2 font-mono">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Scenarios with Photo extra-kitchen.webp */}
      <section className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-14">
            <span className="text-xs uppercase tracking-widest text-[#85B7B4] font-semibold">
              El momento adecuado
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-950 leading-[1.15] mt-2">
              ¿Cuándo tiene sentido hacer una reforma en Zaragoza?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
              Cinco situaciones reales en las que una reforma bien proyectada transforma radicalmente tu día a día:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            {/* Visual Photo Card extra-kitchen.webp */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 border border-zinc-200 shadow-md group">
                <img
                  src="/images/extra-kitchen.webp"
                  alt="Cocina abierta y luminosa reformada en Zaragoza por Noelia Villalba"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-white font-medium block mb-1 opacity-95">
                    Reforma integral
                  </span>
                  <h3 className="text-base sm:text-lg font-light text-white leading-snug">
                    Cocina conectada y llena de luz: el corazón renovado de la vivienda
                  </h3>
                </div>
              </div>
            </div>

            {/* Scenarios cards without numbers */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whenReformMakesSense.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-6 sm:p-7 bg-white border border-zinc-200/90 rounded-2xl text-left hover:border-zinc-950 hover:shadow-md transition-all duration-200 flex flex-col justify-between ${
                    idx === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-zinc-950 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-600 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACCENT SECTION 1: Mi enfoque: reformar pensando en tu vida */}
      <section className="py-20 lg:py-28 bg-[#85B7B4] text-zinc-950 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Photo galeria-7.webp (Enlarged) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl border border-black/15 group">
                <img
                  src="/images/galeria-7.webp"
                  alt="Espacio ejecutado con rigor y criterio por Noelia Villalba en Zaragoza"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 sm:p-8 text-white">
                  <p className="text-base sm:text-lg font-medium text-white">
                    Reformas para ser vividas con calma y durabilidad
                  </p>
                </div>
              </div>
            </div>

            {/* Right 5 Pillars with Checkmark Ticks */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <span className="text-xs uppercase tracking-widest text-zinc-900 font-semibold">
                Filosofía de trabajo
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-950 leading-[1.15] mt-2">
                Mi enfoque: reformar pensando en tu vida, no solo en tu casa
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-900/90 font-normal leading-relaxed">
                Los cinco pilares prácticos que guían cada decisión constructiva y de diseño en cada una de mis obras en Zaragoza:
              </p>

              <div className="mt-8 space-y-3.5">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="bg-white/90 backdrop-blur-xs border border-black/10 rounded-2xl p-5 text-left flex items-start gap-3.5 hover:bg-white transition-colors"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-950 text-white flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-zinc-950">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-zinc-800 leading-relaxed mt-1">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-white bg-zinc-950 hover:bg-zinc-900 rounded-xl transition-all duration-200 shadow-md"
                >
                  Hablar sobre mi reforma
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Modalities with galeria-1.webp and galeria-11.webp */}
      <section className="py-20 lg:py-28 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-14">
            <span className="text-xs uppercase tracking-widest text-[#85B7B4] font-semibold">
              Modalidades de intervención
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-950 mt-2">
              Reformas integrales y parciales en Zaragoza firmadas por Noelia Villalba
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
              Dos fórmulas adaptadas a la escala de intervención que tu hogar requiere:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {modalities.map((item, idx) => (
              <div
                key={idx}
                className="border border-zinc-200 bg-[#FAFAFA] overflow-hidden flex flex-col group hover:border-zinc-950 transition-colors duration-200"
              >
                <div className="relative aspect-[16/10] w-full bg-neutral-100 overflow-hidden">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-zinc-950/80 text-white text-[11px] uppercase tracking-wider px-3 py-1 font-medium">
                    {idx === 0 ? "Proyecto Completo" : "Zona Específica"}
                  </div>
                </div>

                <div className="p-8 sm:p-10 text-left flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-light tracking-tight text-zinc-950">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#4D7876] font-medium">
                      {item.subtitle}
                    </p>
                    <p className="mt-4 text-base text-zinc-600 font-light leading-relaxed">
                      {item.description}
                    </p>

                    <ul className="mt-6 space-y-2 border-t border-zinc-200 pt-6">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start text-xs sm:text-sm text-zinc-700">
                          <Check className="w-4 h-4 text-[#85B7B4] mr-2 shrink-0 stroke-[2.5] mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-200">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center text-sm font-medium text-zinc-950 group-hover:text-[#4D7876] transition-colors"
                    >
                      <span>Consultar esta modalidad</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Concerns: Lo que más preocupa antes de una reforma */}
      <section className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-14">
            <span className="text-xs uppercase tracking-widest text-[#85B7B4] font-semibold">
              Tranquilidad de principio a fin
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-950 mt-2">
              Lo que más preocupa antes de una reforma y cómo te ayudo a gestionarlo
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
              Hacer una obra no tiene por qué ser una fuente de ansiedad cuando existe método y acompañamiento profesional:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {concerns.map((item, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-9 border border-zinc-200 bg-white text-left flex flex-col justify-between hover:border-zinc-950 transition-colors duration-200"
              >
                <div>
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                    Preocupación habitual
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light tracking-tight text-zinc-950 mt-2 mb-6">
                    &ldquo;{item.worry}&rdquo;
                  </h3>
                  <div className="pt-6 border-t border-zinc-100">
                    <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <span className="text-xs uppercase tracking-widest text-[#85B7B4] font-semibold">
              Claridad desde el primer día
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-950 mt-2">
              Preguntas frecuentes sobre reformas en Zaragoza
            </h2>
            <p className="mt-3 text-base text-zinc-600 font-light leading-relaxed">
              Cuestiones habituales para abordar tu obra con total transparencia y seguridad.
            </p>
          </div>

          <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200">
            {faqs.map((faq, idx) => (
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
              ¿Deseas consultar tu caso con Noelia?{" "}
              <Link
                href="/contacto"
                className="font-medium text-zinc-950 underline hover:text-[#4D7876] transition-colors"
              >
                Pide una cita previa o escríbenos
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 8. ACCENT SECTION 2: CTA ¿Pensando en reformar? */}
      <AccentBand
        title="¿Pensando en reformar? Contacta conmigo y empezamos a trabajar tu reforma"
        description="Planificamos cada plano, medimos cada metro y coordinamos a los mejores gremios de Zaragoza para que estrenes casa con total tranquilidad."
        cta={{
          label: "Quiero hablar sobre mi proyecto de reforma",
          href: "/contacto",
        }}
        secondaryCta={{
          label: "Ver reformas realizadas",
          href: "/proyectos",
        }}
        align="center"
      />
    </div>
  );
}
