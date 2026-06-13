"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Heart, Sparkles } from "lucide-react";

export default function Home() {
  // Tracks our active pages smoothly (1, 2, or 3)
  const [activePage, setActivePage] = useState<number>(1);

  // 🖱️ Mouse positions for our custom interactive glow trail
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Detective watching mouse movements to guide the background light
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen bg-midnight text-white flex flex-col items-center justify-center overflow-hidden p-6 select-none">
      
      {/* 🔮 Dynamic Cursor Glow Trail */}
      <motion.div 
        className="absolute w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[80px] pointer-events-none z-0 hidden md:block"
        animate={{
          x: mousePos.x - 150,
          y: mousePos.y - 150,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 25, mass: 0.5 }}
      />

      {/* Static Ambient Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 📖 Our Active Page Container */}
      <div className="z-10 w-full max-w-2xl text-center">
        <AnimatePresence mode="wait">
          
          {/* 🌟 SCREEN 1: THE HERO INTRO */}
          {activePage === 1 && (
            <motion.div
              key="intro-screen"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center space-y-6"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-purple-300/60 font-semibold">
                To My Favorite Person
              </span>
              
              <h1 className="text-4xl md:text-5xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-lavenderGlow to-roseGlow font-serif italic py-2">
                The strongest firstborn daughter, <br /> and the brightest light.
              </h1>
              
              <p className="text-sm text-slate-400 max-w-md leading-relaxed font-light">
                I built this sanctuary just for you, Joy. Take a deep breath, leave the world outside for a minute, and click below.
              </p>

              <button
                onClick={() => setActivePage(2)}
                className="group mt-8 flex items-center space-x-2 bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-3 rounded-full transition-all duration-300 text-sm tracking-wider"
              >
                <span>Step Inside</span>
                <ArrowRight className="w-4 h-4 text-roseGlow group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          )}

          {/* 🛡️ SCREEN 2: THE FIRSTBORN'S PERMISSION */}
          {activePage === 2 && (
            <motion.div
              key="permission-screen"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center space-y-6"
            >
              <div className="p-3 bg-white/5 rounded-full border border-white/10">
                <Heart className="w-5 h-5 text-roseGlow fill-roseGlow/20" />
              </div>

              <h2 className="text-3xl md:text-4xl font-light font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 py-1">
                You don't have to be strong here.
              </h2>

              <p className="text-sm text-slate-400 max-w-xl leading-relaxed font-light">
                Everyone around you expects you to be the pillar right now. To be strong for your mom, to carry the weight for your siblings. You are doing amazingly well... but in this space, you don't have to be the firstborn shield. 
              </p>
              
              <p className="text-sm text-lavenderGlow max-w-xl leading-relaxed font-light">
                You can just be Joy. You can hurt, you can cry, and you can let go. I am standing right next to you in the dark, holding your hand for life.
              </p>

              <div className="flex flex-col items-center space-y-4 mt-8">
                <button
                  onClick={() => setActivePage(3)}
                  className="group flex items-center space-x-2 bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-3 rounded-full transition-all duration-300 text-sm tracking-wider"
                >
                  <span>Read My Promise</span>
                  <ArrowRight className="w-4 h-4 text-lavenderGlow group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button
                  onClick={() => setActivePage(1)}
                  className="group flex items-center space-x-2 text-xs tracking-widest text-slate-500 hover:text-white transition-colors duration-300"
                >
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-300" />
                  <span>GO BACK</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* 🤍 SCREEN 3: THE VOW & THE FINAL ANCHOR */}
          {activePage === 3 && (
            <motion.div
              key="vow-screen"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center space-y-6"
            >
              <div className="p-3 bg-white/5 rounded-full border border-white/10">
                <Sparkles className="w-5 h-5 text-lavenderGlow" />
              </div>

              <h2 className="text-3xl md:text-4xl font-light font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-lavenderGlow to-roseGlow py-1">
                A promise for life.
              </h2>

              <p className="text-sm text-slate-400 max-w-xl leading-relaxed font-light">
                I cannot feel your exact pain, but I can stand right beside you while you process it. I want you to know that my intentions are completely pure, and I am genuinely hurting when you are hurting. But please, never hide your tears from me thinking it protects me—knowing you are holding it in hurts so much more.
              </p>
              
              <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 max-w-xl leading-relaxed font-medium">
                I am here to hold your hand through the dark, to hug you tight, or to just sit in complete silence with you whenever words fail. You are radiantly beautiful, Joy, and I am not going anywhere. Take all the time you need to heal. When you are finally okay, only then will I be okay.
              </p>

              <button
                onClick={() => setActivePage(2)}
                className="group mt-8 flex items-center space-x-2 bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-2 rounded-full transition-all duration-300 text-xs tracking-widest text-slate-400 hover:text-white"
              >
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-300" />
                <span>STEP BACK</span>
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </main>
  );
}