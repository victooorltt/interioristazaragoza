import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { tokens } from "@/lib/tokens";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function PinterestIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-zinc-200 text-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Columna 1: Identidad */}
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label="Noelia Villalba - Inicio">
              <img
                src="/logo.png"
                alt="Noelia Villalba - Interiorista en Zaragoza"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
              Interiorista en Zaragoza
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
              Estudio de diseño de interiores, proyectos a medida y reformas en Zaragoza. Espacios pensados para ser vividos con armonía y funcionalidad.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
              Estudio
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-neutral-600 hover:text-[#111111] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/proyectos"
                  className="text-neutral-600 hover:text-[#111111] transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-neutral-600 hover:text-[#111111] transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-neutral-600 hover:text-[#111111] transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/servicios/diseno-interiores-zaragoza"
                  className="text-neutral-600 hover:text-[#111111] transition-colors"
                >
                  Diseño de Interiores
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/reformas-zaragoza"
                  className="text-neutral-600 hover:text-[#111111] transition-colors"
                >
                  Reformas Zaragoza
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/interiorismo-comercial-zaragoza"
                  className="text-neutral-600 hover:text-[#111111] transition-colors"
                >
                  Interiorismo comercial
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
              Contacto
            </h4>
            <div className="space-y-3 text-sm text-neutral-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" />
                <span className="leading-snug">{tokens.site.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#85B7B4] flex-shrink-0" />
                <a
                  href={`tel:${tokens.site.phone.replace(/\s+/g, "")}`}
                  className="hover:text-[#111111] transition-colors"
                >
                  {tokens.site.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#85B7B4] flex-shrink-0" />
                <a
                  href={`mailto:${tokens.site.email}`}
                  className="hover:text-[#111111] transition-colors"
                >
                  {tokens.site.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <h5 className="text-xs font-medium uppercase tracking-wider text-neutral-500 mb-2.5">
                Redes sociales
              </h5>
              <div className="flex items-center space-x-3">
                <a
                  href={tokens.site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-zinc-200 text-neutral-600 hover:text-[#111111] hover:border-neutral-400 transition-colors"
                  aria-label="Instagram de Noelia Villalba"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={tokens.site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-zinc-200 text-neutral-600 hover:text-[#111111] hover:border-neutral-400 transition-colors"
                  aria-label="Facebook de Noelia Villalba"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={tokens.site.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-zinc-200 text-neutral-600 hover:text-[#111111] hover:border-neutral-400 transition-colors"
                  aria-label="Pinterest de Noelia Villalba"
                >
                  <PinterestIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Separador y Copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {currentYear} {tokens.site.name}. Todos los derechos reservados.</p>
          <p className="tracking-wide">Diseño y Reformas en Zaragoza</p>
        </div>
      </div>
    </footer>
  );
}
