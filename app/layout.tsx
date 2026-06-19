import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carolina Romero | Psicóloga Clínica",
  description: "Consultorio de psicoterapia premium para adolescentes, familias y adultos. Acompañamiento clínico con un enfoque cálido, humano y basado en evidencia.",
  keywords: ["psicóloga clínica", "terapia adolescentes", "terapia familiar", "terapia de adultos", "Carolina Romero", "psicoterapia", "salud mental", "bienestar"],
  openGraph: {
    title: "Carolina Romero | Psicóloga Clínica",
    description: "Un espacio seguro y compasivo para tu proceso de sanación y crecimiento. Adolescencia, familia y adultez.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-light text-text-dark selection:bg-blush/30">
        {children}
      </body>
    </html>
  );
}

