import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ArrowUpRight } from 'lucide-react';
import { AnimatedSectionBackground } from './PresentationSection';
import './Hero.css';

const CLIENT_LOGOS = [
  { name: 'SAMSUNG' }, { name: 'KFC' }, { name: 'KIKO MILANO' },
  { name: "DOMINO'S" }, { name: 'DAILY DELI CO' }, { name: 'SAMAD GROUP' },
  { name: 'LAKE CITY' }, { name: 'DYNAMITE GEAR' }, { name: 'CLOSE-KNIT' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="agency-hero-section" id="hero">
      {/* Cinematic Full-Bleed Background */}
      <AnimatedSectionBackground
        imageSrc="/images/hero_cinematic_nature.png"
        overlayGradient="linear-gradient(160deg, rgba(6, 7, 10, 0.55) 0%, rgba(6, 7, 10, 0.28) 50%, var(--bg-black) 100%)"
        alt="Cinematic agency landscape"
      />

      {/* Floating Glow Orbs */}
      <motion.div className="hero-glow-orb orb-1"
        animate={{ y: [0, -30, 0], x: [0, 18, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="hero-glow-orb orb-2"
        animate={{ y: [0, 22, 0], x: [0, -18, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container relative-z">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="label-tag hero-badge" variants={itemVariants}>
            <span className="dot" />
            <span>CREATIVE / DIGITAL / PERFORMANCE AGENCY</span>
          </motion.div>

          <motion.h1 className="heading-hero editorial-title" variants={itemVariants}>
            WE MAKE BRANDS<br />
            <span className="accent-text">IMPOSSIBLE TO IGNORE.</span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Creative strategy, viral campaigns, digital experiences and precision performance marketing — built to turn attention into measurable revenue.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.button
              onClick={() => navigate('/work')}
              className="btn-primary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowRight size={15} className="btn-icon-arrow" />
            </motion.button>

            <motion.button
              onClick={() => navigate('/contact')}
              className="btn-secondary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>START A PROJECT</span>
              <ArrowUpRight size={15} />
            </motion.button>
          </motion.div>

          <motion.div className="hero-quick-stats" variants={itemVariants}>
            {[
              { num: '4.2×', lbl: 'Average ROAS' },
              { num: '+240%', lbl: 'Lead Growth YoY' },
              { num: '150+', lbl: 'Campaigns Launched' },
              { num: '94%', lbl: 'Client Retention' },
            ].map((stat, i) => (
              <>
                {i > 0 && <div key={`div-${i}`} className="stat-divider">/</div>}
                <motion.div
                  key={stat.num}
                  className="stat-pill"
                  whileHover={{ y: -4, scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="stat-num">{stat.num}</span>
                  <span className="stat-lbl">{stat.lbl}</span>
                </motion.div>
              </>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Client Marquee */}
      <motion.div
        className="hero-marquee-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="marquee-label">
          <Sparkles size={12} className="marquee-sparkle" />
          <span>TRUSTED BY BRANDS THAT WANT TO MOVE FASTER</span>
        </div>
        <div className="marquee-track">
          <div className="marquee-content">
            {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((c, idx) => (
              <div key={idx} className="client-logo-item">
                <span className="client-name">{c.name}</span>
                <span className="client-dot">•</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
