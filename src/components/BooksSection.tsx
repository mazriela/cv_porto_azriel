"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { sound } from "@/utils/sound";
import { PORTFOLIO_DATA, Book } from "@/data/portfolioData";
import { BookOpen, CheckCircle, Sparkles, X, Layers, Bookmark } from "lucide-react";

export default function BooksSection() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <section id="books" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center space-y-4 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-purple-500/30 text-xs font-mono text-purple-400">
          <BookOpen className="w-3.5 h-3.5" />
          <span>AUTHOR & TECHNICAL LITERATURE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Published <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Technical Books</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light">
          Author of 4 published handbooks guiding hundreds of junior to intermediate software engineers across Indonesia in mastering Android & Kotlin.
        </p>
      </motion.div>

      {/* 3D Bookshelf Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PORTFOLIO_DATA.books.map((book, idx) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            onMouseEnter={() => sound.playHover()}
            className="group glass-card rounded-2xl border border-white/10 hover:border-purple-500/40 p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.25)] perspective-1000"
          >
            {/* 3D Book Cover Simulation */}
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-slate-950 p-2 shadow-2xl border border-white/10 group-hover:rotate-y-[-8deg] transition-transform duration-500 preserve-3d flex items-center justify-center">
              {/* Real Book Cover from PDF */}
              <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-contain filter contrast-105 brightness-105"
                />
              </div>

              {/* Book Spine Highlight Effect */}
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/40 via-white/15 to-transparent pointer-events-none" />

              {/* Level Badge */}
              <div className="absolute top-3 right-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-slate-950/80 text-purple-300 border border-purple-500/40">
                  {book.level}
                </span>
              </div>
            </div>

            {/* Book Info */}
            <div className="mt-5 space-y-2.5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium line-clamp-1">
                  {book.tagline}
                </p>
                <p className="text-xs text-slate-300/80 mt-2 line-clamp-3 leading-relaxed font-light">
                  {book.description}
                </p>
              </div>

              {/* Topics Preview Chips */}
              <div className="space-y-3 pt-3 border-t border-slate-800">
                <div className="flex flex-wrap gap-1">
                  {book.topics.slice(0, 3).map((topic, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] bg-slate-900 text-slate-300 border border-white/5"
                    >
                      {topic}
                    </span>
                  ))}
                  {book.topics.length > 3 && (
                    <span className="px-2 py-0.5 rounded text-[10px] bg-purple-500/10 text-purple-300 font-mono">
                      +{book.topics.length - 3} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => {
                    sound.playClick(850);
                    setSelectedBook(book);
                  }}
                  className="w-full py-2 rounded-xl glass-panel border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/10 text-purple-300 hover:text-white text-xs font-medium transition-all"
                >
                  Explore Chapters & Outline
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Book Detail Modal */}
      <AnimatePresence>
        {selectedBook && (
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
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel-glow rounded-2xl sm:rounded-3xl border border-purple-500/40 p-5 sm:p-8 flex flex-col space-y-6 shadow-2xl"
            >
              <button
                onClick={() => {
                  sound.playClick(600);
                  setSelectedBook(null);
                }}
                className="absolute top-5 right-5 p-2 rounded-full glass-panel border border-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="relative w-44 aspect-[3/4] rounded-xl overflow-hidden bg-slate-900 border border-white/10 shrink-0">
                  <Image
                    src={selectedBook.coverImage}
                    alt={selectedBook.title}
                    fill
                    sizes="200px"
                    className="object-contain p-2"
                  />
                </div>

                <div className="space-y-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono uppercase bg-purple-500/20 text-purple-300 border border-purple-500/40">
                    {selectedBook.level} • Published {selectedBook.year}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedBook.title}
                  </h3>
                  <p className="text-xs text-purple-300 font-medium">
                    {selectedBook.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {selectedBook.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  // Syllabus & Key Topics Covered:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedBook.topics.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/5 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
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
