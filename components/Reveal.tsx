"use client";
import { MotionConfig, motion } from "motion/react";

export default function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div className={className} initial={false} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}>
        {children}
      </motion.div>
    </MotionConfig>
  );
}
