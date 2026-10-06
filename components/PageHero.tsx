import React from "react";
import Link from "next/link";

export interface PageHeroDetail {
  label: string;
  value: string;
}

export interface PageHeroCta {
  label: string;
  href: string;
  className?: string;
}

export interface PageHeroBenefit {
  icon?: React.ReactNode;
  label: React.ReactNode;
}

export type PageHeroVariant = "centered-overlay" | "centered" | "gradient" | "split";
export type PageHeroTheme = "accent" | "light" | "white";

export interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode; // backwards compatibility alias for subtitle
  imageSrc: string;
  imageAlt: string;
  variant?: PageHeroVariant;
  theme?: PageHeroTheme;
  primaryCta?: PageHeroCta;
  secondaryCta?: PageHeroCta;
  benefits?: PageHeroBenefit[];
  details?: PageHeroDetail[];
  className?: string;
  imagePosition?: string;
  minHeight?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
}

export function PageHero({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  variant = "centered-overlay",
  theme = "accent",
  primaryCta,
  secondaryCta,
  benefits,
  details,
  className = "",
  imagePosition = "object-center",
  minHeight = "min-h-[580px] sm:min-h-[640px] lg:min-h-[720px]",
  overlayClassName,
  children,
}: PageHeroProps) {
  const resolvedSubtitle = subtitle ?? description;
  const isCentered = variant === "centered-overlay" || variant === "centered";
  const isGradient = variant === "gradient";
  const isSplit = variant === "split";

  // Action buttons
  const renderActions = (centered: boolean) => {
    const hasCtas = Boolean(primaryCta || secondaryCta);
    if (!hasCtas && !children) return null;

    return (
      <div
        className={`mt-8 flex flex-col sm:flex-row flex-wrap items-center gap-4 ${
          centered ? "justify-center" : "justify-start"
        }`}
      >
        {primaryCta && (
          <Link
            href={primaryCta.href}
            className={`inline-flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-900 text-white font-medium px-8 py-3.5 text-base rounded-xl shadow-sm transition-all hover:shadow-md w-full sm:w-auto cursor-pointer ${
              primaryCta.className || ""
            }`}
          >
            <span>{primaryCta.label}</span>
          </Link>
        )}
        {secondaryCta && (
          <Link
            href={secondaryCta.href}
            className={`inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-zinc-900 border border-stone-200/90 hover:border-stone-300 font-medium px-8 py-3.5 text-base rounded-xl shadow-xs transition-colors w-full sm:w-auto cursor-pointer ${
              secondaryCta.className || ""
            }`}
          >
            <span>{secondaryCta.label}</span>
          </Link>
        )}
        {children}
      </div>
    );
  };

  // Benefits row: single line on desktop, 2x2 on mobile
  const renderBenefits = (centered: boolean) => {
    if (!benefits || benefits.length === 0) return null;

    return (
      <div
        className={`mt-10 pt-6 border-t border-stone-400/50 w-full ${
          centered ? "max-w-4xl mx-auto" : "max-w-4xl"
        }`}
      >
        <div
          className={`grid grid-cols-2 gap-x-4 gap-y-3.5 sm:flex sm:flex-nowrap sm:items-center sm:gap-6 md:gap-8 lg:gap-10 text-xs sm:text-sm font-semibold sm:font-medium text-zinc-950 ${
            centered ? "sm:justify-center" : "sm:justify-start"
          }`}
        >
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 whitespace-nowrap justify-center sm:justify-start"
            >
              {benefit.icon && (
                <span className="text-[#649996] shrink-0">{benefit.icon}</span>
              )}
              <span className="text-zinc-950 tracking-tight">{benefit.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Details dl list
  const renderDetails = (centered: boolean) => {
    if (!details || details.length === 0) return null;

    return (
      <dl
        className={`mt-10 pt-6 border-t border-stone-300/70 grid grid-cols-2 sm:grid-cols-3 gap-6 ${
          centered ? "max-w-2xl mx-auto text-left sm:text-center" : "max-w-2xl text-left"
        }`}
      >
        {details.map((detail, idx) => (
          <div key={idx}>
            <dt className="text-xs uppercase tracking-wider font-medium text-neutral-500">
              {detail.label}
            </dt>
            <dd className="mt-1 text-sm font-semibold text-zinc-950">
              {detail.value}
            </dd>
          </div>
        ))}
      </dl>
    );
  };

  // VARIANT 1: Standard A (Centered Overlay - Exact 0.28-0.32 sweet spot with high center legibility)
  if (isCentered) {
    return (
      <section
        className={`relative overflow-hidden bg-[#FAF8F5] border-b border-stone-200/90 ${minHeight} flex items-center justify-center ${className}`}
      >
        {/* Full-width background photo across the entire hero */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className={`h-full w-full object-cover ${imagePosition}`}
            fetchPriority="high"
            loading="eager"
          />
          {/* Calibrated multi-layer protection */}
          {overlayClassName ? (
            <div className={`absolute inset-0 ${overlayClassName}`} />
          ) : (
            <>
              {/* Layer 1: Base warm vertical wash with slightly increased global protection */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/40 via-[#FAF8F5]/24 to-[#FAF8F5]/42" />
              {/* Layer 2: Focused radial halo behind the central block (H1, subtitle, buttons) */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,248,245,0.64)_0%,rgba(250,248,245,0.36)_50%,transparent_80%)]" />
              {/* Layer 3: Subtly dedicated bottom protection for the benefits strip */}
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#FAF8F5]/55 via-[#FAF8F5]/20 to-transparent" />
            </>
          )}
        </div>

        {/* Centered content directly over image */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 sm:py-24 lg:py-32 text-center w-full">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-zinc-950 leading-[1.12]">
              {title}
            </h1>
            {resolvedSubtitle && (
              <div className="mt-5 text-lg sm:text-xl text-zinc-800 leading-relaxed font-normal max-w-xl mx-auto">
                {typeof resolvedSubtitle === "string" ? <p>{resolvedSubtitle}</p> : resolvedSubtitle}
              </div>
            )}
            {renderActions(true)}
          </div>

          {renderBenefits(true)}
          {renderDetails(true)}
        </div>
      </section>
    );
  }

  // VARIANT 2: Standard B (Horizontal Gradient Fade - Soft warm beige to transparent)
  if (isGradient) {
    const defaultOverlay =
      "bg-gradient-to-r from-[#FAF8F5]/80 via-[#FAF8F5]/40 sm:via-[#FAF8F5]/20 to-transparent";

    return (
      <section
        className={`relative overflow-hidden bg-[#FAF8F5] border-b border-stone-200/90 ${minHeight} flex items-center ${className}`}
      >
        {/* Full-width background photo across the entire hero */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className={`h-full w-full object-cover ${imagePosition}`}
            fetchPriority="high"
            loading="eager"
          />
          {/* Directional gradient overlay */}
          <div className={`absolute inset-0 ${overlayClassName || defaultOverlay}`} />
        </div>

        {/* Text layout with title, subtitle, CTAs */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24 w-full">
          <div className="max-w-2xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-zinc-950 leading-[1.14]">
              {title}
            </h1>
            {resolvedSubtitle && (
              <div className="mt-5 text-base sm:text-lg lg:text-xl text-zinc-700 leading-relaxed font-normal">
                {typeof resolvedSubtitle === "string" ? <p>{resolvedSubtitle}</p> : resolvedSubtitle}
              </div>
            )}
            {renderActions(false)}
            {renderBenefits(false)}
            {renderDetails(false)}
          </div>
        </div>
      </section>
    );
  }

  // VARIANT 3: Split (Side-by-Side 2-Column Fallback)
  return (
    <section
      className={`w-full bg-[#FAF8F5] border-b border-stone-200/90 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light tracking-tight text-zinc-950 leading-[1.14]">
              {title}
            </h1>

            {resolvedSubtitle && (
              <div className="mt-5 text-base sm:text-lg text-zinc-700 font-normal leading-relaxed max-w-xl">
                {typeof resolvedSubtitle === "string" ? <p>{resolvedSubtitle}</p> : resolvedSubtitle}
              </div>
            )}

            {renderActions(false)}
            {renderBenefits(false)}
            {renderDetails(false)}
          </div>

          {/* Right Column: High Priority Photo */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden bg-neutral-100 rounded-xl shadow-sm">
              <img
                src={imageSrc}
                alt={imageAlt}
                fetchPriority="high"
                className={`w-full h-full object-cover ${imagePosition}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
