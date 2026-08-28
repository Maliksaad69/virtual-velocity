import { useState, useEffect, useRef } from 'react';
import { Sparkles, Zap } from 'lucide-react';
import * as THREE from 'three';
import './VelocityEngine.css';

const ENGINE_STAGES = [
  { name: 'ATTENTION', color: 0x00f0ff, speed: 1.4, radius: 1.35, tiltX: 0.45, tiltY: 0.25 },
  { name: 'TRAFFIC', color: 0x38bdf8, speed: 1.8, radius: 1.85, tiltX: -0.55, tiltY: 0.45 },
  { name: 'ENGAGEMENT', color: 0x60a5fa, speed: 2.2, radius: 2.35, tiltX: 0.65, tiltY: -0.35 },
  { name: 'CONVERSION', color: 0x8b5cf6, speed: 2.6, radius: 2.85, tiltX: -0.35, tiltY: 0.65 },
  { name: 'GROWTH', color: 0xec4899, speed: 3.0, radius: 3.35, tiltX: 0.25, tiltY: -0.55 },
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

    const width = container.clientWidth || 520;
    const height = container.clientHeight || 520;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- MAIN 3D GYROSCOPE REACTER GROUP ---
    const engine3DGroup = new THREE.Group();
    scene.add(engine3DGroup);

    // 1. Central Geodesic Reactor Wireframe Core
    const coreGeo = new THREE.SphereGeometry(0.5, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x06010a,
      roughness: 0.1,
      metalness: 0.98,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    engine3DGroup.add(coreMesh);

    // Wireframe Icosahedron Energy Cage (Outer Core)
    const cageGeo1 = new THREE.IcosahedronGeometry(0.72, 1);
    const cageMat1 = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const cageMesh1 = new THREE.Mesh(cageGeo1, cageMat1);
    engine3DGroup.add(cageMesh1);

    const cageGeo2 = new THREE.IcosahedronGeometry(0.88, 1);
    const cageMat2 = new THREE.MeshBasicMaterial({
      color: 0xec4899,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const cageMesh2 = new THREE.Mesh(cageGeo2, cageMat2);
    engine3DGroup.add(cageMesh2);

    // 2. Cosmic Ambient Stardust Particle Cloud
    const particleCount = 250;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let p = 0; p < particleCount * 3; p += 3) {
      particlePositions[p] = (Math.random() - 0.5) * 8.5;
      particlePositions[p + 1] = (Math.random() - 0.5) * 8.5;
      particlePositions[p + 2] = (Math.random() - 0.5) * 8.5;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.035,
      transparent: true,
      opacity: 0.6,
    });
    const stardustPoints = new THREE.Points(particleGeo, particleMat);
    engine3DGroup.add(stardustPoints);

    // 3. Build 5 3D Orbital Gyroscope Rings + Satellites + Energy Lasers
    const ringSystems = [];

    ENGINE_STAGES.forEach((stage, idx) => {
      const ringPivot = new THREE.Group();
      ringPivot.rotation.x = stage.tiltX;
      ringPivot.rotation.y = stage.tiltY;
      engine3DGroup.add(ringPivot);

      // Primary Glowing Torus Ring
      const ringGeo = new THREE.TorusGeometry(stage.radius, 0.022, 16, 128);
      const ringMat = new THREE.MeshBasicMaterial({
        color: stage.color,
        transparent: true,
        opacity: 0.75,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringPivot.add(ringMesh);

      // Secondary Dashed Telemetry Ring
      const dashRingGeo = new THREE.TorusGeometry(stage.radius + 0.05, 0.008, 8, 64);
      const dashRingMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.35,
        wireframe: true,
      });
      const dashRingMesh = new THREE.Mesh(dashRingGeo, dashRingMat);
      ringPivot.add(dashRingMesh);

      // 3D Geometric Cyber Satellite (Octahedron / Diamond)
      const satGeo = new THREE.OctahedronGeometry(0.15, 0);
      const satMat = new THREE.MeshStandardMaterial({
        color: stage.color,
        emissive: stage.color,
        emissiveIntensity: 0.8,
        metalness: 0.9,
        roughness: 0.1,
      });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      ringPivot.add(satMesh);

      // Energy Laser Line connecting Core to Satellite
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(stage.radius, 0, 0),
      ]);
      const lineMat = new THREE.LineBasicMaterial({
        color: stage.color,
        transparent: true,
        opacity: 0.45,
      });
      const laserLine = new THREE.Line(lineGeo, lineMat);
      ringPivot.add(laserLine);

      // Orbital Particle Trail
      const trailCount = 14;
      const trailGroup = new THREE.Group();
      for (let t = 0; t < trailCount; t++) {
        const pGeo = new THREE.SphereGeometry(0.028, 8, 8);
        const pMat = new THREE.MeshBasicMaterial({
          color: stage.color,
          transparent: true,
          opacity: (1 - t / trailCount) * 0.6,
        });
        const pMesh = new THREE.Mesh(pGeo, pMat);
        trailGroup.add(pMesh);
      }
      ringPivot.add(trailGroup);

      ringSystems.push({
        pivot: ringPivot,
        satellite: satMesh,
        laser: laserLine,
        laserMat: lineMat,
        trail: trailGroup,
        speed: stage.speed,
        radius: stage.radius,
        color: stage.color,
        ringMat: ringMat,
      });
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00f0ff, 3.5);
    dirLight1.position.set(6, 6, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xec4899, 3.0);
    dirLight2.position.set(-6, -6, 6);
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

      // Mouse Parallax Engine Smooth Tilt
      const targetRotY = mouseX * 0.55;
      const targetRotX = -mouseY * 0.45;
      engine3DGroup.rotation.y += (targetRotY - engine3DGroup.rotation.y) * 0.06;
      engine3DGroup.rotation.x += (targetRotX - engine3DGroup.rotation.x) * 0.06;

      // Rotate Wireframe Cage Core
      const cageSpeed = isSynced ? 4.0 : 1.0;
      cageMesh1.rotation.y = elapsed * 0.6 * cageSpeed;
      cageMesh1.rotation.x = elapsed * 0.4 * cageSpeed;
      cageMesh2.rotation.y = -elapsed * 0.5 * cageSpeed;
      cageMesh2.rotation.z = elapsed * 0.3 * cageSpeed;

      // Stardust Cloud Rotation
      stardustPoints.rotation.y = elapsed * 0.08;

      // Animate Satellites & Lasers along 3D Orbits
      const speedMultiplier = isSynced ? 3.2 : 1.0;

      ringSystems.forEach((sys, idx) => {
        const angle = elapsed * (sys.speed * 0.35) * speedMultiplier;
        const satX = Math.cos(angle) * sys.radius;
        const satY = Math.sin(angle) * sys.radius;

        // Position 3D Satellite
        sys.satellite.position.set(satX, satY, 0);
        sys.satellite.rotation.x = elapsed * 2.0;
        sys.satellite.rotation.y = elapsed * 2.5;

        // Update Dynamic Energy Laser Line to Satellite
        const positions = sys.laser.geometry.attributes.position.array;
        positions[3] = satX;
        positions[4] = satY;
        positions[5] = 0;
        sys.laser.geometry.attributes.position.needsUpdate = true;

        if (isSynced) {
          sys.laserMat.opacity = 0.85 + Math.sin(elapsed * 12) * 0.15;
          sys.laserMat.color.setHex(0xff00a0);
        } else {
          sys.laserMat.opacity = 0.45;
          sys.laserMat.color.setHex(sys.color);
        }

        // Position Orbital Trail Particles
        sys.trail.children.forEach((p, tIdx) => {
          const tAngle = angle - tIdx * 0.07;
          p.position.x = Math.cos(tAngle) * sys.radius;
          p.position.y = Math.sin(tAngle) * sys.radius;
        });

        // Rotate Gyroscope Pivot Ring
        sys.pivot.rotation.z = elapsed * 0.06 * (idx % 2 === 0 ? 1 : -1);
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
      cageGeo1.dispose();
      cageMat1.dispose();
      cageGeo2.dispose();
      cageMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
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

          {/* 3D Interactive Three.js Gyroscope Planetary Reactor */}
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
