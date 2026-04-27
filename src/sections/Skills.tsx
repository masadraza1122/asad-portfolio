"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiGit,
  SiJira,
  SiPostman,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import {
  HiOutlineLightningBolt,
  HiOutlineDeviceMobile,
  HiOutlineCode,
  HiOutlineGlobe,
} from "react-icons/hi";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import { fadeUp } from "@/lib/animations";
import type { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  level?: string;
}

interface SkillCategory {
  key: string;
  label: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    key: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", icon: SiReact, level: "Expert" },
      { name: "Next.js", icon: SiNextdotjs, level: "Advanced" },
      { name: "TypeScript", icon: SiTypescript, level: "Expert" },
      { name: "JavaScript", icon: SiJavascript, level: "Expert" },
      { name: "Redux", icon: SiRedux, level: "Advanced" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert" },
      { name: "Material UI", icon: SiMui, level: "Advanced" },
    ],
  },
  {
    key: "tools",
    label: "Tools",
    skills: [
      { name: "Git", icon: SiGit, level: "Expert" },
      { name: "Jira", icon: SiJira, level: "Advanced" },
      { name: "Postman", icon: SiPostman, level: "Advanced" },
      { name: "Figma", icon: SiFigma, level: "Intermediate" },
      { name: "Vercel", icon: SiVercel, level: "Advanced" },
    ],
  },
  {
    key: "concepts",
    label: "Concepts",
    skills: [
      { name: "Performance", icon: HiOutlineLightningBolt },
      { name: "Responsive Design", icon: HiOutlineDeviceMobile },
      { name: "API Integration", icon: HiOutlineCode },
      { name: "SEO & A11y", icon: HiOutlineGlobe },
    ],
  },
];

const levelColors: Record<string, string> = {
  Expert: "text-emerald-400",
  Advanced: "text-[#a78bfa]",
  Intermediate: "text-[#60a5fa]",
};

export default function Skills() {
  const [active, setActive] = useState("frontend");

  const activeCategory = categories.find((c) => c.key === active)!;

  return (
    <SectionWrapper id="skills">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={fadeUp(0)} className="mb-14">
            <p className="text-sm tracking-widest uppercase section-label mb-3 font-medium">
              Skills
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              My <span className="text-gradient">tech stack</span>
            </h2>
          </motion.div>

          {/* Tabs */}
          <motion.div
            variants={fadeUp(0.1)}
            className="inline-flex glass rounded-xl p-1 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`relative px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                  active === cat.key
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {active === cat.key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-lg bg-white/[0.08] border border-white/[0.1]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Skill Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" as const }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {activeCategory.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05, ease: "easeOut" as const }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.25, ease: "easeOut" as const },
                  }}
                  className="group relative glass rounded-2xl p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:border-[#a78bfa]/30 hover:shadow-[0_0_30px_rgba(167,139,250,0.08)]"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:border-[#a78bfa]/25 group-hover:bg-[#a78bfa]/[0.06] transition-all duration-300">
                    <skill.icon className="text-xl text-gray-400 group-hover:text-[#a78bfa] transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                  {skill.level && (
                    <span
                      className={`text-[10px] tracking-wider uppercase ${levelColors[skill.level] ?? "text-gray-500"}`}
                    >
                      {skill.level}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
