"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, BookOpenText } from "lucide-react";
import Link from "next/link";
import { Logo } from "../shared/logo";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 -right-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-sm">
        <Logo />

        <Link href={"/auth/sign-in"}>
          <button className="rounded-full bg-white/10 px-6 py-2  font-medium transition-colors hover:bg-white/20 border border-white/10">
            Login
          </button>
        </Link>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-md font-medium text-purple-300">
            <span className="mr-2 text-lg">✨</span> Smart Note Taking for
            Modern Thinkers
          </div>

          <h1 className="mb-6 sm:text-5xl text-4xl font-extrabold tracking-tight md:text-7xl">
            Capture Ideas. <br />
            <span className="bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Write Without Limits.
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 sm:text-xl">
            A powerful, distraction-free editor built to help you organize
            thoughts, collaborate, and stay productive. Experience the future of
            personal knowledge management.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={"/auth/sign-up"}>
              <button className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 transition-all hover:bg-purple-50 hover:ring-4 hover:ring-purple-500/20">
                Get Started for Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>

            <Link href={"/docs"}>
              <button className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold transition-all hover:bg-white/10">
                <BookOpenText className="h-4 w-4" />
                Learn from Docs
              </button>
            </Link>
          </div>
        </motion.div>
      </main>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-950 to-transparent" />
    </div>
  );
};
