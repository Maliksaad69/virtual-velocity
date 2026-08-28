import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import './FinalCTA.css';

export default function FinalCTA() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section agency-final-cta-section">
      {/* Floating Interactive Background Glow Elements */}
      <motion.div
        className="cta-glow-orb orb-a"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container text-center relative-z">
        <motion.div
          className="cta-content-box"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="label-tag justify-center">
            <span className="dot"></span>
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="cta-giant-headline">
            GOT A BRAND <br />
            <span className="accent-text">WORTH TALKING ABOUT?</span>
          </h2>

          <p className="cta-supporting-text">
            Let's build something people can't scroll past.
          </p>

          <div className="cta-buttons-wrap justify-center">
            <motion.button
              onClick={scrollToContact}
              className="btn-primary cta-main-btn"
              data-cursor="START"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>START A PROJECT</span>
              <ArrowRight size={18} className="btn-icon-arrow" />
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              className="btn-secondary cta-sub-btn"
              data-cursor="BOOK"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={16} />
              <span>BOOK A STRATEGY CALL</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
