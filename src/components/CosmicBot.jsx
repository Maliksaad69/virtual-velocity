import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CosmicBot({ isCtaHovered = false }) {
  const mountRef = useRef(null);
  const isHoveredRef = useRef(isCtaHovered);

  useEffect(() => {
    isHoveredRef.current = isCtaHovered;
  }, [isCtaHovered]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = 300;
    const height = 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- MAIN ENGINE GROUP ---
    const engineGroup = new THREE.Group();
    scene.add(engineGroup);

    // 1. Central Singularity Energy Orb (Core Plasma Light)
    const coreGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    engineGroup.add(coreMesh);

    // Core Outer Plasma Shield
    const plasmaGeo = new THREE.SphereGeometry(0.72, 32, 32);
    const plasmaMat = new THREE.MeshBasicMaterial({
      color: 0xec4899,
      transparent: true,
      opacity: 0.65,
    });
    const plasmaMesh = new THREE.Mesh(plasmaGeo, plasmaMat);
    engineGroup.add(plasmaMesh);

    // 2. Turbine Rotor Assembly (Spinning Accelerator Blades)
    const turbineGroup = new THREE.Group();
    const bladeCount = 8;
    const bladeGeo = new THREE.BoxGeometry(0.12, 0.75, 0.04);
    const bladeMat = new THREE.MeshStandardMaterial({
      color: 0x0f051d,
      metalness: 0.95,
      roughness: 0.15,
    });

    for (let i = 0; i < bladeCount; i++) {
      const blade = new THREE.Mesh(bladeGeo, bladeMat);
      const angle = (i / bladeCount) * Math.PI * 2;
      blade.position.set(Math.cos(angle) * 0.95, Math.sin(angle) * 0.95, 0);
      blade.rotation.z = angle + Math.PI / 4;
      turbineGroup.add(blade);
    }
    engineGroup.add(turbineGroup);

    // Chrome Housing Ring
    const housingGeo = new THREE.TorusGeometry(1.05, 0.06, 16, 64);
    const housingMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.9,
      roughness: 0.2,
    });
    const housingMesh = new THREE.Mesh(housingGeo, housingMat);
    engineGroup.add(housingMesh);

    // 3. Counter-Rotating Outer Velocity Vector Ring
    const vectorRingGeo = new THREE.TorusGeometry(1.45, 0.02, 16, 64);
    const vectorRingMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.75,
    });
    const vectorRing = new THREE.Mesh(vectorRingGeo, vectorRingMat);
    vectorRing.rotation.x = Math.PI / 2.8;
    engineGroup.add(vectorRing);

    // Secondary Telemetry Ring
    const outerRingGeo = new THREE.TorusGeometry(1.85, 0.015, 16, 64);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      transparent: true,
      opacity: 0.5,
    });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerRing.rotation.x = -Math.PI / 3.2;
    engineGroup.add(outerRing);

    // 4. Propulsion Vector Jet Emitter (Directing energy down to CTA)
    const jetGeo = new THREE.ConeGeometry(0.45, 0.8, 16, 1, true);
    const jetMat = new THREE.MeshBasicMaterial({
      color: 0xec4899,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
    });
    const jetMesh = new THREE.Mesh(jetGeo, jetMat);
    jetMesh.position.set(0, -1.2, 0);
    jetMesh.rotation.x = Math.PI;
    engineGroup.add(jetMesh);

    // Orbiting Velocity Satellites
    const satGroup = new THREE.Group();
    const satCount = 6;
    for (let i = 0; i < satCount; i++) {
      const satGeo = new THREE.SphereGeometry(0.05, 8, 8);
      const satMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      const angle = (i / satCount) * Math.PI * 2;
      satMesh.position.set(Math.cos(angle) * 1.65, (Math.random() - 0.5) * 0.4, Math.sin(angle) * 1.65);
      satGroup.add(satMesh);
    }
    engineGroup.add(satGroup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xec4899, 3.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x00f0ff, 3.0);
    dirLight2.position.set(-5, -4, 4);
    scene.add(dirLight2);

    // Mouse Tracking State
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
      const isHovered = isHoveredRef.current;

      // Idle Levitation Float
      const floatY = Math.sin(elapsed * 2.2) * 0.15;
      engineGroup.position.y = floatY;

      // Base Turbine Spin & Ring Rotations
      const spinSpeed = isHovered ? 4.5 : 1.2;
      turbineGroup.rotation.z = elapsed * spinSpeed;
      vectorRing.rotation.z = -elapsed * (spinSpeed * 0.6);
      outerRing.rotation.z = elapsed * (spinSpeed * 0.4);
      satGroup.rotation.y = elapsed * 1.5;

      // Jet Pulse Animation
      jetMat.opacity = 0.6 + Math.sin(elapsed * (isHovered ? 15 : 6)) * 0.3;

      if (isHovered) {
        // Warp Drive Activation Mode
        engineGroup.rotation.x += (0.45 - engineGroup.rotation.x) * 0.12;
        engineGroup.rotation.y += (0.35 - engineGroup.rotation.y) * 0.12;
        engineGroup.scale.set(1.18, 1.18, 1.18);

        plasmaMat.color.setHex(0xff00a0);
        plasmaMat.opacity = 0.9;
        vectorRingMat.color.setHex(0xffffff);
      } else {
        // Smooth Cursor Tracking
        const targetRotY = mouseX * 0.6;
        const targetRotX = -mouseY * 0.5;
        engineGroup.rotation.y += (targetRotY - engineGroup.rotation.y) * 0.08;
        engineGroup.rotation.x += (targetRotX - engineGroup.rotation.x) * 0.08;
        engineGroup.scale.set(1.0, 1.0, 1.0);

        plasmaMat.color.setHex(0xec4899);
        plasmaMat.opacity = 0.65;
        vectorRingMat.color.setHex(0x00f0ff);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      plasmaGeo.dispose();
      plasmaMat.dispose();
      bladeGeo.dispose();
      bladeMat.dispose();
      housingGeo.dispose();
      housingMat.dispose();
      vectorRingGeo.dispose();
      vectorRingMat.dispose();
      outerRingGeo.dispose();
      outerRingMat.dispose();
      jetGeo.dispose();
      jetMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '300px',
        height: '300px',
        pointerEvents: 'none',
        display: 'inline-block',
      }}
      aria-hidden="true"
    />
  );
}
