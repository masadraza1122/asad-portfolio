"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import { fadeUp } from "@/lib/animations";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp(0)}
      className="border-t border-white/[0.06] py-8"
    >
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Muhammad Asad Raza. All rights
          reserved.
        </p>
        <div className="flex gap-6">
          {["Home", "About", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </Container>
    </motion.footer>
  );
}
