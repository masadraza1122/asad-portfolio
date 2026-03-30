"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import { fadeUp, cardHover } from "@/lib/animations";

interface Project {
  title: string;
  description: string;
  tech: string[];
  achievements: string[];
}

const projects: Project[] = [
  {
    title: "Learning Management System",
    description:
      "Built a full-featured LMS platform serving 1,000+ active users with role-based access control, real-time progress tracking, and interactive course modules — enabling institutions to digitize their entire learning workflow.",
    tech: ["React", "TypeScript", "Redux", "Material UI", "REST APIs"],
    achievements: [
      "Implemented RBAC supporting 4 user roles with granular permissions",
      "Scaled to 1,000+ concurrent users with optimized rendering",
      "Reduced page load time by 40% through code splitting and lazy loading",
    ],
  },
  {
    title: "Fintech Dashboard",
    description:
      "Developed a secure enterprise dashboard for financial data visualization, featuring multi-factor authentication, real-time transaction monitoring, and compliance-ready reporting tools for internal teams.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "JWT Auth"],
    achievements: [
      "Integrated secure authentication with JWT and refresh token flow",
      "Built interactive charts processing 50K+ data points in real time",
      "Delivered pixel-perfect UI matching Figma designs across all breakpoints",
    ],
  },
  {
    title: "Analytics Platform",
    description:
      "Led frontend development of an analytics platform that transforms raw business data into actionable insights through customizable dashboards, automated reports, and intuitive data exploration tools.",
    tech: ["React", "Next.js", "TypeScript", "D3.js", "Tailwind CSS"],
    achievements: [
      "Improved core web vitals scores by 60% through performance optimization",
      "Redesigned UI resulting in 35% increase in user engagement",
      "Reduced bundle size by 45% with tree shaking and dynamic imports",
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
          {/* Heading */}
          <motion.div variants={fadeUp(0)} className="mb-14">
            <p className="text-sm tracking-widest uppercase text-gray-400 mb-3">
              Projects
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Work that speaks for itself
            </h2>
          </motion.div>

          {/* Project cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                variants={fadeUp(0.1 + i * 0.1)}
                whileHover={cardHover}
                className="group border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col hover:border-white/25 hover:bg-white/[0.03] transition-all duration-300"
              >
                {/* Number badge */}
                <span className="text-xs font-mono text-gray-500 mb-4">
                  0{i + 1}
                </span>

                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <div className="mt-auto pt-6 border-t border-white/10 space-y-3">
                  <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">
                    Key Achievements
                  </p>
                  {project.achievements.map((a) => (
                    <div key={a} className="flex gap-3 items-start">
                      <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-white/40 shrink-0" />
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {a}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
