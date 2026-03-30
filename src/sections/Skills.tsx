"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiGit,
  SiJira,
  SiPostman,
} from "react-icons/si";
import { HiOutlineLightningBolt, HiOutlineDeviceMobile, HiOutlineCode } from "react-icons/hi";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import { fadeUp } from "@/lib/animations";
import type { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Redux", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Material UI", icon: SiMui },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Jira", icon: SiJira },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "Performance", icon: HiOutlineLightningBolt },
      { name: "Responsive Design", icon: HiOutlineDeviceMobile },
      { name: "API Integration", icon: HiOutlineCode },
    ],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Heading */}
          <motion.div variants={fadeUp(0)} className="mb-14">
            <p className="text-sm tracking-widest uppercase text-gray-400 mb-3">
              Skills
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Technologies I work with
            </h2>
          </motion.div>

          {/* Categories */}
          <div className="space-y-12">
            {categories.map((category, catIdx) => (
              <motion.div key={category.title} variants={fadeUp(0.1 + catIdx * 0.1)}>
                <h3 className="text-lg font-semibold text-gray-300 mb-5">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
                      className="group flex flex-col items-center gap-3 border border-white/10 rounded-xl p-5 hover:border-white/25 hover:bg-white/5 transition-all duration-300"
                    >
                      <skill.icon className="text-2xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
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
