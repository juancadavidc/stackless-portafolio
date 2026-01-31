"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "landing-pages",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Landing Pages",
    description:
      "Páginas de aterrizaje de alto impacto diseñadas para convertir. Optimizadas para SEO, velocidad y experiencia de usuario con A/B testing integrado.",
    features: ["Diseño responsive", "SEO optimizado", "A/B Testing", "Analytics avanzado", "Carga ultra-rápida"],
  },
  {
    id: "ecommerce",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
    title: "E-Commerce",
    description:
      "Tiendas online completas con pasarelas de pago, gestión de inventario, recomendaciones inteligentes y experiencias de compra que maximizan conversiones.",
    features: ["Pagos multi-moneda", "Gestión de inventario", "Recomendaciones IA", "Dashboard de ventas", "Apps móviles"],
  },
  {
    id: "automations",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Automatizaciones",
    description:
      "Eliminamos tareas repetitivas y conectamos tus herramientas. Desde CRM hasta facturación, automatizamos flujos completos para que tu equipo se enfoque en lo importante.",
    features: ["Flujos de trabajo", "Integraciones API", "Chatbots con IA", "Email automation", "Reportes automáticos"],
  },
  {
    id: "custom-software",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Software a la Medida",
    description:
      "Soluciones de software personalizadas que resuelven problemas únicos de tu negocio. ERPs, plataformas, apps móviles y más, construidos desde cero para ti.",
    features: ["Arquitectura escalable", "Apps web y móvil", "ERPs y CRMs", "Integraciones", "Soporte continuo"],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative p-8 rounded-2xl border border-border/50 bg-surface/50 hover:bg-surface-light hover:border-accent/30 transition-all duration-500 ${
        visible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent-light flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-6">
          {service.description}
        </p>
        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-muted">
              <svg className="w-4 h-4 text-accent-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="deck-section grid-bg">
      <div className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-accent/10 text-accent-light border border-accent/20 mb-4">
            Servicios
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Lo que <span className="gradient-text">hacemos</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Cuatro pilares de soluciones digitales para llevar tu negocio al siguiente nivel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
