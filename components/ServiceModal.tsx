"use client";

import { useEffect } from "react";
import { X, Clock, Target, ShieldCheck, HelpCircle } from "lucide-react";

interface ServiceDetails {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  duration: string;
  focus: string[];
  methodology: string;
  faq: { q: string; a: string };
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetails | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  // Evitar scroll en el cuerpo cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Fondo Oscuro Semitransparente con Blur */}
      <div
        className="absolute inset-0 bg-text-dark/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Caja del Modal */}
      <div className="relative bg-cream-light w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[2.5rem] shadow-2xl border border-sage-light/30 z-10 animate-float-slow scrollbar-thin">
        {/* Botón de Cierre */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white border border-sage-light hover:bg-sage-light text-text-dark/70 hover:text-text-dark transition-all duration-300 focus:outline-none"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Contenido del Modal */}
        <div className="p-8 md:p-12">
          {/* Categoría o Etiqueta */}
          <span className="inline-block text-[10px] tracking-[0.2em] font-body uppercase text-burgundy font-bold mb-3">
            Servicio de Psicoterapia
          </span>

          <h3 className="font-heading text-3xl md:text-4xl text-text-dark mb-4 leading-tight">
            {service.title}
          </h3>

          <p className="font-body text-text-muted text-sm md:text-base leading-relaxed mb-8">
            {service.longDesc}
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {/* Detalles de Sesión */}
            <div className="p-5 rounded-2xl bg-white border border-sage-light/20 flex gap-4 items-start">
              <Clock className="w-6 h-6 text-sage shrink-0" />
              <div>
                <h4 className="font-body text-sm font-semibold text-text-dark mb-1">Duración</h4>
                <p className="font-body text-xs text-text-muted">{service.duration}</p>
              </div>
            </div>

            {/* Metodología */}
            <div className="p-5 rounded-2xl bg-white border border-sage-light/20 flex gap-4 items-start">
              <ShieldCheck className="w-6 h-6 text-sage shrink-0" />
              <div>
                <h4 className="font-body text-sm font-semibold text-text-dark mb-1">Enfoque Clínico</h4>
                <p className="font-body text-xs text-text-muted">{service.methodology}</p>
              </div>
            </div>
          </div>

          {/* Áreas de Enfoque Comunes */}
          <div className="mb-8">
            <h4 className="font-body text-sm font-semibold text-text-dark mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-sage" /> Áreas comunes de trabajo:
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.focus.map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-sage-light/60 border border-sage/10 text-xs font-body text-text-dark font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Pregunta Frecuente Rápida */}
          <div className="p-6 rounded-[1.5rem] bg-blush-light/50 border border-blush/20 mb-8">
            <h5 className="font-body text-xs font-semibold text-burgundy uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" /> Pregunta frecuente
            </h5>
            <p className="font-heading text-sm text-text-dark italic font-semibold mb-1">
              {service.faq.q}
            </p>
            <p className="font-body text-xs text-text-muted leading-relaxed">
              {service.faq.a}
            </p>
          </div>

          {/* Acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end border-t border-sage-light/20 pt-6">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full border border-sage/20 text-text-muted hover:text-text-dark hover:bg-sage-light/30 font-body text-sm font-semibold transition-all duration-300"
            >
              Cerrar Detalles
            </button>
            <a
              href="#contacto"
              onClick={(e) => {
                onClose();
                const contact = document.querySelector("#contacto");
                if (contact) {
                  e.preventDefault();
                  contact.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-3 rounded-full bg-sage hover:bg-sage-dark text-white font-body text-sm font-semibold shadow hover:shadow-md transition-all duration-300 text-center"
            >
              Agendar para este servicio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
