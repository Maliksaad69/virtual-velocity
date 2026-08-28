import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedSectionBackground } from './PresentationSection';
import './Hero.css';

const CLIENT_LOGOS = [
  { name: 'SAMSUNG', category: 'Tech Giant' },
  { name: 'KFC', category: 'Global QSR' },
  { name: 'KIKO MILANO', category: 'Beauty & Cosmetics' },
  { name: "DOMINO'S", category: 'Global Brand' },
  { name: 'DAILY DELI CO', category: 'Food & Beverage' },
  { name: 'SAMAD GROUP', category: 'Enterprise Industry' },
  { name: 'LAKE CITY', category: 'Real Estate' },
  { name: 'DYNAMITE GEAR', category: 'Fitness & Apparel' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="agency-hero-section" id="hero">
      {/* Visual Treatment: Animated Cinematic Background Layer */}
      <AnimatedSectionBackground
        imageSrc="/images/hero_cinematic_nature.png"
        overlayGradient="linear-gradient(180deg, rgba(7, 8, 11, 0.35) 0%, rgba(7, 8, 11, 0.45) 50%, var(--bg-black) 100%)"
        alt="Cinematic volcanic peak landscape"
      />

      {/* Floating Animated Coral/Ember Glow Orbs */}
      <motion.div
        className="hero-glow-orb orb-1"
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-glow-orb orb-2"
        animate={{
          y: [0, 20, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container relative-z">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Category Label */}
          <motion.div className="label-tag hero-badge" variants={itemVariants}>
            <span className="dot"></span>
            <span>CREATIVE / DIGITAL / PERFORMANCE</span>
          </motion.div>

          {/* Master Redesign Headline */}
          <motion.h1 className="heading-hero editorial-title" variants={itemVariants}>
            WE MAKE BRANDS <br />
            <span className="accent-text">IMPOSSIBLE TO IGNORE.</span>
          </motion.h1>

          {/* Master Redesign Supporting Copy */}
          <motion.p className="text-sub hero-description" variants={itemVariants}>
            Creative strategy, campaigns, content, digital experiences and performance marketing built to turn attention into revenue.
          </motion.p>

          {/* Master Hero Action Buttons */}
          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.button
              onClick={() => navigate('/work')}
              className="btn-primary hero-btn-main"
              data-cursor="EXPLORE"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowRight size={16} className="btn-icon-arrow" />
            </motion.button>

            <motion.button
              onClick={() => navigate('/contact')}
              className="btn-secondary hero-btn-sub"
              data-cursor="START"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>START A PROJECT</span>
            </motion.button>
          </motion.div>

          {/* Minimal Editorial Metric Strip */}
          <motion.div className="hero-quick-stats editorial-metrics-strip" variants={itemVariants}>
            <motion.div className="stat-pill" whileHover={{ y: -4, scale: 1.03 }}>
              <span className="stat-num">4.2×</span>
              <span className="stat-lbl">Average ROAS</span>
            </motion.div>
            <div className="stat-divider">/</div>
            <motion.div className="stat-pill" whileHover={{ y: -4, scale: 1.03 }}>
              <span className="stat-num">+240%</span>
              <span className="stat-lbl">Organic Lead Growth</span>
            </motion.div>
            <div className="stat-divider">/</div>
            <motion.div className="stat-pill" whileHover={{ y: -4, scale: 1.03 }}>
              <span className="stat-num">150+</span>
              <span className="stat-lbl">Campaigns Launched</span>
            </motion.div>
            <div className="stat-divider">/</div>
            <motion.div className="stat-pill" whileHover={{ y: -4, scale: 1.03 }}>
              <span className="stat-num">94%</span>
              <span className="stat-lbl">Client Retention</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Client Marquee Section */}
      <motion.div
        className="hero-marquee-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="marquee-label">
          <Sparkles size={12} className="marquee-sparkle" />
          <span>TRUSTED BY BRANDS THAT WANT TO MOVE FASTER.</span>
        </div>
        <div className="marquee-track">
          <div className="marquee-content">
            {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((client, idx) => (
              <div key={idx} className="client-logo-item">
                <span className="client-name">{client.name}</span>
                <span className="client-dot">•</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
