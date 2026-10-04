"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { sound } from "@/utils/sound";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  Terminal, 
  Sparkles, 
  Smartphone, 
  BookOpen, 
  Trophy, 
  Briefcase, 
  GraduationCap,
  ArrowRight,
  Download,
  CheckCircle2,
  Copy,
  ExternalLink,
  ChevronDown
} from "lucide-react";

interface HeroSectionProps {
  onOpenCvModal: () => void;
}

export default function HeroSection({ onOpenCvModal }: HeroSectionProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [terminalTab, setTerminalTab] = useState<"specs" | "stack" | "contact">("specs");
  const heroRef = useRef<HTMLElement | null>(null);

  // Mouse tilt effect for 3D depth perception
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 15, y: -y * 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const copyEmail = () => {
    sound.playSuccess();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Cinematic Depth Ambient Glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[26rem] bg-gradient-to-tr from-cyan-500/20 via-indigo-500/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none"
        style={{
          transform: `translate(calc(-50% + ${tilt.x * 2}px), calc(-50% + ${tilt.y * 2}px))`
        }}
      />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Cinematic Typography & Narrative (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
        >
          
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-[11px] sm:text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)] animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide">AVAILABLE FOR ENTERPRISE & FREELANCE CONTRACTS</span>
          </div>

          {/* Main Title with Depth Layering */}
          <div className="space-y-2">
            <h2 className="text-xs sm:text-sm md:text-base font-mono tracking-widest text-slate-400 uppercase">
              // Mobile Application Architect & Trainer
            </h2>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              MUHAMAD{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]">
                AZRIEL AKBAR
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl leading-relaxed pt-2">
              Engineering mission-critical <span className="text-cyan-300 font-medium">Flutter</span> & <span className="text-indigo-300 font-medium">Native Android</span> architectures with 5+ years of production experience, multi-award innovation, and 4 published books.
            </p>
          </div>

          {/* Interactive Interactive Terminal HUD */}
          <div className="w-full max-w-2xl glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl transition-all duration-300 hover:border-cyan-500/40">
            {/* Terminal Top Bar */}
            <div className="px-4 py-2.5 bg-slate-900/80 border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-slate-400 ml-2">azriel@system:~/terminal</span>
              </div>
              <div className="flex items-center gap-1">
                {(["specs", "stack", "contact"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      sound.playClick(900);
                      setTerminalTab(tab);
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className={`px-2.5 py-0.5 rounded text-[11px] uppercase transition-colors ${
                      terminalTab === tab
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm space-y-2 text-slate-300 bg-slate-950/70">
              {terminalTab === "specs" && (
                <>
                  <div className="flex items-center text-cyan-400">
                    <span className="text-slate-500 mr-2">$</span>
                    <span>azriel.getSpecs()</span>
                  </div>
                  <div className="text-slate-300 pl-4 border-l border-cyan-500/30 space-y-1 text-xs">
                    <p>• <span className="text-slate-400">Title:</span> Senior Mobile Engineer & Corporate Trainer</p>
                    <p>• <span className="text-slate-400">Production Portfolio:</span> 8+ Deployed Apps (Fintech, Enterprise, E-Com)</p>
                    <p>• <span className="text-slate-400">Author:</span> 4 Published Books on Kotlin & Android</p>
                    <p>• <span className="text-slate-400">Specialty:</span> BLoC, MVVM, Clean Architecture, Drone Aerial Mapping</p>
                    <p>• <span className="text-slate-400">Education:</span> SMK TI Madinatul Quran (IT-Based Pesantren)</p>
                  </div>
                </>
              )}

              {terminalTab === "stack" && (
                <>
                  <div className="flex items-center text-cyan-400">
                    <span className="text-slate-500 mr-2">$</span>
                    <span>azriel.getCoreTech()</span>
                  </div>
                  <div className="text-slate-300 pl-4 border-l border-cyan-500/30 space-y-1 text-xs">
                    <p>• <span className="text-cyan-300">Languages:</span> Dart, Kotlin, Java, PHP, Visual Basic</p>
                    <p>• <span className="text-indigo-300">Frameworks:</span> Flutter, Android SDK, Laravel, CodeIgniter</p>
                    <p>• <span className="text-purple-300">Architecture:</span> BLoC, Provider, MVVM, Retrofit, Room DB, SQLite</p>
                    <p>• <span className="text-emerald-300">Creative & Aerial:</span> DJI Drone Operations, Premiere Pro, After Effects</p>
                  </div>
                </>
              )}

              {terminalTab === "contact" && (
                <>
                  <div className="flex items-center text-cyan-400">
                    <span className="text-slate-500 mr-2">$</span>
                    <span>azriel.getEndpoints()</span>
                  </div>
                  <div className="text-slate-300 pl-4 border-l border-cyan-500/30 space-y-1 text-xs">
                    <p>• <span className="text-slate-400">Email:</span> {PORTFOLIO_DATA.personal.email}</p>
                    <p>• <span className="text-slate-400">WhatsApp/Call:</span> {PORTFOLIO_DATA.personal.phone}</p>
                    <p>• <span className="text-slate-400">Location:</span> Bekasi Utara, Indonesia</p>
                    <p>• <span className="text-slate-400">Status:</span> Open for Consultations & Contracts</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              onClick={() => sound.playClick(800)}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 transition-all"
            >
              <span>Explore Featured Apps</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                sound.playClick(850);
                onOpenCvModal();
              }}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-2 px-5 py-3 rounded-full glass-panel border border-white/15 hover:border-cyan-400/60 text-slate-200 hover:text-white font-medium text-sm transition-all hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download CV</span>
            </button>

            <button
              onClick={copyEmail}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-2 px-4 py-3 rounded-full glass-panel border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-sm transition-all"
              title="Copy Email Address"
            >
              {copiedEmail ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 text-xs">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span className="text-xs">Copy Email</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Right Column: 3D Holographic Portrait & Floating Depth Cards (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center relative perspective-1000"
        >
          <div
            className="relative w-72 sm:w-80 md:w-96 preserve-3d transition-transform duration-200 ease-out"
            style={{
              transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
            }}
          >
            {/* Ambient Back Glow Rings */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/30 to-indigo-600/30 blur-2xl -z-10 animate-pulse-glow" />
            <div className="absolute -inset-2 rounded-3xl border border-cyan-500/20 pointer-events-none -z-10" />

            {/* Main Cyber Card Frame */}
            <div className="glass-panel-glow rounded-3xl p-3 border border-cyan-500/40 relative overflow-hidden group shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)]">
              {/* Scanline Sweep */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent h-16 w-full animate-scanline pointer-events-none" />

              {/* Azriel's Real Photo with Cinematic Filter */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
                <Image
                  src={PORTFOLIO_DATA.personal.profileImage}
                  alt={PORTFOLIO_DATA.personal.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  className="object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                {/* Card Tag Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-panel border border-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">Muhamad Azriel Akbar</p>
                      <p className="text-[11px] text-cyan-300">Lead Mobile Engineer</p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                      <Smartphone className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Multi-Layer Depth Badge 1: Top Right */}
            <div 
              className="absolute -top-3 -right-2 sm:-top-6 sm:-right-6 glass-panel px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 rounded-2xl border border-cyan-400/40 shadow-xl backdrop-blur-xl flex items-center gap-2 sm:gap-2.5 animate-bounce [animation-duration:4s]"
              style={{ transform: "translateZ(40px)" }}
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-sky-400 flex items-center justify-center text-white shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono tracking-wider">Primary Stack</p>
                <p className="text-[11px] sm:text-xs font-bold text-white">Flutter & Kotlin</p>
              </div>
            </div>

            {/* Floating Multi-Layer Depth Badge 2: Bottom Left */}
            <div 
              className="absolute -bottom-3 -left-2 sm:-bottom-6 sm:-left-6 glass-panel px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 rounded-2xl border border-indigo-400/40 shadow-xl backdrop-blur-xl flex items-center gap-2 sm:gap-2.5 animate-bounce [animation-duration:5s]"
              style={{ transform: "translateZ(50px)" }}
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono tracking-wider">Experience</p>
                <p className="text-[11px] sm:text-xs font-bold text-white">5+ Years Native/Hybrid</p>
              </div>
            </div>

            {/* Floating Multi-Layer Depth Badge 3: Center Right */}
            <div 
              className="absolute top-1/2 -right-8 -translate-y-1/2 glass-panel px-3 py-2 rounded-xl border border-purple-400/40 shadow-xl backdrop-blur-xl flex items-center gap-2 hidden sm:flex"
              style={{ transform: "translateZ(30px)" }}
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              <span className="text-[11px] font-mono text-purple-200">DJI Drone Specialist</span>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Cinematic Highlight Stats Matrix */}
      <div className="max-w-7xl w-full mx-auto mt-16 sm:mt-20 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
        {PORTFOLIO_DATA.personal.stats.map((stat, idx) => {
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              onMouseEnter={() => sound.playHover()}
              className={`glass-card p-4 rounded-2xl flex flex-col items-center text-center group cursor-pointer ${
                idx === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 group-hover:scale-110 transition-transform">
                {stat.value}
              </span>
              <span className="text-xs text-slate-400 font-medium mt-1">
                {stat.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-12 flex flex-col items-center gap-2 text-slate-500 text-xs font-mono animate-pulse">
        <span>SCROLL TO EXPLORE ARCHITECTURE</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
