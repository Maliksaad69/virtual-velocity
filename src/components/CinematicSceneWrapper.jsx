import { useEffect, useRef, useState } from 'react';
import './CinematicSceneWrapper.css';

export default function CinematicSceneWrapper({ children, sceneNumber, variant = 'slide-up' }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`cinematic-scene-container ${variant} ${isVisible ? 'scene-visible' : ''}`}
    >
      {/* Cinematic Slide Transition Light Beam Wipe */}
      <div className="scene-light-beam-wipe" />

      {/* Scene Content */}
      <div className="scene-inner-content">
        {children}
      </div>
    </div>
  );
}
