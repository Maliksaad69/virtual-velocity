import { useRef, useState } from 'react';
import { ArrowRight, Play, ChevronDown, Sparkles, TrendingUp, Cpu, Award } from 'lucide-react';
import { useCounter } from '../hooks/useScrollReveal';
import ThreeHeroCanvas from './ThreeHeroCanvas';
import Text3DFlip from './Text3DFlip';
import ScrollClipReveal from './ScrollClipReveal';
import './Hero.css';

const STATS = [
  { value: 250, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '+', label: 'Happy Clients' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: 'M+', label: 'Social Reach' },
];

export default function Hero() {
  const mockupRef = useRef(null);
  const [transform3D, setTransform3D] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');

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
    <section className="hero" id="home">
      <ThreeHeroCanvas />

      {/* Dynamic Glow Orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="hero-grid-overlay" />

      <div className="hero-content container">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <Sparkles size={13} style={{ marginRight: 4 }} />
          <span>innovative. inspire. impact</span>
        </div>

        <h1 className="heading-xl hero-title">
          We Build Brands<br />
          <Text3DFlip words={['That Grow & Scale.', 'That Innovate & Disrupt.', 'That Outperform & Win.']} />
        </h1>

        <p className="text-lg hero-subtitle">
          We help businesses grow through Digital Marketing, Creative Production,
          AI&nbsp;Solutions, CRM&nbsp;Development, Web&nbsp;Design, and Influencer&nbsp;Marketing.
        </p>

        <div className="hero-buttons">
          <a href="#portfolio" className="btn btn-primary">
            View Our Work <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            <Play size={16} fill="currentColor" /> Book Free Consultation
          </a>
        </div>

        {/* 3D Interactive Laptop Device Mockup */}
        <ScrollClipReveal>
          <div
            className="hero-mockup-wrapper"
            ref={mockupRef}
            onMouseMove={handleMouseMoveMockup}
            onMouseLeave={handleMouseLeaveMockup}
          >
            <div className="hero-mockup-glow" />

            {/* Floating 3D Cards */}
            <div className="floating-card float-card-left">
              <div className="float-card-icon"><TrendingUp size={18} /></div>
              <div>
                <span className="float-card-title">+340% Revenue</span>
                <span className="float-card-sub">AI Driven Growth</span>
              </div>
            </div>

            <div className="floating-card float-card-right">
              <div className="float-card-icon"><Cpu size={18} /></div>
              <div>
                <span className="float-card-title">AI Automation</span>
                <span className="float-card-sub">24/7 Operations</span>
              </div>
            </div>

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
        </ScrollClipReveal>
      </div>

      {/* Stats Bar */}
      <div className="hero-stats">
        <div className="container hero-stats-grid">
          {STATS.map((stat, i) => (
            <StatItem key={i} stat={stat} />
          ))}
        </div>
      </div>

      <a href="#about" className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <ChevronDown size={16} />
      </a>
    </section>
  );
}

function StatItem({ stat }) {
  const count = useCounter(stat.value, 2000, true);
  return (
    <div className="hero-stat">
      <span className="hero-stat-value">
        {count}{stat.suffix}
      </span>
      <span className="hero-stat-label">{stat.label}</span>
    </div>
  );
}
