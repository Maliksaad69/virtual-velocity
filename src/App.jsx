import { useState, useCallback } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import PlanetaryCanvas from './components/PlanetaryCanvas';
import CinematicPresentationHUD from './components/CinematicPresentationHUD';
import CinematicSceneWrapper from './components/CinematicSceneWrapper';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesUniverse from './components/ServicesUniverse';
import VelocityEngine from './components/VelocityEngine';
import CaseStudiesUniverse from './components/CaseStudiesUniverse';
import OrbitingResults from './components/OrbitingResults';
import ProcessSolar from './components/ProcessSolar';
import AboutCosmic from './components/AboutCosmic';
import TestimonialsCapsules from './components/TestimonialsCapsules';
import AIFutures from './components/AIFutures';
import FinalCTA from './components/FinalCTA';
import FooterCosmic from './components/FooterCosmic';

export default function App() {
  const [loading, setLoading] = useState(true);
  const handleFinish = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <ErrorBoundary>
      <div className="app-planetary-root">
        {loading && <Loader onFinish={handleFinish} />}

        {/* Custom Futuristic Glass Cursor */}
        <CustomCursor />

        {/* Global WebGL 3D Planetary Hyperspace Canvas */}
        <PlanetaryCanvas />

        {/* PowerPoint-Style Presentation Scene Navigation HUD & Speedometer */}
        <CinematicPresentationHUD />

        {/* Film Grain Atmospheric Noise Layer */}
        <div className="film-grain" />

        {/* Floating Glass Capsule Navigation */}
        <Navbar />

        {/* Scene-by-Scene Presentation Journey */}
        <main style={{ position: 'relative', zIndex: 2 }}>
          <CinematicSceneWrapper variant="slide-up">
            <Hero />
          </CinematicSceneWrapper>

          <CinematicSceneWrapper variant="zoom-depth">
            <ServicesUniverse />
          </CinematicSceneWrapper>

          <CinematicSceneWrapper variant="slide-up">
            <VelocityEngine />
          </CinematicSceneWrapper>

          <CinematicSceneWrapper variant="slide-right">
            <CaseStudiesUniverse />
          </CinematicSceneWrapper>

          <CinematicSceneWrapper variant="zoom-depth">
            <OrbitingResults />
          </CinematicSceneWrapper>

          <CinematicSceneWrapper variant="slide-up">
            <ProcessSolar />
          </CinematicSceneWrapper>

          <CinematicSceneWrapper variant="zoom-depth">
            <AboutCosmic />
          </CinematicSceneWrapper>

          <CinematicSceneWrapper variant="slide-right">
            <TestimonialsCapsules />
          </CinematicSceneWrapper>

          <CinematicSceneWrapper variant="zoom-depth">
            <AIFutures />
          </CinematicSceneWrapper>

          <CinematicSceneWrapper variant="slide-up">
            <FinalCTA />
          </CinematicSceneWrapper>
        </main>

        {/* Minimal Cosmic Footer */}
        <FooterCosmic />
      </div>
    </ErrorBoundary>
  );
}
