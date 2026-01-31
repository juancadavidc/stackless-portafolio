"use client";

import { useState, useEffect, useRef } from "react";
import casesData from "@/data/cases.json";
import type { CasesConfig, CaseStudy } from "@/types";

const data: CasesConfig = casesData as CasesConfig;

function CaseCard({ caseStudy, index }: { caseStudy: CaseStudy; index: number }) {
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
    <div
      ref={ref}
      className={`group relative rounded-2xl border border-border/50 bg-surface/50 overflow-hidden hover:border-accent/30 transition-all duration-500 ${
        visible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient top bar */}
      <div className="h-1 w-full bg-gradient-to-r from-accent via-accent-light to-purple-400" />

      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs text-accent-light font-medium uppercase tracking-wider mb-1">
              {caseStudy.client}
            </p>
            <h3 className="text-lg font-bold group-hover:text-accent-light transition-colors">
              {caseStudy.title}
            </h3>
          </div>
        </div>

        <p className="text-muted text-sm leading-relaxed mb-6">
          {caseStudy.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-md bg-accent/10 text-accent-light border border-accent/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Results */}
        <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-background/50 border border-border/30">
          {caseStudy.results.map((result) => (
            <div key={result.metric} className="text-center">
              <div className="text-lg font-bold gradient-text">{result.value}</div>
              <div className="text-xs text-muted mt-0.5">{result.metric}</div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <div className="mt-6 pt-6 border-t border-border/30">
            <p className="text-sm text-muted italic leading-relaxed mb-3">
              &ldquo;{caseStudy.testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent-light">
                {caseStudy.testimonial.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium">{caseStudy.testimonial.author}</p>
                <p className="text-xs text-muted">{caseStudy.testimonial.role}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCases =
    activeCategory === "all"
      ? data.cases
      : data.cases.filter((c) => c.category === activeCategory);

  return (
    <section id="casos" className="deck-section">
      <div className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-accent/10 text-accent-light border border-accent/20 mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Casos de <span className="gradient-text">Éxito</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Proyectos reales que han transformado negocios. Cada caso es una
            historia de impacto medible.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-accent text-white"
                : "bg-surface border border-border text-muted hover:text-foreground hover:border-accent/30"
            }`}
          >
            Todos
          </button>
          {data.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-accent text-white"
                  : "bg-surface border border-border text-muted hover:text-foreground hover:border-accent/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Category Description */}
        {activeCategory !== "all" && (
          <p className="text-center text-muted text-sm mb-10 max-w-xl mx-auto animate-fade-in">
            {data.categories.find((c) => c.id === activeCategory)?.description}
          </p>
        )}

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((caseStudy, i) => (
            <CaseCard key={caseStudy.id} caseStudy={caseStudy} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted mb-4">
            ¿Quieres que tu proyecto sea el próximo caso de éxito?
          </p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 bg-accent hover:bg-accent-dark text-white font-medium rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Comienza tu proyecto
          </a>
        </div>
      </div>
    </section>
  );
}
