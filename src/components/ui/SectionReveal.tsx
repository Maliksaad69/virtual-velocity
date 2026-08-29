import { ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionRevealProps {
  children: ReactNode;
  /** Optional custom animation variants */
  variants?: any;
  /** Delay multiplier for staggered sections */
  delayMultiplier?: number;
}

export const SectionReveal = ({
  children,
  variants,
  delayMultiplier = 0,
}: SectionRevealProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const defaultVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const usedVariants = variants || defaultVariants;

  // start animation when in view
  if (inView) {
    controls.start("visible");
  }

  return (
    <motion.div
      ref={ref}
      custom={delayMultiplier}
      initial="hidden"
      animate={controls}
      variants={usedVariants}
    >
      {children}
    </motion.div>
  );
};
