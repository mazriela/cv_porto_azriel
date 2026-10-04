"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sound } from "@/utils/sound";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  GraduationCap, 
  Award,
  Sparkles,
  Plane
} from "lucide-react";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"career" | "education">("career");

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center space-y-4 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-indigo-500/30 text-xs font-mono text-indigo-400">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAREER TRAJECTORY & IMPACT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Professional <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light">
          A track record of engineering scalable enterprise mobile solutions, conducting corporate trainings, and directing aerial cinematography.
        </p>

        {/* Tab Toggle */}
        <div className="inline-flex p-1 rounded-full glass-panel border border-white/10 mt-4">
          <button
            onClick={() => {
              sound.playClick(750);
              setActiveTab("career");
            }}
            onMouseEnter={() => sound.playHover()}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium transition-all ${
              activeTab === "career"
                ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work & Engineering History</span>
          </button>
          <button
            onClick={() => {
              sound.playClick(750);
              setActiveTab("education");
            }}
            onMouseEnter={() => sound.playHover()}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium transition-all ${
              activeTab === "education"
                ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education & Foundation</span>
          </button>
        </div>
      </motion.div>

      {/* Timeline Content */}
      <div className="relative border-l border-slate-800 ml-4 sm:ml-32 md:ml-48 space-y-12">
        <AnimatePresence mode="wait">
          {activeTab === "career" ? (
            <motion.div
              key="career-timeline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {PORTFOLIO_DATA.experiences.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => sound.playHover()}
                  className="relative pl-6 sm:pl-10 group"
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-[0_0_10px_#22d3ee]" />

                  {/* Date Badge positioned for desktop on the left */}
                  <div className="sm:absolute sm:-left-44 sm:top-0 text-left sm:text-right sm:w-36 mb-2 sm:mb-0">
                    <span className="text-xs font-mono font-semibold text-cyan-400">
                      {exp.period}
                    </span>
                    <p className="text-[11px] text-slate-500">{exp.location}</p>
                  </div>

                  {/* Experience Card */}
                  <motion.div 
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 group-hover:border-cyan-500/30 transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-medium text-indigo-400">
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase bg-slate-800/80 text-slate-300 border border-white/5">
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4 font-light">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-4">
                      {exp.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                          <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies used */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900/80 text-cyan-300/90 border border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="education-timeline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-6 sm:pl-10 group"
                >
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-400 group-hover:scale-125 group-hover:bg-indigo-400 transition-all shadow-[0_0_10px_#818cf8]" />

                  <div className="sm:absolute sm:-left-44 sm:top-0 text-left sm:text-right sm:w-36 mb-2 sm:mb-0">
                    <span className="text-xs font-mono font-semibold text-indigo-400">
                      {edu.period}
                    </span>
                    <p className="text-[11px] text-slate-500">Bogor, Indonesia</p>
                  </div>

                  <motion.div 
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 group-hover:border-indigo-500/30 transition-all"
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {edu.school}
                    </h3>
                    <p className="text-sm font-medium text-cyan-400 mb-3">
                      {edu.degree}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4">
                      {edu.focus}
                    </p>

                    <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center gap-3">
                      <Award className="w-5 h-5 text-indigo-400 shrink-0" />
                      <p className="text-xs text-indigo-200">
                        {edu.achievements}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
