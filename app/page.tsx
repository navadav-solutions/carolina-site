"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Users,
  Brain,
  ShieldAlert,
  Sparkles,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  BookOpen,
  Award,
  ChevronRight,
  Compass
} from "lucide-react";

import { basePath } from "@/lib/basePath";
import Navbar from "@/components/Navbar";
import FAQAccordion from "@/components/FAQAccordion";
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactForm from "@/components/ContactForm";
import ServiceModal from "@/components/ServiceModal";
import { OrganicBlob, BotanicalBranch, FloralWreath, LeafIcon } from "@/components/DesignDecorations";

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

export default function Home() {
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lista de servicios médicos y de bienestar psicológico
  const services: ServiceDetails[] = [
    {
      id: "individual",
      title: "Psicoterapia Individual",
      shortDesc: "Un espacio de acompañamiento personalizado para comprender y transformar tus dificultades en fortalezas.",
      longDesc: "La psicoterapia individual es un espacio seguro y confidencial dedicado exclusivamente a ti. En las sesiones, trabajaremos juntos para explorar tus pensamientos, emociones y conductas, identificar patrones limitantes y desarrollar herramientas prácticas para gestionar la ansiedad, la depresión, los problemas de autoestima o las crisis existenciales. Buscamos restaurar tu bienestar y promover tu crecimiento interno.",
      duration: "50 minutos por sesión",
      focus: ["Ansiedad y Estrés", "Depresión y Estado de ánimo", "Autoestima y Crecimiento Personal", "Regulación Emocional", "Toma de Decisiones"],
      methodology: "Terapia Cognitivo-Conductual integrada con Enfoque Humanista",
      faq: {
        q: "¿Qué tan rápido veré resultados en mi terapia individual?",
        a: "El ritmo de sanación es único para cada persona. Muchos pacientes reportan alivio inicial y mayor claridad en las primeras 4 a 6 semanas de sesiones constantes, aunque el cambio estructural profundo suele requerir más tiempo."
      }
    },
    {
      id: "adolescentes",
      title: "Psicoterapia para Adolescentes",
      shortDesc: "Espacio de escucha activa, empatía y orientación especializada para jóvenes en sus etapas de cambio.",
      longDesc: "La adolescencia es un periodo de transición lleno de intensas transformaciones físicas, sociales y emocionales. Ofrezco un ambiente libre de juicio donde los jóvenes (a partir de los 12 años) pueden expresarse con total libertad. Trabajamos en la auto-aceptación, la regulación del afecto, las habilidades sociales y el manejo de conflictos escolares, familiares o de identidad.",
      duration: "50 minutos por sesión",
      focus: ["Identidad y Autoimagen", "Ansiedad y Presión Escolar", "Relaciones Interpersonales", "Manejo de la Frustración", "Comunicación Familiar"],
      methodology: "Terapia Sistémica adaptada y Terapia de Aceptación y Compromiso (ACT)",
      faq: {
        q: "¿Los padres participan activamente en el proceso del adolescente?",
        a: "Sí, de forma colaborativa. Aunque la privacidad del adolescente es sagrada para fomentar la confianza clínica, realizamos sesiones periódicas de seguimiento y orientación familiar con los padres."
      }
    },
    {
      id: "familia",
      title: "Terapia Familiar",
      shortDesc: "Resolución de conflictos y fortalecimiento de los canales de comunicación y vínculos afectivos.",
      longDesc: "La dinámica familiar influye profundamente en nuestra salud mental. La terapia familiar provee un espacio neutral para que todos los miembros puedan dialogar de forma segura, comprender las diferentes perspectivas y reestructurar límites saludables. Acompaño a las familias a atravesar momentos de transición complejos como separaciones, mudanzas o duelos afectivos.",
      duration: "60 a 70 minutos por sesión",
      focus: ["Comunicación Asertiva", "Límites y Roles Familiares", "Resolución de Conflictos", "Duelos Familiares", "Apoyo en Pautas de Crianza"],
      methodology: "Enfoque Sistémico Relacional",
      faq: {
        q: "¿Deben asistir todos los integrantes de la familia a cada cita?",
        a: "No necesariamente. La estructura de las citas se adapta; algunas sesiones se realizan con la familia completa y otras con subgrupos (ej. solo padres o solo hermanos) según las necesidades del proceso."
      }
    },
    {
      id: "emdr",
      title: "Procesamiento de Trauma (EMDR)",
      shortDesc: "Técnica clínica avanzada y basada en evidencia para procesar de forma segura vivencias traumáticas del pasado.",
      longDesc: "El método EMDR (Desensibilización y Reprocesamiento por Movimientos Oculares) es una psicoterapia ampliamente respaldada por la ciencia y avalada por la Organización Mundial de la Salud (OMS). Está diseñada para procesar recuerdos traumáticos (abusos, accidentes, pérdidas, heridas de la infancia) que continúan provocando síntomas de estrés, fobias o ansiedad en el presente, permitiendo al cerebro sanar de forma natural.",
      duration: "50 a 60 minutos por sesión",
      focus: ["Estrés Postraumático (TEPT)", "Heridas de la Infancia", "Fobias y Ataques de Pánico", "Duelos Complicados", "Creencias Limitantes Arraigadas"],
      methodology: "Protocolo Clínico Estructurado EMDR (8 Fases)",
      faq: {
        q: "¿Es seguro practicar EMDR? ¿Volveré a sufrir el trauma al recordarlo?",
        a: "Es absolutamente seguro. EMDR no te hace revivir el trauma de manera descontrolada, sino que reprocesa la información bajo un entorno clínico protegido, habiendo cultivado previamente herramientas de estabilidad emocional."
      }
    },
    {
      id: "pareja",
      title: "Terapia de Pareja",
      shortDesc: "Acompañamiento clínico para parejas que buscan resolver distanciamientos y sanar heridas del vínculo.",
      longDesc: "La terapia de pareja ayuda a navegar las crisis, la falta de comunicación, los celos, la infidelidad o el desgaste cotidiano. Facilitamos un diálogo abierto y respetuoso para identificar ciclos relacionales destructivos recurrentes, promoviendo la empatía mutua, la reconstrucción de la confianza y la toma de decisiones conjuntas saludables.",
      duration: "60 a 70 minutos por sesión",
      focus: ["Patrones de Comunicación", "Reconstrucción de Confianza", "Gestión de Celos e Infidelidades", "Intimidad Afectiva", "Resolución de Acuerdos"],
      methodology: "Método Gottman combinado con Terapia Focalizada en las Emociones (TFE)",
      faq: {
        q: "¿Qué sucede si mi pareja no está convencida de asistir?",
        a: "Es una situación común. A menudo se puede iniciar con una sesión individual para evaluar la disposición o trabajar con uno de los miembros sobre cómo sus propios cambios influyen positivamente en la relación."
      }
    },
    {
      id: "mindfulness",
      title: "Mindfulness y Manejo del Estrés",
      shortDesc: "Entrenamiento práctico para regular el sistema nervioso, reducir la rumiación y cultivar la calma.",
      longDesc: "En un mundo acelerado, nuestro sistema nervioso permanece bajo constante alerta. Este programa de acompañamiento te enseña herramientas basadas en la atención plena (Mindfulness) y la autocompasión. Aprenderás a detener el piloto automático mental, disminuir la rumiación de pensamientos catastróficos y responder con ecuanimidad y calma ante los desafíos de tu día a día.",
      duration: "50 minutos por sesión",
      focus: ["Estrés Crónico y Burnout", "Pensamiento Rumiativo", "Autocompasión y Autocuidado", "Atención Plena en la Vida Diaria", "Conexión Mente-Cuerpo"],
      methodology: "Reducción del Estrés Basada en Mindfulness (MBSR)",
      faq: {
        q: "¿Necesito tener experiencia previa en meditación para tomar este servicio?",
        a: "No se requiere ninguna experiencia. Las prácticas se enseñan paso a paso y se adaptan a tu ritmo de vida actual de forma sencilla y laica."
      }
    }
  ];

  const openServiceDetails = (service: ServiceDetails) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  // Gancho para el efecto de revelado al deslizar (Scroll Reveal)
  useEffect(() => {
    const handleScrollReveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScrollReveal);
    // Ejecutar una vez al inicio para revelar lo que ya está en pantalla
    handleScrollReveal();

    return () => window.removeEventListener("scroll", handleScrollReveal);
  }, []);

  return (
    <>
      <Navbar />

      {/* BLOBS ORGÁNICOS FLOTANTES DE FONDO */}
      <OrganicBlob color="bg-sage/10" className="top-28 -left-20 w-80 h-80" />
      <OrganicBlob color="bg-blush/15" className="top-[35%] -right-20 w-[450px] h-[450px]" />
      <OrganicBlob color="bg-sage/10" className="bottom-[25%] -left-32 w-[400px] h-[400px]" />
      <OrganicBlob color="bg-blush/10" className="bottom-20 right-10 w-96 h-96" />

      {/* SECCIÓN 1: HERO */}
      <header id="inicio" className="relative min-h-[95dvh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Texto Hero */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-sage/10 px-5 py-2.5 rounded-full shadow-sm">
                <LeafIcon className="w-4.5 h-4.5 text-sage fill-current animate-float-slow" />
                <span className="font-body text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Un espacio de sanación y escucha activa
                </span>
              </div>

              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-text-dark leading-[1.1] font-medium tracking-tight">
                El camino hacia tu <span className="text-sage block lg:inline italic font-cormorant font-normal">bienestar emocional</span> comienza aquí.
              </h1>

              <p className="font-body text-base sm:text-lg text-text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Hola, soy Carolina Romero. Te ofrezco un acompañamiento clínico cálido, profesional e integrado para ayudarte a comprender tus procesos emocionales y construir una vida en equilibrio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="#contacto"
                  className="px-8 py-4 rounded-full bg-sage hover:bg-sage-dark text-white font-body text-sm font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" /> Solicitar una cita
                </a>
                <a
                  href="#servicios"
                  className="px-8 py-4 rounded-full border border-sage text-sage hover:bg-sage-light/45 font-body text-sm font-bold tracking-wider uppercase transition-all duration-300 text-center"
                >
                  Conocer Servicios
                </a>
              </div>
            </div>

            {/* Imagen de Marca / Logo enmarcado */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] animate-float-slow">
                {/* Contenedor circular con el logotipo */}
                <div className="absolute inset-4 rounded-full overflow-hidden bg-cream-light border-2 border-sage-light shadow-xl flex items-center justify-center">
                  <Image
                    src={`${basePath}/logo.jpeg`}
                    alt="Logo Carolina Romero Psicóloga Clínica"
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-cover p-3 hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECCIÓN 2: SOBRE MÍ */}
      <section id="sobre-mi" className="py-24 bg-white/40 backdrop-blur-xs relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Foto e Ilustración */}
            <div className="lg:col-span-5 order-2 lg:order-1 reveal">
              <div className="relative">
                {/* Wreath decorativo detrás de la tarjeta */}
                <BotanicalBranch className="absolute -top-12 -left-12 w-32 h-32 text-sage/20 transform -rotate-12" />
                <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-blush-light rounded-full blur-2xl -z-10 opacity-70"></div>

                {/* Marco de Foto Orgánico */}
                <div className="organic-card-1 overflow-hidden border border-sage-light/25 bg-white p-4 shadow-xl">
                  <div className="organic-card-1 overflow-hidden h-[450px] relative bg-sage-light">
                    {/* Retrato Profesional Simulando */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-tr from-sage-dark to-sage text-white">
                      {/* Comentario 2: Imagen de marca/identidad visual secundaria dentro del perfil sobre mí */}
                      <Image
                        src={`${basePath}/logo.jpeg`}
                        alt="Logotipo e Identidad Carolina Romero"
                        width={180}
                        height={180}
                        className="rounded-full bg-white p-2 mb-6 shadow-md"
                      />
                      <h4 className="font-heading text-2xl font-medium">Carolina Romero</h4>
                      <p className="font-cormorant italic text-lg text-blush-light mt-1">Psicóloga Clínica Colegiada</p>
                      <p className="font-body text-xs text-white/80 mt-4 leading-relaxed max-w-xs">
                        "Mi práctica se fundamenta en tejer un espacio compasivo y libre de juicio, donde tu vulnerabilidad sea protegida e impulsada hacia el crecimiento."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Texto de Biografía */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 reveal">
              <span className="text-[10px] tracking-[0.25em] font-body uppercase text-burgundy font-bold">Sobre Mí</span>
              <h2 className="font-heading text-4xl sm:text-5xl text-text-dark font-medium leading-tight">
                Vocación de acompañar, <br />
                <span className="text-sage italic font-cormorant font-normal">respaldada por la ciencia y la empatía</span>.
              </h2>

              <div className="font-body text-sm sm:text-base text-text-muted space-y-4 leading-relaxed">
                <p>
                  Mi camino en la psicología nació de una profunda convicción: todo ser humano merece un refugio seguro para explorar su mundo interior, sanar sus heridas y descubrir su propio potencial.
                </p>
                <p>
                  Como psicóloga clínica con amplia trayectoria, me dedico a guiar a adolescentes, familias y adultos en momentos de crisis o en su búsqueda de autoconocimiento. Mi metodología integra la calidez de las terapias humanistas con la estructura sólida de los enfoques basados en la evidencia (CBT y EMDR).
                </p>
                <p>
                  Creo en una psicología cercana, libre de etiquetas frías y dogmas clínicos rígidos. Cada sesión se diseña a la medida de tu historia personal, respetando tus tiempos y reconociendo tu papel protagónico en tu propia recuperación.
                </p>
              </div>

              {/* Grid de Destacados */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex gap-3 items-start p-4 rounded-2xl bg-white border border-sage-light/10 shadow-xs">
                  <Award className="w-5 h-5 text-burgundy shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-body text-sm font-semibold text-text-dark">Formación Académica</h4>
                    <p className="font-body text-xs text-text-muted mt-0.5">Especialista y Máster en Psicología Clínica y Psicoterapia integrada.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start p-4 rounded-2xl bg-white border border-sage-light/10 shadow-xs">
                  <BookOpen className="w-5 h-5 text-burgundy shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-body text-sm font-semibold text-text-dark">Enfoques Validados</h4>
                    <p className="font-body text-xs text-text-muted mt-0.5">Certificación avanzada en Trauma (EMDR) y técnicas cognitivas.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN 3: SERVICIOS */}
      <section id="servicios" className="py-24 bg-cream-dark/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <span className="text-[10px] tracking-[0.25em] font-body uppercase text-burgundy font-bold">Servicios Clínicos</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-text-dark font-medium mt-2 mb-4 leading-tight">
              Acompañamiento a tu medida
            </h2>
            <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
              Cada etapa de la vida requiere herramientas especializadas. Explora las terapias y programas diseñados bajo estrictos estándares clínicos y un trato profundamente humano.
            </p>
          </div>

          {/* Grid de Servicios */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
            {services.map((service, index) => {
              // Estilo de tarjeta orgánico alternado
              const cardClass = index % 2 === 0 ? "organic-card-1" : "organic-card-2";
              return (
                <div
                  key={service.id}
                  className={`bg-white p-8 border border-sage-light/20 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between ${cardClass}`}
                >
                  <div>
                    {/* Indicador de número */}
                    <span className="font-cormorant italic text-3xl text-sage/40 block mb-6 font-semibold">
                      0{index + 1}
                    </span>

                    <h3 className="font-heading text-2xl text-text-dark mb-3 font-medium">
                      {service.title}
                    </h3>

                    <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-sage-light/20 flex items-center justify-between">
                    <span className="font-body text-[10px] font-bold text-burgundy uppercase tracking-wider">
                      {service.duration.split(" ")[0]} {service.duration.split(" ")[1] || "Minutos"}
                    </span>
                    <button
                      onClick={() => openServiceDetails(service)}
                      className="font-body text-xs font-semibold text-sage-dark hover:text-burgundy transition-colors duration-300 flex items-center gap-1 cursor-pointer"
                    >
                      Saber más <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enlace al sistema de diseño como demostración */}
          <div className="mt-16 text-center reveal">
            <Link
              href="/design-system"
              className="inline-flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wider text-text-muted hover:text-sage transition-colors duration-300"
            >
              Ver especificación de componentes y estilos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: ENFOQUE TERAPÉUTICO */}
      <section id="enfoque" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Texto de Filosofía */}
            <div className="lg:col-span-6 space-y-6 reveal">
              <span className="text-[10px] tracking-[0.25em] font-body uppercase text-burgundy font-bold">Filosofía de Consulta</span>
              <h2 className="font-heading text-4xl sm:text-5xl text-text-dark font-medium leading-tight">
                Un enfoque integrativo <br />
                <span className="text-sage italic font-cormorant font-normal">centrado en tu singularidad humana</span>.
              </h2>
              <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
                Entiendo la salud mental como un engranaje complejo de factores emocionales, relacionales y fisiológicos. Mi enfoque terapéutico se apoya en cuatro pilares fundamentales:
              </p>

              {/* Lista de Enfoques */}
              <div className="space-y-6 pt-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage-light text-sage flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body text-sm sm:text-base font-semibold text-text-dark">Paciente-Céntrico</h4>
                    <p className="font-body text-xs sm:text-sm text-text-muted mt-1 leading-relaxed">
                      Tú eres el verdadero protagonista del proceso. Respeto tu ritmo y tus valores personales, sin imponer metas ni forzar la vulnerabilidad.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage-light text-sage flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body text-sm sm:text-base font-semibold text-text-dark">Basado en la Evidencia</h4>
                    <p className="font-body text-xs sm:text-sm text-text-muted mt-1 leading-relaxed">
                      Mis intervenciones se estructuran con herramientas clínicas de alta efectividad científica (EMDR, Terapia Cognitiva), garantizando seriedad y rigor ético.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage-light text-sage flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body text-sm sm:text-base font-semibold text-text-dark">Vínculo Sistémico</h4>
                    <p className="font-body text-xs sm:text-sm text-text-muted mt-1 leading-relaxed">
                      Analizamos cómo influyen tus dinámicas familiares, laborales y tu entorno social en el surgimiento y mantenimiento del malestar emocional.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagen y Cita enmarcada */}
            <div className="lg:col-span-6 space-y-8 reveal">
              <div className="organic-card-round bg-cream-dark p-12 border border-sage-light/20 relative shadow-inner text-center">
                <FloralWreath className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 text-sage/10 -z-10" />
                <span className="font-cormorant italic text-6xl text-sage/30 block mb-4">“</span>
                <blockquote className="font-heading text-xl sm:text-2xl text-burgundy italic leading-relaxed mb-6 font-medium">
                  "La paradoja curiosa es que cuando me acepto tal como soy, entonces puedo cambiar."
                </blockquote>
                <p className="font-body text-xs text-text-muted uppercase tracking-widest font-bold">
                  — Carl Rogers
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN 5: TESTIMONIOS */}
      <section id="testimonios" className="py-24 bg-cream-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <span className="text-[10px] tracking-[0.25em] font-body uppercase text-burgundy font-bold">Voces de Sanación</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-text-dark font-medium mt-2 mb-4 leading-tight">
              Experiencias en el consultorio
            </h2>
            <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
              La mayor recompensa es presenciar el retorno a la paz de mis pacientes. Conoce sus testimonios, respetando siempre el anonimato clínico correspondiente.
            </p>
          </div>

          <div className="reveal">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: PREGUNTAS FRECUENTES (FAQ) */}
      <section id="faq" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <span className="text-[10px] tracking-[0.25em] font-body uppercase text-burgundy font-bold">Preguntas Frecuentes</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-text-dark font-medium mt-2 mb-4 leading-tight">
              Respuestas a tus dudas
            </h2>
            <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
              Comprender el funcionamiento de las terapias reduce la incertidumbre. Si no encuentras tu respuesta, no dudes en escribirme directamente.
            </p>
          </div>

          <div className="reveal">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: CONTACTO */}
      <section id="contacto" className="py-24 bg-cream-dark/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Información de Contacto */}
            <div className="lg:col-span-5 space-y-8 reveal">
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.25em] font-body uppercase text-burgundy font-bold">Contacto Directo</span>
                <h2 className="font-heading text-4xl sm:text-5xl text-text-dark font-medium leading-tight">
                  Inicia tu proceso de cambio hoy
                </h2>
                <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
                  Estoy aquí para responder tus preguntas y acompañarte. Puedes agendar directamente completando el formulario de solicitud o a través de los canales de comunicación directa.
                </p>
              </div>

              {/* Tarjetas de Info */}
              <div className="space-y-4">
                <div className="flex gap-4 items-center p-5 rounded-2xl bg-white border border-sage-light/20 shadow-xs">
                  <div className="w-11 h-11 rounded-full bg-sage-light text-sage flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body text-xs font-semibold text-text-muted uppercase tracking-wider">WhatsApp / Teléfono</h4>
                    <p className="font-body text-sm sm:text-base text-text-dark font-bold mt-0.5 hover:text-sage transition-colors">
                      <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">+57 300 123 4567</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center p-5 rounded-2xl bg-white border border-sage-light/20 shadow-xs">
                  <div className="w-11 h-11 rounded-full bg-sage-light text-sage flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body text-xs font-semibold text-text-muted uppercase tracking-wider">Correo Electrónico</h4>
                    <p className="font-body text-sm sm:text-base text-text-dark font-bold mt-0.5 hover:text-sage transition-colors">
                      <a href="mailto:contacto@carolinaromeropsicologia.com">contacto@carolinaromero.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center p-5 rounded-2xl bg-white border border-sage-light/20 shadow-xs">
                  <div className="w-11 h-11 rounded-full bg-sage-light text-sage flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body text-xs font-semibold text-text-muted uppercase tracking-wider">Ubicación del Consultorio</h4>
                    <p className="font-body text-xs sm:text-sm text-text-dark font-semibold mt-0.5">
                      Edificio Premium Wellness, Consultorio 602. Bogotá, Colombia.
                    </p>
                  </div>
                </div>

                {/* Redes Sociales del Consultorio */}
                <div className="pt-4 border-t border-sage-light/20">
                  <h4 className="font-body text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Conéctate en Redes</h4>
                  <div className="flex gap-3">
                    <a
                      href="https://wa.me/573001234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white hover:bg-sage-light border border-sage-light/35 flex items-center justify-center text-sage-dark hover:text-sage transition-all duration-300 shadow-xs group"
                      title="Escribir por WhatsApp"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.982L2 22l5.233-1.371a9.994 9.994 0 004.773 1.21h.004c5.505 0 9.988-4.478 9.989-9.984A9.979 9.979 0 0012.012 2zm0 1.702c4.568 0 8.286 3.719 8.287 8.284a8.277 8.277 0 01-8.285 8.285h-5.002v.003h-.003c-1.545 0-3.03-.43-4.316-1.246l-.309-.184-3.21.842.857-3.13-.203-.323A8.25 8.25 0 013.729 12c0-4.566 3.717-8.286 8.283-8.286v-.012zm-3.61 3.518a.987.987 0 00-.71.34c-.244.267-.932.913-.932 2.228 0 1.314.954 2.583 1.088 2.764.133.181 1.878 2.868 4.55 4.02.635.275 1.13.438 1.517.561.638.203 1.22.175 1.68.106.512-.075 1.579-.646 1.802-1.27.222-.624.222-1.157.155-1.27-.067-.113-.245-.181-.512-.317-.267-.136-1.58-.781-1.824-.871-.244-.09-.422-.136-.6.136-.178.272-.689.871-.845 1.052-.155.18-.311.204-.578.068-.266-.136-1.127-.416-2.148-1.327-.793-.708-1.33-1.583-1.485-1.85-.156-.266-.017-.41.117-.545.12-.12.267-.312.4-.469.133-.157.178-.267.266-.445.09-.178.045-.333-.022-.47-.067-.135-.6-1.445-.823-1.984-.216-.52-.435-.45-.6-.458l-.51-.007z" />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/carolinaromero.psicologa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white hover:bg-sage-light border border-sage-light/35 flex items-center justify-center text-sage-dark hover:text-sage transition-all duration-300 shadow-xs group"
                      title="Seguir en Instagram"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a
                      href="https://tiktok.com/@carolinaromero.psicologa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white hover:bg-sage-light border border-sage-light/35 flex items-center justify-center text-sage-dark hover:text-sage transition-all duration-300 shadow-xs group"
                      title="Seguir en TikTok"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.525.02c1.31-.03 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.43-.43-.62-.67-.08 3.22.08 6.47-.15 9.69-.32 2.73-2.18 5.25-4.93 5.99-2.91.82-6.25-.33-7.79-2.89-1.69-2.69-1.22-6.52 1.12-8.62 1.79-1.63 4.41-2.02 6.6-1.04v4.13c-1.41-.65-3.19-.34-4.22.79-.99 1.01-1.06 2.74-.23 3.84.81 1.13 2.37 1.6 3.69 1.19.98-.29 1.75-1.16 1.94-2.17.21-1.21.11-2.45.13-3.67V.02z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Nota de Emergencia Médica */}
              <div className="p-6 rounded-[1.5rem] bg-blush-light/60 border border-blush/20 flex gap-4 items-start">
                <ShieldAlert className="w-6 h-6 text-burgundy shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-body text-xs font-bold text-burgundy uppercase tracking-wider mb-1">Nota Importante de Emergencias</h4>
                  <p className="font-body text-xs text-text-muted leading-relaxed">
                    Si te encuentras en una situación de crisis grave o riesgo inminente para tu vida, por favor acude inmediatamente al servicio de urgencias médicas más cercano o comunícate con la línea nacional de salud mental de tu ciudad.
                  </p>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-7 reveal">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-text-dark text-cream-light py-16 border-t border-sage-dark/25 relative overflow-hidden">
        {/* Adorno floral sutil en el footer */}
        <OrganicBlob color="bg-sage-dark/15" className="bottom-0 left-0 w-80 h-80" />
        <OrganicBlob color="bg-burgundy/15" className="top-0 right-0 w-60 h-60" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 border-b border-cream-light/10 pb-12 mb-12">

            {/* Bio Footer */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cream-light flex items-center justify-center text-text-dark">
                  <Heart className="w-4 h-4 fill-current" />
                </div>
                <span className="font-heading text-lg tracking-wide text-white">Carolina Romero</span>
              </div>
              <p className="font-body text-xs text-cream-light/75 leading-relaxed max-w-sm">
                Psicoterapia integral y basada en la evidencia para adolescentes, familias y adultos en Bogotá y modalidad online a nivel internacional.
              </p>
              {/* Redes Sociales en Footer */}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-cream-light/10 hover:bg-cream-light/20 flex items-center justify-center text-cream-light hover:text-white transition-all duration-300"
                  title="WhatsApp"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.982L2 22l5.233-1.371a9.994 9.994 0 004.773 1.21h.004c5.505 0 9.988-4.478 9.989-9.984A9.979 9.979 0 0012.012 2zm0 1.702c4.568 0 8.286 3.719 8.287 8.284a8.277 8.277 0 01-8.285 8.285h-5.002v.003h-.003c-1.545 0-3.03-.43-4.316-1.246l-.309-.184-3.21.842.857-3.13-.203-.323A8.25 8.25 0 013.729 12c0-4.566 3.717-8.286 8.283-8.286v-.012zm-3.61 3.518a.987.987 0 00-.71.34c-.244.267-.932.913-.932 2.228 0 1.314.954 2.583 1.088 2.764.133.181 1.878 2.868 4.55 4.02.635.275 1.13.438 1.517.561.638.203 1.22.175 1.68.106.512-.075 1.579-.646 1.802-1.27.222-.624.222-1.157.155-1.27-.067-.113-.245-.181-.512-.317-.267-.136-1.58-.781-1.824-.871-.244-.09-.422-.136-.6.136-.178.272-.689.871-.845 1.052-.155.18-.311.204-.578.068-.266-.136-1.127-.416-2.148-1.327-.793-.708-1.33-1.583-1.485-1.85-.156-.266-.017-.41.117-.545.12-.12.267-.312.4-.469.133-.157.178-.267.266-.445.09-.178.045-.333-.022-.47-.067-.135-.6-1.445-.823-1.984-.216-.52-.435-.45-.6-.458l-.51-.007z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/carolinaromero.psicologa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-cream-light/10 hover:bg-cream-light/20 flex items-center justify-center text-cream-light hover:text-white transition-all duration-300"
                  title="Instagram"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@carolinaromero.psicologa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-cream-light/10 hover:bg-cream-light/20 flex items-center justify-center text-cream-light hover:text-white transition-all duration-300"
                  title="TikTok"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.525.02c1.31-.03 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.43-.43-.62-.67-.08 3.22.08 6.47-.15 9.69-.32 2.73-2.18 5.25-4.93 5.99-2.91.82-6.25-.33-7.79-2.89-1.69-2.69-1.22-6.52 1.12-8.62 1.79-1.63 4.41-2.02 6.6-1.04v4.13c-1.41-.65-3.19-.34-4.22.79-.99 1.01-1.06 2.74-.23 3.84.81 1.13 2.37 1.6 3.69 1.19.98-.29 1.75-1.16 1.94-2.17.21-1.21.11-2.45.13-3.67V.02z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Enlaces Rápidos */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-body text-xs font-bold uppercase tracking-widest text-blush">Enlaces de Navegación</h4>
              <div className="grid grid-cols-2 gap-2 font-body text-xs">
                <a href="#inicio" className="text-cream-light/80 hover:text-white transition-colors">Inicio</a>
                <a href="#sobre-mi" className="text-cream-light/80 hover:text-white transition-colors">Sobre Mí</a>
                <a href="#servicios" className="text-cream-light/80 hover:text-white transition-colors">Servicios</a>
                <a href="#enfoque" className="text-cream-light/80 hover:text-white transition-colors">Enfoque</a>
                <a href="#testimonios" className="text-cream-light/80 hover:text-white transition-colors">Testimonios</a>
                <a href="#faq" className="text-cream-light/80 hover:text-white transition-colors">Preguntas Frecuentes</a>
              </div>
            </div>

            {/* Legal / Código Ético */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-body text-xs font-bold uppercase tracking-widest text-blush">Acreditación Clínica</h4>
              <p className="font-body text-[10px] text-cream-light/70 leading-relaxed">
                Carolina Romero • Tarjeta Profesional de Psicología N° 123456789. Colegio Oficial de Psicólogos. Cumplimiento con la normatividad de habilitación de servicios de salud.
              </p>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-cream-light/50 font-body text-[10px] sm:text-xs">
            <p>© {new Date().getFullYear()} Carolina Romero • Psicóloga Clínica. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <Link href="/design-system" className="hover:text-cream-light transition-colors">Sistema de Diseño</Link>
              <span className="text-cream-light/20">|</span>
              <a href="#" className="hover:text-cream-light transition-colors">Políticas de Privacidad de Datos de Salud</a>
            </div>
          </div>
        </div>
      </footer>

      {/* DIÁLOGO MODAL DE DETALLES DE SERVICIO */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </>
  );
}
