"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { sound } from "@/utils/sound";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { 
  Smartphone, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Zap, 
  X,
  Code2,
  CheckCircle,
  Eye
} from "lucide-react";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Applications" },
    { id: "fintech", label: "Fintech & Banking" },
    { id: "enterprise", label: "Enterprise & Governance" },
    { id: "lifestyle", label: "Lifestyle & Community" },
    { id: "ecommerce", label: "E-Commerce" },
  ];

  const filteredProjects = activeCategory === "all" 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center space-y-4 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400">
          <Smartphone className="w-3.5 h-3.5" />
          <span>PRODUCTION MOBILE ECOSYSTEMS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Featured Mobile <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Applications</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light">
          Engineered for high-volume transactions, government civil apparatus, remote field operations, and scalable cross-platform user experiences.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                sound.playClick(750);
                setActiveCategory(cat.id);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105"
                  : "glass-panel text-slate-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid with Multi-Layer Depth Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (idx % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            onMouseEnter={() => sound.playHover()}
            className="group relative glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-500 flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_50px_-10px_rgba(6,182,212,0.2)]"
          >
            {/* Top Preview Canvas */}
            <div className="relative w-full h-72 sm:h-80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900/90 overflow-hidden p-6 flex items-center justify-center">
              {/* Radial Backdrop Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-indigo-500/10 group-hover:opacity-100 transition-opacity" />
              
              {/* High-Resolution App Mockup */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-contain p-2 filter drop-shadow-2xl"
                />
              </div>

              {/* Inspect Button Overlay */}
              <button
                onClick={() => {
                  sound.playSuccess();
                  setSelectedProject(project);
                }}
                className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-cyan-500/90 text-slate-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-[0_0_25px_#22d3ee] z-20 cursor-pointer"
                title="View Full Architecture Deep Dive"
              >
                <Eye className="w-6 h-6" />
              </button>

              {/* Category Pill Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase font-semibold bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Bottom Card Body */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4">
              <div>
                <p className="text-xs font-mono text-cyan-400 font-medium">
                  {project.role}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mt-1">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium tracking-wide">
                  {project.subtitle}
                </p>
                <p className="text-sm text-slate-300/90 font-light mt-3 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Architecture & Tech Badges */}
              <div className="space-y-3 pt-2 border-t border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-300">
                  <Layers className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="truncate">{project.architecture}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    sound.playClick(850);
                    setSelectedProject(project);
                  }}
                  className="w-full py-2.5 rounded-xl glass-panel border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-300 hover:text-white text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>View Technical Specs & Screenshots</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Project Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-4xl max-h-[90vh] glass-panel-glow rounded-3xl border border-cyan-500/40 p-6 sm:p-8 overflow-y-auto flex flex-col space-y-6 shadow-2xl">
            {/* Modal Close Button */}
            <button
              onClick={() => {
                sound.playClick(600);
                setSelectedProject(null);
              }}
              className="absolute top-5 right-5 p-2 rounded-full glass-panel border border-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                {selectedProject.category} // {selectedProject.role}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-400">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Image Preview */}
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-900 border border-white/10 flex items-center justify-center p-4">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-contain"
              />
            </div>

            {/* Overview & Key Highlights */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-widest text-slate-300">
                // System Architecture & Specifications
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Architecture Info Box */}
              <div className="p-4 rounded-xl glass-panel border border-indigo-500/30 flex items-start gap-3">
                <Code2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono text-indigo-300 uppercase">Engineered Architecture Pattern</p>
                  <p className="text-sm text-white font-medium">{selectedProject.architecture}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase text-slate-400">Key Engineering Accomplishments:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 flex items-center gap-3">
                <Zap className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-xs font-mono text-emerald-300 uppercase">Operational Impact</p>
                  <p className="text-sm text-slate-200">{selectedProject.impact}</p>
                </div>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
