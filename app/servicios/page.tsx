import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AccentBand } from "@/components/AccentBand";

export const metadata: Metadata = {
  title: "Servicios de Interiorismo en Zaragoza | Noelia Villalba",
  description:
    "Servicios de interiorismo y reformas en Zaragoza desarrollados personalmente por Noelia Villalba. Diseño de interiores, reformas y proyectos comerciales con criterio y cercanía.",
};

interface ServiceItem {
  tag: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  features: string[];
}

const services: ServiceItem[] = [
  {
    tag: "Viviendas & Decoración",
    title: "Diseño de Interiores en Zaragoza",
    href: "/servicios/diseno-interiores-zaragoza",
    imageSrc: "/images/galeria-4.webp",
    imageAlt: "Diseño de interiores en Zaragoza por Noelia Villalba",
    description:
      "Dar forma a tu casa tal y como la vives hoy. Para personas que sienten que su casa ya no encaja con ellas, aunque estructuralmente esté bien.",
    features: [
      "Optimización de distribución y recorridos diarios",
      "Proyecto integral de iluminación técnica y ambiental",
      "Selección y armonización de mobiliario y textiles",
    ],
  },
  {
    tag: "Obra & Dirección Técnica",
    title: "Reformas Zaragoza con Diseño y Dirección",
    href: "/servicios/reformas-zaragoza",
    imageSrc: "/images/galeria-5.webp",
    imageAlt: "Reformas en Zaragoza con diseño y dirección por Noelia Villalba",
    description:
      "Reformas integrales y parciales para quienes quieren algo más que cambiar suelos y pintar paredes. Una reforma bien pensada cambia tu casa y tu día a día.",
    features: [
      "Planimetría exhaustiva antes de entrar en obra",
      "Coordinación y supervisión continua de gremios",
      "Control estricto de costes, calidades y plazos",
    ],
  },
  {
    tag: "Negocios & Espacios de Trabajo",
    title: "Interiorismo comercial en Zaragoza",
    href: "/servicios/interiorismo-comercial-zaragoza",
    imageSrc: "/images/galeria-6.webp",
    imageAlt: "Interiorismo comercial en Zaragoza por Noelia Villalba",
    description:
      "Para negocios que quieren diferenciarse. Donde arquitectura, diseño y negocio se unen. Oficinas, locales, clínicas y espacios de trabajo.",
    features: [
      "Traducción espacial de la identidad de tu marca",
      "Diseño de flujos comerciales y experiencia de usuario",
      "Materiales técnicos de alto tránsito y normativas",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <PageHero
        title="Servicios de interiorismo en Zaragoza que desarrollo personalmente"
        subtitle="Trabajo distintos tipos de proyectos, siempre con el mismo enfoque: acompañamiento, criterio y diseño a medida apoyándome en un equipo y colaboradores especializados según las necesidades de cada proyecto."
        imageSrc="/images/extra-kitchen.webp"
        imageAlt="Cocina y espacio contemporáneo en Zaragoza diseñado por Noelia Villalba"
        variant="centered-overlay"
        theme="accent"
        primaryCta={{
          label: "Contactar con Noelia",
          href: "/contacto",
        }}
        secondaryCta={{
          label: "Ver proyectos realizados",
          href: "/proyectos",
        }}
      />

      {/* 2. Services Grid */}
      <section className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-left">
            <span className="text-xs uppercase tracking-widest text-[#85B7B4] font-semibold">
              Especialidades de estudio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-950 mt-2">
              Áreas de trabajo y proyectos
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
              Cada proyecto responde a una necesidad concreta, con soluciones a medida que aúnan funcionalidad, estética serena y una ejecución técnica rigurosa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service) => (
              <article
                key={service.href}
                className="group flex flex-col bg-white border border-zinc-200 hover:border-zinc-950 shadow-xs hover:shadow-md transition-all duration-300 rounded-none overflow-hidden"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-zinc-950/85 backdrop-blur-xs text-white text-[11px] font-medium tracking-wide uppercase px-3 py-1">
                    {service.tag}
                  </div>
                </div>

                <div className="p-8 sm:p-9 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light tracking-tight text-zinc-950 leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-6 pt-6 border-t border-zinc-100">
                      <ul className="space-y-2.5">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start text-xs sm:text-sm text-zinc-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#85B7B4] mt-1.5 mr-2.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-100">
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-sm font-medium text-zinc-950 group-hover:text-[#4D7876] transition-colors duration-200"
                    >
                      <span>Descubrir servicio</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ACCENT SECTION 1: Cómo trabajo yo, Noelia Villalba */}
      <section className="py-20 lg:py-28 bg-[#85B7B4] text-zinc-950 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Photo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 shadow-xl border border-black/15 group">
                <img
                  src="/images/noelia-v2.webp"
                  alt="Noelia Villalba en su estudio de interiorismo en Zaragoza"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <span className="text-xs uppercase tracking-widest text-zinc-900 font-semibold">
                Método y compromiso
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-950 leading-[1.15] mt-2">
                Cómo trabajo yo, Noelia Villalba, como interiorista en Zaragoza
              </h2>

              <div className="mt-6 space-y-4 text-base sm:text-lg text-zinc-900/90 font-normal leading-relaxed">
                <p>
                  Una de las cosas que más valoran mis clientes es la tranquilidad durante todo el proceso, y eso no ocurre por casualidad. Empiezo escuchándote, definimos objetivos claros, analizo el espacio pensando en su uso real y tomo decisiones justificadas en cada fase del proyecto.
                </p>
                <p>
                  Cada paso que damos juntos se apoya en un criterio claro: no se trata de imponer un estilo cerrado de revista, sino de encontrar la solución adecuada para tu día a día, con materiales honestos, soluciones luminosas y un control riguroso de cada detalle.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-white bg-zinc-950 hover:bg-zinc-900 rounded-xl transition-all duration-200 shadow-md cursor-pointer"
                >
                  Contactar con Noelia
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Photo Showcase Banner */}
      <section className="py-20 lg:py-28 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 text-left">
            <span className="text-xs uppercase tracking-widest text-[#85B7B4] font-semibold">
              Galería de atmósferas
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-950 mt-2">
              Espacios pensados para vivirse con calma y carácter
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
              Combinamos arquitectura interior, maderas cálidas, iluminación cuidada y texturas envolventes para transformar tanto hogares familiares como espacios profesionales en Zaragoza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Living Photo Showcase */}
            <div className="flex flex-col">
              <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-100 border border-zinc-200 group shadow-md">
                <img
                  src="/images/extra-living.webp"
                  alt="Salón residencial contemporáneo en Zaragoza con maderas cálidas y luz natural"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-white font-medium block mb-2 opacity-95">
                    Residencial Zaragoza
                  </span>
                  <h3 className="text-lg sm:text-xl font-light text-white leading-snug">
                    Salón contemporáneo: equilibrio entre luz natural, madera y textiles nobles
                  </h3>
                </div>
              </div>
            </div>

            {/* Commercial / Retail Photo Showcase */}
            <div className="flex flex-col">
              <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-100 border border-zinc-200 group shadow-md">
                <img
                  src="/images/galeria-7.webp"
                  alt="Espacio comercial y retail diseñado en Zaragoza por Noelia Villalba"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-white font-medium block mb-2 opacity-95">
                    Comercial & Retail
                  </span>
                  <h3 className="text-lg sm:text-xl font-light text-white leading-snug">
                    Espacios que comunican valor y potencian la experiencia de marca
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ACCENT SECTION 2: CTA Cuéntame tu proyecto */}
      <AccentBand
        title="Cuéntame tu proyecto sin compromiso"
        description="Si estás pensando en transformar tu vivienda o tu negocio en Zaragoza, podemos tener una primera conversación para conocer tus necesidades y orientarte con honestidad sobre la mejor opción."
        cta={{
          label: "Hablar con Noelia",
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
