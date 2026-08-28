import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import './ProcessSolar.css';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'DEEP MARKET SIGNAL AUDIT',
    description: 'We analyze your brand DNA, competitor gaps, high-intent search clusters, and conversion bottlenecks to chart your optimal trajectory.',
    color: '#00f0ff'
  },
  {
    number: '02',
    title: 'STRATEGIZE',
    subtitle: 'GROWTH ARCHITECTURE BLUEPRINT',
    description: 'Custom growth model design selecting high-ROAS acquisition channels, retention loops, and messaging positioning.',
    color: '#38bdf8'
  },
  {
    number: '03',
    title: 'CREATE',
    subtitle: 'HIGH-CONVERSION PRODUCTION',
    description: 'Engineering high-velocity video creative, interactive 3D web interfaces, and persuasive editorial ad assets.',
    color: '#60a5fa'
  },
  {
    number: '04',
    title: 'LAUNCH',
    subtitle: 'CAMPAIGN MARKET ENTRY',
    description: 'Controlled campaign launch across paid networks, search indices, and social ecosystem channels with live telemetry monitoring.',
    color: '#00f0ff'
  },
  {
    number: '05',
    title: 'OPTIMIZE',
    subtitle: 'REAL-TIME TELEMETRY TUNING',
    description: 'Continuous AI bid optimization, ad creative fatigue mitigation, and conversion rate optimization (CRO).',
    color: '#38bdf8'
  },
  {
    number: '06',
    title: 'SCALE',
    subtitle: 'EXPONENTIAL MARKET DOMINANCE',
    description: 'Expanding budget allocation into winning campaigns, international channels, and multi-touch attribution loops.',
    color: '#1d4ed8'
  }
];

export default function ProcessSolar() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="process-solar-section section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="label">
            <Sparkles size={14} className="label-icon" />
            <span>05 • OUR METHODOLOGY</span>
          </div>
          <h2 className="heading-xl">
            <span className="heading-main">FROM SIGNAL</span> <br />
            <span className="heading-accent">TO SCALE.</span>
          </h2>
          <p className="text-lg">
            Six interconnected velocity milestones driving your brand from initial market discovery to exponential scaling.
          </p>
        </div>

        {/* Spatial Process Steps Grid */}
        <div className="spatial-process-grid">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`spatial-process-step ${isActive ? 'active' : ''}`}
              >
                <div className="process-step-head">
                  <span className="step-num" style={{ color: step.color }}>{step.number}</span>
                  <span className="step-sub">{step.subtitle}</span>
                </div>

                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
