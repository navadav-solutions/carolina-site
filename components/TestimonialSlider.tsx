"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export default function TestimonialSlider() {
  const testimonials: Testimonial[] = [
    {
      text: "Carolina me brindó una luz de guía durante una de las etapas más oscuras de mi vida. Su calidez, empatía y profunda experiencia clínica me ayudaron a redescubrir mis fortalezas y a navegar la ansiedad con herramientas prácticas que aplico todos los días.",
      author: "Sarah M.",
      role: "Paciente de Psicoterapia Individual",
    },
    {
      text: "Después de años de cargar con experiencias traumáticas que no me dejaban avanzar, decidí iniciar el proceso de EMDR. El espacio seguro que crea Carolina y su enfoque compasivo me permitieron procesar el pasado y recuperar mi presente. Estoy profundamente agradecido.",
      author: "James L.",
      role: "Paciente de Procesamiento de Trauma",
    },
    {
      text: "El acompañamiento familiar de Carolina salvó nuestra relación. Nos enseñó a comunicarnos con honestidad, a escucharnos sin juzgar y a reconstruir los puentes de confianza que creíamos perdidos. Su perspicacia es profunda y sumamente práctica.",
      author: "María K. y Familia",
      role: "Terapia de Familia",
    },
    {
      text: "Como adolescente sentía que nadie comprendía mi mundo interno. En la terapia con Carolina encontré un espacio de total aceptación donde pude expresarme libremente. Aprendí a entender mis emociones y a hablar con mis padres desde un lugar diferente.",
      author: "Sofía G. (17 años)",
      role: "Paciente de Terapia de Adolescentes",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const handlePrev = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
      setAnimate(true);
    }, 200);
  };

  const handleNext = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
      setAnimate(true);
    }, 200);
  };

  // Cambio automático suave cada 8 segundos
  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      {/* Elemento de comillas de fondo */}
      <div className="absolute top-0 left-6 text-blush-light opacity-50 -z-10">
        <Quote className="w-24 h-24 stroke-[0.5px] fill-current" />
      </div>

      <div
        className={`bg-white rounded-[2.5rem] shadow-md border border-sage-light/20 p-8 md:p-12 transition-all duration-300 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center text-center">
          {/* Estrellas decorativas de calificación */}
          <div className="flex items-center gap-1 mb-6 text-blush">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>

          <p className="font-heading text-lg md:text-xl lg:text-2xl text-text-dark italic leading-relaxed mb-8 max-w-2xl">
            "{testimonials[currentIndex].text}"
          </p>

          <div className="w-12 h-[2px] bg-sage/30 mb-4"></div>

          <h4 className="font-body text-base font-semibold text-text-dark tracking-wide">
            {testimonials[currentIndex].author}
          </h4>
          <p className="font-body text-xs text-text-muted mt-1 uppercase tracking-wider font-medium">
            {testimonials[currentIndex].role}
          </p>
        </div>
      </div>

      {/* Controles de navegación */}
      <div className="flex items-center justify-between mt-8 max-w-xs mx-auto">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border border-sage/20 hover:border-sage bg-white hover:bg-sage-light text-sage-dark flex items-center justify-center transition-all duration-300 focus:outline-none"
          aria-label="Testimonio anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Indicadores de puntos */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAnimate(false);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setAnimate(true);
                }, 200);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-sage w-6" : "bg-sage/20 hover:bg-sage/40"
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full border border-sage/20 hover:border-sage bg-white hover:bg-sage-light text-sage-dark flex items-center justify-center transition-all duration-300 focus:outline-none"
          aria-label="Testimonio siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
