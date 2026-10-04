"use client";

import React from "react";
import { sound } from "@/utils/sound";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUp, Heart, Terminal } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    sound.playClick(900);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/80 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Identity */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <h4 className="font-bold text-white tracking-wide text-sm font-mono">
              MUHAMAD AZRIEL AKBAR
            </h4>
          </div>
          <p className="text-xs text-slate-400 font-light">
            Senior Mobile Application Architect, Author & Aerial Cinematographer
          </p>
        </div>

        {/* System & Tech Status */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>Next.js 16 • Tailwind CSS v4 • Web Audio Synth</span>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => sound.playHover()}
          className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 hover:border-cyan-500/40 text-xs text-slate-300 hover:text-white transition-all group"
        >
          <span>Return to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-600">
        © 2026 Muhamad Azriel Akbar. All rights reserved. Designed with cinematic depth parallax.
      </div>
    </footer>
  );
}
