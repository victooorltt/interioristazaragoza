import Link from "next/link";
import React from "react";
import { tokens } from "@/lib/tokens";

export interface AccentBandCta {
  label: string;
  href: string;
}

export interface AccentBandProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  cta?: AccentBandCta;
  secondaryCta?: AccentBandCta;
  align?: "left" | "center";
  children?: React.ReactNode;
  className?: string;
}

export function AccentBand({
  title,
  description,
  cta,
  secondaryCta,
  align = "left",
  children,
  className = "",
}: AccentBandProps) {
  const isCentered = align === "center";

  return (
    <section
      className={`w-full bg-[#85B7B4] text-[#111111] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ${className}`}
      style={{ backgroundColor: tokens.colors.accent }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col ${
            isCentered ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-4xl"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#111111] leading-tight">
            {title}
          </h2>

          {description && (
            <div
              className={`mt-4 sm:mt-5 text-base sm:text-lg text-[#111111]/90 font-normal leading-relaxed ${
                isCentered ? "max-w-2xl" : "max-w-3xl"
              }`}
            >
              {typeof description === "string" ? <p>{description}</p> : description}
            </div>
          )}

          {(cta || secondaryCta) && (
            <div
              className={`mt-8 flex flex-wrap items-center gap-4 ${
                isCentered ? "justify-center" : "justify-start"
              }`}
            >
              {cta && (
                <Link
                  href={cta.href}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-white bg-[#111111] hover:bg-neutral-800 transition-all duration-200 shadow-sm"
                >
                  {cta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-[#111111] border border-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-200"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {children && <div className="mt-8 w-full">{children}</div>}
        </div>
      </div>
    </section>
  );
}
