import { useState, Suspense, lazy } from 'react';
import './SplineScene.css';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function SplineScene({
  sceneUrl = 'https://prod.spline.design/6Wnt13KfuhiStPhG/scene.splinecode',
  className = '',
  height = '100%',
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div className={`spline-container ${className}`} style={{ height }}>
      {!loaded && !error && (
        <div className="spline-loader">
          <div className="spline-spinner" />
          <span className="spline-loading-text">Loading 3D Spline Scene...</span>
        </div>
      )}

      {!error ? (
        <Suspense fallback={null}>
          <Spline
            scene={sceneUrl}
            onLoad={handleLoad}
            onError={handleError}
            style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
          />
        </Suspense>
      ) : (
        <div className="spline-fallback">
          <div className="fallback-ring" />
        </div>
      )}
    </div>
  );
}
