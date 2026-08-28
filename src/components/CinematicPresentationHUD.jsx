import { useState, useEffect } from 'react';
import { scrollStore } from '../utils/scrollStore';
import './CinematicPresentationHUD.css';

const SCENES = [
  { id: 'hero', name: '01 OVERVIEW' },
  { id: 'services', name: '02 SERVICES' },
  { id: 'engine', name: '03 THE ENGINE' },
  { id: 'universe', name: '04 CASE STUDIES' },
  { id: 'results', name: '05 ACHIEVEMENTS' },
  { id: 'process', name: '06 METHODOLOGY' },
  { id: 'about', name: '07 PHILOSOPHY' },
  { id: 'testimonials', name: '08 TESTIMONIALS' },
  { id: 'ai-frontier', name: '09 AI LABS' },
  { id: 'contact', name: '10 CONTACT' }
];

export default function CinematicPresentationHUD() {
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollStore.subscribe((progress) => {
      const sceneIndex = Math.min(Math.floor(progress * SCENES.length), SCENES.length - 1);
      if (sceneIndex !== activeScene) {
        setActiveScene(sceneIndex);
      }
    });

    return () => unsubscribe();
  }, [activeScene]);

  const jumpToScene = (index) => {
    const targetId = SCENES[index].id;
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      scrollStore.scrollTo(targetEl, { duration: 1.2 });
    }
  };

  return (
    <div className="presentation-hud-container">
      {/* Sleek Minimal Presentation Dot Indicator (No Clutter Panels) */}
      <div className="scene-presentation-nav">
        <div className="scene-counter">
          <span className="scene-curr">{String(activeScene + 1).padStart(2, '0')}</span>
          <span className="scene-total">/{String(SCENES.length).padStart(2, '0')}</span>
        </div>

        <div className="scene-dots-track">
          {SCENES.map((scene, idx) => {
            const isActive = idx === activeScene;
            return (
              <button
                key={scene.id}
                onClick={() => jumpToScene(idx)}
                className={`scene-dot-btn ${isActive ? 'active' : ''}`}
                aria-label={`Go to ${scene.name}`}
              >
                <span className="dot-indicator" />
                <span className="dot-tooltip">{scene.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
