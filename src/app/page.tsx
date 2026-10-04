"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import CinematicBackground from "@/components/CinematicBackground";
import CustomCursor from "@/components/CustomCursor";
import ParallaxExperience from "@/components/ParallaxExperience";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import BooksSection from "@/components/BooksSection";
import TrainingSection from "@/components/TrainingSection";
import AwardsSection from "@/components/AwardsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CvModal from "@/components/CvModal";

export default function Home() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Cinematic Starfield & Ambient Depth Canvas */}
      <CinematicBackground />

      {/* Dynamic Multi-Layer Scroll Parallax System */}
      <ParallaxExperience />

      {/* Custom Precision Cursor */}
      <CustomCursor />

      {/* Floating Glass Navigation Bar */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <div className="relative z-10 space-y-12 sm:space-y-20">
        <HeroSection onOpenCvModal={() => setIsCvModalOpen(true)} />
        <ProjectsSection />
        <ExperienceSection />
        <BooksSection />
        <TrainingSection />
        <AwardsSection />
        <SkillsSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />

      {/* Interactive CV Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </main>
  );
}
