import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter } from 'lucide-react';
import SelectedWork from '../components/SelectedWork';
import TestimonialsCapsules from '../components/TestimonialsCapsules';
import FinalCTA from '../components/FinalCTA';
import { AnimatedSectionBackground, PresentationSection } from '../components/PresentationSection';
import { PageTransition } from '../components/PageTransition';

const CASE_STUDIES_EXTENDED = [
  {
    id: 1, title: 'CLOSE-KNIT HOSIERY', category: 'E-COMMERCE / BRANDING', type: 'E-COMMERCE',
    img: '/images/work_closeknit.png', stat: '+310% Sales', year: '2026',
    desc: 'Complete e-commerce brand overhaul, custom Shopify architecture, and multi-channel performance creative causing 3.1x revenue expansion.'
  },
  {
    id: 2, title: 'SAMAD GROUP', category: 'ENTERPRISE / DIGITAL', type: 'SAAS & DIGITAL',
    img: '/images/work_samad.png', stat: '4.8x ROAS', year: '2026',
    desc: 'High-conversion industrial corporate platform and global B2B lead generation campaigns.'
  },
  {
    id: 3, title: 'DYNAMITE GEAR', category: 'CAMPAIGNS / APPAREL', type: 'CAMPAIGNS',
    img: '/images/work_brand.png', stat: '1.2M Reach', year: '2025',
    desc: 'High-octane commercial motion campaigns and DTC performance marketing resulting in zero customer churn.'
  },
  {
    id: 4, title: 'AERIAL MAPPING SERVICES', category: 'TECH / UI/UX', type: 'SAAS & DIGITAL',
    img: '/images/work_campaign.png', stat: '85% Conversion', year: '2025',
    desc: 'Clean 3D geospatial dashboard design & product positioning for B2B tech enterprise.'
  },
  {
    id: 5, title: 'AURA BEAUTY', category: 'CREATIVE / MOTION', type: 'BRANDING',
    img: '/images/work_aura.png', stat: '+220% Leads', year: '2025',
    desc: 'Experimental motion design system and editorial campaign for a premium botanical skincare brand.'
  },
  {
    id: 6, title: 'DAILY DELI CO', category: 'BRANDING / SOCIAL', type: 'CAMPAIGNS',
    img: '/images/work_dailydeli.png', stat: '#1 Viral QSR', year: '2026',
    desc: 'Viral creative campaign & social media blitz driving 450,000+ customer walk-ins across 14 locations.'
  }
];

const FILTER_CATEGORIES = ['ALL', 'BRANDING', 'CAMPAIGNS', 'E-COMMERCE', 'SAAS & DIGITAL'];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredWork = activeFilter === 'ALL'
    ? CASE_STUDIES_EXTENDED
    : CASE_STUDIES_EXTENDED.filter(item => item.type === activeFilter);

  return (
    <PageTransition>
      <div className="work-page-view">
        <section className="section work-hero-header" style={{ position: 'relative', paddingTop: '160px', paddingBottom: '40px' }}>
          <AnimatedSectionBackground
            imageSrc="/images/bg_results.png"
            overlayGradient="linear-gradient(180deg, rgba(6, 7, 10, 0.45) 0%, var(--bg-black) 100%)"
            alt="Work portfolio background"
          />
          <div className="container relative-z">
            <div className="label-tag">
              <span className="dot" />
              <span>SELECTED WORK & CASE STUDIES</span>
            </div>
            <h1 className="heading-hero" style={{ maxWidth: '960px' }}>
              OUR WORK TALKS. <br />
              <span className="accent-text">THE MATH PROVES IT.</span>
            </h1>
            <p className="text-sub" style={{ marginBottom: '40px' }}>
              Combining provocative visual energy with data-backed performance math — every project here was built to win.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', marginRight: '6px' }}>
                <Filter size={13} /> FILTER:
              </span>
              {FILTER_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    padding: '7px 16px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    borderRadius: 'var(--radius-full)',
                    border: `1px solid ${activeFilter === cat ? 'var(--accent-coral)' : 'var(--border-medium)'}`,
                    background: activeFilter === cat ? 'var(--accent-coral)' : 'rgba(255,255,255,0.04)',
                    color: '#ffffff',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <PresentationSection id="work-grid">
          <div className="container" style={{ paddingTop: '0', paddingBottom: '60px' }}>
            <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
              <AnimatePresence>
                {filteredWork.map(item => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -6 }}
                    style={{
                      background: 'rgba(12, 14, 21, 0.9)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                      <motion.img
                        src={item.img}
                        alt={item.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div style={{
                        position: 'absolute', top: '14px', right: '14px',
                        padding: '5px 12px',
                        background: 'rgba(6, 7, 10, 0.88)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-full)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--accent-coral)',
                        fontWeight: 700
                      }}>
                        {item.stat}
                      </div>
                    </div>
                    <div style={{ padding: '22px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>{item.category}</span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>{item.year}</span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.35rem', textTransform: 'uppercase', marginBottom: '10px', color: '#fff' }}>{item.title}</h3>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '18px' }}>{item.desc}</p>
                      <button className="btn-secondary" style={{ width: '100%', padding: '10px 16px', fontSize: '0.78rem', justifyContent: 'space-between' }}>
                        <span>EXPLORE CASE STUDY</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </PresentationSection>

        <PresentationSection id="featured">
          <SelectedWork />
        </PresentationSection>

        <PresentationSection id="client-proof">
          <TestimonialsCapsules />
          <FinalCTA />
        </PresentationSection>
      </div>
    </PageTransition>
  );
}
