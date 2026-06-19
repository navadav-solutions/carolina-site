import React from "react";

// Botón de adorno botánico (una rama de hojas flotante)
export function BotanicalBranch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-sage/30 fill-current ${className}`}
    >
      <path
        d="M10 80C30 70 50 50 60 20M60 20C55 25 45 28 38 25C32 22 30 15 35 10C40 5 48 8 54 12C60 16 62 20 60 20ZM60 20C65 25 75 28 82 25C88 22 90 15 85 10C80 5 72 8 66 12C60 16 58 20 60 20ZM45 45C40 48 32 48 26 44C20 40 20 32 26 28C32 24 40 26 44 32C48 38 47 43 45 45ZM45 45C50 48 58 48 64 44C70 40 70 32 64 28C58 24 50 26 46 32C42 38 43 43 45 45ZM28 65C24 67 17 65 13 60C9 55 11 48 17 46C23 44 29 48 31 54C33 60 30 63 28 65ZM28 65C32 67 39 65 43 60C47 55 45 48 39 46C33 44 27 48 25 54C23 60 26 63 28 65Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Fondo orgánico difuminado
export function OrganicBlob({ className = "", color = "bg-sage/10" }: { className?: string; color?: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl -z-10 animate-float-slow opacity-60 ${color} ${className}`}
      style={{
        borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
      }}
    />
  );
}

// Corona de hojas estilizada (inspirada en la corona del logo)
export function FloralWreath({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-sage/20 ${className}`}
    >
      {/* Círculo base doble fino */}
      <circle cx="100" cy="100" r="85" strokeWidth="0.5" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="88" strokeWidth="0.5" />
      
      {/* Hojas y ramitas simuladas */}
      <path
        d="M25 100C25 58.58 58.58 25 100 25C115 25 130 30 142 38M25 100C25 141.42 58.58 175 100 175C141.42 175 175 141.42 175 100"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Ramita superior izquierda */}
      <path d="M40 60C35 55 25 52 20 58C15 64 22 70 30 68" strokeWidth="1" />
      <path d="M40 60C45 55 48 45 42 40C36 35 32 42 35 50" strokeWidth="1" />
      
      {/* Flores botánicas inferiores */}
      <circle cx="100" cy="175" r="4" fill="currentColor" className="text-blush/60" />
      <circle cx="92" cy="170" r="3" fill="currentColor" className="text-blush/60" />
      <circle cx="108" cy="170" r="3" fill="currentColor" className="text-blush/60" />
      
      <circle cx="120" cy="170" r="5" fill="currentColor" className="text-blush/40" />
      <circle cx="80" cy="170" r="5" fill="currentColor" className="text-blush/40" />
    </svg>
  );
}

// Icono botánico para decoraciones inline
export function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
