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
  const scale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.94, 1, 1, 0.96]);
  const opacity = useTransform(smoothProgress, [0, 0.25, 0.75, 1], [0.3, 1, 1, 0.4]);
  const y = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [60, 0, 0, -30]);

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

export function AnimatedSectionBackground({ imageSrc, overlayGradient, alt = 'Background visual' }) {
  const bgRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: bgRef,
    offset: ['start end', 'end start']
  });

  // Parallax Y offset & slight zoom scale
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.02, 1.08]);

  return (
    <div ref={bgRef} className="animated-section-bg-container">
      <motion.img
        src={imageSrc}
        alt={alt}
        className="animated-section-bg-img"
        style={{ y, scale }}
        animate={{
          scale: [1.04, 1.08, 1.04],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut'
        }}
      />
      {overlayGradient && (
        <div className="animated-section-bg-overlay" style={{ background: overlayGradient }} />
      )}
    </div>
  );
}

export function AnimatedImageCard({ src, alt, className = '', aspect = '16/9' }) {
  return (
    <motion.div
      className={`animated-image-card-wrap ${className}`}
      style={{ aspectRatio: aspect }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
    >
      <motion.img
        src={src}
        alt={alt}
        className="animated-card-img"
        variants={{
          hover: {
            scale: 1.06,
            rotate: 0.5,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
          }
        }}
      />
      <div className="animated-card-shine" />
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
