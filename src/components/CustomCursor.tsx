"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailerPos, setTrailerPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("button") ||
        target?.closest("a") ||
        target?.closest("[data-clickable='true']")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Smooth lerp for trailing outer aura
    let animId: number;
    let currTrailer = { x: -100, y: -100 };

    const animateTrailer = () => {
      setPos((current) => {
        currTrailer.x += (current.x - currTrailer.x) * 0.15;
        currTrailer.y += (current.y - currTrailer.y) * 0.15;
        setTrailerPos({ x: currTrailer.x, y: currTrailer.y });
        return current;
      });
      animId = requestAnimationFrame(animateTrailer);
    };

    animId = requestAnimationFrame(animateTrailer);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Outer Glow Halo */}
      <div
        className={`fixed top-0 left-0 rounded-full transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? "w-14 h-14 bg-cyan-400/20 border border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            : "w-8 h-8 bg-cyan-500/10 border border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
        }`}
        style={{
          left: `${trailerPos.x}px`,
          top: `${trailerPos.y}px`,
        }}
      />

      {/* Center Laser Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee] -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      />
    </div>
  );
}
