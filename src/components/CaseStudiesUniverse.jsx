import { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, X, Layers, ShieldCheck, Zap, ExternalLink } from 'lucide-react';
import './CaseStudiesUniverse.css';

const CASE_STUDIES = [
  {
    id: 'ecommerce',
    number: '01',
    category: 'E-COMMERCE',
    title: 'AURA LUXURY APPAREL',
    color: '#a855f7',
    stats: [
      { label: 'REVENUE', value: '+$1.8M' },
      { label: 'ROAS', value: '4.7×' },
      { label: 'GROWTH', value: '+183%' }
    ],
    journey: {
      challenge: 'Stagnant paid acquisition CAC and low repeat purchase rates in luxury DTC apparel market.',
      strategy: 'Engineered multi-channel creative storytelling, high-frequency Meta & TikTok video ads, and AI predictive segmentation.',
      execution: 'Deployed custom 3D interactive product configurator + personalized email retention loops.',
      result: '+$1.8M net revenue expansion within 6 months, 4.7× ROAS, and +183% YoY subscriber growth.'
    }
  },
  {
    id: 'saas',
    number: '02',
    category: 'SAAS PLATFORM',
    title: 'NEXUS ENTERPRISE AI',
    color: '#c084fc',
    stats: [
      { label: 'ARR EXPANSION', value: '+$4.2M' },
      { label: 'CAC REDUCTION', value: '−45%' },
      { label: 'RETENTION RATE', value: '94%' }
    ],
    journey: {
      challenge: 'High enterprise sales cycle friction and unoptimized search engine pipeline.',
      strategy: 'Full-funnel SEO cluster authority architecture combined with hyper-targeted LinkedIn demand gen.',
      execution: 'Built high-converting interactive ROI calculator landing experiences with live CRM routing.',
      result: '+$4.2M net ARR added, enterprise CAC slashed by 45%, retention stabilized at 94%.'
    }
  },
  {
    id: 'healthcare',
    number: '03',
    category: 'HEALTHCARE',
    title: 'SYNAPSE HEALTH SYSTEMS',
    color: '#d946ef',
    stats: [
      { label: 'PATIENT ACQ', value: '+220%' },
      { label: 'CONV RATE', value: '6.4%' },
      { label: 'CAMPAIGN ROI', value: '5.1×' }
    ],
    journey: {
      challenge: 'Strict HIPAA compliance requirements limits and fragmented local clinic booking funnels.',
      strategy: 'Privacy-compliant geo-local search dominance and empathetic patient narrative campaigns.',
      execution: 'Streamlined online appointment scheduling engine with localized landing experiences.',
      result: '+220% surge in monthly booked consultations and a 5.1× overall marketing return.'
    }
  },
  {
    id: 'law',
    number: '04',
    category: 'LAW & LEGAL',
    title: 'VALKYRIE LEGAL GROUP',
    color: '#8b5cf6',
    stats: [
      { label: 'HIGH-VAL LEADS', value: '+140%' },
      { label: 'BRAND PERCEPTION', value: '98%' },
      { label: 'CAC REDUCTION', value: '−38%' }
    ],
    journey: {
      challenge: 'Outdated digital presence failing to attract high-ticket commercial litigation retainers.',
      strategy: 'Premium brand positioning overhaul, strategic thought leadership, and high-intent PPC.',
      execution: 'Engineered a state-of-the-art cinematic website experience with instant consultation routing.',
      result: '+140% growth in qualified high-value cases and 98% tier-1 client satisfaction.'
    }
  },
  {
    id: 'fintech',
    number: '05',
    category: 'FINTECH',
    title: 'APEX CRYPTO VAULT',
    color: '#e879f9',
    stats: [
      { label: 'NEW USERS', value: '+500K' },
      { label: 'TOTAL VALUE LOCKED', value: '+$24M' },
      { label: 'CONV RATE', value: '+82%' }
    ],
    journey: {
      challenge: 'User trust barriers and complex Web3 onboarding UX hindering retail conversion.',
      strategy: 'Gamified onboarding sequence, influencer viral resonance, and organic educational content.',
      execution: 'Designed 3D interactive yield visualizers and frictionless wallet connect UI.',
      result: '+500K newly verified platform users and +$24M in total platform value locked.'
    }
  }
];

function InnerWormholeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let t = 0;

    const render = () => {
      animId = requestAnimationFrame(render);
      t += 0.04;
      const w = canvas.width = canvas.offsetWidth;
      const h = canvas.height = canvas.offsetHeight;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      for (let r = 20; r < Math.max(w, h) * 0.8; r += 24) {
        const opacity = Math.max(0, 1 - r / (w * 0.7));
        ctx.beginPath();
        ctx.arc(cx, cy, r + Math.sin(t + r * 0.02) * 8, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(168, 85, 247, ${opacity * 0.25})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      for (let i = 0; i < 16; i++) {
        const angle = (i / 16) * Math.PI * 2 + t * 0.2;
        const x1 = cx + Math.cos(angle) * 40;
        const y1 = cy + Math.sin(angle) * 40;
        const x2 = cx + Math.cos(angle) * (w * 0.6);
        const y2 = cy + Math.sin(angle) * (h * 0.6);

        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, 'rgba(217, 70, 239, 0.5)');
        grad.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} className="inner-wormhole-canvas" />;
}

export default function CaseStudiesUniverse() {
  const [activePortal, setActivePortal] = useState(CASE_STUDIES[0]);
  const [journeyOpen, setJourneyOpen] = useState(false);
  const [warpAnimating, setWarpAnimating] = useState(false);

  const openJourney = (study) => {
    setActivePortal(study);
    setWarpAnimating(true);
    setJourneyOpen(true);
    setTimeout(() => setWarpAnimating(false), 800);
  };

  const closeJourney = () => {
    setJourneyOpen(false);
  };

  return (
    <section id="universe" className="case-studies-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="label">
            <Sparkles size={14} className="label-icon" />
            <span>04 • CASE PORTALS</span>
          </div>
          <h2 className="heading-xl">
            <span className="heading-main">PROJECT</span> <br />
            <span className="heading-accent">PORTALS.</span>
          </h2>
          <p className="text-lg">
            Five client growth portals floating in 3D space. Select a portal to enter the project journey.
          </p>
        </div>

        {/* Spatial Case Portals List */}
        <div className="spatial-portals-list">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              onClick={() => openJourney(study)}
              className="spatial-portal-item"
              data-cursor="ENTER"
            >
              <div className="portal-meta">
                <span className="portal-num">{study.number} • CASE STUDY</span>
                <span className="portal-cat">{study.category}</span>
              </div>

              <h3 className="portal-title">{study.title}</h3>

              <div className="portal-stats-row">
                {study.stats.map((s, idx) => (
                  <span key={idx} className="portal-stat-pill">
                    <strong style={{ color: study.color }}>{s.value}</strong> {s.label}
                  </span>
                ))}
              </div>

              <button className="btn-editorial-link portal-action-btn">
                <span>ENTER PROJECT →</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* SPATIAL PROJECT JOURNEY OVERLAY / WORMHOLE MODAL */}
      {journeyOpen && (
        <div className="spatial-journey-backdrop" onClick={closeJourney}>
          {/* Sub-Wormhole Transition Overlay Effect */}
          {warpAnimating && <div className="sub-wormhole-warp-flash" />}

          <div
            className={`spatial-journey-modal ${warpAnimating ? 'warp-in' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated Sub-Wormhole Background */}
            <InnerWormholeCanvas />

            <div className="journey-modal-header">
              <div>
                <span className="journey-tag">{activePortal.number} • {activePortal.category}</span>
                <h3 className="heading-lg journey-title">{activePortal.title}</h3>
              </div>
              <button onClick={closeJourney} className="journey-close-btn" aria-label="Close portal">
                <X size={20} />
              </button>
            </div>

            <div className="journey-spatial-steps">
              <div className="journey-spatial-step">
                <span className="step-num">01 • CHALLENGE</span>
                <h4>FRICTION VECTOR</h4>
                <p>{activePortal.journey.challenge}</p>
              </div>

              <div className="journey-spatial-step">
                <span className="step-num">02 • STRATEGY</span>
                <h4>GROWTH ARCHITECTURE</h4>
                <p>{activePortal.journey.strategy}</p>
              </div>

              <div className="journey-spatial-step">
                <span className="step-num">03 • EXECUTION</span>
                <h4>SYSTEM DEPLOYMENT</h4>
                <p>{activePortal.journey.execution}</p>
              </div>

              <div className="journey-spatial-step result-step">
                <span className="step-num">04 • RESULT</span>
                <h4>EXPONENTIAL ACCELERATION</h4>
                <p>{activePortal.journey.result}</p>
              </div>
            </div>

            <div className="journey-modal-footer">
              <button onClick={closeJourney} className="btn-editorial-primary">
                <span>RETURN TO PORTALS →</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
