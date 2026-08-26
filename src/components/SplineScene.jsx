import React, { useState, useEffect, Suspense, lazy } from 'react';
import './SplineScene.css';

const Spline = lazy(() =>
  import('@splinetool/react-spline').catch((err) => {
    console.warn('Spline module failed to load:', err);
    return { default: () => null };
  })
);

class SplineErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.warn('Spline 3D Scene Runtime Error intercepted:', error?.message);
    if (this.props.onError) {
      this.props.onError();
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default function SplineScene({
  sceneUrl = 'https://prod.spline.design/6Wnt13KfuhiStPhG/scene.splinecode',
  className = '',
  height = '100%',
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // 3s fallback timer if spline asset network fetch stutters
    const timeoutId = setTimeout(() => {
      if (!loaded) {
        setError(true);
      }
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [loaded]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  if (error) {
    return (
      <div className={`spline-container ${className}`} style={{ height }}>
        <div className="spline-fallback">
          <div className="fallback-ring" />
        </div>
      </div>
    );
  }

  return (
    <div className={`spline-container ${className}`} style={{ height }}>
      {!loaded && (
        <div className="spline-loader">
          <div className="spline-spinner" />
        </div>
      )}

      <SplineErrorBoundary
        onError={handleError}
        fallback={
          <div className="spline-fallback">
            <div className="fallback-ring" />
          </div>
        }
      >
        <Suspense fallback={null}>
          <Spline
            scene={sceneUrl}
            onLoad={handleLoad}
            onError={handleError}
            style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
          />
        </Suspense>
      </SplineErrorBoundary>
    </div>
  );
}
