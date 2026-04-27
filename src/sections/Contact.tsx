"use client";

import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { fadeUp } from "@/lib/animations";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp(0)} className="mb-14">
            <p className="text-sm tracking-widest uppercase section-label mb-3 font-medium">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Let&apos;s work together
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={fadeUp(0.1)}>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                Have a project in mind or want to discuss an opportunity? Feel
                free to reach out — I&apos;m always open to meaningful
                conversations.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:masadraza110@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg glass group-hover:border-[#a78bfa]/30 transition-all duration-200">
                    <HiOutlineMail className="text-lg" />
                  </span>
                  <span className="text-sm">masadraza110@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/muhammadasadrazabukhari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg glass group-hover:border-[#a78bfa]/30 transition-all duration-200">
                    <FaLinkedinIn className="text-lg" />
                  </span>
                  <span className="text-sm">LinkedIn Profile</span>
                </a>
              </div>
            </motion.div>

            <motion.form
              variants={fadeUp(0.2)}
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full input-glass rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full input-glass rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full input-glass rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none resize-none"
                  required
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </motion.form>
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
