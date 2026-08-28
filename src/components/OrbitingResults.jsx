import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import './OrbitingResults.css';

const METRICS_DATA = [
  {
    id: 'campaigns',
    number: '150+',
    label: 'GLOBAL CAMPAIGNS',
    detail: 'Executed across enterprise SaaS, DTC e-commerce, healthcare, and Web3 finance.',
    color: '#00f0ff'
  },
  {
    id: 'impressions',
    number: '42M+',
    label: 'TOTAL IMPRESSIONS',
    detail: 'High-intent brand impressions generated through strategic audience targeting.',
    color: '#38bdf8'
  },
  {
    id: 'roas',
    number: '3.8×',
    label: 'AVERAGE ROAS',
    detail: 'Consistently delivered across paid media channels and client growth funnels.',
    color: '#60a5fa'
  },
  {
    id: 'growth',
    number: '68%',
    label: 'AVERAGE GROWTH',
    detail: 'Compound year-over-year revenue expansion across our active client portfolio.',
    color: '#1d4ed8'
  }
];

export default function OrbitingResults() {
  const [selectedMetric, setSelectedMetric] = useState(METRICS_DATA[0]);

  return (
    <section id="results" className="orbiting-results-section section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="label">
            <Sparkles size={14} className="label-icon" />
            <span>03 • VERIFIED ACHIEVEMENTS</span>
          </div>
          <h2 className="heading-xl">
            <span className="heading-main">SPATIAL PROOF OF</span> <br />
            <span className="heading-accent">PERFORMANCE.</span>
          </h2>
          <p className="text-lg">
            Gravitational proof of performance floating directly inside our 3D space environment.
          </p>
        </div>

        {/* Spatial Metrics Grid */}
        <div className="spatial-results-grid">
          {METRICS_DATA.map((item) => {
            const isSelected = selectedMetric.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedMetric(item)}
                className={`spatial-result-card ${isSelected ? 'selected' : ''}`}
                data-cursor="EXPLORE"
              >
                <span className="result-number" style={{ color: item.color }}>{item.number}</span>
                <span className="result-label">{item.label}</span>
                <p className="result-detail">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
