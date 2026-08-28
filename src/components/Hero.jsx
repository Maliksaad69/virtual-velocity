import { useEffect, useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { scrollStore } from '../utils/scrollStore';
import './Hero.css';

export default function Hero() {
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [heroScale, setHeroScale] = useState(1);

  useEffect(() => {
    const unsubscribe = scrollStore.subscribe((state) => {
      // As you move inside the black hole (0.0 to 0.25 scroll), colors and opacity fade to dark void
      const p = Math.min(state.progress / 0.25, 1.0);
      setHeroOpacity(Math.max(0, 1 - p * 1.35));
      setHeroScale(1 - p * 0.18);
    });
    return unsubscribe;
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      {/* Minimal Technical Spatial Telemetry (Fades as you enter the hole) */}
      <div
        className="hero-spatial-telemetry telemetry-left"
        style={{ opacity: heroOpacity, transform: `scale(${heroScale})` }}
      >
        <span className="telemetry-label">[ 01 // CORE SYSTEM ]</span>
        <span className="telemetry-metric">12.4 MACH</span>
        <span className="telemetry-sub">VELOCITY VECTOR</span>
      </div>

      <div
        className="hero-spatial-telemetry telemetry-right"
        style={{ opacity: heroOpacity, transform: `scale(${heroScale})` }}
      >
        <span className="telemetry-label">[ 02 // ENGINE STATUS ]</span>
        <span className="telemetry-metric">ONLINE</span>
        <span className="telemetry-sub">3.8× EXPONENTIAL</span>
      </div>

      {/* Main Spatial Hero Composition */}
      <div className="container hero-container">
        <div
          className="hero-spatial-content"
          style={{
            opacity: heroOpacity,
            transform: `scale(${heroScale}) translateY(${(1 - heroOpacity) * 40}px)`,
            transition: 'opacity 0.1s linear, transform 0.1s linear'
          }}
        >
          {/* Spatial Technical Tag */}
          <div className="spatial-tag">
            <span className="tag-number">01</span>
            <span className="tag-text">VIRTUAL VELOCITY / ACCELERATION ENGINE</span>
          </div>

          {/* Creative Hot Pink / White Gradient Headline */}
          <h1 className="hero-spatial-title">
            <span className="hero-title-main">TURN ATTENTION</span>
            <br />
            <span className="hero-accent-text">INTO VELOCITY.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="hero-spatial-lead">
            We build digital growth systems for ambitious brands moving at full speed.
          </p>

          {/* Bold Editorial Physical Controls */}
          <div className="hero-editorial-actions">
            <button
              onClick={scrollToContact}
              className="btn-editorial-primary"
              data-cursor="LAUNCH"
            >
              <span>START A PROJECT</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={scrollToServices}
              className="btn-editorial-secondary"
              data-cursor="ENTER"
            >
              <span>EXPLORE SERVICES</span>
              <ArrowDown size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Prompt */}
      <div
        className="hero-scroll-indicator"
        onClick={scrollToServices}
        style={{ opacity: heroOpacity }}
      >
        <span className="scroll-indicator-text">SCROLL TO ENTER SINGULARITY</span>
        <ArrowDown size={14} className="scroll-indicator-arrow" />
      </div>
    </section>
  );
}
