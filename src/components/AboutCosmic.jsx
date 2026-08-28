import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './AboutCosmic.css';

const AGENCY_PILLARS = [
  'Strategy.',
  'Creative.',
  'Technology.',
  'Performance.'
];

export default function AboutCosmic() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="agency" className="section agency-about-section">
      <div className="container">
        <div className="about-editorial-grid">
          {/* Left Editorial Copy */}
          <motion.div
            className="about-copy-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="label-tag">
              <span className="dot"></span>
              <span>ABOUT VIRTUAL VELOCITY</span>
            </div>

            <h2 className="heading-xl editorial-section-title">
              WE'RE NOT A <br />
              <span className="accent-text">POST-AND-PRAY AGENCY.</span>
            </h2>

            <p className="about-lead-text">
              Virtual Velocity is a digital marketing and creative agency built at the intersection of bold creative thinking and measurable growth.
            </p>

            <p className="about-secondary-text">
              We build brands people remember, campaigns people talk about and digital experiences that make businesses grow.
            </p>

            {/* Pillars Grid */}
            <div className="about-pillars-box">
              <div className="pillars-row">
                {AGENCY_PILLARS.map((pillar, idx) => (
                  <span key={idx} className="pillar-word">
                    {pillar}
                  </span>
                ))}
              </div>
              <p className="one-team-goal">
                One team. One goal: <strong className="accent-text">Make the work impossible to ignore.</strong>
              </p>
            </div>

            <motion.button
              onClick={scrollToContact}
              className="btn-primary about-cta-btn"
              data-cursor="MEET"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>MEET THE TEAM</span>
              <ArrowRight size={16} className="btn-icon-arrow" />
            </motion.button>
          </motion.div>

          {/* Right Visual Image Showcase */}
          <motion.div
            className="about-visual-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="about-image-card">
              <img src="/images/work_aura.png" alt="Creative studio direction showcase" />
              <div className="about-image-overlay">
                <span className="studio-badge">VIRTUAL VELOCITY / CREATIVE ENGINE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
