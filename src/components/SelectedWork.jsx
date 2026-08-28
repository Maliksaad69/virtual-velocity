import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Sparkles, TrendingUp } from 'lucide-react';
import './SelectedWork.css';

const PROJECTS = [
  {
    num: '01',
    id: 'closeknit',
    title: 'CLOSE-KNIT HOSIERY',
    category: 'E-COMMERCE / CREATIVE / PERFORMANCE',
    result: '+180% SALES GROWTH',
    image: '/images/work_closeknit.png',
    summary: 'Custom Shopify Plus store overhaul coupled with creative performance ad production. Turned cold social traffic into loyal repeat customers.',
    deliverables: ['Custom Shopify Store', 'TikTok & Meta Ad Creative', 'Retargeting Architecture', 'Conversion Audit'],
    metrics: [
      { label: 'Revenue Growth', value: '+180%' },
      { label: 'Customer LTV', value: '+45%' },
      { label: 'Return on Ad Spend', value: '4.8x' }
    ]
  },
  {
    num: '02',
    id: 'dailydeli',
    title: 'DAILY DELI CO.',
    category: 'SOCIAL / PAID MEDIA / CAMPAIGN',
    result: '4.2M AUDIENCE REACH',
    image: '/images/work_dailydeli.png',
    summary: 'High-energy viral campaign rollout across TikTok, Instagram, and local paid channels. Increased foot traffic and online order conversions.',
    deliverables: ['Short-form Video Reels', 'PPC Campaign Setup', 'Local Geo-targeting', 'Influencer Strategy'],
    metrics: [
      { label: 'Total Reach', value: '4.2M' },
      { label: 'Engagement Rate', value: '11.4%' },
      { label: 'Cost Per Lead', value: '-42%' }
    ]
  },
  {
    num: '03',
    id: 'aura',
    title: 'AURA BEAUTY',
    category: 'BRANDING / ART DIRECTION / PACKAGING',
    result: '100% CUSTOM VISUAL IDENTITY',
    image: '/images/work_aura.png',
    summary: 'Bespoke brand architecture, luxury editorial packaging, and aesthetic digital guidelines for a high-end botanical skincare brand.',
    deliverables: ['Brand Guidelines', 'Editorial Packaging', 'Custom Typography', 'Creative Direction'],
    metrics: [
      { label: 'Retail Stockists', value: '35+' },
      { label: 'Brand Value Index', value: 'Top 5%' },
      { label: 'Press Feature Rate', value: '+300%' }
    ]
  },
  {
    num: '04',
    id: 'samad',
    title: 'SAMAD GROUP TECH',
    category: 'DIGITAL EXPERIENCE / WEB',
    result: '2.4s → 0.4s LATENCY',
    image: '/images/work_samad.png',
    summary: 'Re-engineering enterprise digital experience to combine rapid page loading speeds with elegant, high-converting product showcases.',
    deliverables: ['Custom Next.js Web App', 'Design System Architecture', 'Headless CMS Integration', 'Performance Audit'],
    metrics: [
      { label: 'Page Speed Load', value: '0.4s' },
      { label: 'Form Inquiries', value: '+140%' },
      { label: 'Bounce Rate', value: '-38%' }
    ]
  }
];

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="section agency-work-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="label-tag">
            <span className="dot"></span>
            <span>FEATURED PORTFOLIO</span>
          </div>
          <h2 className="heading-xl editorial-section-title">
            WORK THAT <br />
            <span className="accent-text">MOVES PEOPLE.</span>
          </h2>
          <p className="text-sub">
            We don't just make things look good. We create campaigns, identities and digital experiences designed to change what people notice, feel and do.
          </p>
        </motion.div>

        {/* Oversized Asymmetric Portfolio Grid */}
        <div className="asymmetric-portfolio-grid">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              className={`portfolio-item-card ${idx % 2 === 1 ? 'layout-reverse' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Visual Media Container */}
              <div className="project-visual-wrapper">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="project-visual-img"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="project-result-badge">
                  <TrendingUp size={14} />
                  <span>{project.result}</span>
                </div>
              </div>

              {/* Editorial Project Info */}
              <div className="project-editorial-info">
                <div className="project-num-tag">{project.num} / PROJECT</div>
                <div className="project-category-tag">{project.category}</div>
                <h3 className="project-title-large">{project.title}</h3>
                <p className="project-summary-text">{project.summary}</p>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="project-cta-link"
                  data-cursor="VIEW"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Full Modal Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="case-study-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="case-study-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-drawer-btn"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>

              <div className="drawer-content">
                <div className="label-tag">
                  <span className="dot"></span>
                  <span>{selectedProject.category}</span>
                </div>
                <h2 className="drawer-title">{selectedProject.title}</h2>
                <div className="drawer-hero-img-box">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>

                <div className="drawer-metrics-grid">
                  {selectedProject.metrics.map((m, i) => (
                    <div key={i} className="drawer-metric-card">
                      <span className="m-val">{m.value}</span>
                      <span className="m-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="drawer-body">
                  <h4>PROJECT OVERVIEW</h4>
                  <p>{selectedProject.summary}</p>

                  <h4>DELIVERABLES & EXECUTIONS</h4>
                  <ul className="deliverables-list">
                    {selectedProject.deliverables.map((d, i) => (
                      <li key={i}>
                        <Sparkles size={14} className="accent-text" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
