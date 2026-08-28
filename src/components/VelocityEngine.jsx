import { useState } from 'react';
import { Sparkles, Zap } from 'lucide-react';
import './VelocityEngine.css';

const ENGINE_STAGES = [
  { name: 'ATTENTION', color: '#00f0ff', speed: 10 },
  { name: 'TRAFFIC', color: '#38bdf8', speed: 14 },
  { name: 'ENGAGEMENT', color: '#60a5fa', speed: 18 },
  { name: 'CONVERSION', color: '#1d4ed8', speed: 22 },
  { name: 'GROWTH', color: '#0284c7', speed: 26 },
];

const SPATIAL_METRICS = [
  { title: 'QUALIFIED LEADS', metric: '+214%', pos: 'pos-top-left' },
  { title: 'CONVERSION VELOCITY', metric: '3.8× ROAS', pos: 'pos-top-right' },
  { title: 'REVENUE PROPULSION', metric: '+183%', pos: 'pos-bottom-left' },
  { title: 'CUSTOMER ACQUISITION', metric: '−32% CAC', pos: 'pos-bottom-right' },
];

export default function VelocityEngine() {
  const [synced, setSynced] = useState(false);
  const [enginePower, setEnginePower] = useState(88);

  const toggleSynchronization = () => {
    setSynced(prev => !prev);
    setEnginePower(prev => (prev === 100 ? 88 : 100));
  };

  return (
    <section id="engine" className="velocity-engine-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="label">
            <Sparkles size={14} className="label-icon" />
            <span>[ 03 // THE VELOCITY ENGINE ]</span>
          </div>
          <h2 className="heading-xl">
            ACCELERATION <br />
            ENGINE.
          </h2>
          <p className="text-lg">
            Streams of market attention traveling through five accelerated energy stages into full-velocity growth.
          </p>
        </div>

        {/* Spatial Machine Environment (No Glass Container Box) */}
        <div className="spatial-engine-stage">
          {/* Spatial Overdrive Controls */}
          <div className="spatial-engine-controls">
            <div className="engine-status-tag">
              [ SYSTEM STATUS: {synced ? 'HYPERSPEED OVERDRIVE (100%)' : 'ACCELERATION ACTIVE'} ]
            </div>

            <button
              onClick={toggleSynchronization}
              className="btn-editorial-primary engine-toggle-btn"
              data-cursor="LAUNCH"
            >
              <span>{synced ? 'DISENGAGE OVERDRIVE' : 'ACCELERATE STAGES →'}</span>
            </button>
          </div>

          {/* Floating Spatial Metrics directly in Space (No Cards) */}
          <div className="spatial-metrics-layer">
            {SPATIAL_METRICS.map((item, i) => (
              <div key={i} className={`spatial-floating-metric ${item.pos}`}>
                <span className="spatial-metric-number">{item.metric}</span>
                <span className="spatial-metric-title">{item.title}</span>
              </div>
            ))}
          </div>

          {/* Machine Multi-Ring Spatial Visualizer */}
          <div className="spatial-machine-visualizer">
            {/* Center Core */}
            <div className={`machine-core ${synced ? 'supercharged' : ''}`}>
              <Zap size={32} className="core-zap-icon" />
              <span className="core-power-label">{enginePower}% VELOCITY</span>
            </div>

            {/* Concentric Rotating Stages */}
            {ENGINE_STAGES.map((stage, idx) => {
              const ringSize = 220 + idx * 64;
              const duration = synced ? stage.speed / 3.0 : stage.speed;

              return (
                <div
                  key={stage.name}
                  className="spatial-engine-ring"
                  style={{
                    width: `${ringSize}px`,
                    height: `${ringSize}px`,
                    borderColor: stage.color,
                    animationDuration: `${duration}s`,
                    animationDirection: idx % 2 === 0 ? 'normal' : 'reverse',
                  }}
                >
                  <div className="ring-node-tag" style={{ color: stage.color }}>
                    <span>{stage.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
