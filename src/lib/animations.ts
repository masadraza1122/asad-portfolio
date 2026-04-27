import type { TargetAndTransition, Variants } from "framer-motion";

export const fadeUp = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export const cardHover: TargetAndTransition = {
  y: -4,
  transition: { duration: 0.25, ease: "easeOut" },
};
