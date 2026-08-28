import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedSectionBackground } from './PresentationSection';
import './FinalCTA.css';

export default function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section className="section agency-final-cta-section" id="final-cta">
      <AnimatedSectionBackground
        imageSrc="/images/hero_cinematic_nature.png"
        overlayGradient="linear-gradient(180deg, var(--bg-black) 0%, rgba(7, 8, 11, 0.38) 30%, rgba(7, 8, 11, 0.38) 70%, var(--bg-black) 100%)"
      />

      <div className="cta-glow-orb orb-a" />

      <div className="container text-center relative-z">
        <motion.div
          className="cta-content-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="label-tag justify-center">
            <Sparkles size={12} className="accent-text" />
            <span>LET&apos;S BUILD SOMETHING EXTRAORDINARY</span>
          </div>

          <h2 className="cta-giant-headline">
            GOT A BRAND <br />
            WORTH TALKING <br />
            <span className="accent-text">ABOUT?</span>
          </h2>

          <p className="cta-supporting-text">
            Let&apos;s create campaigns, content, and digital experiences that turn attention into market dominance.
          </p>

          <div className="cta-buttons-wrap justify-center">
            <motion.button
              onClick={() => navigate('/contact')}
              className="btn-primary hero-btn-main"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>START A PROJECT</span>
              <ArrowRight size={16} className="btn-icon-arrow" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
