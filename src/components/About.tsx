"use client";

import { useEffect, useRef, useState } from "react";

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Velocidad",
    description: "Entregas rápidas sin comprometer calidad. Metodologías ágiles que mantienen tu proyecto en movimiento.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Calidad",
    description: "Código limpio, arquitecturas robustas y mejores prácticas. Construimos software que escala y se mantiene.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Colaboración",
    description: "Tu equipo es nuestro equipo. Comunicación transparente y participación activa en cada etapa del proyecto.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Innovación",
    description: "Adoptamos tecnologías de punta para darte ventaja competitiva. IA, automatización y más al servicio de tu negocio.",
  },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker",
  "TensorFlow", "n8n", "Stripe", "Shopify",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" className="deck-section grid-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <div className={visible ? "animate-slide-in-left" : "opacity-0"}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-accent/10 text-accent-light border border-accent/20 mb-4">
              Nosotros
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Somos <span className="gradient-text">Stackless</span>
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Nacimos con una misión simple: eliminar la complejidad
                innecesaria entre las ideas de negocio y su implementación
                digital. Por eso somos <strong className="text-foreground">Stackless</strong> — porque creemos que la
                tecnología debe ser invisible para el usuario final.
              </p>
              <p>
                Somos un equipo de ingenieros, diseñadores y estrategas
                digitales que combinan expertise técnico con visión de negocio.
                No solo escribimos código; entendemos tu industria y diseñamos
                soluciones que generan impacto real.
              </p>
              <p>
                Desde startups hasta empresas establecidas, hemos ayudado a
                más de 50 organizaciones en 12 países a transformar sus
                operaciones con tecnología.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <p className="text-sm font-medium mb-3">Nuestro stack tecnológico</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs rounded-lg bg-surface border border-border text-muted hover:text-accent-light hover:border-accent/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`p-6 rounded-2xl border border-border/50 bg-surface/50 hover:border-accent/30 transition-all duration-500 ${
                  visible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent-light flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
