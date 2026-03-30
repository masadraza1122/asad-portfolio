"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import { fadeUp, cardHover } from "@/lib/animations";

const highlights = [
  {
    title: "React Ecosystem",
    description:
      "Deep expertise in React, Next.js, TypeScript, and state management — building component-driven UIs that scale.",
  },
  {
    title: "Enterprise Solutions",
    description:
      "Delivered complex dashboards and LMS platforms handling thousands of concurrent users with real-time data.",
  },
  {
    title: "Performance First",
    description:
      "Obsessed with fast load times, efficient renders, and clean architecture that keeps codebases maintainable.",
  },
  {
    title: "Agile Collaboration",
    description:
      "Thrive in cross-functional teams — working closely with designers, backend engineers, and stakeholders to ship on time.",
  },
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
          {/* Heading */}
          <motion.div variants={fadeUp(0)} className="mb-14">
            <p className="text-sm tracking-widest uppercase text-gray-400 mb-3">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Building what users love &mdash;
              <br />
              <span className="text-gray-400">with code that lasts.</span>
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={fadeUp(0.1)}
            className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-16"
          >
            I&apos;m a Frontend Engineer with 5+ years of experience
            specializing in the React ecosystem. I&apos;ve built enterprise
            dashboards, learning management systems, and high-traffic web
            applications — always with a focus on clean architecture,
            performance, and delivering real business value. I care about writing
            code that&apos;s as maintainable as it is performant.
          </motion.p>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp(0.15 + i * 0.1)}
                whileHover={cardHover}
                className="border border-white/10 rounded-xl p-6 hover:border-white/25 hover:bg-white/[0.03] transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
