import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { tokens } from "@/lib/tokens";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://interioristazaragoza.es"),
  title: {
    default: "Noelia Villalba | Interiorista en Zaragoza",
    template: "%s | Noelia Villalba - Interiorista en Zaragoza",
  },
  description:
    "Estudio de diseño de interiores, reformas y proyectos comerciales en Zaragoza. Diseños a medida liderados por Noelia Villalba.",
  keywords: [
    "interiorista zaragoza",
    "diseño de interiores zaragoza",
    "reformas zaragoza",
    "interiorismo comercial zaragoza",
    "decoracion zaragoza",
    "noelia villalba",
  ],
  authors: [{ name: tokens.site.name }],
  creator: tokens.site.name,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://interioristazaragoza.es",
    siteName: "Noelia Villalba - Interiorista en Zaragoza",
    title: "Noelia Villalba | Interiorista en Zaragoza",
    description:
      "Estudio de diseño de interiores y reformas integrales en Zaragoza. Espacios funcionales, elegantes y atemporales.",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-[#111111] font-sans antialiased selection:bg-[#85B7B4]/30 selection:text-[#111111]">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
