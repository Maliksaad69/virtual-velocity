import { useState, useCallback, lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import CreativeStatement from './components/CreativeStatement';
import Services from './components/Services';
import { PresentationSection } from './components/PresentationSection';
import './components/PresentationSection.css';

// Below-the-fold components
const CreativeVsPerformance = lazy(() => import('./components/CreativeVsPerformance'));
const OrbitingResults = lazy(() => import('./components/OrbitingResults'));
const ProcessSolar = lazy(() => import('./components/ProcessSolar'));
const AboutCosmic = lazy(() => import('./components/AboutCosmic'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const TestimonialsCapsules = lazy(() => import('./components/TestimonialsCapsules'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Contact = lazy(() => import('./components/Contact'));
const FooterCosmic = lazy(() => import('./components/FooterCosmic'));

export default function App() {
  const [loading, setLoading] = useState(true);
  const handleFinish = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <ErrorBoundary>
      <div className="agency-root">
        {loading && <Loader onFinish={handleFinish} />}

        {/* Minimal Editorial Ring Cursor */}
        <CustomCursor />

        {/* Subtle Ambient Obsidian Mesh */}
        <div className="minimal-bg-ambient">
          <div className="minimal-grid-lines" />
        </div>

        {/* Subtle Film Grain Texture */}
        <div className="film-grain" />

        {/* Floating Minimal Navigation */}
        <Navbar />

        {/* Main Master Agency Presentation Layout */}
        <main className="agency-main-content">
          <PresentationSection id="hero" sectionNumber="01" totalSections="12">
            <Hero />
          </PresentationSection>

          <PresentationSection id="work" sectionNumber="02" totalSections="12">
            <SelectedWork />
          </PresentationSection>

          <PresentationSection id="statement" sectionNumber="03" totalSections="12">
            <CreativeStatement />
          </PresentationSection>

          <PresentationSection id="capabilities" sectionNumber="04" totalSections="12">
            <Services />
          </PresentationSection>

          <Suspense fallback={<div style={{ minHeight: '40vh' }} />}>
            <PresentationSection id="split-domains" sectionNumber="05" totalSections="12">
              <CreativeVsPerformance />
            </PresentationSection>

            <PresentationSection id="results" sectionNumber="06" totalSections="12">
              <OrbitingResults />
            </PresentationSection>

            <PresentationSection id="process" sectionNumber="07" totalSections="12">
              <ProcessSolar />
            </PresentationSection>

            <PresentationSection id="agency" sectionNumber="08" totalSections="12">
              <AboutCosmic />
            </PresentationSection>

            <PresentationSection id="difference" sectionNumber="09" totalSections="12">
              <WhyChooseUs />
            </PresentationSection>

            <PresentationSection id="testimonials" sectionNumber="10" totalSections="12">
              <TestimonialsCapsules />
            </PresentationSection>

            <PresentationSection id="final-cta" sectionNumber="11" totalSections="12">
              <FinalCTA />
            </PresentationSection>

            <PresentationSection id="contact" sectionNumber="12" totalSections="12">
              <Contact />
            </PresentationSection>

            <FooterCosmic />
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  );
}
