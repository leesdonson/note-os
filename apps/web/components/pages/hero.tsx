"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 bg-indigo-500/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-75 h-75 bg-purple-500/20 blur-[100px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm rounded-full bg-white/10 backdrop-blur border border-white/20"
        >
          <Sparkles size={16} />
          Smart Note Taking for Modern Thinkers
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
        >
          Capture Ideas.
          <br />
          <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Write Without Limits.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto"
        >
          A powerful, distraction-free editor built with TipTap to help you
          organize thoughts, collaborate, and stay productive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Button className="text-lg px-8 py-6 rounded-2xl bg-indigo-600 hover:bg-indigo-500">
            <Link href="/auth/sign-up">Get Started</Link>
          </Button>
          <Button
            variant="outline"
            className="text-lg px-8 py-6 rounded-2xl border-white/30 bg-neutral-950 text-white"
          >
            <Link href="/docs">Learn More</Link>
          </Button>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-slate-900 to-transparent" />
    </section>
  );
}
