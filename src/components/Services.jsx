import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, ArrowRight } from 'lucide-react';
import { AnimatedSectionBackground } from './PresentationSection';
import './Services.css';

const SERVICES_DATA = [
  {
    num: '01',
    id: 'brand',
    title: 'BRAND',
    subtitle: 'Brand Strategy & Visual Systems',
    items: ['Brand strategy', 'Visual identity', 'Art direction', 'Packaging', 'Campaign systems'],
    desc: 'Crafting unforgettable identities, visual languages, and packaging architectures that position your brand at the absolute peak of your market.',
    bgTag: 'IDENTITY'
  },
  {
    num: '02',
    id: 'content',
    title: 'CONTENT',
    subtitle: 'Creative Production & Motion',
    items: ['Social content', 'Video', 'Motion graphics', 'Photography', 'Creative production'],
    desc: 'High-volume, editorial-grade short-form videos, motion graphics, and ad assets built specifically to capture instant attention on social media feeds.',
    bgTag: 'PRODUCTION'
  },
  {
    num: '03',
    id: 'performance',
    title: 'PERFORMANCE',
    subtitle: 'Paid Media & Growth Strategy',
    items: ['Paid advertising', 'Meta Ads', 'Google Ads', 'Conversion optimization', 'Growth strategy'],
    desc: 'Precision performance advertising campaigns focused on revenue growth, high ROAS scaling, low acquisition costs, and transparent tracking.',
    bgTag: 'GROWTH'
  },
  {
    num: '04',
    id: 'digital',
    title: 'DIGITAL',
    subtitle: 'Web Design & E-Commerce',
    items: ['Web design', 'E-commerce', 'Landing pages', 'Interactive experiences'],
    desc: 'Bespoke web applications, custom Shopify stores, and digital products engineered with lightning-fast speeds and high-converting UX.',
    bgTag: 'EXPERIENCE'
  },
  {
    num: '05',
    id: 'automation',
    title: 'AUTOMATION',
    subtitle: 'AI & Workflow Systems',
    items: ['AI agents', 'Chatbots', 'Voice experiences', 'Marketing automation', 'Workflow systems'],
    desc: 'Intelligent automated customer workflows, AI conversational agents, and lead nurture systems to streamline operations and scale response times.',
    bgTag: 'SYSTEMS'
  }
];

export default function Services() {
  const [activeId, setActiveId] = useState('brand');
  const navigate = useNavigate();

  return (
    <section id="capabilities" className="section agency-services-section">
      <AnimatedSectionBackground
        imageSrc="/images/bg_services.png"
        overlayGradient="linear-gradient(180deg, var(--bg-black) 0%, rgba(7, 8, 11, 0.42) 25%, rgba(7, 8, 11, 0.42) 75%, var(--bg-black) 100%)"
      />

      <div className="container relative-z">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="label-tag">
            <span className="dot"></span>
            <span>OUR CAPABILITIES</span>
          </div>
          <h2 className="heading-xl editorial-section-title">
            WHAT WE <br />
            <span className="accent-text">MAKE.</span>
          </h2>
          <p className="text-sub">
            We operate as your full-service creative engine. Hover over each domain to explore our capabilities and deliverable outputs.
          </p>
        </motion.div>

        {/* Vertical Interactive Accordion List */}
        <div className="services-vertical-list">
          {SERVICES_DATA.map((service, index) => {
            const isOpen = activeId === service.id;
            return (
              <motion.div
                key={service.id}
                className={`service-vertical-row ${isOpen ? 'is-open' : ''}`}
                onMouseEnter={() => setActiveId(service.id)}
                onClick={() => setActiveId(service.id)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.01, x: 6 }}
              >
                <div className="service-row-header">
                  <div className="row-num-box">
                    <span className="row-num">{service.num}</span>
                    <span className="row-dash">—</span>
                  </div>

                  <h3 className="row-title">{service.title}</h3>
                  <span className="row-subtitle-preview">{service.subtitle}</span>

                  <div className="row-arrow-icon">
                    <ArrowUpRight size={22} />
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="service-row-expanded-body"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="expanded-inner-grid">
                        <div className="expanded-desc-col">
                          <p className="service-full-desc">{service.desc}</p>
                          <div className="bg-tag-watermark">{service.bgTag}</div>
                        </div>

                        <div className="expanded-items-col">
                          <span className="deliverables-heading">CORE DELIVERABLES</span>
                          <div className="deliverables-tags-wrap">
                            {service.items.map((item, idx) => (
                              <motion.span
                                key={idx}
                                className="deliverable-tag-pill"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                              >
                                <Sparkles size={12} className="accent-text" />
                                {item}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* View Full Services CTA */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => navigate('/services')}
            className="btn-primary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <span>EXPLORE FULL CAPABILITIES & WORKFLOW</span>
            <ArrowRight size={16} className="btn-icon-arrow" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
