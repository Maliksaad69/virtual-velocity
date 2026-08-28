import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function PresentationSection({ children, className = '', id }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Subtle natural scroll entrance
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.85, 1, 1, 0.85]);

  return (
    <motion.section
      ref={containerRef}
      id={id}
      style={{ opacity }}
      className={`page-section-wrapper ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedSectionBackground({ imageSrc, overlayGradient, alt = 'Background visual' }) {
  const bgRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: bgRef,
    offset: ['start end', 'end start']
  });

  // Smooth background parallax float
  const scrollY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <div ref={bgRef} className="animated-section-bg-container">
      <motion.div
        className="animated-section-bg-motion-wrapper"
        style={{ y: scrollY }}
      >
        <motion.img
          src={imageSrc}
          alt={alt}
          className="animated-section-bg-img"
          initial={{ scale: 1.05 }}
          animate={{
            scale: [1, 1.1, 1],
            y: ['-2%', '2%', '-2%'],
            rotate: [0, 0.3, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      </motion.div>
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
            scale: 1.06,
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
