"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Heart, Sparkles, Star } from "lucide-react";

export default function Home() {
  const [activePage, setActivePage] = useState<number>(1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Soft interactive illumination tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#070A13] text-white flex flex-col items-center justify-center overflow-hidden p-8 select-none font-sans-luxury">
      
      {/* 🔮 Interactive Soft Ambient Glow Field */}
      <motion.div 
        className="absolute w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none z-0 hidden md:block"
        animate={{
          x: mousePos.x - 175,
          y: mousePos.y - 175,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30, mass: 0.5 }}
      />

      {/* Deep Luxury Core Vignette Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-900/5 rounded-full blur-[140px] pointer-events-none" />

      {/* 📖 The Cinematic Canvas Container */}
      <div className="z-10 w-full max-w-2xl text-center px-4">
        <AnimatePresence mode="wait">
          
          {/* 🌟 SCREEN 1: THE HIGH-END HERO INTRO */}
          {activePage === 1 && (
            <motion.div
              key="screen-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center space-y-8"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-purple-300/40 font-medium">
                To My Favorite Person
              </span>
              
              <h1 className="text-4xl md:text-6xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 font-serif-luxury italic py-2 leading-tight">
                The strongest firstborn daughter, <br /> and the brightest light.
              </h1>
              
              <p className="text-xs md:text-sm text-slate-400/80 max-w-md leading-relaxed font-light tracking-wide">
                I built this sanctuary just for you, Joy. Take a slow, deep breath, leave the heavy world outside for a moment, and step forward.
              </p>

              <button
                onClick={() => setActivePage(2)}
                className="group mt-12 flex items-center space-x-3 bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.06] px-8 py-3.5 rounded-full transition-all duration-500 text-xs tracking-[0.2em] uppercase"
              >
                <span>Step Inside</span>
                <ArrowRight className="w-3.5 h-3.5 text-roseGlow group-hover:translate-x-1.5 transition-transform duration-500 ease-fluid-ease" />
              </button>
            </motion.div>
          )}

          {/* 🛡️ SCREEN 2: THE IMMENSE PERMISSION */}
          {activePage === 2 && (
            <motion.div
              key="screen-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center space-y-6"
            >
              <div className="p-3 bg-white/[0.02] rounded-full border border-white/5 shadow-inner">
                <Heart className="w-4 h-4 text-roseGlow/70 fill-roseGlow/10" />
              </div>

              <h2 className="text-3xl md:text-5xl font-light font-serif-luxury italic text-slate-200 py-1 tracking-wide leading-snug">
                You don't have to be strong here.
              </h2>

              <p className="text-xs md:text-sm text-slate-400/90 max-w-xl leading-relaxed font-light tracking-wide">
                Everyone around you expects you to be the pillar right now. To be strong for your mom, to carry the weight for your siblings. You are doing amazingly well... but in this space, you don't have to be the firstborn shield. 
              </p>
              
              <p className="text-xs md:text-sm text-lavenderGlow max-w-xl leading-relaxed font-light tracking-wide pt-2">
                You can just be Joy. You can hurt, you can cry, and you can let go. I am standing right next to you in the dark, holding your hand for life.
              </p>

              <div className="flex flex-col items-center space-y-5 mt-12">
                <button
                  onClick={() => setActivePage(3)}
                  className="group flex items-center space-x-3 bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.06] px-8 py-3.5 rounded-full transition-all duration-500 text-xs tracking-[0.2em] uppercase"
                >
                  <span>Read My Promise</span>
                  <ArrowRight className="w-3.5 h-3.5 text-lavenderGlow group-hover:translate-x-1.5 transition-transform duration-500 ease-fluid-ease" />
                </button>

                <button
                  onClick={() => setActivePage(1)}
                  className="group flex items-center space-x-2 text-[10px] tracking-[0.3em] text-slate-500 hover:text-white transition-colors duration-500 uppercase"
                >
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-500" />
                  <span>Return</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* 🤍 SCREEN 3: THE VOW & PURE INTENTIONS */}
          {activePage === 3 && (
            <motion.div
              key="screen-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center space-y-6"
            >
              <div className="p-3 bg-white/[0.02] rounded-full border border-white/5">
                <Sparkles className="w-4 h-4 text-lavenderGlow/70" />
              </div>

              <h2 className="text-3xl md:text-5xl font-light font-serif-luxury italic text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 py-1 tracking-wide">
                Pure Intentions.
              </h2>

              <p className="text-xs md:text-sm text-slate-400/90 max-w-xl leading-relaxed font-light tracking-wide">
                I cannot feel your exact pain, but I can stand right beside you while you process it. I want you to know that my intentions are completely pure, and I am genuinely hurting when you are hurting. 
              </p>
              
              <p className="text-xs md:text-sm text-slate-300 max-w-xl leading-relaxed font-light tracking-wide pt-2">
                Please, never hide your tears from me thinking it protects me—knowing you are holding it all inside hurts so much more. I am here to hold your hand through the dark, to hug you tight, or to just sit in complete silence with you whenever words fail.
              </p>

              <div className="flex flex-col items-center space-y-5 mt-12">
                <button
                  onClick={() => setActivePage(4)}
                  className="group flex items-center space-x-3 bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.06] px-8 py-3.5 rounded-full transition-all duration-500 text-xs tracking-[0.2em] uppercase"
                >
                  <span>A Message for Him</span>
                  <ArrowRight className="w-3.5 h-3.5 text-roseGlow group-hover:translate-x-1.5 transition-transform duration-500 ease-fluid-ease" />
                </button>

                <button
                  onClick={() => setActivePage(2)}
                  className="group flex items-center space-x-2 text-[10px] tracking-[0.3em] text-slate-500 hover:text-white transition-colors duration-500 uppercase"
                >
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-500" />
                  <span>Back</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* 🌌 SCREEN 4: THE MEMORY GUARDIAN VOW (NEW LUXURY ROOM) */}
          {activePage === 4 && (
            <motion.div
              key="screen-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center space-y-6"
            >
              <div className="p-3 bg-white/[0.02] rounded-full border border-white/5">
                <Star className="w-4 h-4 text-purple-300/60 animate-pulse" />
              </div>

              <h2 className="text-3xl md:text-5xl font-light font-serif-luxury italic text-transparent bg-clip-text bg-gradient-to-b from-lavenderGlow to-roseGlow py-1 tracking-wide leading-tight">
                Let's never forget him.
              </h2>

              <p className="text-xs md:text-sm text-slate-400/90 max-w-xl leading-relaxed font-light tracking-wide">
                Personally, I will never let his memory fade. When you are strong enough in the future, we can talk about him freely, celebrate his birthdays, and honor the day he passed. 
              </p>
              
              <p className="text-xs md:text-sm text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 max-w-xl leading-relaxed font-medium tracking-wide pt-2">
                He might have passed on, but his beautiful light is still shining brilliantly inside you, your siblings, and your mom. I know with absolute certainty that he is super proud to have you as his daughter, and as he watches over y'all from above, he is filled with so much pride.
              </p>

              <div className="flex flex-col items-center space-y-5 mt-12">
                <button
                  onClick={() => setActivePage(5)}
                  className="group flex items-center space-x-3 bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.06] px-8 py-3.5 rounded-full transition-all duration-500 text-xs tracking-[0.2em] uppercase"
                >
                  <span>My Eternal Promise</span>
                  <ArrowRight className="w-3.5 h-3.5 text-lavenderGlow group-hover:translate-x-1.5 transition-transform duration-500 ease-fluid-ease" />
                </button>

                <button
                  onClick={() => setActivePage(3)}
                  className="group flex items-center space-x-2 text-[10px] tracking-[0.3em] text-slate-500 hover:text-white transition-colors duration-500 uppercase"
                >
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-500" />
                  <span>Back</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* 🕊️ SCREEN 5: THE FINAL SOUL ANCHOR */}
          {activePage === 5 && (
            <motion.div
              key="screen-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center space-y-8"
            >
              <h2 className="text-2xl md:text-4xl font-light font-serif-luxury italic text-slate-300 tracking-wide leading-relaxed max-w-xl">
                "You don't have to worry about anyone forgetting him. I am here for life."
              </h2>

              <p className="text-xs md:text-sm text-slate-400/90 max-w-md leading-relaxed font-light tracking-wide mx-auto">
                I will always be right here to listen to every story you want to share about him, and I’ll treasure hearing about him from your point of view. 
              </p>

              <p className="text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-lavenderGlow via-white to-roseGlow max-w-xl font-medium tracking-wide pt-2">
                You are radiantly beautiful, Joy, and I am not going anywhere. Take all the time you need to heal. When you are finally okay, only then will I be okay.
              </p>

              <button
                onClick={() => setActivePage(4)}
                className="group mt-12 flex items-center space-x-2 text-[10px] tracking-[0.3em] text-slate-600 hover:text-white transition-colors duration-500 uppercase"
              >
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-500" />
                <span>Step Back</span>
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </main>
  );
}