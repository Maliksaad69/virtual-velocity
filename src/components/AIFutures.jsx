import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import './AIFutures.css';

const AI_NODES = [
  {
    id: 'strategy',
    title: 'AI STRATEGY',
    badge: 'MODEL 4.0',
    description: 'Autonomous market opportunity discovery, competitive intelligence scanning, and real-time audience modeling.',
    color: '#00f0ff'
  },
  {
    id: 'automation',
    title: 'AUTOMATION',
    badge: 'HYPER-FLOW',
    description: 'Self-optimizing ad bidding loops, instant CRM lead dispatch, and autonomous cross-channel budget re-balancing.',
    color: '#38bdf8'
  },
  {
    id: 'predictive',
    title: 'PREDICTIVE ANALYTICS',
    badge: '92% ACCURACY',
    description: 'Machine learning forecasting models predicting campaign LTV, churn probability, and revenue ROI prior to ad spend.',
    color: '#60a5fa'
  },
  {
    id: 'personalization',
    title: 'PERSONALIZATION',
    badge: 'DYNAMIC 1:1',
    description: 'Generative 1:1 landing page variations and customized ad creative matching individual visitor intent vectors.',
    color: '#38bdf8'
  },
  {
    id: 'content-intel',
    title: 'CONTENT INTELLIGENCE',
    badge: 'NLP VECTOR',
    description: 'AI sentiment scoring and semantic keyword clustering ensuring content captures maximum algorithmic gravity.',
    color: '#00f0ff'
  }
];

export default function AIFutures() {
  const [activeNode, setActiveNode] = useState(AI_NODES[0]);

  return (
    <section id="ai-frontier" className="ai-futures-section section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="label">
            <Sparkles size={14} className="label-icon" />
            <span>09 • PREDICTIVE AI LABS</span>
          </div>
          <h2 className="heading-xl">
            <span className="heading-main">PREDICTIVE</span> <br />
            <span className="heading-accent">AI INTELLIGENCE.</span>
          </h2>
          <p className="text-lg">
            AI-powered marketing intelligence wrapped in an autonomous neural network engine.
          </p>
        </div>

        {/* Spatial AI Subsystems List */}
        <div className="spatial-ai-grid">
          {AI_NODES.map((node) => {
            const isActive = activeNode.id === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setActiveNode(node)}
                className={`spatial-ai-item ${isActive ? 'active' : ''}`}
              >
                <div className="ai-item-meta">
                  <span className="ai-item-badge" style={{ color: node.color }}>{node.badge}</span>
                  <h3 className="ai-item-title">{node.title}</h3>
                </div>
                <p className="ai-item-desc">{node.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
