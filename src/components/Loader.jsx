import { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Fast progress increment
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 25, 100));
    }, 35);

    // Guaranteed safety timeout to ensure loader NEVER gets stuck
    const safetyTimer = setTimeout(() => {
      setProgress(100);
    }, 800);

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
      }, 300);
      return () => clearTimeout(finishTimer);
    }
  }, [progress, fadeOut, onFinish]);

  return (
    <div className={`loader-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo">
          <div className="loader-vv">
            <span className="loader-v">V</span>
            <span className="loader-v">V</span>
          </div>
          <div className="loader-ring">
            <svg viewBox="0 0 100 100">
              <circle className="loader-ring-bg" cx="50" cy="50" r="45" />
              <circle
                className="loader-ring-fill"
                cx="50"
                cy="50"
                r="45"
                style={{ strokeDashoffset: 283 - (283 * Math.min(progress, 100)) / 100 }}
              />
            </svg>
          </div>
        </div>
        <p className="loader-name">Virtual Velocity</p>
        <div className="loader-bar">
          <div className="loader-bar-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
        </div>
      </div>
    </div>
  );
}
