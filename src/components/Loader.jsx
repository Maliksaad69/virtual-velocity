import { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 20);

    const safetyTimer = setTimeout(() => {
      setProgress(100);
    }, 600);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimer);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100 && !fadeOut) {
      setFadeOut(true);
      const finishTimer = setTimeout(() => {
        if (typeof onFinish === 'function') {
          onFinish();
        }
      }, 350);
      return () => clearTimeout(finishTimer);
    }
  }, [progress, fadeOut, onFinish]);

  return (
    <div className={`loader-agency ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-inner">
        <div className="loader-brand">
          <span className="brand-dot">●</span> VIRTUAL VELOCITY <span className="brand-sub">/ DIGITAL MARKETING & CREATIVE AGENCY</span>
        </div>
        <div className="loader-counter">
          {String(progress).padStart(3, '0')}<span>%</span>
        </div>
        <div className="loader-bar-line">
          <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
