import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export function PresentationSection({ children, className = '', id, sectionNumber, totalSections = '12' }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Smooth spring physics for scroll movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Presentation scale & Y translation
  const scale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.95]);
  const opacity = useTransform(smoothProgress, [0, 0.25, 0.75, 1], [0.2, 1, 1, 0.3]);
  const y = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [80, 0, 0, -40]);

  return (
    <motion.div
      ref={containerRef}
      id={id}
      style={{
        scale,
        opacity,
        y,
        perspective: 1200
      }}
      className={`presentation-slide-wrap ${className}`}
    >
      {/* Slide Index Badge */}
      {sectionNumber && (
        <div className="presentation-slide-badge">
          <span className="badge-dot" />
          <span className="badge-num">SLIDE {sectionNumber} / {totalSections}</span>
        </div>
      )}
      {children}
    </motion.div>
  );
}

export function WordRevealText({ text, className = '', tag = 'h2', delay = 0 }) {
  const words = text.split(' ');
  const Tag = tag;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay
      }
    }
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: '100%',
      rotateX: 45
    },
    visible: {
      opacity: 1,
      y: '0%',
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <Tag className={`word-reveal-container ${className}`}>
      <motion.span
        className="word-reveal-inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {words.map((word, index) => (
          <span key={index} className="word-mask">
            <motion.span className="word-inline" variants={wordVariants}>
              {word}&nbsp;
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
