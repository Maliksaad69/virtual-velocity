import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './TestimonialsCapsules.css';

const TESTIMONIALS = [
  {
    quote: 'Virtual Velocity completely changed how we approached our digital presence. The creative was incredible — but the growth was even better.',
    author: 'ZAINAB MALIK',
    role: 'Marketing Director',
    company: 'Close-Knit Hosiery',
    image: '/images/work_closeknit.png'
  },
  {
    quote: 'Within two weeks, our paid customer acquisition costs dropped by 42%. Their creative video ads and PPC strategy delivered instant, trackable ROAS.',
    author: 'OMAR FAROOQ',
    role: 'Chief Executive Officer',
    company: 'Daily Deli Co.',
    image: '/images/work_dailydeli.png'
  },
  {
    quote: 'The brand strategy, custom typography, and editorial campaign rollout were flawless. They elevated our beauty brand into top-tier boutique retailers.',
    author: 'SARAH RINALDI',
    role: 'Brand & Creative Director',
    company: 'Aura Luxury Botanicals',
    image: '/images/work_aura.png'
  }
];

export default function TestimonialsCapsules() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIdx];

  return (
    <section id="testimonials" className="section agency-testimonials-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag">
            <span className="dot"></span>
            <span>CLIENT ENDORSEMENTS</span>
          </div>
          <h2 className="heading-xl editorial-section-title">
            WORDS FROM <br />
            <span className="accent-text">FOUNDERS & CLOSERS.</span>
          </h2>
        </motion.div>

        {/* Cinematic Editorial Testimonial Showcase */}
        <div className="cinematic-testimonial-showcase">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              className="editorial-testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Quote Content Col */}
              <div className="quote-content-col">
                <Quote size={40} className="editorial-quote-mark" />
                <blockquote className="giant-quote-text">
                  "{current.quote}"
                </blockquote>

                <div className="quote-author-block">
                  <span className="author-name">{current.author}</span>
                  <span className="author-role">{current.role} · <strong>{current.company}</strong></span>
                </div>
              </div>

              {/* Campaign Image Col */}
              <div className="campaign-visual-col">
                <img src={current.image} alt={current.company} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="testimonial-controls">
            <button onClick={prevSlide} className="ctrl-btn" aria-label="Previous Testimonial">
              <ChevronLeft size={20} />
            </button>
            <span className="slider-counter">
              0{currentIdx + 1} / 0{TESTIMONIALS.length}
            </span>
            <button onClick={nextSlide} className="ctrl-btn" aria-label="Next Testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
