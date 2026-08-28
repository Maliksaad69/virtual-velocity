import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function PresentationSection({ children, className = '', id }) {
  return (
    <div
      id={id}
      className={`page-section-wrapper ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Drop this as the FIRST child inside any <section> that has
 *   position: relative;  overflow: hidden;
 * The image will fill 100% of the section as a background layer.
 */
export function AnimatedSectionBackground({ imageSrc, overlayGradient, alt = '' }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* The img fills this container; gentle keyframe breathing for life */}
      <motion.img
        src={imageSrc}
        alt={alt}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          opacity: 0.72,
          filter: 'contrast(1.1) saturate(1.15) brightness(1.02)',
          willChange: 'transform',
        }}
        animate={{
          scale: [1, 1.06, 1],
          y: ['0%', '-2%', '0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Dark gradient overlay on top of image */}
      {overlayGradient && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: overlayGradient,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
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
          hover: { scale: 1.06, transition: { duration: 0.4, ease: 'easeOut' } }
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
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: delay } }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
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
