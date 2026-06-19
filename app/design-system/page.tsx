"use client";

import Link from "next/link";
import { ArrowLeft, Heart, Sparkles, Send, CheckCircle2 } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export default function DesignSystemPage() {
  const colors = [
    { name: "Cream Light (Fondo principal)", hex: "#FAF8F5", cssVar: "--color-cream-light", description: "Fondo cálido que transmite paz, hospitalidad y limpieza." },
    { name: "Cream Dark (Secciones alternas)", hex: "#F4EFE6", cssVar: "--color-cream-dark", description: "Contraste sutil para tarjetas y bloques secundarios." },
    { name: "Sage Green (Verde principal)", hex: "#6E7E6B", cssVar: "--color-sage", description: "Tono natural orgánico, representa crecimiento y equilibrio." },
    { name: "Sage Dark (Botones y textos destacados)", hex: "#515E4F", cssVar: "--color-sage-dark", description: "Legibilidad excelente para textos importantes y estados hover." },
    { name: "Sage Light (Contenedores y fondos suaves)", hex: "#F0F3EF", cssVar: "--color-sage-light", description: "Soporte visual sin fatiga ocular." },
    { name: "Blush Pink (Rosa de acento del logo)", hex: "#E5A9A7", cssVar: "--color-blush", description: "Femenino, compasivo y cálido; evoca vulnerabilidad segura." },
    { name: "Blush Light (Fondo de alertas/cajas de consejos)", hex: "#F8ECEC", cssVar: "--color-blush-light", description: "Tono piel pálido para suavizar llamadas de atención." },
    { name: "Deep Burgundy (Acento tipográfico/títulos)", hex: "#8B2635", cssVar: "--color-burgundy", description: "Elegancia boutique, profesionalismo clínico riguroso." },
    { name: "Deep Burgundy Dark (Sombra/Textos de acento)", hex: "#5A1822", cssVar: "--color-burgundy-dark", description: "Acento de gran riqueza y sofisticación editorial." },
    { name: "Text Dark (Color de cuerpo principal)", hex: "#2F3E2C", cssVar: "--color-text-dark", description: "Verde oliva extremadamente oscuro para una lectura cómoda." },
  ];

  return (
    <div className="min-h-screen bg-cream-light py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header de Navegación */}
        <div className="flex justify-between items-center mb-12 border-b border-sage-light/35 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-wider text-text-muted hover:text-sage transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al Inicio
          </Link>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-burgundy fill-current" />
            <span className="font-heading font-semibold text-lg text-text-dark">Carolina Romero Brand System</span>
          </div>
        </div>

        {/* Título Principal */}
        <div className="mb-16">
          <span className="text-[10px] tracking-[0.25em] font-body uppercase text-burgundy font-bold">Guía de Estilo Visual</span>
          <h1 className="font-heading text-5xl text-text-dark mt-2 mb-4 leading-tight">Sistema de Diseño Premium</h1>
          <p className="font-body text-text-muted text-base max-w-2xl leading-relaxed">
            La arquitectura visual del sitio web está basada enteramente en la identidad orgánica y el dibujo botánico del logotipo de Carolina Romero. Creamos un espacio digital que evoca relajación, salud mental integrada y elegancia editorial.
          </p>
        </div>

        {/* Sección de Paleta de Colores */}
        <section className="mb-20">
          <h2 className="font-heading text-2xl text-text-dark mb-6 pb-2 border-b border-sage-light/20">1. Paleta de Colores Corporativa (Muestras de Logo)</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {colors.map((color) => (
              <div key={color.hex} className="bg-white rounded-3xl p-6 shadow-sm border border-sage-light/25 hover:shadow transition-all duration-300">
                <div
                  className="w-full h-24 rounded-2xl mb-4 border border-text-dark/5"
                  style={{ backgroundColor: color.hex }}
                />
                <h3 className="font-body font-bold text-sm text-text-dark">{color.name}</h3>
                <code className="text-xs text-burgundy block font-mono mt-1">{color.hex} ({color.cssVar})</code>
                <p className="font-body text-xs text-text-muted mt-2 leading-relaxed">{color.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Tipografía */}
        <section className="mb-20">
          <h2 className="font-heading text-2xl text-text-dark mb-6 pb-2 border-b border-sage-light/20">2. Tipografía & Jerarquía Editorial</h2>
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-sage-light/25 space-y-10">
            {/* Playfair Display */}
            <div>
              <span className="text-[10px] font-mono text-burgundy tracking-wider uppercase">Títulos / Font-Heading: Playfair Display</span>
              <h3 className="font-heading text-4xl text-text-dark mt-2 mb-3">La curiosidad es el punto de inicio de la sanación</h3>
              <p className="font-body text-xs text-text-muted">Utilizada en encabezados grandes de sección para brindar una presencia cálida, literaria y humana.</p>
            </div>
            
            {/* Cormorant Garamond */}
            <div>
              <span className="text-[10px] font-mono text-burgundy tracking-wider uppercase">Acento Clásico / Font-Cormorant: Cormorant Garamond (Italic)</span>
              <p className="font-cormorant italic text-3xl text-burgundy mt-2 mb-3">"Cuando me acepto tal como soy, entonces puedo cambiar."</p>
              <p className="font-body text-xs text-text-muted">Utilizada en citas, reflexiones destacadas y subtítulos elegantes para aportar fluidez poética y naturalidad femenina.</p>
            </div>

            {/* Inter */}
            <div>
              <span className="text-[10px] font-mono text-burgundy tracking-wider uppercase">Cuerpo de Texto / Font-Body: Inter</span>
              <p className="font-body text-base text-text-dark mt-2 mb-3 leading-relaxed">
                El acompañamiento psicoterapéutico profesional ofrece las herramientas estructuradas para comprender los patrones emocionales y conductuales de forma compasiva.
              </p>
              <p className="font-body text-xs text-text-muted">Utilizada en descripciones, botones, menús de navegación y formularios debido a su excelente legibilidad en pantallas retina y dispositivos móviles.</p>
            </div>
          </div>
        </section>

        {/* Sección de Componentes Reutilizables */}
        <section className="mb-20">
          <h2 className="font-heading text-2xl text-text-dark mb-6 pb-2 border-b border-sage-light/20">3. Botones y Elementos Interactivos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Botones */}
            <div className="bg-white rounded-[2rem] p-8 border border-sage-light/25 flex flex-col gap-6">
              <h3 className="font-heading text-lg text-text-dark font-semibold">Variaciones de Botones</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="px-6 py-3 rounded-full bg-sage hover:bg-sage-dark text-white font-body text-xs font-bold tracking-wider uppercase shadow-sm transition-all duration-300 cursor-pointer">
                  Botón Primario
                </button>
                <button className="px-6 py-3 rounded-full border border-sage text-sage hover:bg-sage-light/50 font-body text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer">
                  Botón Secundario
                </button>
                <button className="px-5 py-2.5 rounded-full bg-blush-light text-burgundy hover:bg-blush hover:text-white font-body text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer">
                  Botón Acento
                </button>
              </div>
              <p className="font-body text-xs text-text-muted leading-relaxed">
                Todos los botones cuentan con bordes redondeados completos (`rounded-full`) para alinearse a las "curvas suaves" y micro-animaciones en los cambios de estado (hover/active).
              </p>
            </div>

            {/* Inputs de Formularios */}
            <div className="bg-white rounded-[2rem] p-8 border border-sage-light/25 flex flex-col gap-4">
              <h3 className="font-heading text-lg text-text-dark font-semibold">Entradas de Formulario</h3>
              <div className="flex flex-col gap-1">
                <label className="font-body text-[10px] font-bold text-text-dark uppercase tracking-wider">Nombre Completo *</label>
                <input
                  type="text"
                  placeholder="Ej. Sofía Rodríguez"
                  className="px-5 py-3 rounded-2xl border border-sage-light bg-cream-light/30 focus:outline-none focus:border-sage focus:bg-white text-sm font-body text-text-dark placeholder-text-muted/40 transition-all duration-300"
                />
              </div>
              <p className="font-body text-xs text-text-muted leading-relaxed">
                Los campos utilizan esquinas orgánicas medianas (`rounded-2xl`) y una transición suave de color de borde de verde salvia claro a verde salvia medio con fondo blanco al activarse.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Estructuras Especiales */}
        <section className="mb-20">
          <h2 className="font-heading text-2xl text-text-dark mb-6 pb-2 border-b border-sage-light/20">4. Formas Orgánicas y Contenedores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white organic-card-1 p-8 border border-sage-light/25 shadow-sm text-center">
              <Sparkles className="w-8 h-8 text-sage mx-auto mb-4" />
              <h4 className="font-heading text-lg text-burgundy mb-2">Curva Orgánica 1</h4>
              <code className="text-xs text-text-muted font-mono block">.organic-card-1</code>
              <p className="font-body text-xs text-text-muted mt-2 leading-relaxed">Esquinas redondeadas alternadas asimétricamente para crear un aspecto natural y orgánico.</p>
            </div>

            <div className="bg-white organic-card-2 p-8 border border-sage-light/25 shadow-sm text-center">
              <CheckCircle2 className="w-8 h-8 text-sage mx-auto mb-4" />
              <h4 className="font-heading text-lg text-burgundy mb-2">Curva Orgánica 2</h4>
              <code className="text-xs text-text-muted font-mono block">.organic-card-2</code>
              <p className="font-body text-xs text-text-muted mt-2 leading-relaxed">Esquinas invertidas a la curva 1, ideal para alternancia de componentes en cuadrículas de servicios.</p>
            </div>

            <div className="bg-white organic-card-round p-8 border border-sage-light/25 shadow-sm text-center">
              <Send className="w-8 h-8 text-sage mx-auto mb-4" />
              <h4 className="font-heading text-lg text-burgundy mb-2">Bordes Suaves Altos</h4>
              <code className="text-xs text-text-muted font-mono block">.organic-card-round</code>
              <p className="font-body text-xs text-text-muted mt-2 leading-relaxed">Curva superior pronunciada (50px) y curva inferior menor (30px) para tarjetas tipo cápsula.</p>
            </div>
          </div>
        </section>

        {/* Sección de Acordeón */}
        <section className="mb-20">
          <h2 className="font-heading text-2xl text-text-dark mb-6 pb-2 border-b border-sage-light/20">5. Acordeones de FAQ Interactivos</h2>
          <FAQAccordion />
        </section>
      </div>
    </div>
  );
}
