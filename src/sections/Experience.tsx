"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import { fadeUp, cardHover } from "@/lib/animations";

interface Job {
  company: string;
  role: string;
  period: string;
  contributions: string[];
  tech: string[];
}

const jobs: Job[] = [
  {
    company: "Barq Fintech",
    role: "Senior Frontend Engineer",
    period: "2025 — Present",
    contributions: [
      "Leading frontend architecture for core fintech products serving enterprise clients",
      "Building secure, real-time dashboards for financial data visualization and reporting",
      "Establishing component library and coding standards across the frontend team",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    company: "Senarios",
    role: "Frontend Engineer",
    period: "2023 — 2025",
    contributions: [
      "Developed a full-scale LMS platform with RBAC supporting 1,000+ concurrent users",
      "Optimized application performance, reducing load times by 40% across key pages",
      "Collaborated with cross-functional teams in Agile sprints to deliver features on schedule",
    ],
    tech: ["React", "TypeScript", "Redux", "Material UI", "REST APIs"],
  },
  {
    company: "BJS Soft Solution",
    role: "Frontend Developer",
    period: "2021 — 2023",
    contributions: [
      "Built responsive web applications from Figma designs with pixel-perfect accuracy",
      "Integrated RESTful APIs and implemented state management for complex data flows",
      "Improved UI/UX across multiple client projects, increasing user engagement by 30%",
    ],
    tech: ["React", "JavaScript", "CSS/SCSS", "Bootstrap", "Git"],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp(0)} className="mb-14">
            <p className="text-sm tracking-widest uppercase section-label mb-3 font-medium">
              Experience
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Where I&apos;ve contributed
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line with gradient */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#a78bfa]/30 via-[#60a5fa]/20 to-transparent hidden sm:block" />

            <div className="space-y-12">
              {jobs.map((job, i) => (
                <motion.div
                  key={job.company}
                  variants={fadeUp(0.1 + i * 0.1)}
                  className="relative sm:pl-12"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-2 hidden sm:block">
                    <div className="h-[15px] w-[15px] rounded-full border-2 border-[#a78bfa]/40 bg-[#050505] shadow-[0_0_8px_rgba(167,139,250,0.2)]" />
                  </div>

                  <motion.div whileHover={cardHover} className="glass rounded-2xl p-6 sm:p-8 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{job.company}</h3>
                        <p className="text-sm text-gray-400">{job.role}</p>
                      </div>
                      <span className="text-sm font-mono text-[#a78bfa]/60">
                        {job.period}
                      </span>
                    </div>

                    <div className="space-y-3 mb-6">
                      {job.contributions.map((c) => (
                        <div key={c} className="flex gap-3 items-start">
                          <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-[#a78bfa]/40 shrink-0" />
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {c}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.03] text-gray-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
