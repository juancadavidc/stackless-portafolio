"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
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
    <section id="contacto" className="deck-section" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="max-w-3xl mx-auto">
          <div className={`text-center mb-12 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-accent/10 text-accent-light border border-accent/20 mb-4">
              Contacto
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              ¿Listo para <span className="gradient-text">comenzar</span>?
            </h2>
            <p className="text-muted text-lg">
              Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas
            </p>
          </div>

          <div
            className={`rounded-2xl border border-border/50 bg-surface/50 p-8 sm:p-10 ${
              visible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  ¿Qué servicio te interesa?
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:border-accent/50 transition-colors appearance-none">
                  <option value="">Selecciona un servicio</option>
                  <option value="landing-pages">Landing Pages</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="automations">Automatizaciones</option>
                  <option value="custom-software">Software a la Medida</option>
                  <option value="multiple">Múltiples servicios</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Cuéntanos sobre tu proyecto
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe tu proyecto, objetivos y cualquier detalle relevante..."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent hover:bg-accent-dark text-white font-medium rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] animate-pulse-glow"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Alternative contact */}
          <div
            className={`mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 ${
              visible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                label: "Email",
                value: "hola@stackless.dev",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                label: "Ubicación",
                value: "LATAM & Remote",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: "Respuesta",
                value: "< 24 horas",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-surface/30"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent-light flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-muted">{item.label}</p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
