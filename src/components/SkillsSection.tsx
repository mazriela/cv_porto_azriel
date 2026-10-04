"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sound } from "@/utils/sound";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  Cpu, 
  Layers, 
  Server, 
  Video, 
  GitBranch, 
  Terminal, 
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("mobile");

  const categoryConfig = [
    { id: "mobile", label: "Mobile Engineering", icon: Cpu, items: PORTFOLIO_DATA.skills.mobile },
    { id: "architecture", label: "Architecture & State", icon: Layers, items: PORTFOLIO_DATA.skills.architecture },
    { id: "backendAndDb", label: "Backend & Data", icon: Server, items: PORTFOLIO_DATA.skills.backendAndDb },
    { id: "creativeAndDrone", label: "Drone & Creative Media", icon: Video, items: PORTFOLIO_DATA.skills.creativeAndDrone },
    { id: "toolsAndWorkflow", label: "DevOps & Workflow", icon: GitBranch, items: PORTFOLIO_DATA.skills.toolsAndWorkflow },
  ];

  const currentCategory = categoryConfig.find(c => c.id === activeCategory) || categoryConfig[0];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center space-y-4 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400">
          <Terminal className="w-3.5 h-3.5" />
          <span>COMPETENCY ARSENAL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Technical <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Expertise</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light">
          A multi-disciplinary blend of battle-tested mobile development frameworks, clean code design patterns, backend API integrations, and licensed drone cinematography.
        </p>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categoryConfig.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  sound.playClick(800);
                  setActiveCategory(cat.id);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    : "glass-panel text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Skills Matrix Display */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentCategory.items.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onMouseEnter={() => sound.playHover()}
              className="glass-card p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 flex flex-col justify-between group transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs font-mono font-semibold text-cyan-400">
                  {skill.level}%
                </span>
              </div>

              {/* Proficiency Meter */}
              <div className="w-full h-2 rounded-full bg-slate-800/90 overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 + idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono mt-3 pt-2 border-t border-slate-800/60">
                <span>Domain: {skill.category}</span>
                <span className="text-slate-400">Production Verified</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Cross-Discipline Highlight Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 glass-panel-glow p-6 sm:p-8 rounded-3xl border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SPECIALIZED MULTI-ROLE COMPETENCY</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Dual Mastery: Mobile Architecture & Drone Operations
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-light">
            Beyond engineering high-resilience mobile systems, Azriel brings commercial drone piloting experience for site surveys, infrastructure inspection, video post-production (Premiere/After Effects), and advanced Excel VBA automation.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-center">
            <p className="text-lg font-bold text-cyan-300 font-mono">100%</p>
            <p className="text-[10px] text-slate-400 uppercase font-mono">Cross-Platform</p>
          </div>
          <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-indigo-500/30 text-center">
            <p className="text-lg font-bold text-indigo-300 font-mono">4K 60</p>
            <p className="text-[10px] text-slate-400 uppercase font-mono">Aerial Imaging</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
