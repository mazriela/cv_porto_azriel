"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { sound } from "@/utils/sound";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";

export default function ContactSection() {
  const [mounted, setMounted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("Enterprise Mobile App Development");
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyEmail = () => {
    sound.playSuccess();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccess();

    const text = `Halo Mas Azriel Akbar,%0A%0ASaya: ${encodeURIComponent(formName || "Rekan Kerja")}%0AEmail: ${encodeURIComponent(formEmail || "-")}%0ATopik: ${encodeURIComponent(formSubject)}%0A%0APesan:%0A${encodeURIComponent(formMessage || "Tertarik untuk mendiskusikan peluang kerja sama proyek mobile app / corporate training.")}`;
    
    // Clean phone number: remove + and spaces
    const cleanPhone = PORTFOLIO_DATA.personal.phone.replace(/[^0-9]/g, "");
    const waUrl = `https://wa.me/${cleanPhone}?text=${text}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center space-y-4 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400">
          <Send className="w-3.5 h-3.5" />
          <span>START A CONVERSATION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Let’s Build Something <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Exceptional</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light">
          Available for senior mobile engineering contracts, architecture consultations, corporate team trainings, and aerial drone projects.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Direct Contact Cards (5 cols) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-4"
        >
          
          {/* Email Card */}
          <motion.div 
            whileHover={{ x: 6, transition: { duration: 0.2 } }}
            onClick={copyEmail}
            onMouseEnter={() => sound.playHover()}
            className="glass-card p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 cursor-pointer flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-slate-400 uppercase">Direct Email</p>
                <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {PORTFOLIO_DATA.personal.email}
                </p>
              </div>
            </div>
            <button className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 group-hover:text-white">
              {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </motion.div>

          {/* WhatsApp / Phone Card */}
          <motion.a
            whileHover={{ x: 6, transition: { duration: 0.2 } }}
            href={`https://wa.me/${PORTFOLIO_DATA.personal.phone.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick(800)}
            onMouseEnter={() => sound.playHover()}
            className="glass-card p-5 rounded-2xl border border-white/10 hover:border-emerald-500/40 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-slate-400 uppercase">Phone & WhatsApp</p>
                <p className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  {PORTFOLIO_DATA.personal.phone}
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            whileHover={{ x: 6, transition: { duration: 0.2 } }}
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick(800)}
            onMouseEnter={() => sound.playHover()}
            className="glass-card p-5 rounded-2xl border border-white/10 hover:border-indigo-500/40 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-mono text-slate-400 uppercase">LinkedIn Profile</p>
                <p className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                  Muhamad Azriel Akbar
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </motion.a>

          {/* Location Card */}
          <motion.div 
            whileHover={{ x: 6, transition: { duration: 0.2 } }}
            className="glass-card p-5 rounded-2xl border border-white/10 flex items-center gap-3.5"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-mono text-slate-400 uppercase">Location</p>
              <p className="text-xs text-slate-300 leading-snug">
                {PORTFOLIO_DATA.personal.location}
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* Interactive Consultation Messenger (7 cols) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 glass-panel-glow p-6 sm:p-8 rounded-3xl border border-cyan-500/30"
        >
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <h3 className="text-lg font-bold text-white font-mono">
              // Direct WhatsApp Inquirer
            </h3>
          </div>

          {mounted ? (
            <form onSubmit={handleSendWhatsApp} className="space-y-4" suppressHydrationWarning>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" suppressHydrationWarning>
                <div suppressHydrationWarning>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5" suppressHydrationWarning>
                    YOUR NAME / COMPANY
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe / PT. Inovasi"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    suppressHydrationWarning
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div suppressHydrationWarning>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5" suppressHydrationWarning>
                    EMAIL OR PHONE
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. yourname@company.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    suppressHydrationWarning
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div suppressHydrationWarning>
                <label className="block text-xs font-mono text-slate-400 mb-1.5" suppressHydrationWarning>
                  PROJECT OR SERVICE INQUIRY
                </label>
                <select
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  suppressHydrationWarning
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="Enterprise Flutter / Android App">Enterprise Flutter / Android App</option>
                  <option value="Corporate Developer Training">Corporate Developer Training</option>
                  <option value="Mobile Architecture Code Audit">Mobile Architecture Code Audit</option>
                  <option value="Drone Aerial Pilot & Cinematography">Drone Aerial Pilot & Cinematography</option>
                  <option value="Other Collaboration">Other Collaboration</option>
                </select>
              </div>

              <div suppressHydrationWarning>
                <label className="block text-xs font-mono text-slate-400 mb-1.5" suppressHydrationWarning>
                  MESSAGE BRIEF
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your project scope, timelines, or questions..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  suppressHydrationWarning
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Launch Consultation on WhatsApp</span>
              </motion.button>
              <p className="text-center text-[11px] text-slate-500">
                Direct connection to +62 821 2035 1636. Instant response guaranteed.
              </p>
            </form>
          ) : (
            <div className="space-y-4 animate-pulse" suppressHydrationWarning>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="h-16 rounded-xl bg-slate-900/60 border border-white/5" />
                <div className="h-16 rounded-xl bg-slate-900/60 border border-white/5" />
              </div>
              <div className="h-12 rounded-xl bg-slate-900/60 border border-white/5" />
              <div className="h-28 rounded-xl bg-slate-900/60 border border-white/5" />
              <div className="h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30" />
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
