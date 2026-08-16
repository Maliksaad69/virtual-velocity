import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollClipReveal({
  children,
  className = '',
  style = {},
  insetStart = 'inset(0% 0% 0% 0%)',
  insetEnd = 'inset(0% 0% 0% 0%)',
  offset = ['start end', 'center center'],
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset,
  });

  const clipPath = useTransform(scrollYProgress, [0, 1], [insetStart, insetEnd]);

  return (
    <motion.div
      ref={containerRef}
      className={className}
      style={{
        clipPath,
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}
