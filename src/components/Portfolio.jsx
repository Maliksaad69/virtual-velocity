import { useState } from 'react';
import { X, ExternalLink, Play, Sparkles, TrendingUp } from 'lucide-react';
import './Portfolio.css';

const CATEGORIES = ['All', 'Videos', 'Brand Identity', 'Web Design', 'Social Media', 'AI Projects'];

const PROJECTS = [
  { id: 1, title: 'Apex Dynamics Luxury Brand Launch', category: 'Brand Identity', image: 'https://images.unsplash.com/photo-1636114673156-052a83199917?w=700&q=80', metric: '+340% Revenue', type: 'image', desc: 'Full luxury brand identity, positioning strategy, and multi-channel launch campaign.' },
  { id: 2, title: 'Nova Studios Commercial Production', category: 'Videos', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80', metric: '10M+ Views', type: 'video', desc: 'Cinematic brand video production and social media video ad push.' },
  { id: 3, title: 'Quantum Tech E-Commerce Engine', category: 'Web Design', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&q=80', metric: '+180% Conv. Rate', type: 'image', desc: 'Custom high-performance React/Vite storefront with dynamic checkout optimization.' },
  { id: 4, title: 'Vortex Global Social Media Push', category: 'Social Media', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=700&q=80', metric: '4.5M Reach', type: 'image', desc: 'Viral campaign strategy with creator partnerships and daily reel distribution.' },
  { id: 5, title: 'AI Voice & Lead Pipeline System', category: 'AI Projects', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&q=80', metric: '60% Cost Saved', type: 'image', desc: 'Autonomous AI voice agent dispatch system integrated with custom CRM.' },
  { id: 6, title: 'Luxe Fashion House Commercial', category: 'Videos', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=700&q=80', metric: '+520% ROAS', type: 'video', desc: 'High-fashion video commercial shot with 4K cinema cameras for global ad campaigns.' },
  { id: 7, title: 'Stellar Real Estate Web Platform', category: 'Web Design', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80', metric: '$12M Volume', type: 'image', desc: '3D virtual tour integration and dynamic property search Web App.' },
  { id: 8, title: 'Pulse Fitness Brand Expansion', category: 'Brand Identity', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&q=80', metric: '50+ Locations', type: 'image', desc: 'Rebranding initiative for national luxury gym network across 50+ locations.' },
  { id: 9, title: 'AI Customer Service Assistant', category: 'AI Projects', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700&q=80', metric: '99.4% Accuracy', type: 'image', desc: 'Multi-lingual AI chatbot answering complex customer inquiries in real time.' },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="label"><Sparkles size={13} style={{ display: 'inline', marginRight: 4 }} /> Selected Work</span>
          <h2 className="heading-lg">
            Proven Results & <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-lg">Real outcomes engineered for world-class brands across industries.</p>
        </div>

        {/* Category Filters */}
        <div className="portfolio-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry Grid */}
        <div className="portfolio-grid">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="portfolio-card glass-card"
              data-cursor="VIEW"
              onClick={() => setSelected(project)}
            >
              <div className="portfolio-img-wrapper">
                <img src={project.image} alt={project.title} className="portfolio-img" loading="lazy" />

                <div className="portfolio-top-bar">
                  <span className="portfolio-category">{project.category}</span>
                  <span className="portfolio-metric-badge">
                    <TrendingUp size={12} style={{ marginRight: 3 }} /> {project.metric}
                  </span>
                </div>

                {project.type === 'video' && (
                  <div className="portfolio-play-btn">
                    <Play size={20} fill="currentColor" />
                  </div>
                )}

                <div className="portfolio-overlay">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-desc-preview">{project.desc}</p>
                  <div className="portfolio-action">
                    <span>View Case Study</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selected && (
        <div className="portfolio-modal-overlay" onClick={() => setSelected(null)}>
          <div className="portfolio-modal glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>
              <X size={20} />
            </button>

            <img src={selected.image} alt={selected.title} className="modal-img" />

            <div className="modal-content">
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                <span className="label">{selected.category}</span>
                <span className="portfolio-metric-badge">{selected.metric}</span>
              </div>

              <h2 className="heading-md" style={{ marginBottom: 12 }}>{selected.title}</h2>
              <p className="text-lg" style={{ marginBottom: 24 }}>{selected.desc}</p>

              <div style={{ display: 'flex', gap: 14 }}>
                <a href="#contact" className="btn btn-primary" onClick={() => setSelected(null)}>
                  Get Similar Results
                </a>
                <button className="btn btn-secondary" onClick={() => setSelected(null)}>
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
