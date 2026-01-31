import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stackless | Software que Transforma Negocios",
  description:
    "Somos Stackless. Construimos landing pages, e-commerce, automatizaciones y software a la medida que impulsan el crecimiento de tu negocio.",
  keywords: [
    "software",
    "landing pages",
    "e-commerce",
    "automatizaciones",
    "desarrollo web",
    "software a la medida",
    "stackless",
  ],
  openGraph: {
    title: "Stackless | Software que Transforma Negocios",
    description:
      "Landing pages, e-commerce, automatizaciones y software a la medida para empresas que quieren crecer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
