"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { tokens } from "@/lib/tokens";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const serviceSubroutes = tokens.routes.find((r) => r.path === "/servicios")?.subroutes || [
    { name: "Diseño de Interiores", path: "/servicios/diseno-interiores-zaragoza" },
    { name: "Reformas Zaragoza", path: "/servicios/reformas-zaragoza" },
    { name: "Interiorismo comercial", path: "/servicios/interiorismo-comercial-zaragoza" },
  ];

  const isServicesActive = pathname.startsWith("/servicios");

  const getDesktopLinkClass = (isActive: boolean) =>
    `text-sm transition-colors relative py-1 ${
      isActive
        ? "text-zinc-950 font-semibold after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-zinc-950"
        : "text-zinc-900 font-medium hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#85B7B4] border-b border-black/10 shadow-sm text-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Plain img src="/logo.png" (clean, no container, no pill) */}
          <Link href="/" className="inline-block flex-shrink-0" aria-label="Noelia Villalba - Inicio">
            <img
              src="/logo.png"
              alt="Noelia Villalba - Interiorista en Zaragoza"
              className="h-10 md:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Navegación principal">
            <Link
              href="/"
              className={getDesktopLinkClass(pathname === "/")}
            >
              Inicio
            </Link>

            <Link
              href="/proyectos"
              className={getDesktopLinkClass(pathname.startsWith("/proyectos"))}
            >
              Proyectos
            </Link>

            {/* Dropdown Servicios */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 text-sm transition-colors relative py-1 ${
                  isServicesActive
                    ? "text-zinc-950 font-semibold after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-zinc-950"
                    : "text-zinc-900 font-medium hover:text-white"
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Servicios</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 z-50">
                  <div className="bg-white border border-zinc-200/90 rounded-xl shadow-xl py-2 overflow-hidden text-zinc-900">
                    <Link
                      href="/servicios"
                      className="block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 hover:text-zinc-950 hover:bg-[#85B7B4]/15 transition-colors"
                    >
                      Todos los servicios
                    </Link>
                    <div className="h-px bg-zinc-100 my-1" />
                    {serviceSubroutes.map((sub) => (
                      <Link
                        key={sub.path}
                        href={sub.path}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          pathname === sub.path
                            ? "bg-[#85B7B4]/20 text-zinc-950 font-semibold"
                            : "text-zinc-700 hover:bg-[#85B7B4]/15 hover:text-zinc-950 font-medium"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contacto"
              className={getDesktopLinkClass(pathname === "/contacto")}
            >
              Contacto
            </Link>
          </nav>

          {/* Desktop Right Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+34620896932"
              className="hidden lg:inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-950 bg-black/5 hover:bg-black/10 px-3.5 py-2 rounded-xl transition-all border border-black/5"
              aria-label="Llamar al +34 620 89 69 32"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-950" />
              <span>+34 620 89 69 32</span>
            </a>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-zinc-950 hover:bg-zinc-900 rounded-xl shadow-sm transition-all duration-200"
            >
              Hablar con Noelia
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 text-zinc-950 hover:text-white transition-colors"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/10 bg-[#85B7B4] text-zinc-950">
          <div className="px-4 pt-4 pb-6 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="space-y-1" aria-label="Navegación móvil">
              <Link
                href="/"
                className={`block px-3.5 py-2.5 text-base rounded-lg transition-colors ${
                  pathname === "/"
                    ? "text-zinc-950 font-bold bg-black/10"
                    : "text-zinc-900 hover:text-white hover:bg-black/5 font-medium"
                }`}
              >
                Inicio
              </Link>

              <Link
                href="/proyectos"
                className={`block px-3.5 py-2.5 text-base rounded-lg transition-colors ${
                  pathname.startsWith("/proyectos")
                    ? "text-zinc-950 font-bold bg-black/10"
                    : "text-zinc-900 hover:text-white hover:bg-black/5 font-medium"
                }`}
              >
                Proyectos
              </Link>

              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 text-base font-medium text-zinc-900 hover:text-white hover:bg-black/5 rounded-lg"
                >
                  <span className={isServicesActive ? "font-bold text-zinc-950" : ""}>
                    Servicios
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-black/5 rounded-lg border-l-2 border-black/20 ml-3 my-1">
                    <Link
                      href="/servicios"
                      className="block px-3 py-2 text-sm text-zinc-800 hover:text-zinc-950 font-medium"
                    >
                      Todos los servicios
                    </Link>
                    {serviceSubroutes.map((sub) => (
                      <Link
                        key={sub.path}
                        href={sub.path}
                        className={`block px-3 py-2 text-sm transition-colors rounded ${
                          pathname === sub.path
                            ? "text-zinc-950 font-bold bg-black/10"
                            : "text-zinc-900 hover:text-white font-medium"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contacto"
                className={`block px-3.5 py-2.5 text-base rounded-lg transition-colors ${
                  pathname === "/contacto"
                    ? "text-zinc-950 font-bold bg-black/10"
                    : "text-zinc-900 hover:text-white hover:bg-black/5 font-medium"
                }`}
              >
                Contacto
              </Link>
            </nav>

            <div className="pt-4 border-t border-black/10 space-y-3">
              <a
                href="tel:+34620896932"
                className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-950 bg-black/10 hover:bg-black/15 transition-colors"
              >
                <Phone className="w-4 h-4 text-zinc-950" />
                <span>+34 620 89 69 32</span>
              </a>

              <Link
                href="/contacto"
                className="block w-full text-center py-3 px-4 text-sm font-medium text-white bg-zinc-950 hover:bg-zinc-900 rounded-xl transition-all shadow-sm"
              >
                Hablar con Noelia
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
