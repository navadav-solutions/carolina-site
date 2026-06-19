"use client";

import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Servicios", href: "#servicios" },
    { name: "Enfoque", href: "#enfoque" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-cream-light/85 backdrop-blur-md shadow-sm border-b border-sage-light/30 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, "#inicio")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center text-sage group-hover:bg-blush-light group-hover:text-burgundy transition-all duration-500">
              <Heart className="w-5 h-5 fill-current" /> {/* reemplaza el corazon con el logo que se encuentra en public/logo.jpeg */}
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl lg:text-2xl text-text-dark tracking-wide font-medium">
                Carolina Romero
              </span>
              <span className="text-[10px] tracking-[0.2em] font-body uppercase text-burgundy font-semibold">
                Psicóloga Clínica
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-body text-sm text-text-dark/80 hover:text-sage-dark transition-colors duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sage group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => handleLinkClick(e, "#contacto")}
              className="px-5 py-2.5 rounded-full bg-sage hover:bg-sage-dark text-white font-body text-xs font-semibold tracking-wider uppercase shadow-sm hover:shadow transition-all duration-300"
            >
              Agendar Sesión
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-dark hover:text-sage transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-cream-light border-b border-sage-light/35 shadow-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-body text-base text-text-dark/90 hover:text-sage py-1.5 transition-colors border-b border-sage-light/20"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => handleLinkClick(e, "#contacto")}
            className="mt-2 w-full py-3 rounded-full bg-sage text-center text-white font-body text-sm font-semibold shadow hover:bg-sage-dark transition-colors"
          >
            Agendar Sesión
          </a>
        </div>
      </div>
    </nav>
  );
}
