"use client";

import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { sound } from "@/utils/sound";
import { PORTFOLIO_DATA, Certificate } from "@/data/portfolioData";
import { Trophy, Award, Medal, Sparkles, ExternalLink, X, ZoomIn } from "lucide-react";

export default function AwardsSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const handleOpenCertificate = (cert: Certificate) => {
    sound.playSuccess();
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#38bdf8", "#818cf8", "#f59e0b", "#10b981", "#ffffff"]
      });
    } catch {}
    setSelectedCert(cert);
  };

  return (
    <section id="awards" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center space-y-4 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-amber-500/30 text-xs font-mono text-amber-400">
          <Trophy className="w-3.5 h-3.5" />
          <span>RECOGNITION & EXCELLENCE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          National <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-cyan-400 bg-clip-text text-transparent">Awards & Honors</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light">
          A proven competitive pedigree in national software innovation, mobile development hackathons, and technology championships across Indonesian universities and tech titans.
        </p>
      </motion.div>

      {/* Awards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.certificates.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            onMouseEnter={() => sound.playHover()}
            onClick={() => handleOpenCertificate(cert)}
            className="group glass-card rounded-2xl border border-white/10 hover:border-amber-400/40 p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_45px_-12px_rgba(245,158,11,0.2)] cursor-pointer"
          >
            {/* Scanned Certificate Preview */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-white/10 flex items-center justify-center p-2 mb-4 group-hover:scale-102 transition-transform">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-contain filter brightness-95 group-hover:brightness-105 transition-all"
              />
              
              {/* Hover Zoom Overlay */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-3 rounded-full bg-amber-500/80 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.6)]">
                  <ZoomIn className="w-5 h-5" />
                </span>
              </div>

              {/* Year & Rank Pill */}
              <div className="absolute top-2.5 right-2.5">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                  cert.badge === "Gold" 
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                    : cert.badge === "Silver"
                    ? "bg-slate-300/20 text-slate-200 border border-slate-300/40"
                    : "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                }`}>
                  {cert.year} • {cert.badge}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                {cert.rank}
              </span>
              <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                {cert.organizer}
              </p>
              <p className="text-xs text-slate-300/80 font-light line-clamp-2 pt-1">
                {cert.description}
              </p>
            </div>

            <div className="pt-4 mt-2 border-t border-slate-800 flex items-center justify-between text-xs text-amber-400/90 group-hover:text-amber-300">
              <span className="font-mono text-[11px]">Inspect Official Credential</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel-glow rounded-2xl sm:rounded-3xl border border-amber-500/40 p-5 sm:p-8 flex flex-col space-y-5 shadow-2xl"
            >
              <button
                onClick={() => {
                  sound.playClick(600);
                  setSelectedCert(null);
                }}
                className="absolute top-5 right-5 p-2 rounded-full glass-panel border border-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-xs font-mono uppercase text-amber-400">
                  Official Credential Verification • {selectedCert.year}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {selectedCert.title}
                </h3>
                <p className="text-sm text-slate-300">
                  {selectedCert.event} // {selectedCert.organizer}
                </p>
              </div>

              {/* High-Res Scanned Document */}
              <div className="relative w-full h-80 sm:h-[420px] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 flex items-center justify-center p-3">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain"
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {selectedCert.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
