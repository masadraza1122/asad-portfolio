"use client";

import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineCurrencyDollar,
  HiOutlineChartBar,
} from "react-icons/hi";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import { fadeUp } from "@/lib/animations";
import type { IconType } from "react-icons";

interface Project {
  icon: IconType;
  category: string;
  title: string;
  description: string;
  tech: string[];
  achievements: string[];
  metrics: { value: string; label: string }[];
}

const projects: Project[] = [
  {
    icon: HiOutlineAcademicCap,
    category: "EdTech",
    title: "Learning Management System",
    description:
      "Built a full-featured LMS platform serving 1,000+ active users with role-based access control, real-time progress tracking, and interactive course modules — enabling institutions to digitize their entire learning workflow.",
    tech: ["React", "TypeScript", "Redux", "Material UI", "REST APIs"],
    achievements: [
      "Implemented RBAC supporting 4 user roles with granular permissions",
      "Scaled to 1,000+ concurrent users with optimized rendering",
      "Reduced page load time by 40% through code splitting and lazy loading",
    ],
    metrics: [
      { value: "1K+", label: "Users" },
      { value: "40%", label: "Faster" },
      { value: "4", label: "Roles" },
    ],
  },
  {
    icon: HiOutlineCurrencyDollar,
    category: "Fintech",
    title: "Fintech Dashboard",
    description:
      "Developed a secure enterprise dashboard for financial data visualization, featuring multi-factor authentication, real-time transaction monitoring, and compliance-ready reporting tools for internal teams.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "JWT Auth"],
    achievements: [
      "Integrated secure authentication with JWT and refresh token flow",
      "Built interactive charts processing 50K+ data points in real time",
      "Delivered pixel-perfect UI matching Figma designs across all breakpoints",
    ],
    metrics: [
      { value: "50K+", label: "Data Pts" },
      { value: "100%", label: "Figma Match" },
      { value: "MFA", label: "Security" },
    ],
  },
  {
    icon: HiOutlineChartBar,
    category: "SaaS",
    title: "Analytics Platform",
    description:
      "Led frontend development of an analytics platform that transforms raw business data into actionable insights through customizable dashboards, automated reports, and intuitive data exploration tools.",
    tech: ["React", "Next.js", "TypeScript", "D3.js", "Tailwind CSS"],
    achievements: [
      "Improved core web vitals scores by 60% through performance optimization",
      "Redesigned UI resulting in 35% increase in user engagement",
      "Reduced bundle size by 45% with tree shaking and dynamic imports",
    ],
    metrics: [
      { value: "60%", label: "CWV Boost" },
      { value: "35%", label: "Engagement" },
      { value: "45%", label: "Smaller" },
    ],
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={fadeUp(0)} className="mb-14">
            <p className="text-sm tracking-widest uppercase section-label mb-3 font-medium">
              Projects
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Work that{" "}
              <span className="text-gradient">speaks for itself</span>
            </h2>
          </motion.div>

          {/* Project cards — stacked full-width */}
          <div className="flex flex-col gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                variants={fadeUp(0.1 + i * 0.1)}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group relative glass rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#a78bfa]/20 hover:shadow-[0_0_60px_rgba(167,139,250,0.06)]"
              >
                {/* Hover glow */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#a78bfa]/[0.03] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                  {/* Top row — badge + number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#a78bfa]/10 border border-[#a78bfa]/20">
                        <project.icon className="text-lg text-[#a78bfa]" />
                      </div>
                      <span className="text-xs tracking-widest uppercase text-gray-500">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-5xl font-bold text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Content grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-12">
                    {/* Left — details */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-3 py-1.5 rounded-lg border border-white/[0.06] bg-white/[0.03] text-gray-400 group-hover:border-[#a78bfa]/15 transition-colors duration-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        {project.achievements.map((a) => (
                          <div key={a} className="flex gap-3 items-start">
                            <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-[#a78bfa]/40 shrink-0" />
                            <p className="text-sm text-gray-400 leading-relaxed">
                              {a}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right — metrics card */}
                    <div className="flex flex-col justify-center">
                      <div className="glass rounded-2xl p-6 space-y-6">
                        <p className="text-[10px] tracking-widest uppercase text-gray-500">
                          Impact
                        </p>
                        {project.metrics.map((m, mi) => (
                          <div key={m.label}>
                            <div className="flex items-baseline justify-between">
                              <span className="text-3xl font-bold text-gradient">
                                {m.value}
                              </span>
                              <span className="text-xs text-gray-500">
                                {m.label}
                              </span>
                            </div>
                            {mi < project.metrics.length - 1 && (
                              <div className="mt-5 h-px bg-white/[0.04]" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
