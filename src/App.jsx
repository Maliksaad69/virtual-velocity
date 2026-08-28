import { useState, useCallback, lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import CreativeStatement from './components/CreativeStatement';
import Services from './components/Services';

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

        {/* Main Master Agency Layout */}
        <main className="agency-main-content">
          <Hero />
          <SelectedWork />
          <CreativeStatement />
          <Services />

          <Suspense fallback={<div style={{ minHeight: '40vh' }} />}>
            <CreativeVsPerformance />
            <OrbitingResults />
            <ProcessSolar />
            <AboutCosmic />
            <WhyChooseUs />
            <TestimonialsCapsules />
            <FinalCTA />
            <Contact />
            <FooterCosmic />
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  );
}
