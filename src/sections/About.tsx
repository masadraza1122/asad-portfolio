"use client";

import { motion } from "framer-motion";
import {
  HiOutlineLightningBolt,
  HiOutlineCube,
  HiOutlineCode,
} from "react-icons/hi";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import { fadeUp, cardHover } from "@/lib/animations";
import type { IconType } from "react-icons";

interface Strength {
  icon: IconType;
  title: string;
  description: string;
}

const strengths: Strength[] = [
  {
    icon: HiOutlineLightningBolt,
    title: "Performance",
    description:
      "Reduced load times by 40% and improved core web vitals across enterprise-grade applications.",
  },
  {
    icon: HiOutlineCube,
    title: "Scalability",
    description:
      "Architected component systems and state management that scale to 1,000+ concurrent users.",
  },
  {
    icon: HiOutlineCode,
    title: "Clean Code",
    description:
      "Maintainable, well-tested codebases with strict TypeScript, modular patterns, and clear conventions.",
  },
];

const metrics = [
  { value: "5+", label: "Years of Experience" },
  { value: "15+", label: "Projects Shipped" },
  { value: "3", label: "Industries Served" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={fadeUp(0)} className="mb-16">
            <p className="text-sm tracking-widest uppercase section-label mb-3 font-medium">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Engineering products that{" "}
              <span className="text-gradient">perform</span>
            </h2>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — Text */}
            <motion.div variants={fadeUp(0.1)}>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I&apos;m a Senior Frontend Engineer specializing in the React
                ecosystem. Over 5+ years, I&apos;ve built enterprise dashboards,
                learning management systems, and high-traffic web applications
                for fintech, edtech, and SaaS companies.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10">
                I care deeply about performance, clean architecture, and
                delivering real business impact. Every component I build is
                designed to scale &mdash; from the data layer to the pixel.
              </p>

              {/* Inline metrics */}
              <div className="flex flex-wrap gap-8">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-2xl font-bold text-gradient">
                      {m.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Strength cards */}
            <div className="flex flex-col gap-4">
              {strengths.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp(0.15 + i * 0.1)}
                  whileHover={cardHover}
                  className="glass rounded-2xl p-6 flex gap-5 items-start transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#a78bfa]/10 border border-[#a78bfa]/20 shrink-0">
                    <item.icon className="text-lg text-[#a78bfa]" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
