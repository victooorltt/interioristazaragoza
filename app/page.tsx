"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Award,
  CheckCircle2,
  HeartHandshake,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AccentBand } from "@/components/AccentBand";

const SITUACIONES = [
  {
    image: "/images/galeria-9.webp",
    alt: "Espacio de descanso y orden en Zaragoza",
    texto: "Sienten que su casa o su negocio no encaja con ellas, pero no saben por dónde empezar.",
  },
  {
    image: "/images/galeria-10.webp",
    alt: "Muestras de materiales y combinaciones de interiorismo",
    texto: "Tienen ideas sueltas, referencias guardadas, pero les cuesta unirlas con coherencia.",
  },
  {
    image: "/images/galeria-3.webp",
    alt: "Iluminación cálida y detalles arquitectónicos cuidados",
    texto: "Les preocupa invertir y no acertar.",
  },
  {
    image: "/images/galeria-7.webp",
    alt: "Distribución de cocina y zona social coordinada",
    texto: "Tienen miedo a perder el control del proceso o a tomar decisiones equivocadas.",
  },
  {
    image: "/images/galeria-11.webp",
    alt: "Armonía, orden y serenidad en baño de diseño",
    texto: "Buscan funcionalidad, orden y calma, sin renunciar al diseño.",
  },
];

const PROYECTOS_DESTACADOS = [
  {
    titulo: "Reforma integral y redistribución luminosa",
    categoria: "Reforma integral · Zaragoza",
    imagen: "/images/galeria-5.webp",
    alt: "Reforma integral en Zaragoza realizada por Noelia Villalba",
    href: "/proyectos",
  },
  {
    titulo: "Diseño de interiores cálido y funcional",
    categoria: "Diseño residencial · Zaragoza",
    imagen: "/images/galeria-4.webp",
    alt: "Diseño de interiores en Paseo Sagasta por Noelia Villalba",
    href: "/proyectos",
  },
  {
    titulo: "Interiorismo comercial para clínica y oficinas",
    categoria: "Espacio comercial · Zaragoza",
    imagen: "/images/galeria-6.webp",
    alt: "Interiorismo comercial en Zaragoza por Noelia Villalba",
    href: "/proyectos",
  },
  {
    titulo: "Reforma de cocina y zona social integrada",
    categoria: "Reforma y decoración · Zaragoza",
    imagen: "/images/galeria-7.webp",
    alt: "Proyecto de reforma y mobiliario en Zaragoza por Noelia Villalba",
    href: "/proyectos",
  },
];

const TESTIMONIOS = [
  {
    autor: "Elena",
    tiempo: "Hace 12 meses",
    comentario: "Trato estupendo. Una gran profesional",
  },
  {
    autor: "Lorena Mostajo",
    tiempo: "Hace 12 meses",
    comentario:
      "Encantadísimos con Noelia. Desde el primer día fue un gusto trabajar con ella: cercana, profesional y con muchísimas ideas. Supo entender lo que queríamos incluso mejor que nosotros, y el resultado ha quedado precioso y muy funcional.",
  },
  {
    autor: "ROSA Mª ABAD",
    tiempo: "Hace 12 meses",
    comentario:
      "Su sensibilidad al captar lo que deseas y el trabajo tan fantástico que realiza solo puedo dar las gracias a Noelia",
  },
];

const PREGUNTAS_FRECUENTES = [
  {
    pregunta: "¿Qué hago exactamente como interiorista y en qué me diferencio de un decorador?",
    respuesta:
      "Una interiorista no solo se ocupa de la parte estética. Mi trabajo consiste en analizar el espacio, la distribución, la funcionalidad, la iluminación y los materiales y muebles para crear un conjunto coherente que funcione en tu día a día. El interiorismo implica planificación, criterio técnico y visión global, no solo elegir muebles o decoración. Por eso, el resultado va mucho más allá de lo visual.",
  },
  {
    pregunta: "¿Cómo te ayudo a definir tu estilo si no lo tienes claro?",
    respuesta:
      "Es una de las dudas más habituales. Mi trabajo empieza escuchándote, viendo cómo vives el espacio, qué te gusta y qué no, incluso aunque no sepas ponerle nombre. A partir de ahí, traduzco esa información en una propuesta clara. No necesitas saber de estilos, para eso estoy yo.",
  },
  {
    pregunta: "¿Cuánto cuesta contratarme como interiorista en Zaragoza?",
    respuesta:
      "Cada proyecto es único y depende del tamaño de la vivienda y del alcance (asesoramiento, diseño integral o reforma). Definimos un presupuesto desde el inicio y priorizamos en función de él.",
  },
  {
    pregunta: "¿Qué incluye un proyecto de interiorismo conmigo?",
    respuesta:
      "Incluye estudio de necesidades, replanteo de distribución, iluminación, propuesta de materiales y mobiliario, y la dirección y coordinación integral de todo el proceso.",
  },
  {
    pregunta: "¿Puedo contratar solo diseño de la vivienda sin hacer obra?",
    respuesta:
      "Sí, es el servicio de diseño de interiores: reorganizamos, amueblamos y decoramos sobre el espacio existente para mejorar cómo se vive.",
  },
  {
    pregunta: "¿Trabajas con mi mobiliario actual o tengo que comprar todo nuevo?",
    respuesta:
      "Aprovechamos las piezas que ya tienes siempre que encajen en el nuevo planteamiento y aporten coherencia al conjunto.",
  },
  {
    pregunta: "¿Realizas también interiorismo comercial para negocios en Zaragoza?",
    respuesta:
      "Sí, diseño oficinas, tiendas, clínicas y espacios comerciales que potencian la identidad de marca y la experiencia del cliente.",
  },
  {
    pregunta: "¿Cómo empezamos a trabajar juntos?",
    respuesta:
      "Todo empieza con una primera conversación sin compromiso para conocer tu espacio, tus necesidades y ver cómo podemos enfocar el proyecto.",
  },
];

function EstrellasGoogle() {
  return (
    <div className="flex items-center gap-1 text-amber-500" aria-label="Calificación 5 estrellas Google">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeReview, setActiveReview] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % TESTIMONIOS.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + TESTIMONIOS.length) % TESTIMONIOS.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      nextReview();
    } else if (diff < -50) {
      prevReview();
    }
    setTouchStart(null);
  };

  return (
    <div className="w-full bg-white text-[#111111]">
      {/* 1. HERO SECTION (Standard Centered Overlay + Accent Theme + Bostak Benefits Row) */}
      <PageHero
        title="Noelia Villalba · Interiorista en Zaragoza"
        subtitle="Aquí no encontrarás una empresa genérica, aquí trabajas conmigo de principio a fin."
        imageSrc="/images/extra-living.webp"
        imageAlt="Estudio de interiorismo Noelia Villalba en Zaragoza"
        variant="centered-overlay"
        theme="accent"
        primaryCta={{
          label: "Hablar con Noelia",
          href: "/contacto",
        }}
        secondaryCta={{
          label: "Ver proyectos",
          href: "/proyectos",
        }}
        benefits={[
          {
            icon: <MapPin className="h-4 w-4" />,
            label: "Zaragoza y alrededores",
          },
          {
            icon: <Award className="h-4 w-4" />,
            label: "+10 años de experiencia",
          },
          {
            icon: <CheckCircle2 className="h-4 w-4" />,
            label: "Proyectos 100% personalizados",
          },
          {
            icon: <HeartHandshake className="h-4 w-4" />,
            label: "Acompañamiento de principio a fin",
          },
        ]}
      />

      {/* 2. DEDICATED SECTION 1: SOY NOELIA VILLALBA (Immediately following Hero) */}
      <section className="w-full bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Full Copy from prompt */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
                Dirección personalizada
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-zinc-950 leading-[1.16]">
                Soy Noelia Villalba y así entiendo el interiorismo en Zaragoza
              </h2>

              <div className="mt-8 space-y-5 text-base sm:text-lg text-zinc-600 font-light leading-relaxed max-w-2xl">
                <p>
                  Soy Noelia Villalba, interiorista en Zaragoza, y desde hace más de diez años acompaño a personas y negocios a transformar sus espacios para que funcionen de verdad en su día a día. No entiendo el interiorismo como una suma de muebles bonitos.
                </p>
                <p>
                  Para mí, ser tu interiorista en Zaragoza significa entender cómo te mueves, qué te estresa al llegar de trabajar y cómo imaginas tu domingo ideal. Yo no impongo mi estilo; uso mi técnica para que el tuyo brille.
                </p>
                <p>
                  Si has llegado hasta aquí, probablemente estés en un momento de cambio. Y mi trabajo empieza justo ahí: entendiendo tu situación y ayudándote a tomar buenas decisiones liderando el proceso junto a mi equipo y colaboradores para que ese cambio merezca la pena.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-zinc-950 hover:bg-neutral-800 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Cuéntame tu proyecto</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: 1 Single Large Photograph (noelia-principal.webp) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-zinc-200/80 bg-zinc-100 group">
                <img
                  src="/images/noelia-principal.webp"
                  alt="Noelia Villalba, interiorista en Zaragoza"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 2: MI FORMA DE HACER INTERIORISMO EN ZARAGOZA */}
      <section className="w-full bg-[#fbfbfb] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column: 1 Single Large Photo (noelia-v2.webp) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-zinc-200/80 bg-zinc-100 group">
                <img
                  src="/images/noelia-v2.webp"
                  alt="Noelia Villalba trabajando en un proyecto de interiorismo"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
                Metodología personalizada
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-zinc-950 leading-[1.16]">
                Mi forma de hacer interiorismo en Zaragoza - Proyectos 100% personalizados
              </h2>

              <div className="mt-8 space-y-5 text-base sm:text-lg text-zinc-600 font-light leading-relaxed max-w-2xl">
                <p>
                  Para mí, el interiorismo no va solo de estética. Va de escuchar, interpretar y traducir necesidades reales en espacios coherentes, funcionales y duraderos.
                </p>
                <p>
                  Trabajo de forma muy cercana, implicándome en cada proyecto desde el primer momento, dirigiendo todo el proceso de diseño y ejecución.
                </p>
                <p>
                  Aquí no hablas con una empresa impersonal ni con varios intermediarios. Hablas conmigo como directora del proyecto, con el respaldo de un equipo y una red de profesionales especializados que hacen posible cada propuesta.
                </p>
                <p>
                  Por eso mi forma de trabajar siempre parte de una conversación honesta, de entender tu punto de partida y de construir una propuesta que tenga sentido para ti, no para una foto.
                </p>
                <p>
                  Trabajo de forma directa, cercana y muy implicada. No delego el criterio ni la relación con el cliente. Cada decisión pasa por mí. Por eso cada proyecto que firmo como Noelia Villalba, interiorista en Zaragoza, es distinto, porque cada persona lo es.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-zinc-950 border border-zinc-900 hover:bg-zinc-950 hover:text-white rounded-xl transition-all duration-200 cursor-pointer shadow-xs"
                >
                  <span>Cuéntame tu caso sin compromiso</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 3: ¿TE RECONOCES EN ALGUNA DE ESTAS SITUACIONES? */}
      <section className="w-full bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3 block">
              Punto de partida
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-zinc-950 leading-[1.16]">
              ¿Te reconoces en alguna de estas situaciones? Puedo ayudarte
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 font-light">
              Muchas de las personas que trabajan conmigo comparten dudas similares:
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
            {SITUACIONES.map((item, idx) => (
              <div
                key={idx}
                className={`group overflow-hidden rounded-2xl bg-white border border-zinc-200/90 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 flex flex-col ${
                  idx === 3
                    ? "lg:col-span-2 lg:col-start-2"
                    : idx === 4
                    ? "md:col-span-2 md:max-w-[calc(50%-0.75rem)] md:mx-auto lg:max-w-none lg:mx-0 lg:col-span-2"
                    : "lg:col-span-2"
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-center">
                  <p className="text-base sm:text-lg text-zinc-800 font-normal leading-relaxed">
                    {item.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bloque editorial de cierre sin caja negra */}
          <div className="mt-12 lg:mt-16 max-w-4xl mx-auto rounded-2xl bg-[#FAF8F5] border border-stone-200/90 p-8 sm:p-10 text-center">
            <p className="text-lg sm:text-xl text-zinc-900 font-normal leading-relaxed max-w-3xl mx-auto">
              Mi trabajo como interiorista en Zaragoza es poner orden a ese proceso, coordinar a los profesionales implicados, ayudarte a ver con claridad y acompañarte para que cada decisión tenga un porqué.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-white font-medium text-base shadow-sm transition-all hover:shadow-md cursor-pointer"
              >
                <span>Contactar con Noelia Villalba</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ACCENT SECTION 1 (bg-[#85B7B4] - Metodología y tranquilidad) */}
      <section className="w-full bg-[#85B7B4] text-zinc-950 py-16 lg:py-24 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text & CTA */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-900/80 mb-3 block">
                Metodología y tranquilidad
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-zinc-950 leading-[1.16]">
                Cómo trabajo yo, Noelia Villalba, como interiorista en Zaragoza
              </h2>
              <p className="mt-6 sm:mt-8 text-base sm:text-lg text-zinc-900 font-normal leading-relaxed max-w-2xl">
                Una de las cosas que más valoran mis clientes es la tranquilidad durante todo el proceso, y eso no ocurre por casualidad. Para desarrollar cada proyecto trabajo junto a un equipo interno y una red estable de colaboradores: arquitectos, empresas de reformas y gremios especializados como carpintería, ebanistería, fontanería, electricidad, domótica, tapicería y fabricantes de mobiliario.
              </p>

              <div className="mt-8 sm:mt-10">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-900 text-white font-medium px-8 py-4 text-base rounded-xl shadow-lg transition-all hover:shadow-xl cursor-pointer"
                >
                  <span>Cuéntame tu proyecto de interiorismo</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Photo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-black/15 bg-[#71A6A3] group">
                <img
                  src="/images/noelia-v3.webp"
                  alt="Noelia Villalba trabajando en un proyecto de interiorismo en Zaragoza"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 5: PROYECTOS DE INTERIORISMO (+150 proyectos con 4 fotos de calidad) */}
      <section className="w-full bg-[#fbfbfb] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2 block">
                Portfolio y trayectoria
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-zinc-950 leading-[1.16]">
                Proyectos de interiorismo firmados por Noelia Villalba
              </h2>
              <p className="mt-3 text-lg sm:text-xl text-zinc-800 font-normal">
                Cada casa cuenta una historia. Aquí puedes ver algunas de ellas.
              </p>
              <p className="mt-4 text-base text-zinc-600 font-light leading-relaxed">
                A lo largo de estos 10 años he desarrollado más de 150 proyectos muy distintos entre sí: diseño de viviendas de obra nueva, reformas integrales y parciales y espacios comerciales. Cada proyecto responde a una necesidad concreta, a un estilo de vida y a un momento personal o profesional diferente. Detrás de cada proyecto hay un trabajo de diseño, planificación y coordinación con arquitectos, reformistas y gremios especializados, para que el resultado final no solo sea bonito, sino funcional y bien ejecutado.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 hover:text-[#4D7876] transition-colors pb-1 border-b-2 border-zinc-950 hover:border-[#4D7876]"
              >
                <span>Ver más proyectos de Noelia Villalba</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 4 Showcase Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROYECTOS_DESTACADOS.map((proyecto, idx) => (
              <Link
                key={idx}
                href={proyecto.href}
                className="group flex flex-col bg-white border border-zinc-200/90 rounded-2xl overflow-hidden hover:border-zinc-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-zinc-500 tracking-wide uppercase">
                      {proyecto.categoria}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-zinc-950 group-hover:text-[#4D7876] transition-colors leading-snug">
                      {proyecto.titulo}
                    </h3>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-zinc-950 group-hover:translate-x-1 transition-transform">
                    <span>Ver proyecto</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS (Google 5 estrellas, clean grid) */}
      <section className="w-full bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2 block">
              Opiniones verificadas
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-zinc-950 leading-[1.16]">
              Lo que dicen quienes han trabajado con Noelia Villalba
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 font-light">
              Detrás de cada proyecto hay personas que buscaban sentirse acompañadas, comprendidas y seguras durante el proceso.
            </p>
          </div>

          {/* Desktop Grid (3 columns) */}
          <div className="mt-12 hidden lg:grid lg:grid-cols-3 gap-8">
            {TESTIMONIOS.map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#fbfbfb] rounded-2xl border border-zinc-200/90 flex flex-col justify-between shadow-xs hover:border-zinc-300 hover:shadow-md transition-all"
              >
                <div>
                  <div className="pb-6 border-b border-zinc-200/80">
                    <EstrellasGoogle />
                  </div>

                  <p className="mt-6 text-base text-zinc-700 font-light leading-relaxed italic">
                    &ldquo;{item.comentario}&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-200/80">
                  <p className="text-sm font-semibold text-zinc-950">{item.autor}</p>
                  <p className="text-xs text-zinc-400 mt-0.5">{item.tiempo}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Carousel */}
          <div className="lg:hidden mt-10">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${activeReview * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {TESTIMONIOS.map((item, idx) => (
                  <div key={idx} className="w-full shrink-0 px-1">
                    <div className="p-7 sm:p-8 bg-[#fbfbfb] rounded-2xl border border-zinc-200/90 flex flex-col justify-between shadow-xs min-h-[300px]">
                      <div>
                        <div className="pb-5 border-b border-zinc-200/80">
                          <EstrellasGoogle />
                        </div>

                        <p className="mt-5 text-base sm:text-lg text-zinc-700 font-light leading-relaxed italic">
                          &ldquo;{item.comentario}&rdquo;
                        </p>
                      </div>

                      <div className="mt-8 pt-5 border-t border-zinc-200/80">
                        <p className="text-sm font-semibold text-zinc-950">{item.autor}</p>
                        <p className="text-xs text-zinc-400 mt-0.5">{item.tiempo}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                type="button"
                onClick={prevReview}
                aria-label="Reseña anterior"
                className="p-2.5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-800 transition-colors cursor-pointer shadow-xs active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2">
                {TESTIMONIOS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveReview(i)}
                    aria-label={`Ir a la reseña ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                      activeReview === i ? "w-6 bg-zinc-950" : "w-2 bg-zinc-300 hover:bg-zinc-400"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={nextReview}
                aria-label="Siguiente reseña"
                className="p-2.5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-800 transition-colors cursor-pointer shadow-xs active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PREGUNTAS FRECUENTES (acordeón interactivo) */}
      <section className="w-full bg-[#fbfbfb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2 block">
              Resolvemos tus dudas
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-zinc-950 leading-[1.16]">
              Preguntas frecuentes antes de contratarme como interiorista en Zaragoza
            </h2>
          </div>

          <div className="mt-12 divide-y divide-zinc-200 border-t border-b border-zinc-200">
            {PREGUNTAS_FRECUENTES.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-6">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-medium text-zinc-950 group-hover:text-[#4D7876] transition-colors">
                      {faq.pregunta}
                    </span>
                    <span className="p-1.5 rounded-lg border border-zinc-300 text-zinc-500 group-hover:border-zinc-900 group-hover:text-zinc-900 transition-all shrink-0">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-2 text-base text-zinc-600 font-light leading-relaxed pr-6">
                      <p>{faq.respuesta}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. ACCENT SECTION 2 (MANDATORY ACCENT BACKGROUND: bg-[#85B7B4] Closing CTA) */}
      <AccentBand
        title="Cada espacio tiene una historia. Creemos la tuya"
        description="Diseñemos el hogar que siempre has querido. Hablas directamente conmigo, de principio a fin."
        cta={{
          label: "Hablar con Noelia Villalba",
          href: "/contacto",
        }}
        align="center"
      />
    </div>
  );
}
