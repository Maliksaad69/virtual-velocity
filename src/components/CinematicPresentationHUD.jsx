import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Gauge, ChevronDown, ChevronUp } from 'lucide-react';
import { scrollStore } from '../utils/scrollStore';
import './CinematicPresentationHUD.css';

const SCENES = [
  { id: 'hero', name: '01 HERO' },
  { id: 'services', name: '02 UNIVERSE' },
  { id: 'engine', name: '03 ENGINE' },
  { id: 'universe', name: '04 WORK' },
  { id: 'results', name: '05 RESULTS' },
  { id: 'process', name: '06 PROCESS' },
  { id: 'about', name: '07 ABOUT' },
  { id: 'testimonials', name: '08 TESTIMONIALS' },
  { id: 'ai-frontier', name: '09 AI FRONTIER' },
  { id: 'contact', name: '10 LAUNCH' }
];

export default function CinematicPresentationHUD() {
  const [activeScene, setActiveScene] = useState(0);
  const [warpSpeed, setWarpSpeed] = useState(1.0);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioCtxRef = useRef(null);

  const playSciFiResonance = (freq = 440, duration = 0.2, type = 'sawtooth') => {
    if (!audioEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const freqs = [freq, freq * 1.25, freq * 1.5];

      freqs.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = type;
        osc.frequency.setValueAtTime(f, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(f * 1.8, ctx.currentTime + duration);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1200 + i * 400, ctx.currentTime);

        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + duration);
      });
    } catch (e) {
      console.warn('Audio synth error:', e);
    }
  };

  useEffect(() => {
    const unsubscribe = scrollStore.subscribe((progress, velocity) => {
      const calculatedMach = (1.0 + Math.min(velocity * 1.2, 17.4)).toFixed(1);
      setWarpSpeed(calculatedMach);

      if (velocity > 12) {
        playSciFiResonance(140 + Math.min(velocity * 25, 600), 0.25, 'triangle');
      }

      // Track active scene based on scroll progress ranges
      const sceneIndex = Math.min(Math.floor(progress * SCENES.length), SCENES.length - 1);
      if (sceneIndex !== activeScene) {
        setActiveScene(sceneIndex);
        playSciFiResonance(220 + sceneIndex * 55, 0.2, 'sine');
      }
    });

    return () => unsubscribe();
  }, [activeScene, audioEnabled]);

  const jumpToScene = (index) => {
    const targetId = SCENES[index].id;
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      scrollStore.scrollTo(targetEl, { duration: 1.2 });
      playSciFiResonance(440, 0.35, 'sawtooth');
    }
  };

  const nextScene = () => {
    if (activeScene < SCENES.length - 1) jumpToScene(activeScene + 1);
  };

  const prevScene = () => {
    if (activeScene > 0) jumpToScene(activeScene - 1);
  };

  return (
    <div className="presentation-hud-container">
      {/* Velocity Speedometer Gauge */}
      <div className="speedometer-hud glass-panel">
        <Gauge size={16} className="speed-icon text-cyan pulse" />
        <div className="speed-data">
          <span className="speed-val text-cyan">{warpSpeed} MACH</span>
          <span className="speed-lbl">DIGITAL VELOCITY</span>
        </div>
      </div>

      {/* Audio FX Toggle */}
      <button
        onClick={() => {
          const nextState = !audioEnabled;
          setAudioEnabled(nextState);
          if (nextState) playSciFiResonance(523.25, 0.3, 'sine');
        }}
        className={`audio-hud-toggle glass-panel ${audioEnabled ? 'active' : ''}`}
        title="Toggle Sci-Fi Audio Feedback"
      >
        {audioEnabled ? <Volume2 size={16} className="text-cyan" /> : <VolumeX size={16} className="text-muted" />}
        <span>{audioEnabled ? 'COSMIC AUDIO: ON' : 'COSMIC AUDIO: OFF'}</span>
      </button>

      {/* Slide / Scene Presentation Tracker */}
      <div className="scene-presentation-nav glass-panel">
        <div className="scene-counter">
          <span className="scene-curr text-gradient">
            {String(activeScene + 1).padStart(2, '0')}
          </span>
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
              >
                <span className="dot-indicator" />
                <span className="dot-tooltip">{scene.name}</span>
              </button>
            );
          })}
        </div>

        <div className="scene-arrows">
          <button onClick={prevScene} disabled={activeScene === 0} className="scene-arrow-btn">
            <ChevronUp size={14} />
          </button>
          <button onClick={nextScene} disabled={activeScene === SCENES.length - 1} className="scene-arrow-btn">
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
