import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function PresentationSection({ children, className = '', id, sectionNumber, totalSections = '12' }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Pure linear smooth fade & slight vertical rise without spring recoil/earthquake shaking
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.4, 1, 1, 0.4]);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [30, 0, 0, -15]);

  return (
    <motion.div
      ref={containerRef}
      id={id}
      style={{
        opacity,
        y
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

  // Steady, subtle linear parallax without shake
  const y = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);

  return (
    <div ref={bgRef} className="animated-section-bg-container">
      <motion.img
        src={imageSrc}
        alt={alt}
        className="animated-section-bg-img"
        style={{ y }}
        initial={{ scale: 1.03 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 12,
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover="hover"
    >
      <motion.img
        src={src}
        alt={alt}
        className="animated-card-img"
        variants={{
          hover: {
            scale: 1.04,
            transition: { duration: 0.4, ease: 'easeOut' }
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
        staggerChildren: 0.06,
        delayChildren: delay
      }
    }
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
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
        viewport={{ once: true }}
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
