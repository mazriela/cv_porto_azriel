"use client";

import React, { useState, useEffect } from "react";
import { sound } from "@/utils/sound";
import { 
  FileText, 
  Menu, 
  X, 
  Sparkles,
  Smartphone,
  Briefcase,
  BookOpen,
  Award,
  Layers,
  Send
} from "lucide-react";

interface NavbarProps {
  onOpenCvModal: () => void;
}

export default function Navbar({ onOpenCvModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    sound.initClient();

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "projects", "experience", "books", "training", "awards", "skills", "contact"];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#hero", icon: Sparkles },
    { name: "Apps", href: "#projects", icon: Smartphone },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Books", href: "#books", icon: BookOpen },
    { name: "Training", href: "#training", icon: Layers },
    { name: "Awards", href: "#awards", icon: Award },
    { name: "Skills", href: "#skills", icon: Layers },
    { name: "Contact", href: "#contact", icon: Send },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 md:px-8 py-3 md:py-4 flex justify-center pointer-events-none"
      >
        <nav
          className={`w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 pointer-events-auto ${
            scrolled
              ? "bg-[#030712] border border-cyan-500/35 shadow-[0_16px_40px_rgba(0,0,0,0.98)]"
              : "glass-panel border border-white/10"
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={() => sound.playClick(600)}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-wider text-sm text-slate-100 flex items-center gap-1.5">
                AZRIEL<span className="text-cyan-400">.DEV</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              </span>
              <span className="text-[10px] text-slate-400 tracking-tight hidden sm:inline">
                Mobile Architect
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/90 p-1 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => sound.playClick(750)}
                  onMouseEnter={() => sound.playHover()}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* View / Download CV Button */}
            <button
              onClick={() => {
                sound.playClick(850);
                onOpenCvModal();
              }}
              onMouseEnter={() => sound.playHover()}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 hover:from-cyan-500/30 hover:to-indigo-500/30 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 text-xs font-medium transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume CV</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                sound.playClick(700);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-white lg:hidden cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-slate-950/98 backdrop-blur-2xl pt-24 px-6 flex flex-col justify-between pb-8 animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold px-2 mb-2">
              Navigation
            </p>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    sound.playClick(800);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-slate-800">
            <button
              onClick={() => {
                sound.playClick(850);
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Preview & Download Full CV</span>
            </button>
            <p className="text-center text-xs text-slate-500">
              Muhamad Azriel Akbar • Mobile Architect
            </p>
          </div>
        </div>
      )}
    </>
  );
}
