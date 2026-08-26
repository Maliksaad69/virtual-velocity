import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const TESTIMONIALS = [
  { name: 'Sarah Mitchell', role: 'CEO, Apex Dynamics', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80', rating: 5, text: 'Virtual Velocity completely transformed our digital presence. Their strategic approach to social media and paid advertising delivered a 340% increase in qualified leads within just 3 months. Absolutely outstanding team.' },
  { name: 'James Rodriguez', role: 'Founder, Nova Studios', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', rating: 5, text: 'The video production quality exceeded our expectations. They managed our entire brand campaign from concept to delivery, and the results were phenomenal. Our brand awareness grew by 500% in our target market.' },
  { name: 'Emma Chen', role: 'Marketing Director, Quantum Labs', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', rating: 5, text: 'Their AI chatbot solution reduced our customer support costs by 60% while improving response times. The team is incredibly professional, innovative, and always ahead of the curve with latest technology.' },
  { name: 'David Park', role: 'COO, Stellar Corp', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80', rating: 5, text: 'Working with Virtual Velocity on our website redesign was a game-changer. The new site increased our conversion rate by 180% and the design consistently receives compliments from our clients and partners.' },
  { name: 'Lisa Thompson', role: 'Brand Manager, Vertex Media', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80', rating: 5, text: 'From influencer campaigns to performance marketing, VVM handles everything with precision and creativity. They are not just an agency — they are true strategic partners who care about our growth.' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));
  };

  const t = TESTIMONIALS[current];

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="label">Testimonials</span>
          <h2 className="heading-lg">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="testimonial-slider">
          <div style={{ overflow: 'hidden', width: '100%' }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 80 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="testimonial-card glass-card"
              >
                <Quote size={48} className="testimonial-quote-icon" />
                <div className="testimonial-stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.08, type: 'spring' }}
                    >
                      <Star size={18} fill="var(--primary)" color="var(--primary)" />
                    </motion.span>
                  ))}
                </div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <img src={t.photo} alt={t.name} className="testimonial-photo" loading="lazy" />
                  <div>
                    <span className="testimonial-name">{t.name}</span>
                    <span className="testimonial-role">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonial-nav">
            <motion.button
              className="testimonial-btn"
              onClick={prev}
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <div className="testimonial-dots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`testimonial-dot ${i === current ? 'active' : ''}`}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <motion.button
              className="testimonial-btn"
              onClick={next}
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
