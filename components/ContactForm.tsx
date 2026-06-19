"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, HeartHandshake } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "individual",
    mensaje: "",
    consentimiento: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentimiento) {
      alert("Por favor, acepta la política de privacidad y protección de datos.");
      return;
    }

    setStatus("loading");

    // Simulación de envío del formulario
    try {
      // ===== INYECCIÓN DEL SERVICIO DE CORREO =====
      // Aquí es donde puedes inyectar tu API (por ejemplo, fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) }))
      // O servicios como Resend, EmailJS, SendGrid, etc.
      await new Promise((resolve) => setTimeout(resolve, 1800)); // Espera simulada
      
      console.log("Formulario enviado con éxito:", formData);
      setStatus("success");
      
      // Limpiar formulario tras el éxito
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        servicio: "individual",
        mensaje: "",
        consentimiento: false,
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-md border border-sage-light/20 text-center max-w-xl mx-auto animate-float-slow">
        <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center text-sage mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-heading text-2xl md:text-3xl text-text-dark mb-4">
          Solicitud Recibida
        </h3>
        <p className="font-body text-text-muted text-sm lg:text-base leading-relaxed mb-6">
          Gracias por contactarme. He recibido tu mensaje con éxito. Me pondré en contacto contigo en un plazo máximo de 24 horas hábiles a través del correo o teléfono proporcionados para coordinar la cita.
        </p>
        <div className="inline-flex items-center gap-2 text-burgundy font-body text-xs font-semibold uppercase tracking-wider bg-blush-light px-4 py-2 rounded-full">
          <HeartHandshake className="w-4 h-4" /> Un paso hacia tu bienestar
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="block w-full mt-8 py-3 rounded-full border border-sage text-sage hover:bg-sage-light font-body text-sm font-semibold transition-all duration-300"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-md border border-sage-light/20 max-w-2xl mx-auto">
      <h3 className="font-heading text-2xl text-text-dark mb-2 text-center">
        Escríbeme para agendar
      </h3>
      <p className="font-body text-sm text-text-muted text-center mb-8">
        Completa el formulario y te responderé lo antes posible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Nombre */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="nombre" className="font-body text-xs font-semibold text-text-dark uppercase tracking-wider">
              Nombre Completo *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej. Sofía Rodríguez"
              className="px-5 py-3 rounded-2xl border border-sage-light bg-cream-light/30 focus:outline-none focus:border-sage focus:bg-white text-sm font-body text-text-dark placeholder-text-muted/50 transition-all duration-300"
            />
          </div>

          {/* Teléfono */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="telefono" className="font-body text-xs font-semibold text-text-dark uppercase tracking-wider">
              Teléfono / WhatsApp *
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              required
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Ej. +57 300 123 4567"
              className="px-5 py-3 rounded-2xl border border-sage-light bg-cream-light/30 focus:outline-none focus:border-sage focus:bg-white text-sm font-body text-text-dark placeholder-text-muted/50 transition-all duration-300"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Correo Electrónico */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="font-body text-xs font-semibold text-text-dark uppercase tracking-wider">
              Correo Electrónico *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Ej. sofia@correo.com"
              className="px-5 py-3 rounded-2xl border border-sage-light bg-cream-light/30 focus:outline-none focus:border-sage focus:bg-white text-sm font-body text-text-dark placeholder-text-muted/50 transition-all duration-300"
            />
          </div>

          {/* Tipo de Servicio */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="servicio" className="font-body text-xs font-semibold text-text-dark uppercase tracking-wider">
              Motivo de Consulta / Servicio *
            </label>
            <select
              id="servicio"
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
              className="px-5 py-3 rounded-2xl border border-sage-light bg-cream-light/30 focus:outline-none focus:border-sage focus:bg-white text-sm font-body text-text-dark transition-all duration-300 appearance-none cursor-pointer"
            >
              <option value="individual">Psicoterapia Individual (Adultos)</option>
              <option value="adolescentes">Psicoterapia para Adolescentes</option>
              <option value="familia">Terapia Familiar</option>
              <option value="pareja">Terapia de Pareja</option>
              <option value="emdr">Procesamiento de Trauma (EMDR)</option>
              <option value="stress">Mindfulness & Manejo del Estrés</option>
            </select>
          </div>
        </div>

        {/* Mensaje */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="mensaje" className="font-body text-xs font-semibold text-text-dark uppercase tracking-wider">
            Cuéntame brevemente sobre ti y tu motivo de consulta (Opcional)
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
            className="px-5 py-3 rounded-2xl border border-sage-light bg-cream-light/30 focus:outline-none focus:border-sage focus:bg-white text-sm font-body text-text-dark placeholder-text-muted/50 resize-none transition-all duration-300"
          />
        </div>

        {/* Consentimiento */}
        <div className="flex items-start gap-3 mt-4">
          <input
            type="checkbox"
            id="consentimiento"
            name="consentimiento"
            required
            checked={formData.consentimiento}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded border-sage text-sage focus:ring-sage cursor-pointer"
          />
          <label htmlFor="consentimiento" className="font-body text-xs text-text-muted leading-relaxed cursor-pointer select-none">
            Acepto que mis datos sean tratados únicamente con el fin de coordinar la consulta profesional solicitada, de acuerdo con las políticas de protección de datos de salud y privacidad del consultorio clínico. *
          </label>
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full mt-6 py-4 rounded-full bg-sage hover:bg-sage-dark text-white font-body text-sm font-semibold tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:bg-sage/50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Procesando solicitud...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Solicitar Cita de Valoración
            </>
          )}
        </button>
      </form>
    </div>
  );
}
