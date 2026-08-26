import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, ChevronDown, Sparkles, TrendingUp, Cpu, Award } from 'lucide-react';
import { useCounter } from '../hooks/useScrollReveal';
import ThreeHeroCanvas from './ThreeHeroCanvas';
import Text3DFlip from './Text3DFlip';
import SplineScene from './SplineScene';
import './Hero.css';

const STATS = [
  { value: 250, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '+', label: 'Happy Clients' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: 'M+', label: 'Social Reach' },
];

export default function Hero() {
  const mockupRef = useRef(null);
  const heroRef = useRef(null);
  const [transform3D, setTransform3D] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const mockupRotateX = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const mockupScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const mockupOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  // 3D Perspective Tilt on MouseMove
  const handleMouseMoveMockup = (e) => {
    if (!mockupRef.current) return;
    const rect = mockupRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setTransform3D(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeaveMockup = () => {
    setTransform3D('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <section className="hero" id="home" ref={heroRef}>
      <ThreeHeroCanvas />
      <SplineScene className="hero-spline-bg" sceneUrl="https://prod.spline.design/6Wnt13KfuhiStPhG/scene.splinecode" />

      {/* Dynamic Glow Orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="hero-grid-overlay" />

      <div className="hero-content container">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero-badge-dot" />
          <Sparkles size={13} style={{ marginRight: 4 }} />
          <span>innovative. inspire. impact</span>
        </motion.div>

        <motion.h1
          className="heading-xl hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          We Build Brands<br />
          <Text3DFlip words={['That Grow & Scale.', 'That Innovate & Disrupt.', 'That Outperform & Win.']} />
        </motion.h1>

        <motion.p
          className="text-lg hero-subtitle"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          We help businesses grow through Digital Marketing, Creative Production,
          AI&nbsp;Solutions, CRM&nbsp;Development, Web&nbsp;Design, and Influencer&nbsp;Marketing.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a
            href="#portfolio"
            className="btn btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(0, 212, 170, 0.55)' }}
            whileTap={{ scale: 0.98 }}
          >
            View Our Work <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05, borderColor: 'var(--accent-cyan)' }}
            whileTap={{ scale: 0.98 }}
          >
            <Play size={16} fill="currentColor" /> Book Free Consultation
          </motion.a>
        </motion.div>

        {/* 3D Interactive Device Mockup with Framer Motion Scroll Parallax */}
        <motion.div
          style={{ rotateX: mockupRotateX, scale: mockupScale, opacity: mockupOpacity }}
          className="hero-mockup-container"
        >
          <div
            className="hero-mockup-wrapper"
            ref={mockupRef}
            onMouseMove={handleMouseMoveMockup}
            onMouseLeave={handleMouseLeaveMockup}
          >
            <div className="hero-mockup-glow" />

            {/* Floating 3D Cards with Keyframe Floating Motion */}
            <motion.div
              className="floating-card float-card-left"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="float-card-icon"><TrendingUp size={18} /></div>
              <div>
                <span className="float-card-title">+340% Revenue</span>
                <span className="float-card-sub">AI Driven Growth</span>
              </div>
            </motion.div>

            <motion.div
              className="floating-card float-card-right"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="float-card-icon"><Cpu size={18} /></div>
              <div>
                <span className="float-card-title">AI Automation</span>
                <span className="float-card-sub">24/7 Operations</span>
              </div>
            </motion.div>

            <div className="hero-mockup-device" style={{ transform: transform3D }}>
              <div className="mockup-topbar">
                <div className="mockup-dots"><span /><span /><span /></div>
                <div className="mockup-url">virtualvelocitymarketing.com</div>
                <div className="mockup-status"><Award size={13} /> Premium Agency</div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80"
                alt="Virtual Velocity Marketing Dashboard"
                className="mockup-screen"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container hero-stats-grid">
          {STATS.map((stat, i) => (
            <StatItem key={i} stat={stat} index={i} />
          ))}
        </div>
      </motion.div>

      <a href="#about" className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <ChevronDown size={16} />
      </a>
    </section>
  );
}

function StatItem({ stat, index }) {
  const count = useCounter(stat.value, 2000, true);
  return (
    <motion.div
      className="hero-stat"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <span className="hero-stat-value">
        {count}{stat.suffix}
      </span>
      <span className="hero-stat-label">{stat.label}</span>
    </motion.div>
  );
}
