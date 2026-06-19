"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "¿Cuál es la duración de las sesiones y la frecuencia recomendada?",
      answer: "Las sesiones de terapia individual y familiar tienen una duración estándar de 50 a 60 minutos. Al inicio del proceso, lo recomendable es tener sesiones semanales para establecer metas claras y construir la alianza terapéutica. A medida que avanzas y logras mayor autonomía, las sesiones pueden espaciarse de forma quincenal o mensual.",
    },
    {
      question: "¿Las sesiones son presenciales u online? ¿Cómo funcionan?",
      answer: "Ofrezco ambas modalidades. Las sesiones presenciales se realizan en un consultorio privado, diseñado para ser un espacio seguro y tranquilo. Las sesiones online se llevan a cabo a través de una plataforma de videollamada segura y confidencial, ideal si tienes dificultades de desplazamiento, viajas con frecuencia o prefieres tomar la terapia desde la comodidad de tu hogar.",
    },
    {
      question: "¿Qué especialidades atiendes en tu consulta?",
      answer: "Mi consulta clínica está enfocada en adolescentes (a partir de los 12 años), familias y adultos. Acompaño procesos relacionados con ansiedad, depresión, manejo del estrés, duelos, transiciones de vida difíciles, trauma (mediante terapia EMDR) y fortalecimiento de relaciones familiares.",
    },
    {
      question: "¿Cómo se garantiza la confidencialidad de lo que hablamos en terapia?",
      answer: "La confidencialidad es la piedra angular de la práctica psicológica y está protegida por el secreto profesional y el código ético del psicólogo. Todo lo que compartas en las sesiones se mantendrá en absoluta reserva. Solo existen las excepciones legales estándar en las que la integridad de tu vida o la de un tercero se encuentren en riesgo inminente.",
    },
    {
      question: "¿Cuál es la política para cancelar o reprogramar una sesión?",
      answer: "Entiendo que surgen imprevistos. Para cancelar o reprogramar una sesión sin costo, te solicito hacerlo con un mínimo de 24 horas de anticipación. Esto me permite asignar el espacio a otra persona que pueda necesitarlo. Las cancelaciones realizadas con menos de 24 horas de antelación o las inasistencias sin previo aviso tendrán un cargo equivalente al valor de la sesión.",
    },
    {
      question: "¿Cómo puedo agendar mi primera cita y qué métodos de pago aceptas?",
      answer: "Puedes solicitar tu primera sesión completando el formulario de contacto en esta web, o escribiéndome directamente por WhatsApp. Te responderé a la brevedad para coordinar el horario que mejor te convenga. Acepto pagos por transferencia bancaria directa, PSE, y tarjetas de crédito mediante pasarela de pago segura antes de cada sesión.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border border-sage-light/40 rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen
                ? "bg-white shadow-md border-sage/20"
                : "bg-white/60 hover:bg-white hover:shadow-sm"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
            >
              <span className="font-heading text-lg text-text-dark font-medium group-hover:text-sage-dark transition-colors duration-300">
                {faq.question}
              </span>
              <span
                className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-sage-light/50 flex items-center justify-center text-sage-dark transition-transform duration-500 ${
                  isOpen ? "rotate-180 bg-sage text-white" : "group-hover:bg-sage-light"
                }`}
              >
                <ChevronDown className="w-4 h-4 transition-transform duration-300" />
              </span>
            </button>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[300px] opacity-100 border-t border-sage-light/10" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 text-text-muted font-body leading-relaxed text-sm lg:text-base">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
