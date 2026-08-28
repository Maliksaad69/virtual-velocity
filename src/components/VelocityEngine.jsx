import { useState, useEffect, useRef } from 'react';
import { Sparkles, Zap } from 'lucide-react';
import * as THREE from 'three';
import './VelocityEngine.css';

const ENGINE_STAGES = [
  { name: 'ATTENTION', color: 0x00f0ff, speed: 1.2, radius: 1.3, tiltX: 0.4, tiltY: 0.2 },
  { name: 'TRAFFIC', color: 0x38bdf8, speed: 1.6, radius: 1.8, tiltX: -0.5, tiltY: 0.4 },
  { name: 'ENGAGEMENT', color: 0x60a5fa, speed: 2.0, radius: 2.3, tiltX: 0.6, tiltY: -0.3 },
  { name: 'CONVERSION', color: 0x8b5cf6, speed: 2.4, radius: 2.8, tiltX: -0.3, tiltY: 0.6 },
  { name: 'GROWTH', color: 0xec4899, speed: 2.8, radius: 3.3, tiltX: 0.2, tiltY: -0.5 },
];

const SPATIAL_METRICS = [
  { title: 'QUALIFIED LEADS', metric: '+214%', pos: 'pos-top-left' },
  { title: 'CONVERSION VELOCITY', metric: '3.8× ROAS', pos: 'pos-top-right' },
  { title: 'REVENUE PROPULSION', metric: '+183%', pos: 'pos-bottom-left' },
  { title: 'CUSTOMER ACQUISITION', metric: '−32% CAC', pos: 'pos-bottom-right' },
];

export default function VelocityEngine() {
  const [synced, setSynced] = useState(false);
  const [enginePower, setEnginePower] = useState(88);
  const mountRef = useRef(null);
  const isSyncedRef = useRef(synced);

  useEffect(() => {
    isSyncedRef.current = synced;
  }, [synced]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- 3D ENGINE SYSTEM GROUP ---
    const engine3DGroup = new THREE.Group();
    scene.add(engine3DGroup);

    // 1. Central 3D Singularity Energy Core Sphere
    const coreGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    engine3DGroup.add(coreMesh);

    // Core Outer Pulsing Atmosphere
    const atmoGeo = new THREE.SphereGeometry(0.75, 32, 32);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.3,
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    engine3DGroup.add(atmoMesh);

    // 2. Build 5 3D Planetary Orbit Rings & Satellites
    const ringSystems = [];

    ENGINE_STAGES.forEach((stage) => {
      const ringPivot = new THREE.Group();
      ringPivot.rotation.x = stage.tiltX;
      ringPivot.rotation.y = stage.tiltY;
      engine3DGroup.add(ringPivot);

      // 3D Metallic Orbit Torus Ring
      const ringGeo = new THREE.TorusGeometry(stage.radius, 0.018, 16, 128);
      const ringMat = new THREE.MeshBasicMaterial({
        color: stage.color,
        transparent: true,
        opacity: 0.65,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringPivot.add(ringMesh);

      // Orbiting 3D Planet Sphere
      const planetGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const planetMat = new THREE.MeshStandardMaterial({
        color: stage.color,
        emissive: stage.color,
        emissiveIntensity: 0.6,
        roughness: 0.2,
      });
      const planetMesh = new THREE.Mesh(planetGeo, planetMat);
      ringPivot.add(planetMesh);

      // Orbital Trail Micro-Particles
      const trailCount = 12;
      const trailGroup = new THREE.Group();
      for (let t = 0; t < trailCount; t++) {
        const pGeo = new THREE.SphereGeometry(0.03, 8, 8);
        const pMat = new THREE.MeshBasicMaterial({
          color: stage.color,
          transparent: true,
          opacity: (1 - t / trailCount) * 0.5,
        });
        const pMesh = new THREE.Mesh(pGeo, pMat);
        trailGroup.add(pMesh);
      }
      ringPivot.add(trailGroup);

      ringSystems.push({
        pivot: ringPivot,
        planet: planetMesh,
        trail: trailGroup,
        speed: stage.speed,
        radius: stage.radius,
        color: stage.color,
        atmoMat: ringMat,
      });
    });

    // Ambient & Directional Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00f0ff, 3.0);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xec4899, 2.5);
    dirLight2.position.set(-5, -5, 5);
    scene.add(dirLight2);

    // Mouse Tracking Parallax
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX = (e.clientX - cx) / (window.innerWidth / 2);
      mouseY = (e.clientY - cy) / (window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const isSynced = isSyncedRef.current;

      // Mouse Parallax 3D Engine Rotation
      const targetRotY = mouseX * 0.5;
      const targetRotX = -mouseY * 0.4;
      engine3DGroup.rotation.y += (targetRotY - engine3DGroup.rotation.y) * 0.06;
      engine3DGroup.rotation.x += (targetRotX - engine3DGroup.rotation.x) * 0.06;

      // Core Pulse Animation
      const pulseScale = 1.0 + Math.sin(elapsed * (isSynced ? 6.0 : 2.5)) * 0.1;
      coreMesh.scale.set(pulseScale, pulseScale, pulseScale);
      atmoMesh.scale.set(pulseScale * 1.15, pulseScale * 1.15, pulseScale * 1.15);
      atmoMat.opacity = 0.3 + Math.sin(elapsed * 4.0) * 0.15;

      // Animate 3D Orbital Planets & Trails along 3D Ring Curves
      const speedMultiplier = isSynced ? 3.0 : 1.0;

      ringSystems.forEach((sys, idx) => {
        const angle = elapsed * (sys.speed * 0.4) * speedMultiplier;
        sys.planet.position.x = Math.cos(angle) * sys.radius;
        sys.planet.position.y = Math.sin(angle) * sys.radius;

        // Position trail particles behind planet along orbit curve
        sys.trail.children.forEach((p, tIdx) => {
          const tAngle = angle - (tIdx * 0.08);
          p.position.x = Math.cos(tAngle) * sys.radius;
          p.position.y = Math.sin(tAngle) * sys.radius;
        });

        // Rotate individual orbit pivots on Z-axis
        sys.pivot.rotation.z = elapsed * 0.05 * (idx % 2 === 0 ? 1 : -1);
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      atmoGeo.dispose();
      atmoMat.dispose();
    };
  }, []);

  const toggleSynchronization = () => {
    setSynced((prev) => !prev);
    setEnginePower((prev) => (prev === 100 ? 88 : 100));
  };

  return (
    <section id="engine" className="velocity-engine-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="label">
            <Sparkles size={14} className="label-icon" />
            <span>03 • THE VELOCITY ENGINE</span>
          </div>
          <h2 className="heading-xl">
            <span className="heading-main">ACCELERATION</span> <br />
            <span className="heading-accent">ENGINE.</span>
          </h2>
          <p className="text-lg">
            Streams of market attention traveling through five 3D orbital stages into full-velocity growth.
          </p>
        </div>

        {/* Spatial Machine Environment */}
        <div className="spatial-engine-stage">
          {/* Spatial Overdrive Controls */}
          <div className="spatial-engine-controls">
            <div className="engine-status-tag">
              [ SYSTEM STATUS: {synced ? 'HYPERSPEED OVERDRIVE (100%)' : 'ACCELERATION ACTIVE'} ]
            </div>

            <button
              onClick={toggleSynchronization}
              className="btn-editorial-primary engine-toggle-btn"
              data-cursor="LAUNCH"
            >
              <span>{synced ? 'DISENGAGE OVERDRIVE' : 'ACCELERATE STAGES →'}</span>
            </button>
          </div>

          {/* Floating Spatial Metrics directly in Space */}
          <div className="spatial-metrics-layer">
            {SPATIAL_METRICS.map((item, i) => (
              <div key={i} className={`spatial-floating-metric ${item.pos}`}>
                <span className="spatial-metric-number">{item.metric}</span>
                <span className="spatial-metric-title">{item.title}</span>
              </div>
            ))}
          </div>

          {/* 3D Interactive Three.js Planetary Orbit Visualizer Canvas */}
          <div className="spatial-machine-visualizer">
            {/* Embedded 3D Canvas Mount */}
            <div ref={mountRef} className="three-planetary-canvas-mount" />

            {/* Central Core Power HUD Overlay */}
            <div className={`machine-core ${synced ? 'supercharged' : ''}`}>
              <Zap size={26} className="core-zap-icon" />
              <span className="core-power-label">{enginePower}% VELOCITY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
