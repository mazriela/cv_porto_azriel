"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Activity, Zap } from "lucide-react";

export default function ParallaxExperience() {
  const { scrollY, scrollYProgress } = useScroll();

  // Smooth spring physics for laser line
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  });

  const [depthStats, setDepthStats] = useState({ scrollVal: 0, progressPct: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setDepthStats({
        scrollVal: Math.round(window.scrollY),
        progressPct: Math.round(latest * 100)
      });
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  if (!mounted) return null;

  return (
    <>
      {/* Top Precision Laser Scroll Progress Beam */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-slate-950/40 backdrop-blur-md">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 via-indigo-500 to-purple-500 shadow-[0_0_12px_#38bdf8]"
          style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
        />
      </div>

      {/* Cyber Network Telemetry HUD (Bottom Right, Minimalist & Sleek) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-3 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/25 text-[11px] font-mono text-slate-400 shadow-xl backdrop-blur-xl">
        <div className="flex items-center gap-1.5 text-cyan-300">
          <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
          <span>NET.STATUS // {depthStats.scrollVal}px</span>
        </div>
        <span className="text-slate-600">|</span>
        <div className="flex items-center gap-1 text-indigo-300">
          <Zap className="w-2.5 h-2.5 text-indigo-400" />
          <span>{depthStats.progressPct}%</span>
        </div>
      </div>
    </>
  );
}
