"use client";

import React, { useEffect } from "react";
import { sound } from "@/utils/sound";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { X, Download, Printer, ExternalLink, FileText, CheckCircle2 } from "lucide-react";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-950/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-5xl h-[92vh] glass-panel-glow rounded-2xl sm:rounded-3xl border border-cyan-500/40 flex flex-col overflow-hidden shadow-2xl">
        {/* Top Control Bar */}
        <div className="px-3 sm:px-6 py-2.5 sm:py-4 bg-slate-900/90 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs sm:text-sm font-bold text-white truncate max-w-[120px] xs:max-w-[180px] sm:max-w-none">
                Muhamad_Azriel_Akbar_CV.pdf
              </h3>
              <p className="hidden sm:block text-[11px] text-slate-400">
                Official Curriculum Vitae & Enterprise Portfolio
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={PORTFOLIO_DATA.personal.cvUrl}
              download="Muhamad_Azriel_Akbar_CV.pdf"
              onClick={() => sound.playSuccess()}
              className="flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-semibold shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all cursor-pointer"
            >
              <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span><span className="hidden sm:inline">Download </span>PDF</span>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick(750)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-white text-xs font-medium transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Tab</span>
            </a>

            <button
              onClick={() => {
                sound.playClick(600);
                onClose();
              }}
              className="p-1.5 sm:p-2 rounded-xl glass-panel border border-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 w-full bg-slate-950 p-2 sm:p-4 overflow-hidden relative">
          <iframe
            src={`${PORTFOLIO_DATA.personal.cvUrl}#toolbar=1&navpanes=0`}
            className="w-full h-full rounded-2xl border border-white/10 shadow-inner bg-slate-900"
            title="Muhamad Azriel Akbar CV"
          />
        </div>

        {/* Bottom Status Info */}
        <div className="px-6 py-2.5 bg-slate-900/80 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400 shrink-0">
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Document Verified • Mobile Architect & Drone Pilot</span>
          </div>
          <span className="hidden sm:inline text-slate-500">
            Press ESC to exit modal
          </span>
        </div>
      </div>
    </div>
  );
}
