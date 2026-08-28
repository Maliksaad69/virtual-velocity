import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AnimatedSectionBackground } from './PresentationSection';
import './AboutCosmic.css';

export default function AboutCosmic() {
  const navigate = useNavigate();

  return (
    <section className="section agency-about-section" id="agency">
      <AnimatedSectionBackground
        imageSrc="/images/bg_about.png"
        overlayGradient="linear-gradient(180deg, var(--bg-black) 0%, rgba(6, 7, 10, 0.42) 30%, rgba(6, 7, 10, 0.42) 70%, var(--bg-black) 100%)"
      />

      <div className="container relative-z">
        <div className="about-editorial-grid">
          <motion.div
            className="about-text-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="label-tag">
              <span className="dot" />
              <span>WHO WE ARE</span>
            </div>

            <h2 className="heading-xl editorial-section-title">
              WE&apos;RE NOT A <br />
              POST-AND-PRAY <br />
              <span className="accent-text">AGENCY.</span>
            </h2>

            <p className="about-lead-text">
              Virtual Velocity was built because modern brands deserve better than generic templates, vanity metrics, and slow traditional agencies.
            </p>

            <p className="about-secondary-text">
              We operate at the intersection of high-fashion editorial design, viral content creation, custom digital experiences, and high-ROAS performance marketing. Every campaign has one objective: turning attention into real growth.
            </p>

            <div className="about-pillars-box">
              <div className="pillars-row">
                <span className="pillar-word">CREATIVE</span>
                <span className="pillar-word">•</span>
                <span className="pillar-word">DIGITAL</span>
                <span className="pillar-word">•</span>
                <span className="pillar-word">PERFORMANCE</span>
              </div>
              <div className="one-team-goal">
                One dedicated team. Zero outsourced fluff. Total alignment with your revenue goals.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '32px' }}>
              <motion.button
                onClick={() => navigate('/about')}
                className="btn-primary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <span>OUR STORY</span>
                <ArrowRight size={15} className="btn-icon-arrow" />
              </motion.button>
              <motion.button
                onClick={() => navigate('/contact')}
                className="btn-secondary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <span>WORK WITH US</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="about-visual-col"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-image-card">
              <img src="/images/work_brand.png" alt="Virtual Velocity Agency Studio" />
              <div className="about-image-overlay">
                <span className="studio-badge">CREATIVE DIRECTORS & PERFORMANCE STRATEGISTS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
