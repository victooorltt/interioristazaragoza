import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronDown,
  Check,
  Sparkles,
  RefreshCw,
  LayoutGrid,
  Compass,
  Paintbrush,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AccentBand } from "@/components/AccentBand";

export const metadata: Metadata = {
  title: "Diseño de Interiores en Zaragoza | Noelia Villalba",
  description:
    "Servicio de diseño de interiores en Zaragoza por Noelia Villalba. Dar forma a tu casa tal y como la vives hoy con criterio, método y acompañamiento personal.",
};

const whenToLookForMe = [
  {
    icon: Sparkles,
    title: "Piso de obra nueva",
    description: "Han comprado una vivienda de obra nueva y no saben cómo amueblarla ni decorarla con coherencia.",
  },
  {
    icon: RefreshCw,
    title: "Vivienda desactualizada",
    description: "Viven en una casa que se ha quedado antigua, oscura o poco funcional para el día a día actual.",
  },
  {
    icon: LayoutGrid,
    title: "Piezas sin armonía",
    description: "Tienen muebles acumulados, pero el conjunto no funciona ni transmite la sensación de calma deseada.",
  },
  {
    icon: Compass,
    title: "Nueva etapa vital",
    description: "Necesitan adaptar la vivienda a una nueva etapa familiar, teletrabajo o cambios personales.",
  },
  {
    icon: Paintbrush,
    title: "Cambio sin obra mayor",
    description: "Quieren mejorar sustancialmente su casa sin necesidad de pasar por el estrés y polvo de una reforma.",
  },
];

const serviceIncludes = [
  {
    image: "/images/galeria-9.webp",
    alt: "Diseño de interiores para viviendas con identidad propia en Zaragoza",
    title: "Diseño de interiores para viviendas con identidad propia",
    description:
      "Reorganización del espacio, estudio de recorridos diarios y proyecto de iluminación técnica y ambiental para que cada estancia resulte funcional y acogedora.",
  },
  {
    image: "/images/galeria-10.webp",
    alt: "Decoración de espacios y selección de materiales por Noelia Villalba",
    title: "Decoración de espacios según el criterio de Noelia Villalba",
    description:
      "Selección y prescripción de mobiliario, integración y aprovechamiento de piezas existentes que quieras conservar, y definición de la paleta de colores, materiales y textiles.",
  },
  {
    image: "/images/galeria-4.webp",
    alt: "Diseño de interiores para pisos de obra nueva en Zaragoza",
    title: "Diseño de interiores para pisos de obra nueva",
    description:
      "Creación de una base coherente desde cero, evitando compras impulsivas o inconexas y asegurando que los acabados y muebles envejezcan bien con el paso de los años.",
  },
  {
    image: "/images/galeria-8.webp",
    alt: "Actualizar tu vivienda sin cambiarla por completo en Zaragoza",
    title: "Actualizar tu vivienda sin cambiarla por completo",
    description:
      "Transformación centrada en la estética, la funcionalidad y el orden para adaptar tu hogar a una nueva etapa vital sin necesidad de demoliciones ni obras complejas.",
  },
];

const costFactors = [
  {
    title: "Tamaño de la vivienda",
    description:
      "Intervenir en una estancia concreta (como un salón-comedor o dormitorio) requiere un alcance diferente al de proyectar la vivienda completa. El metraje y número de estancias determinan la dedicación técnica.",
  },
  {
    title: "Nivel de Personalización",
    description:
      "Depende de si se trabaja con mobiliario comercial seleccionado de catálogos profesionales, diseño de carpinterías y piezas a medida exclusivas, o una combinación armónica de ambas opciones.",
  },
  {
    title: "Acompañamiento durante el proceso",
    description:
      "Desde la entrega del dossier de diseño con planos y lista de compra hasta la gestión integral de pedidos, recepción de suministros y coordinación final de estilismo en tu propia casa.",
  },
];

const faqs = [
  {
    question: "¿Qué diferencia hay entre diseño de interiores y una reforma?",
    answer:
      "El diseño de interiores optimiza la distribución espacial, el mobiliario, la iluminación, las texturas y el estilismo sin intervenir en tabiquería estructural ni requerir obras mayores de albañilería o fontanería. Una reforma transforma elementos constructivos e instalaciones. En muchos casos, un proyecto riguroso de diseño de interiores transforma una vivienda por completo sin necesidad de acometer una obra.",
  },
  {
    question: "¿Puedo contratar solo decoración?",
    answer:
      "Sí. Si la distribución de tu casa ya funciona pero necesitas ayuda para seleccionar mobiliario, coordinar textiles, definir colores y crear una iluminación cálida, podemos centrar el proyecto exclusivamente en la decoración y el estilismo para darle coherencia al conjunto.",
  },
  {
    question: "¿Trabajas con muebles que ya tengo?",
    answer:
      "Por supuesto. Analizamos las piezas que ya posees y que tienen valor para ti, tanto funcional como emocional, y las integramos de forma natural en el nuevo planteamiento, combinándolas con elementos nuevos para lograr equilibrio visual.",
  },
  {
    question: "¿Cuánto cuesta un proyecto de diseño de interiores en Zaragoza?",
    answer:
      "El presupuesto varía según la superficie a intervenir, el número de estancias, el nivel de detalle requerido y si necesitas acompañamiento durante las compras y el montaje. Tras una primera conversación para conocer tu caso, te facilitaré una propuesta clara y desglosada.",
  },
];

export default function DisenoInterioresZaragozaPage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section: gradient + accent */}
      <PageHero
        title="Diseño de interiores en Zaragoza, por Noelia Villalba"
        subtitle="Dar forma a tu casa tal y como la vives hoy"
        imageSrc="/images/galeria-4.webp"
        imageAlt="Diseño de interiores en Zaragoza - Proyecto Noelia Villalba"
        variant="gradient"
        theme="accent"
        primaryCta={{
          label: "Pedir primera propuesta",
          href: "/contacto",
        }}
        secondaryCta={{
          label: "Ver proyectos realizados",
          href: "/proyectos",
        }}
      />

      {/* 2. Copy Section 1 with Photo noelia-v3.webp */}
      <section className="py-20 lg:py-28 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] overflow-hidden bg-neutral-100 shadow-lg border border-zinc-200">
                <img
                  src="/images/noelia-v3.webp"
                  alt="Noelia Villalba, interiorista especializada en diseño de interiores en Zaragoza"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent p-6 text-white">
                  <p className="text-sm font-medium">Noelia Villalba</p>
                  <p className="text-xs text-zinc-300">Interiorista especializada en Zaragoza</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <span className="text-xs uppercase tracking-widest text-[#85B7B4] font-semibold">
                Enfoque personal
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-950 leading-[1.15] mt-2">
                Noelia Villalba, interiorista especializada en Diseño de Interiores en Zaragoza
              </h2>
              <div className="mt-6 space-y-4 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
                <p>
                  Soy Noelia Villalba, interiorista en Zaragoza, y este servicio está pensado para personas que sienten que su casa ya no encaja con ellas, aunque estructuralmente esté bien. A veces se trata de una vivienda de obra nueva que aún está desnuda. Otras, de una casa con años que se ha quedado desactualizada y pesada.
                </p>
                <p>
                  En ambos casos ocurre lo mismo: la casa existe, pero no acompaña a la vida que llevas ahora. Mi trabajo en el diseño de interiores es ayudarte a ordenar ideas, tomar decisiones con criterio y transformar tu casa para que vuelva a sentirse tuya, sin complicaciones innecesarias. Cuando trabajas conmigo, cada decisión tiene un porqué.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contacto"
                  className="inline-flex items-center text-sm font-medium text-zinc-950 hover:text-[#4D7876] transition-colors"
                >
                  <span>Hablar sobre tu vivienda</span>
                  <span className="ml-2 font-mono">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Copy Section 2 with Photo extra-living.webp */}
      <section className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <span className="text-xs uppercase tracking-widest text-[#85B7B4] font-semibold">
                Vivir mejor
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-950 leading-[1.15] mt-2">
                Servicio de diseño de interiores en Zaragoza para viviendas con identidad
              </h2>
              <p className="mt-6 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
                Para mí, el diseño de interiores no consiste en seguir modas efímeras ni en llenar una casa de muebles bonitos de catálogo. Consiste en entender cómo vives, cómo usas cada espacio y qué necesitas para sentirte a gusto y en calma al llegar a casa.
              </p>
              <p className="mt-4 text-base sm:text-lg font-medium text-zinc-950">
                Mi objetivo es que tu casa:
              </p>

              <ul className="mt-6 space-y-3.5">
                {[
                  "Sea cómoda, acogedora y fácil de mantener ordenada",
                  "Tenga coherencia visual y equilibrio de luz en todas las estancias",
                  "Se adapte con naturalidad a tus rutinas diarias reales",
                  "Y siga teniendo sentido y elegancia dentro de muchos años",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-[#85B7B4]/25 text-zinc-950 flex items-center justify-center mr-3 mt-1">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span className="text-base text-zinc-700 font-normal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-base text-zinc-600 font-light leading-relaxed italic border-l-2 border-[#85B7B4] pl-4">
                &ldquo;No diseño espacios para impresionar a visitas ocasionales, sino para que tú disfrutes de tu día a día en ellos.&rdquo;
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden bg-neutral-100 shadow-md border border-zinc-200 group">
                <img
                  src="/images/extra-living.webp"
                  alt="Espacio interior sereno con texturas cálidas en Zaragoza"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-[#85B7B4] font-semibold">
                    Atmósfera serena
                  </span>
                  <h3 className="text-base sm:text-lg font-light text-white mt-1">
                    Diseño atemporal con iluminación cálida y materiales nobles
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Situaciones: ¿Cuándo me buscan? */}
      <section className="py-20 lg:py-28 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-14">
            <span className="text-xs uppercase tracking-widest text-[#85B7B4] font-semibold">
              Casos habituales
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-950 mt-2">
              ¿Cuándo me buscan para un proyecto de diseño de interiores?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
              Situaciones cotidianas en las que contar con una interiorista profesional en Zaragoza marca un antes y un después:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {whenToLookForMe.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 bg-[#FAFAFA] rounded-2xl border border-zinc-200/90 hover:border-zinc-950 hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#85B7B4]/25 text-zinc-950 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <h3 className="text-base font-semibold text-zinc-950 mb-2.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-600 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Qué incluye mi servicio */}
      <section className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-14">
            <span className="text-xs uppercase tracking-widest text-[#85B7B4] font-semibold">
              Alcance del trabajo
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-950 mt-2">
              Qué incluye mi servicio de diseño de interiores en Zaragoza
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
              Soluciones estructuradas para dar respuesta integral a cada necesidad del espacio:
            </p>
          </div>

          {/* 4 Cards each with its own photo, no numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {serviceIncludes.map((item, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-2xl bg-white border border-zinc-200/90 hover:border-zinc-950 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-zinc-950 leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACCENT SECTION 1: ¿Cuánto cuesta un Proyecto de Diseño de Interiores? */}
      <section className="py-20 lg:py-28 bg-[#85B7B4] text-zinc-950 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Photo galeria-3.webp */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900 shadow-xl border border-black/15 group">
                <img
                  src="/images/galeria-3.webp"
                  alt="Proyecto de diseño de interiores en Zaragoza"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 text-white">
                  <p className="text-base font-medium text-white">
                    Propuestas personalizadas y transparentes
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content & Factors */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <span className="text-xs uppercase tracking-widest text-zinc-900 font-semibold">
                Inversión transparente
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-950 leading-[1.15] mt-2">
                ¿Cuánto cuesta un Proyecto de Diseño de Interiores en Zaragoza?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-900/90 font-normal leading-relaxed">
                El presupuesto de cada proyecto se valora de manera individual y sin partidas ambiguas, teniendo en cuenta tres factores principales:
              </p>

              <div className="mt-8 space-y-4">
                {costFactors.map((factor, idx) => (
                  <div
                    key={idx}
                    className="bg-white/90 backdrop-blur-xs border border-black/10 rounded-2xl p-6 text-left"
                  >
                    <h3 className="text-lg font-bold text-zinc-950">
                      {factor.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-800 leading-relaxed mt-2">
                      {factor.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-white bg-zinc-950 hover:bg-zinc-900 rounded-xl transition-all duration-200 shadow-md"
                >
                  Solicitar presupuesto personalizado
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <span className="text-xs uppercase tracking-widest text-[#85B7B4] font-semibold">
              Dudas frecuentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-950 mt-2">
              Preguntas frecuentes sobre diseño de interiores
            </h2>
            <p className="mt-3 text-base text-zinc-600 font-light leading-relaxed">
              Respuestas a las cuestiones más comunes antes de comenzar a trabajar juntos.
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
              ¿Tienes otra duda específica sobre tu vivienda?{" "}
              <Link
                href="/contacto"
                className="font-medium text-zinc-950 underline hover:text-[#4D7876] transition-colors"
              >
                Escríbeme o llámame directamente
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 8. ACCENT SECTION 2: CTA Solicitar Presupuesto */}
      <AccentBand
        title="Solicitar Presupuesto - Pedir una primera propuesta"
        description="Así trabajo el diseño de interiores: método, criterio y acompañamiento personal. Cada proyecto empieza con una conversación para conocer tu espacio."
        cta={{
          label: "Pedir una primera propuesta",
          href: "/contacto",
        }}
        secondaryCta={{
          label: "Ver proyectos realizados",
          href: "/proyectos",
        }}
        align="center"
      />
    </div>
  );
}
