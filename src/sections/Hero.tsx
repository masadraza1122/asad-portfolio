"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { fadeUp } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.03)_0%,_transparent_60%)]" />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp(0)}
            className="text-sm tracking-widest uppercase text-gray-400 mb-4"
          >
            Frontend Engineer &mdash; React Specialist
          </motion.p>

          <motion.h1
            variants={fadeUp(0.1)}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
          >
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Muhammad Asad Raza
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp(0.2)}
            className="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl"
          >
            With 5+ years of experience, I build scalable, high-performance
            React applications &mdash; from enterprise dashboards to
            customer-facing products &mdash; with a focus on clean architecture
            and pixel-perfect execution.
          </motion.p>

          <motion.div
            variants={fadeUp(0.3)}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#projects">
              <Button>View My Work</Button>
            </a>
            <a href="#contact">
              <Button variant="outline">Get in Touch</Button>
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={fadeUp(0.45)}
            className="mt-16 flex flex-wrap gap-12"
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "30+", label: "Projects Delivered" },
              { value: "10+", label: "Enterprise Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
