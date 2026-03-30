"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { fadeUp } from "@/lib/animations";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "40%", label: "Performance Gains" },
  { value: "1K+", label: "Users Served" },
  { value: "10+", label: "Enterprise Apps" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Animated glow orbs */}
      <div className="orb-1 absolute top-[-15%] left-[-8%] w-[500px] h-[500px] rounded-full bg-purple-500/[0.12] blur-[140px]" />
      <div className="orb-2 absolute bottom-[-5%] right-[-5%] w-[450px] h-[450px] rounded-full bg-blue-500/[0.10] blur-[130px]" />
      <div className="orb-3 absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full bg-violet-500/[0.06] blur-[100px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 hero-grid" />

      {/* Top fade */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#050505] to-transparent z-[1]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent z-[1]" />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={fadeUp(0)} className="mb-6">
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-gray-300">Available for opportunities</span>
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp(0.1)}
            className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight"
          >
            I build{" "}
            <span className="text-gradient">scalable systems</span>
            <br />
            that drive results
          </motion.h1>

          <motion.p
            variants={fadeUp(0.2)}
            className="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl"
          >
            <span className="text-white font-medium">Muhammad Asad Raza</span>{" "}
            &mdash; Senior Frontend Engineer with 5+ years crafting
            high-performance React applications. From enterprise dashboards
            processing 50K+ data points to LMS platforms serving 1,000+ users
            &mdash; I optimize what matters.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp(0.3)}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#projects">
              <Button className="px-8 py-3.5 text-base">View My Work</Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="px-8 py-3.5 text-base">
                Get in Touch
              </Button>
            </a>
          </motion.div>

          {/* Stats glass card */}
          <motion.div
            variants={fadeUp(0.45)}
            className="mt-16 glass rounded-2xl p-6 sm:p-8 inline-flex flex-wrap gap-x-12 gap-y-6"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-x-12">
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-gradient">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {stat.label}
                  </p>
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden sm:block h-10 w-px bg-white/[0.06]" />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
