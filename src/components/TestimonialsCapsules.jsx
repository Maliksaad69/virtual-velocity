import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedSectionBackground } from './PresentationSection';
import './TestimonialsCapsules.css';

const TESTIMONIALS = [
  {
    quote: "Virtual Velocity transformed our visual identity and Meta campaign structure. We saw a 3.8× ROAS scaling within our first 60 days.",
    author: "Zayn Malik",
    role: "Co-Founder & CEO, Daily Deli Co.",
    visual: "/images/work_brand_showcase.png"
  },
  {
    quote: "They don't just deliver videos; they built a complete creative campaign engine that made our brand stand out in a crowded market.",
    author: "Amina Tariq",
    role: "Marketing Director, Close-Knit",
    visual: "/images/work_campaign_showcase.png"
  },
  {
    quote: "Their team combines fashion-grade visual design with performance advertising discipline. They are an essential growth partner for us.",
    author: "Hamza Rauf",
    role: "Founder, Dynamite Gear",
    visual: "/images/work_ecommerce_showcase.png"
  }
];

export default function TestimonialsCapsules() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIdx];

  return (
    <section className="section agency-testimonials-section" id="testimonials">
      <AnimatedSectionBackground
        imageSrc="/images/bg_testimonials.png"
        overlayGradient="linear-gradient(180deg, var(--bg-black) 0%, rgba(7, 8, 11, 0.42) 30%, rgba(7, 8, 11, 0.42) 70%, var(--bg-black) 100%)"
      />

      <div className="container relative-z">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag">
            <span className="dot"></span>
            <span>CLIENT ENDORSEMENTS</span>
          </div>
          <h2 className="heading-xl editorial-section-title">
            WORDS FROM <br />
            <span className="accent-text">FOUNDERS.</span>
          </h2>
        </motion.div>

        <div className="cinematic-testimonial-showcase">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              className="editorial-testimonial-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="quote-content-col">
                <Quote size={40} className="editorial-quote-mark" />
                <p className="giant-quote-text">"{current.quote}"</p>
                <div className="quote-author-block">
                  <span className="author-name">{current.author}</span>
                  <span className="author-role">{current.role}</span>
                </div>
              </div>

              <div className="campaign-visual-col">
                <img src={current.visual} alt={current.author} />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-controls">
            <span className="slider-counter">0{currentIdx + 1} / 0{TESTIMONIALS.length}</span>
            <button onClick={prevSlide} className="ctrl-btn" aria-label="Previous testimonial">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextSlide} className="ctrl-btn" aria-label="Next testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
