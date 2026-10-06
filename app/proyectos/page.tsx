"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { AccentBand } from "@/components/AccentBand";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Phone,
  Home,
  Store,
  Award,
  ShieldCheck,
} from "lucide-react";

type ProjectCategory = "Todos" | "Viviendas" | "Reformas Integrales" | "Espacios Comerciales";

interface ProjectItem {
  id: string;
  image: string;
  title: string;
  category: "Viviendas" | "Reformas Integrales" | "Espacios Comerciales";
  location: string;
  description: string;
  highlights: string[];
}

const CATEGORIES: ProjectCategory[] = [
  "Todos",
  "Viviendas",
  "Reformas Integrales",
  "Espacios Comerciales",
];

const PROJECTS: ProjectItem[] = [
  {
    id: "galeria-1",
    image: "/images/galeria-1.webp",
    title: "Salón y zona de estar contemporánea",
    category: "Viviendas",
    location: "Zaragoza Centro",
    description:
      "Distribución serena y equilibrada con luz natural tamizada, carpintería a medida integrada y una paleta de textiles cálidos diseñada para el descanso diario.",
    highlights: [
      "Mobiliario contemporáneo y piezas de autor",
      "Paleta de tonos neutros, maderas y arenas",
      "Aprovechamiento integral de la luz natural",
    ],
  },
  {
    id: "galeria-5",
    image: "/images/galeria-5.webp",
    title: "Reforma integral de vivienda",
    category: "Reformas Integrales",
    location: "Gran Vía, Zaragoza",
    description:
      "Transformación total de planta para convertir una vivienda compartimentada en un hogar diáfano, optimizando circulaciones y almacenaje oculto.",
    highlights: [
      "Redistribución completa de tabiquería",
      "Almacenaje empotrado a medida de suelo a techo",
      "Renovación integral de instalaciones y climatización",
    ],
  },
  {
    id: "galeria-4",
    image: "/images/galeria-4.webp",
    title: "Diseño de vivienda y comedor",
    category: "Viviendas",
    location: "Montecanal, Zaragoza",
    description:
      "Conexión visual armónica entre la zona de comedor y el salón principal, unificando materiales nobles y una paleta cromática sosegada.",
    highlights: [
      "Mesa y carpintería en madera maciza",
      "Conexión visual abierta hacia la estancia principal",
      "Gama cromática equilibrada y atemporal",
    ],
  },
  {
    id: "extra-kitchen",
    image: "/images/extra-kitchen.webp",
    title: "Cocina de autor con isla integrada",
    category: "Reformas Integrales",
    location: "Romareda, Zaragoza",
    description:
      "Diseño culinario de alta gama combinando frentes en tonos grafito mate, madera alistonada y encimeras porcelánicas ultrarresistentes con zona de comedor.",
    highlights: [
      "Isla central con barra desayunadora integrada",
      "Campana extractora encastrada y muebles sin tirador",
      "Iluminación técnica y perimetral regulable",
    ],
  },
  {
    id: "galeria-7",
    image: "/images/galeria-7.webp",
    title: "Cocina y distribución abierta",
    category: "Reformas Integrales",
    location: "Actur, Zaragoza",
    description:
      "Cocina de concepto abierto integrada en la zona de día con isla central de trabajo, extracción invisible y armarios panelados de máxima capacidad.",
    highlights: [
      "Isla central con zona de trabajo y desayuno",
      "Frentes continuos sin tirador para limpieza visual",
      "Superficies porcelánicas de alta durabilidad",
    ],
  },
  {
    id: "galeria-6",
    image: "/images/galeria-6.webp",
    title: "Espacio comercial y profesional",
    category: "Espacios Comerciales",
    location: "Casco Histórico, Zaragoza",
    description:
      "Interiorismo comercial enfocado en transmitir la identidad de la marca desde el primer contacto visual, cuidando la acústica y el recorrido del cliente.",
    highlights: [
      "Diseño alineado a la identidad de marca",
      "Zonificación de atención y recorrido comercial",
      "Iluminación escenográfica de acento en producto",
    ],
  },
  {
    id: "extra-living",
    image: "/images/extra-living.webp",
    title: "Salón diáfano con luz natural",
    category: "Viviendas",
    location: "Valdespartera, Zaragoza",
    description:
      "Espacio social amplio y luminoso con carpintería en madera noble, textiles orgánicos y una distribución pensada para favorecer el confort diario en familia.",
    highlights: [
      "Aprovechamiento integral de ventanales exteriores",
      "Solución de almacenaje bajo a medida",
      "Textiles naturales de lino y tonos arena",
    ],
  },
  {
    id: "galeria-3",
    image: "/images/galeria-3.webp",
    title: "Detalle de iluminación y materiales",
    category: "Reformas Integrales",
    location: "Sector Universidad, Zaragoza",
    description:
      "Integración de luminotecnia rasante e indirecta que realza las texturas continuas de los paramentos verticales y genera atmósferas envolventes.",
    highlights: [
      "Iluminación técnica cálida 2700K",
      "Encuentros limpios entre materiales nobles",
      "Revestimientos de alta textura táctil",
    ],
  },
  {
    id: "galeria-9",
    image: "/images/galeria-9.webp",
    title: "Dormitorio principal y vestidor",
    category: "Viviendas",
    location: "Ruiseñores, Zaragoza",
    description:
      "Entorno de descanso sosegado con vestidor a medida, iluminación integrada en cabecero y textiles de tonos suaves.",
    highlights: [
      "Vestidor personalizado con divisiones interiores",
      "Cabecero a medida con luz indirecta de lectura",
      "Ambiente acústicamente protegido y sereno",
    ],
  },
  {
    id: "extra-commercial",
    image: "/images/extra-commercial.webp",
    title: "Boutique comercial y punto de venta",
    category: "Espacios Comerciales",
    location: "Paseo Independencia, Zaragoza",
    description:
      "Diseño comercial donde la experiencia de compra se enriquece con iluminación de acento, expositores a medida y una atmósfera refinada.",
    highlights: [
      "Mobiliario de exposición exclusivo a medida",
      "Pavimento continuo resistente a alto tránsito",
      "Identidad visual coherente y memorable",
    ],
  },
  {
    id: "galeria-11",
    image: "/images/galeria-11.webp",
    title: "Baño contemporáneo y acabados",
    category: "Reformas Integrales",
    location: "Miraflores, Zaragoza",
    description:
      "Renovación integral de baño con grifería termostática empotrada, plato de ducha a ras de suelo y hornacinas retroiluminadas.",
    highlights: [
      "Revestimientos porcelánicos de gran formato",
      "Grifería empotrada de diseño contemporáneo",
      "Hornacina iluminada integrada en zona de ducha",
    ],
  },
  {
    id: "galeria-8",
    image: "/images/galeria-8.webp",
    title: "Espacio de trabajo y despacho",
    category: "Espacios Comerciales",
    location: "Centro Empresarial, Zaragoza",
    description:
      "Soluciones de oficina y despacho profesional con mobiliario ergonómico, tratamiento acústico sutil y separación ligera de ambientes.",
    highlights: [
      "Puestos de trabajo ergonómicos",
      "Divisores ligeros de vidrio y madera",
      "Confort acústico y orden en cableado",
    ],
  },
  {
    id: "galeria-10",
    image: "/images/galeria-10.webp",
    title: "Detalle decorativo y texturas",
    category: "Viviendas",
    location: "Zaragoza",
    description:
      "Precisión en los pequeños remates: encuentros de zócalos, piezas singulares y texturas seleccionadas para enriquecer cada estancia.",
    highlights: [
      "Encuentros constructivos al detalle",
      "Selección curada de accesorios y piezas de apoyo",
      "Equilibrio entre textura cerámica y madera",
    ],
  },
  {
    id: "galeria-2",
    image: "/images/galeria-2.webp",
    title: "Composición de estancia y luz",
    category: "Viviendas",
    location: "Paseo de Sagasta, Zaragoza",
    description:
      "Diálogo entre piezas de diseño contemporáneo y elementos arquitectónicos originales cuidadosamente restaurados.",
    highlights: [
      "Piezas singulares y mobiliario a medida",
      "Textiles naturales de lino y algodón",
      "Zonificación fluida sin divisiones visuales",
    ],
  },
];

export default function ProyectosPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Todos");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === "Todos"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  const handleNextProject = useCallback(() => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  }, [selectedProject, filteredProjects]);

  const handlePrevProject = useCallback(() => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  }, [selectedProject, filteredProjects]);

  // Keyboard navigation for modal
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!selectedProject) return;
      if (event.key === "Escape") {
        setSelectedProject(null);
      } else if (event.key === "ArrowRight") {
        handleNextProject();
      } else if (event.key === "ArrowLeft") {
        handlePrevProject();
      }
    }

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, handleNextProject, handlePrevProject]);

  return (
    <div className="w-full bg-white text-[#111111]">
      {/* 1. HERO SECTION */}
      <PageHero
        title="Proyectos de Interiorismo en Zaragoza"
        subtitle="Cada casa cuenta una historia. Una selección de espacios reales diseñados para ser vividos."
        imageSrc="/images/galeria-1.webp"
        imageAlt="Proyectos de interiorismo en Zaragoza diseñados por Noelia Villalba"
        variant="centered-overlay"
        theme="accent"
        primaryCta={{
          label: "Hablar de tu proyecto",
          href: "/contacto",
        }}
        secondaryCta={{
          label: "Ver galería completa",
          href: "#galeria",
        }}
      />

      {/* 2. ACCENT SECTION 1 (MANDATORY: Full content section with bg-[#85B7B4]) */}
      <section className="w-full bg-[#85B7B4] text-[#111111] py-16 sm:py-24 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#111111] leading-tight">
                Proyectos de interiorismo firmados por Noelia Villalba
              </h2>

              <p className="text-lg sm:text-xl text-zinc-950 font-normal leading-relaxed">
                Cada casa cuenta una historia. Aquí puedes ver algunas de ellas.
              </p>

              <div className="space-y-4 text-base sm:text-lg text-zinc-900 font-normal leading-relaxed">
                <p>
                  A lo largo de estos 10 años he desarrollado más de 150 proyectos muy distintos entre
                  sí: diseño de viviendas de obra nueva, reformas integrales y parciales y espacios
                  comerciales. Cada proyecto responde a una necesidad concreta, a un estilo de vida y a
                  un momento personal o profesional diferente.
                </p>
                <p>
                  Detrás de cada proyecto hay un trabajo de diseño, planificación y coordinación con
                  arquitectos, reformistas y gremios especializados, para que el resultado final no solo
                  sea bonito, sino funcional y bien ejecutado.
                </p>
                <p>
                  Aquí puedes ver una selección de proyectos reales, con soluciones pensadas para cada
                  caso, donde el diseño no es solo visual, sino funcional y coherente con quien lo va a
                  vivir.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#111111] hover:text-black underline underline-offset-4 transition-colors"
                >
                  Consultar disponibilidad para tu proyecto en Zaragoza
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl border border-black/10 bg-[#71A6A3] group">
                <img
                  src="/images/noelia-v4.webp"
                  alt="Noelia Villalba en su estudio coordinando proyectos y materiales"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FILTERABLE GALLERY SECTION */}
      <section id="galeria" className="w-full py-16 sm:py-24 border-b border-zinc-200 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[#111111]">
              Galería de proyectos
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              Selección de reformas integrales, viviendas y espacios comerciales en Zaragoza. Haz clic
              en cualquier fotografía para consultar el detalle de la estancia.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-6 border-b border-zinc-200 pb-4 mb-10">
            {CATEGORIES.map((category) => {
              const count =
                category === "Todos"
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === category).length;
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`pb-2 text-sm sm:text-base font-medium transition-all relative ${
                    isActive
                      ? "text-[#111111] border-b-2 border-[#111111]"
                      : "text-neutral-500 hover:text-[#111111] border-b-2 border-transparent"
                  }`}
                >
                  <span>{category}</span>
                  <span className="ml-1.5 text-xs text-neutral-400 font-normal">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col bg-white border border-zinc-200 hover:border-zinc-400 transition-all duration-300"
              >
                {/* Image Container */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100 text-left focus:outline-none"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 text-xs font-medium bg-white text-[#111111] shadow-sm">
                      Ver detalle
                    </span>
                  </div>
                </button>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-neutral-500 font-normal mb-2">
                      <span>{project.category}</span>
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-lg font-medium text-[#111111] leading-snug group-hover:text-[#4D7876] transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-neutral-600 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#111111] hover:text-[#4D7876] underline underline-offset-4 transition-colors"
                    >
                      Ver proyecto ampliado
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DETAIL HIGHLIGHTS SECTION (Lighting, Open layouts, Noble materials) */}
      <section className="w-full bg-[#FAFAFA] py-16 sm:py-24 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[#111111]">
              Criterio y ejecución en cada estancia
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              Un buen proyecto de interiorismo se define por las decisiones que no se ven a simple
              vista: la distribución precisa, la luz estudiada y la coordinación técnica en obra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Lighting (galeria-3.webp) */}
            <div className="bg-white border border-zinc-200 p-6 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100 mb-6">
                <img
                  src="/images/galeria-3.webp"
                  alt="Detalle de iluminación y materiales en proyecto de interiorismo"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-medium text-[#111111]">
                Iluminación técnica y ambiente
              </h3>
              <p className="mt-2.5 text-sm text-neutral-600 font-light leading-relaxed">
                Diseñamos la luz no como un añadido, sino como un elemento estructural del espacio.
                Focos empotrados, candilejas perimetrales y luminarias decorativas se coordinan para
                transformar cada estancia a lo largo del día.
              </p>
            </div>

            {/* Feature 2: Open layouts (galeria-7.webp) */}
            <div className="bg-white border border-zinc-200 p-6 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100 mb-6">
                <img
                  src="/images/galeria-7.webp"
                  alt="Cocina abierta integrada al salón con isla"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-medium text-[#111111]">
                Distribución abierta y almacenaje
              </h3>
              <p className="mt-2.5 text-sm text-neutral-600 font-light leading-relaxed">
                Optimizamos cada metro cuadrado eliminando tabiques innecesarios y creando soluciones de
                carpintería integrada donde cada objeto encuentra su lugar natural sin saturar el
                ambiente.
              </p>
            </div>

            {/* Feature 3: Noble materials (extra-kitchen.webp) */}
            <div className="bg-white border border-zinc-200 p-6 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100 mb-6">
                <img
                  src="/images/extra-kitchen.webp"
                  alt="Materiales nobles, maderas y encimeras porcelánicas"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-medium text-[#111111]">
                Materiales nobles y durabilidad
              </h3>
              <p className="mt-2.5 text-sm text-neutral-600 font-light leading-relaxed">
                Seleccionamos cerámicas de gran formato, maderas alistonadas y superficies porcelánicas que
                aseguran resistencia al uso diario, tacto acogedor y belleza atemporal con el paso de los
                años.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ACCENT SECTION 2 (MANDATORY: Closing CTA with bg-[#85B7B4]) */}
      <AccentBand
        title="Cada espacio tiene una historia. Creemos la tuya"
        description="Diseñemos el hogar que siempre has querido. Habla directamente conmigo, Noelia Villalba, de principio a fin."
        cta={{
          label: "Hablar con Noelia Villalba",
          href: "/contacto",
        }}
        secondaryCta={{
          label: "Llamar al 620 89 69 32",
          href: "tel:+34620896932",
        }}
        align="center"
      />

      {/* 6. LIGHTBOX MODAL */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-white text-[#111111] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-white">
              <div className="flex items-center gap-3 text-xs text-neutral-500">
                <span className="font-medium text-[#111111]">{selectedProject.category}</span>
                <span>·</span>
                <span>{selectedProject.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevProject}
                  aria-label="Proyecto anterior"
                  className="p-1.5 text-neutral-600 hover:text-[#111111] hover:bg-neutral-100 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextProject}
                  aria-label="Proyecto siguiente"
                  className="p-1.5 text-neutral-600 hover:text-[#111111] hover:bg-neutral-100 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Cerrar modal"
                  className="p-1.5 ml-2 text-neutral-600 hover:text-[#111111] hover:bg-neutral-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Scrollable */}
            <div className="overflow-y-auto flex-1 p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Photo */}
                <div className="lg:col-span-7">
                  <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden border border-zinc-200">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light text-[#111111] leading-snug">
                      {selectedProject.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                      {selectedProject.description}
                    </p>

                    <div className="mt-6 pt-6 border-t border-zinc-200">
                      <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium mb-3">
                        Aspectos destacados
                      </p>
                      <ul className="space-y-2 text-sm text-neutral-700">
                        {selectedProject.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 bg-[#85B7B4] mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-col gap-3">
                    <Link
                      href="/contacto"
                      onClick={() => setSelectedProject(null)}
                      className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-[#111111] hover:bg-[#85B7B4] hover:text-[#111111] transition-colors text-center"
                    >
                      Consultar proyecto similar
                    </Link>
                    <a
                      href="tel:+34620896932"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#111111] border border-zinc-300 hover:border-[#111111] bg-white transition-colors text-center"
                    >
                      <Phone className="w-4 h-4" />
                      Llamar al 620 89 69 32
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
