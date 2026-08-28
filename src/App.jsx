import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import FooterCosmic from './components/FooterCosmic';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const handleFinish = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
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

          {/* Main Master Agency Multi-Page Container */}
          <main className="agency-main-content">
            <AnimatedRoutes />
          </main>

          {/* Global Cosmic Footer */}
          <FooterCosmic />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
