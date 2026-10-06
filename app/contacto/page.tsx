"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { tokens } from "@/lib/tokens";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
      });
    }, 600);
  };

  const phoneLink = `tel:${tokens.site.phone.replace(/\s+/g, "")}`;

  return (
    <div className="w-full bg-white text-[#111111]">
      {/* 1. HERO SECTION WITH ACCENT COLOR & BENEFIT BADGES */}
      <PageHero
        variant="centered-overlay"
        theme="accent"
        title="¿Quieres más información?"
        subtitle="Escríbenos y contactaremos contigo. Cuéntame tu caso sin compromiso."
        imageSrc="/images/extra-living.webp"
        imageAlt="Diseño de interiores en Zaragoza por Noelia Villalba"
        primaryCta={{
          label: "Escribir un mensaje",
          href: "#formulario",
        }}
        secondaryCta={{
          label: "Llamar +34 620 89 69 32",
          href: phoneLink,
        }}
      />

      {/* 2. FORM & STUDIO INFORMATION (2 COLUMNS) */}
      <section
        id="formulario"
        className="w-full py-16 sm:py-20 lg:py-24 border-b border-zinc-200 bg-neutral-50/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* COLUMN 1: INTERACTIVE CONTACT FORM */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-zinc-200 shadow-xs">
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-[#4D7876] font-semibold">
                  Contacto Directo
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-light tracking-tight text-[#111111]">
                  Escríbenos y contactaremos contigo
                </h2>
                <p className="mt-3 text-sm text-neutral-600 font-light leading-relaxed">
                  Rellena este breve formulario y responderé personalmente a tu
                  mensaje lo antes posible para valorar tu espacio y tus
                  necesidades.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 border border-[#85B7B4]/50 bg-[#85B7B4]/10 text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 flex items-center justify-center bg-[#85B7B4] text-[#111111]">
                      <CheckCircle2 className="w-5 h-5" />
                    </span>
                    <h3 className="text-lg font-medium text-[#111111]">
                      Mensaje enviado con éxito
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed font-light">
                    Muchas gracias por contactar. He recibido tu solicitud y me
                    pondré en contacto contigo en un plazo máximo de 24-48 horas
                    laborables.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 inline-flex items-center text-xs uppercase tracking-wider font-semibold text-[#111111] hover:text-[#4D7876] transition-colors"
                  >
                    Enviar otro mensaje &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombre (requerido) */}
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-xs uppercase tracking-wider text-neutral-600 font-medium mb-2"
                    >
                      Nombre <span className="text-[#4D7876]">*</span>
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-3 bg-neutral-50/70 border border-zinc-200 text-[#111111] text-sm focus:outline-none focus:border-[#85B7B4] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Tu correo electrónico (requerido) */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-wider text-neutral-600 font-medium mb-2"
                    >
                      Tu correo electrónico{" "}
                      <span className="text-[#4D7876]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tunombre@ejemplo.com"
                      className="w-full px-4 py-3 bg-neutral-50/70 border border-zinc-200 text-[#111111] text-sm focus:outline-none focus:border-[#85B7B4] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Tu teléfono (requerido) */}
                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-xs uppercase tracking-wider text-neutral-600 font-medium mb-2"
                    >
                      Tu teléfono <span className="text-[#4D7876]">*</span>
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+34 600 00 00 00"
                      className="w-full px-4 py-3 bg-neutral-50/70 border border-zinc-200 text-[#111111] text-sm focus:outline-none focus:border-[#85B7B4] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Asunto */}
                  <div>
                    <label
                      htmlFor="asunto"
                      className="block text-xs uppercase tracking-wider text-neutral-600 font-medium mb-2"
                    >
                      Asunto
                    </label>
                    <input
                      id="asunto"
                      name="asunto"
                      type="text"
                      value={formData.asunto}
                      onChange={handleChange}
                      placeholder="Ej. Reforma integral, diseño de vivienda, cocina, interiorismo comercial..."
                      className="w-full px-4 py-3 bg-neutral-50/70 border border-zinc-200 text-[#111111] text-sm focus:outline-none focus:border-[#85B7B4] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-xs uppercase tracking-wider text-neutral-600 font-medium mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntame sobre tu espacio, la ubicación aproximada en Zaragoza o alrededores, y lo que imaginas lograr..."
                      className="w-full px-4 py-3 bg-neutral-50/70 border border-zinc-200 text-[#111111] text-sm focus:outline-none focus:border-[#85B7B4] focus:bg-white transition-colors resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-[#111111] hover:bg-[#85B7B4] hover:text-[#111111] transition-all duration-200 disabled:opacity-60 cursor-pointer shadow-xs"
                    >
                      {isSubmitting ? "Enviando mensaje..." : "Enviar mensaje"}
                    </button>
                    <p className="text-xs text-neutral-500 font-light">
                      Respuesta personalizada en menos de 48h.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* COLUMN 2: STUDIO INFORMATION & PHOTOS */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              {/* Dual Photos: Noelia Principal & Noelia V2 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group overflow-hidden bg-neutral-100 border border-zinc-200 aspect-[4/5] relative shadow-2xs">
                  <img
                    src="/images/noelia-principal.webp"
                    alt="Noelia Villalba, interiorista en Zaragoza"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-3 pt-6">
                    <p className="text-xs font-medium text-white">Noelia Villalba</p>
                    <p className="text-[11px] text-zinc-300 font-light">Directora & Diseñadora</p>
                  </div>
                </div>

                <div className="group overflow-hidden bg-neutral-100 border border-zinc-200 aspect-[4/5] relative shadow-2xs">
                  <img
                    src="/images/noelia-v2.webp"
                    alt="Noelia Villalba en su estudio de interiorismo en Zaragoza"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-3 pt-6">
                    <p className="text-xs font-medium text-white">Estudio Zaragoza</p>
                    <p className="text-[11px] text-zinc-300 font-light">Diseño & Planificación</p>
                  </div>
                </div>
              </div>

              {/* Quote from Noelia */}
              <blockquote className="border-l-2 border-[#85B7B4] bg-white p-6 border-y border-r border-zinc-200 shadow-2xs">
                <p className="text-base sm:text-lg font-light italic text-[#111111] leading-relaxed">
                  &ldquo;Aquí no encontrarás una empresa genérica. Aquí trabajas
                  conmigo, Noelia Villalba, de principio a fin.&rdquo;
                </p>
                <cite className="mt-3 block text-xs uppercase tracking-wider text-neutral-500 font-medium not-italic">
                  Noelia Villalba &middot; Interiorista en Zaragoza
                </cite>
              </blockquote>

              {/* Studio Details */}
              <div className="bg-white p-6 sm:p-8 border border-zinc-200 space-y-6 shadow-2xs">
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                    Estudio &amp; Dirección
                  </h3>
                  <p className="text-sm font-medium text-[#111111]">
                    {tokens.site.name} &middot; {tokens.site.title}
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 font-light">
                    {tokens.site.address}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                    Teléfono directo
                  </h3>
                  <a
                    href={phoneLink}
                    className="text-base font-medium text-[#111111] hover:text-[#4D7876] transition-colors inline-block"
                  >
                    {tokens.site.phoneDisplay}
                  </a>
                  <p className="mt-0.5 text-xs text-neutral-500 font-light">
                    Lunes a Viernes &middot; 9:00 a 19:00
                  </p>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                    Correo electrónico
                  </h3>
                  <a
                    href={`mailto:${tokens.site.email}`}
                    className="text-base font-medium text-[#111111] hover:text-[#4D7876] transition-colors inline-block"
                  >
                    {tokens.site.email}
                  </a>
                  <p className="mt-0.5 text-xs text-neutral-500 font-light">
                    Respuesta en 24-48h laborables
                  </p>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                    Ámbito de actuación
                  </h3>
                  <p className="text-sm text-neutral-700 font-light">
                    Zaragoza capital, comarca y alrededores.
                  </p>
                </div>

                {/* Social links */}
                <div className="pt-4 border-t border-zinc-200">
                  <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                    Redes sociales
                  </h3>
                  <div className="flex items-center gap-3">
                    <a
                      href={tokens.site.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram de Noelia Villalba"
                      className="p-2.5 border border-zinc-200 text-neutral-600 hover:text-[#111111] hover:border-[#111111] transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href={tokens.site.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook de Noelia Villalba"
                      className="p-2.5 border border-zinc-200 text-neutral-600 hover:text-[#111111] hover:border-[#111111] transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href={tokens.site.pinterest}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Pinterest de Noelia Villalba"
                      className="p-2.5 border border-zinc-200 text-neutral-600 hover:text-[#111111] hover:border-[#111111] transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.022 11.985.022z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
