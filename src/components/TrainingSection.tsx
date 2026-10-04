"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { sound } from "@/utils/sound";
import { PORTFOLIO_DATA, TrainingItem } from "@/data/portfolioData";
import { GraduationCap, Users, MapPin, CheckCircle, ExternalLink, X } from "lucide-react";

export default function TrainingSection() {
  const [selectedTraining, setSelectedTraining] = useState<TrainingItem | null>(null);

  return (
    <section id="training" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center space-y-4 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-emerald-500/30 text-xs font-mono text-emerald-400">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>CORPORATE WORKSHOPS & TALENT ACCELERATION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Inhouse <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Corporate Training</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light">
          Trusted by government nuclear agencies, national enterprises, and universities to train professional engineering teams in modern Flutter, Kotlin, and Android architecture.
        </p>
      </motion.div>

      {/* Corporate Training Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PORTFOLIO_DATA.trainings.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            onMouseEnter={() => sound.playHover()}
            className="group glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_20px_45px_-12px_rgba(16,185,129,0.2)]"
          >
            {/* Real Training Session Photo */}
            <div className="relative w-full h-64 sm:h-72 bg-slate-950 overflow-hidden flex items-center justify-center p-3">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={item.image}
                  alt={item.client}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center filter brightness-95 contrast-105"
                />
              </div>

              {/* Location Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-950/80 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>{item.location}</span>
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">
                  {item.role}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors mt-1">
                  {item.client}
                </h3>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                  <Users className="w-3.5 h-3.5 text-slate-500" />
                  <span>{item.attendees}</span>
                </p>
                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-light mt-3">
                  {item.description}
                </p>
              </div>

              {/* Topics chips */}
              <div className="space-y-3 pt-3 border-t border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {item.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[11px] bg-slate-900 text-slate-300 border border-white/5"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    sound.playClick(850);
                    setSelectedTraining(item);
                  }}
                  className="w-full py-2.5 rounded-xl glass-panel border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-500/10 text-emerald-300 hover:text-white text-xs font-medium transition-all"
                >
                  View Corporate Training Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Training Modal */}
      <AnimatePresence>
        {selectedTraining && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel-glow rounded-2xl sm:rounded-3xl border border-emerald-500/40 p-5 sm:p-8 flex flex-col space-y-6 shadow-2xl"
            >
              <button
                onClick={() => {
                  sound.playClick(600);
                  setSelectedTraining(null);
                }}
                className="absolute top-5 right-5 p-2 rounded-full glass-panel border border-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-emerald-400">
                  {selectedTraining.role} • {selectedTraining.location}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {selectedTraining.client}
                </h3>
                <p className="text-xs text-slate-400">
                  Target Audience: {selectedTraining.attendees}
                </p>
              </div>

              <div className="relative w-full h-72 rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
                <Image
                  src={selectedTraining.image}
                  alt={selectedTraining.client}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover"
                />
              </div>

              <div className="space-y-3">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedTraining.description}
                </p>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {selectedTraining.topics.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/5 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
