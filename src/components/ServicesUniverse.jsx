import { useState } from 'react';
import { Sparkles, Target, Search, Share2, FileText, Compass, Code, Cpu, TrendingUp } from 'lucide-react';
import './ServicesUniverse.css';

const SERVICES_DATA = [
  {
    id: 'performance',
    number: '01',
    name: 'PERFORMANCE',
    headline: 'TURN AD SPEND INTO MOMENTUM.',
    description: 'Paid media systems engineered for measurable growth across Google, Meta, TikTok, and programmatic networks.',
    metrics: [
      { label: 'ROAS GAIN', value: '+214%' },
      { label: 'QUALIFIED LEADS', value: '+87%' },
      { label: 'CAC REDUCTION', value: '−32%' }
    ],
    color: '#a855f7',
    icon: Target
  },
  {
    id: 'seo',
    number: '02',
    name: 'SEO',
    headline: 'GRAVITATIONAL ORGANIC SEARCH.',
    description: 'Technical search engine architecture and content clusters designed to capture long-tail high-intent traffic.',
    metrics: [
      { label: 'TOP POSITIONS', value: 'TOP #1' },
      { label: 'ORGANIC TRAFFIC', value: '+340%' },
      { label: 'INDEX SHARE', value: '94%' }
    ],
    color: '#d946ef',
    icon: Search
  },
  {
    id: 'social',
    number: '03',
    name: 'SOCIAL',
    headline: 'VIRAL RESONANCE ENGINES.',
    description: 'Cultural narrative strategy and high-frequency content creation that builds organic social velocity.',
    metrics: [
      { label: 'IMPRESSIONS', value: '42M+' },
      { label: 'ENGAGEMENT RATE', value: '12.4%' },
      { label: 'COMMUNITY GROWTH', value: '+150K' }
    ],
    color: '#c084fc',
    icon: Share2
  },
  {
    id: 'content',
    number: '04',
    name: 'CONTENT',
    headline: 'HIGH-CONVERSION NARRATIVES.',
    description: 'Editorial storytelling, video production, and conversion copywriting engineered to capture market mindshare.',
    metrics: [
      { label: 'RETENTION TIME', value: '4.2×' },
      { label: 'LEAD PIPELINE', value: '+88%' },
      { label: 'INDUSTRY AWARDS', value: '15+' }
    ],
    color: '#8b5cf6',
    icon: FileText
  },
  {
    id: 'brand',
    number: '05',
    name: 'BRAND',
    headline: 'POSITIONING THAT DOMINATES.',
    description: 'Strategic visual identity, brand positioning, and market design systems that create immediate authority.',
    metrics: [
      { label: 'BRAND AWARENESS', value: '99.4%' },
      { label: 'EQUITY VALUATION', value: '+45%' },
      { label: 'ALIGNMENT', value: '100%' }
    ],
    color: '#e879f9',
    icon: Compass
  },
  {
    id: 'web',
    number: '06',
    name: 'WEB',
    headline: '3D HIGH-VELOCITY PLATFORMS.',
    description: 'Interactive WebGL web applications, custom React frameworks, and micro-animations built for conversion.',
    metrics: [
      { label: 'LOAD SPEED', value: '0.4s' },
      { label: 'CONV. RATE', value: '4.8%' },
      { label: 'PERFORMANCE SCORE', value: '100' }
    ],
    color: '#a855f7',
    icon: Code
  },
  {
    id: 'ai',
    number: '07',
    name: 'AI INTELLIGENCE',
    headline: 'PREDICTIVE GROWTH INTELLIGENCE.',
    description: 'Machine learning prediction models, automated audience targeting, and real-time bid optimization.',
    metrics: [
      { label: 'FORECAST ACCURACY', value: '92%' },
      { label: 'EXECUTION SPEED', value: '10×' },
      { label: 'TIME REDUCTION', value: '−40%' }
    ],
    color: '#c084fc',
    icon: Cpu
  },
  {
    id: 'growth',
    number: '08',
    name: 'GROWTH LOOPS',
    headline: 'FULL-FUNNEL HYPER-SCALING.',
    description: 'Holistic growth loops uniting product analytics, retention automation, and rapid experimentation.',
    metrics: [
      { label: 'LTV / CAC RATIO', value: '3.8×' },
      { label: 'MRR GROWTH', value: '+280%' },
      { label: 'CLIENT RETENTION', value: '98%' }
    ],
    color: '#d946ef',
    icon: TrendingUp
  }
];

export default function ServicesUniverse() {
  const [activeIndex, setActiveIndex] = useState(0);

  const selectService = (index) => {
    setActiveIndex(index);
  };

  const activeService = SERVICES_DATA[activeIndex];

  return (
    <section id="services" className="spatial-services-universe-section section">
      <div className="container spatial-container">
        {/* Section Header */}
        <div className="section-header minimal-header">
          <div className="label">
            <Sparkles size={14} className="label-icon" />
            <span>02 • SPATIAL GROWTH SERVICES</span>
          </div>
          <h2 className="heading-xl">
            <span className="heading-main">SPATIAL GROWTH</span> <br />
            <span className="heading-accent">SERVICES.</span>
          </h2>
        </div>

        {/* Spatial Service Composition Grid */}
        <div className="spatial-services-layout">
          {/* Spatial Rail Navigation Track */}
          <div className="spatial-service-track">
            {SERVICES_DATA.map((service, idx) => {
              const isActive = activeIndex === idx;

              return (
                <button
                  key={service.id}
                  onClick={() => selectService(idx)}
                  className={`spatial-track-item ${isActive ? 'active' : ''}`}
                >
                  <span className="track-number">{service.number}</span>
                  <span className="track-name">{service.name}</span>
                  <div className="track-indicator-line" style={{ background: isActive ? service.color : 'rgba(255, 255, 255, 0.15)' }} />
                </button>
              );
            })}
          </div>

          {/* Active Service Floating Spatial Composition */}
          <div className="spatial-composition-display" key={activeService.id}>
            <div className="composition-meta">
              <span className="comp-number">{activeService.number}</span>
              <span className="comp-category">{activeService.name} • DISCIPLINE</span>
            </div>

            <h3 className="heading-lg comp-headline">
              {activeService.headline}
            </h3>

            <p className="comp-description">
              {activeService.description}
            </p>

            {/* Floating Spatial Metrics */}
            <div className="spatial-metrics-row">
              {activeService.metrics.map((m, i) => (
                <div key={i} className="spatial-metric-item">
                  <span className="metric-val" style={{ color: activeService.color }}>{m.value}</span>
                  <span className="metric-lbl">{m.label}</span>
                </div>
              ))}
            </div>

            <div className="comp-action">
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-editorial-primary"
              >
                <span>LAUNCH {activeService.name} MODULE →</span>
              </button>
            </div>
          </div>
        </div>

        {/* Minimal Spatial Progress Bar */}
        <div className="spatial-scroll-progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${((activeIndex + 1) / SERVICES_DATA.length) * 100}%`,
              background: activeService.color,
              boxShadow: `0 0 10px ${activeService.color}`
            }}
          />
        </div>
      </div>
    </section>
  );
}
