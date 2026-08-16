import { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(() => onFinish(), 300);
          return 100;
        }
        return p + 25;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onFinish]);

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
