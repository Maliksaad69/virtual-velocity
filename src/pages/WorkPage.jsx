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
    id: 1,
    title: 'CLOSE-KNIT HOSIERY',
    category: 'E-COMMERCE / BRANDING',
    type: 'E-COMMERCE',
    img: '/images/work_ecommerce_showcase.png',
    stat: '+310% Sales',
    year: '2026',
    desc: 'Complete e-commerce brand overhaul, custom Shopify architecture, and multi-channel performance creative causing 3.1x revenue expansion.'
  },
  {
    id: 2,
    title: 'SAMAD GROUP',
    category: 'ENTERPRISE / DIGITAL',
    type: 'SAAS & DIGITAL',
    img: '/images/work_saas_showcase.png',
    stat: '4.8x ROAS',
    year: '2026',
    desc: 'High-conversion industrial corporate platform and global b2b lead generation campaigns.'
  },
  {
    id: 3,
    title: 'DYNAMITE GEAR',
    category: 'CAMPAIGNS / APPAREL',
    type: 'CAMPAIGNS',
    img: '/images/work_brand_showcase.png',
    stat: '1.2M Reach',
    year: '2025',
    desc: 'High-octane commercial motion campaigns and DTC performance marketing resulting in zero customer churn.'
  },
  {
    id: 4,
    title: 'AERIAL MAPPING SERVICES',
    category: 'TECH / UI/UX',
    type: 'SAAS & DIGITAL',
    img: '/images/work_campaign_showcase.png',
    stat: '85% Conversion',
    year: '2025',
    desc: 'Clean 3D geospatial dashboard design & product positioning for B2B tech enterprise.'
  },
  {
    id: 5,
    title: 'LEVEL UP VISTA',
    category: 'CREATIVE / MOTION',
    type: 'BRANDING',
    img: '/images/bg_creative_statement.png',
    stat: '+220% Leads',
    year: '2025',
    desc: 'Experimental motion design system and spatial digital campaign for global agency client.'
  },
  {
    id: 6,
    title: 'DAILY DELI CO',
    category: 'BRANDING / SOCIAL',
    type: 'CAMPAIGNS',
    img: '/images/bg_results.png',
    stat: '#1 Viral QSR',
    year: '2026',
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
        {/* Header Hero */}
        <section className="section work-hero-header" style={{ position: 'relative', paddingTop: '150px', paddingBottom: '60px' }}>
          <AnimatedSectionBackground
            imageSrc="/images/bg_results.png"
            overlayGradient="linear-gradient(180deg, rgba(7, 8, 11, 0.4) 0%, var(--bg-black) 100%)"
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
            <p className="text-sub">
              Combining Designade&apos;s provocative visual energy with Buzz Interactive&apos;s data-backed performance math. Every project here was built to win.
            </p>

            {/* Filter Tabs */}
            <div className="work-filter-tabs-strip" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '40px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', marginRight: '8px' }}>
                <Filter size={14} /> FILTER:
              </span>
              {FILTER_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`btn-secondary ${activeFilter === cat ? 'active-filter' : ''}`}
                  style={{
                    padding: '8px 18px',
                    fontSize: '0.78rem',
                    background: activeFilter === cat ? 'var(--accent-coral)' : 'rgba(255, 255, 255, 0.05)',
                    borderColor: activeFilter === cat ? 'var(--accent-coral)' : 'var(--border-subtle)',
                    color: '#ffffff'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Filtered Grid Section */}
        <PresentationSection id="work-grid">
          <div className="container">
            <motion.div className="work-full-grid" layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '32px' }}>
              <AnimatePresence>
                {filteredWork.map(item => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="work-portfolio-card"
                    style={{
                      background: 'rgba(14, 16, 23, 0.85)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <div className="work-card-img-wrap" style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                      <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div className="work-card-badge" style={{ position: 'absolute', top: '16px', right: '16px', padding: '6px 12px', background: 'rgba(7, 8, 11, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-full)', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-coral)', fontWeight: 700 }}>
                        {item.stat}
                      </div>
                    </div>
                    <div className="work-card-content" style={{ padding: '24px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>{item.category}</span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>{item.year}</span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.4rem', textTransform: 'uppercase', marginBottom: '10px', color: '#ffffff' }}>{item.title}</h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '20px' }}>{item.desc}</p>
                      <button className="btn-secondary" style={{ width: '100%', padding: '10px 18px', fontSize: '0.8rem', justifyContent: 'space-between' }}>
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

        {/* Selected Work Carousel */}
        <PresentationSection id="featured">
          <SelectedWork />
        </PresentationSection>

        {/* Testimonials */}
        <PresentationSection id="client-proof">
          <TestimonialsCapsules />
          <FinalCTA />
        </PresentationSection>
      </div>
    </PageTransition>
  );
}
