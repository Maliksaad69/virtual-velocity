import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { scrollStore } from '../utils/scrollStore';

export default function PlanetaryCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    scrollStore.init();

    let width = window.innerWidth;
    let height = window.innerHeight;
    const isMobile = width < 768 || ('ontouchstart' in window);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isMobile,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      console.warn('WebGL init fallback:', e);
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.018);

    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);

    renderer.setSize(width, height);
    renderer.setPixelRatio(isMobile ? 1.0 : Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.85;
    container.appendChild(renderer.domElement);

    // --- 01. PROCEDURAL 3D WORMHOLE SPLINE PATH ---
    const splinePoints = [
      new THREE.Vector3(0, 0, 22),
      new THREE.Vector3(0, 0, 8),
      new THREE.Vector3(0, 0, -15),
      new THREE.Vector3(-4.5, 3.0, -45),
      new THREE.Vector3(5.0, -3.8, -80),
      new THREE.Vector3(-3.5, 2.2, -118),
      new THREE.Vector3(0, 0, -160),
    ];

    const wormholeCurve = new THREE.CatmullRomCurve3(splinePoints);

    // --- 02. 3D WORMHOLE TUNNEL MESH & DARK MAGENTA GRID ---
    const tubeSegments = isMobile ? 120 : 220;
    const tubeGeo = new THREE.TubeGeometry(wormholeCurve, tubeSegments, 4.5, isMobile ? 16 : 32, false);

    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 256, 256);

    ctx.strokeStyle = '#ec4899';
    ctx.lineWidth = 1.0;
    for (let x = 0; x <= 256; x += 16) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 256);
      ctx.stroke();
    }
    ctx.strokeStyle = '#831843';
    ctx.lineWidth = 0.7;
    for (let y = 0; y <= 256; y += 16) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(256, y);
      ctx.stroke();
    }

    const tubeTexture = new THREE.CanvasTexture(canvas);
    tubeTexture.wrapS = THREE.RepeatWrapping;
    tubeTexture.wrapT = THREE.RepeatWrapping;
    tubeTexture.repeat.set(16, 60);

    const tubeMat = new THREE.MeshBasicMaterial({
      map: tubeTexture,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.45,
    });

    const wormholeTube = new THREE.Mesh(tubeGeo, tubeMat);
    scene.add(wormholeTube);

    // Wireframe Outer Layer
    const tubeWireMat = new THREE.MeshBasicMaterial({
      color: 0xec4899,
      side: THREE.BackSide,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });
    const tubeWireMesh = new THREE.Mesh(tubeGeo, tubeWireMat);
    scene.add(tubeWireMesh);

    // --- 03. METEORITE RAIN SYSTEM ---
    const meteorCount = isMobile ? 30 : 70;
    const meteorGeo = new THREE.BufferGeometry();
    const meteorPos = new Float32Array(meteorCount * 6);
    const meteorVelocities = new Float32Array(meteorCount * 3);
    const meteorLengths = new Float32Array(meteorCount);

    for (let i = 0; i < meteorCount; i++) {
      const rx = (Math.random() - 0.5) * 70;
      const ry = Math.random() * 60 - 10;
      const rz = (Math.random() - 0.5) * 70;

      const len = 1.2 + Math.random() * 2.8;
      meteorLengths[i] = len;

      meteorPos[i * 6] = rx;
      meteorPos[i * 6 + 1] = ry;
      meteorPos[i * 6 + 2] = rz;

      meteorPos[i * 6 + 3] = rx + len * 0.2;
      meteorPos[i * 6 + 4] = ry + len;
      meteorPos[i * 6 + 5] = rz + len * 0.15;

      meteorVelocities[i * 3] = -(0.04 + Math.random() * 0.08);
      meteorVelocities[i * 3 + 1] = -(0.2 + Math.random() * 0.3);
      meteorVelocities[i * 3 + 2] = -(0.03 + Math.random() * 0.05);
    }

    meteorGeo.setAttribute('position', new THREE.BufferAttribute(meteorPos, 3));

    const meteorMat = new THREE.LineBasicMaterial({
      color: 0xec4899,
      transparent: true,
      opacity: 0.45,
      linewidth: 1.5,
    });

    const meteorRainLines = new THREE.LineSegments(meteorGeo, meteorMat);
    scene.add(meteorRainLines);

    // --- 04. HERO SECTION BLACK HOLE ENGINE ---
    const blackHoleGroup = new THREE.Group();
    blackHoleGroup.position.set(0, 0, 11.5);
    scene.add(blackHoleGroup);

    // 4.1 Pitch-Black Event Horizon Void Core
    const eventHorizonGeo = new THREE.SphereGeometry(3.0, isMobile ? 32 : 64, isMobile ? 32 : 64);
    const eventHorizonMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const eventHorizonMesh = new THREE.Mesh(eventHorizonGeo, eventHorizonMat);
    blackHoleGroup.add(eventHorizonMesh);

    // 4.2 Accretion Disk Canvas Texture
    const accretionCanvas = document.createElement('canvas');
    accretionCanvas.width = isMobile ? 512 : 1024;
    accretionCanvas.height = isMobile ? 512 : 1024;
    const actx = accretionCanvas.getContext('2d');
    
    const cx = accretionCanvas.width / 2;
    const cy = accretionCanvas.height / 2;
    actx.fillStyle = '#000000';
    actx.fillRect(0, 0, accretionCanvas.width, accretionCanvas.height);

    const grad = actx.createRadialGradient(cx, cy, cx * 0.28, cx, cy, cx * 0.98);
    grad.addColorStop(0.0, 'rgba(255, 255, 255, 1.0)');
    grad.addColorStop(0.12, 'rgba(236, 72, 153, 0.9)');
    grad.addColorStop(0.35, 'rgba(192, 132, 252, 0.6)');
    grad.addColorStop(0.60, 'rgba(131, 24, 67, 0.35)');
    grad.addColorStop(0.85, 'rgba(88, 28, 135, 0.15)');
    grad.addColorStop(1.0, 'transparent');

    actx.fillStyle = grad;
    actx.fillRect(0, 0, accretionCanvas.width, accretionCanvas.height);

    for (let r = cx * 0.32; r < cx * 0.94; r += 16) {
      actx.beginPath();
      actx.arc(cx, cy, r, 0, Math.PI * 2);
      actx.strokeStyle = r % 32 === 0 ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.25)';
      actx.lineWidth = 6;
      actx.stroke();
    }

    const accretionTex = new THREE.CanvasTexture(accretionCanvas);
    const accretionGeo = new THREE.RingGeometry(3.05, 11.8, isMobile ? 64 : 128);
    const accretionMat = new THREE.MeshBasicMaterial({
      map: accretionTex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7,
      blending: THREE.NormalBlending,
    });
    const accretionMesh = new THREE.Mesh(accretionGeo, accretionMat);
    accretionMesh.rotation.x = Math.PI / 2.4;
    accretionMesh.rotation.y = -Math.PI / 9;
    blackHoleGroup.add(accretionMesh);

    // 4.3 Gravitational Lensing Arches
    const topLensGeo = new THREE.TorusGeometry(3.3, 0.45, 16, isMobile ? 64 : 128, Math.PI);
    const topLensMat = new THREE.MeshBasicMaterial({
      map: accretionTex,
      transparent: true,
      opacity: 0.55,
      blending: THREE.NormalBlending,
    });
    const topLensMesh = new THREE.Mesh(topLensGeo, topLensMat);
    topLensMesh.rotation.x = Math.PI / 2;
    topLensMesh.rotation.z = Math.PI;
    blackHoleGroup.add(topLensMesh);

    const bottomLensMesh = new THREE.Mesh(topLensGeo, topLensMat);
    bottomLensMesh.rotation.x = -Math.PI / 2;
    blackHoleGroup.add(bottomLensMesh);

    // 4.4 Photon Ring
    const einsteinGeo = new THREE.TorusGeometry(3.06, 0.08, 16, isMobile ? 64 : 128);
    const einsteinMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.85,
    });
    const einsteinRing = new THREE.Mesh(einsteinGeo, einsteinMat);
    blackHoleGroup.add(einsteinRing);

    // 4.5 Cosmic Cloud Sprites
    const nebulaCount = isMobile ? 8 : 20;
    const nebulaGroup = new THREE.Group();

    for (let i = 0; i < nebulaCount; i++) {
      const nebCanvas = document.createElement('canvas');
      nebCanvas.width = 64;
      nebCanvas.height = 64;
      const nctx = nebCanvas.getContext('2d');
      const ngrad = nctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      ngrad.addColorStop(0, 'rgba(236, 72, 153, 0.15)');
      ngrad.addColorStop(1, 'transparent');
      nctx.fillStyle = ngrad;
      nctx.fillRect(0, 0, 64, 64);

      const nebTex = new THREE.CanvasTexture(nebCanvas);
      const nebMat = new THREE.SpriteMaterial({
        map: nebTex,
        transparent: true,
        opacity: 0.25,
      });
      const sprite = new THREE.Sprite(nebMat);

      const angle = Math.random() * Math.PI * 2;
      const dist = 6.0 + Math.random() * 16.0;
      sprite.position.set(
        Math.cos(angle) * dist,
        (Math.random() - 0.5) * 8,
        Math.sin(angle) * dist
      );
      const scale = 8.0 + Math.random() * 12.0;
      sprite.scale.set(scale, scale, 1);
      nebulaGroup.add(sprite);
    }
    blackHoleGroup.add(nebulaGroup);

    // 4.6 Gravitational Particle Inflow System
    const pullParticleCount = isMobile ? 450 : 1200;
    const pullGeo = new THREE.BufferGeometry();
    const pullPos = new Float32Array(pullParticleCount * 3);
    const pullAngles = new Float32Array(pullParticleCount);
    const pullRadii = new Float32Array(pullParticleCount);
    const pullSpeeds = new Float32Array(pullParticleCount);
    const pullYOffsets = new Float32Array(pullParticleCount);
    const pullColors = new Float32Array(pullParticleCount * 3);

    const pinkColor = new THREE.Color(0xec4899);
    const whiteColor = new THREE.Color(0xffffff);
    const purpleColor = new THREE.Color(0xc084fc);

    for (let i = 0; i < pullParticleCount; i++) {
      const radius = 3.5 + Math.random() * 14.5;
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.015 + Math.random() * 0.03;
      const yOffset = (Math.random() - 0.5) * 4.0;

      pullRadii[i] = radius;
      pullAngles[i] = angle;
      pullSpeeds[i] = speed;
      pullYOffsets[i] = yOffset;

      pullPos[i * 3] = radius * Math.cos(angle);
      pullPos[i * 3 + 1] = yOffset;
      pullPos[i * 3 + 2] = radius * Math.sin(angle);

      const randVal = Math.random();
      const randColor = randVal > 0.6 ? pinkColor : (randVal > 0.3 ? whiteColor : purpleColor);
      pullColors[i * 3] = randColor.r;
      pullColors[i * 3 + 1] = randColor.g;
      pullColors[i * 3 + 2] = randColor.b;
    }

    pullGeo.setAttribute('position', new THREE.BufferAttribute(pullPos, 3));
    pullGeo.setAttribute('color', new THREE.BufferAttribute(pullColors, 3));

    const pullMat = new THREE.PointsMaterial({
      size: isMobile ? 0.14 : 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
    });

    const pullParticles = new THREE.Points(pullGeo, pullMat);
    blackHoleGroup.add(pullParticles);

    // --- 05. AMBIENT LIGHTING ---
    scene.add(new THREE.AmbientLight(0x000000, 1.0));

    // --- 06. MOUSE & TOUCH PARALLAX ---
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 1.2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 1.2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Battery Saver Listener
    let isPaused = false;
    const handleVisibilityChange = () => {
      isPaused = document.visibilityState === 'hidden';
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // --- 07. ANIMATION RAF LOOP ---
    let animId;
    const clock = new THREE.Clock();
    let smoothScrollT = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (isPaused) return;

      const elapsed = clock.getElapsedTime();

      const { progress: rawProgress } = scrollStore.getState();

      smoothScrollT += (rawProgress - smoothScrollT) * 0.08;

      // AUTOMATIC CTA FOCUS ZONE BACKGROUND DIMMING (Rules #12, #14, #19)
      const ctaQuietFactor = Math.max(0.12, 1.0 - Math.max(0, (smoothScrollT - 0.78) / 0.15));
      tubeMat.opacity = 0.45 * ctaQuietFactor;
      tubeWireMat.opacity = 0.1 * ctaQuietFactor;
      meteorMat.opacity = 0.45 * ctaQuietFactor;

      // ANIMATE METEORITE RAIN
      const mPos = meteorGeo.attributes.position.array;
      for (let i = 0; i < meteorCount; i++) {
        const len = meteorLengths[i];

        mPos[i * 6] += meteorVelocities[i * 3] * ctaQuietFactor;
        mPos[i * 6 + 1] += meteorVelocities[i * 3 + 1] * ctaQuietFactor;
        mPos[i * 6 + 2] += meteorVelocities[i * 3 + 2] * ctaQuietFactor;

        mPos[i * 6 + 3] = mPos[i * 6] + len * 0.2;
        mPos[i * 6 + 4] = mPos[i * 6 + 1] + len;
        mPos[i * 6 + 5] = mPos[i * 6 + 2] + len * 0.15;

        if (mPos[i * 6 + 1] < -35) {
          const rx = (Math.random() - 0.5) * 70;
          const ry = 40 + Math.random() * 15;
          const rz = (Math.random() - 0.5) * 70;

          mPos[i * 6] = rx;
          mPos[i * 6 + 1] = ry;
          mPos[i * 6 + 2] = rz;

          mPos[i * 6 + 3] = rx + len * 0.2;
          mPos[i * 6 + 4] = ry + len;
          mPos[i * 6 + 5] = rz + len * 0.15;
        }
      }
      meteorGeo.attributes.position.needsUpdate = true;

      // FLY-THROUGH CAMERA MOTION ALONG SPLINE
      const splineT = Math.min(smoothScrollT * 0.98, 0.98);
      const camPoint = wormholeCurve.getPointAt(splineT);
      const lookPoint = wormholeCurve.getPointAt(Math.min(splineT + 0.04, 1.0));
      const tangent = wormholeCurve.getTangentAt(splineT);

      const targetX = camPoint.x + mouseX * 0.4;
      const targetY = camPoint.y - mouseY * 0.4;
      const targetZ = camPoint.z;

      camera.position.x += (targetX - camera.position.x) * 0.1;
      camera.position.y += (targetY - camera.position.y) * 0.1;
      camera.position.z += (targetZ - camera.position.z) * 0.1;

      camera.lookAt(lookPoint.x + mouseX * 0.2, lookPoint.y - mouseY * 0.2, lookPoint.z);

      const rollAngle = tangent.x * 0.15;
      camera.rotation.z += (rollAngle - camera.rotation.z) * 0.08;

      // BLACK HOLE SMOOTH DISSOLVE
      const blackHoleFade = Math.max(0, Math.min(1, 1 - (smoothScrollT - 0.18) / 0.12));

      if (blackHoleFade > 0.001) {
        blackHoleGroup.visible = true;

        const p = Math.min(smoothScrollT / 0.25, 1.0);

        accretionMesh.rotation.z = elapsed * 0.4 + p * Math.PI;
        topLensMesh.rotation.z = Math.PI - elapsed * 0.15;
        bottomLensMesh.rotation.z = elapsed * 0.15;
        nebulaGroup.rotation.y = elapsed * 0.05;

        blackHoleGroup.scale.set(1.0 + p * 2.5, 1.0 + p * 2.5, 1.0 + p * 2.5);

        accretionMat.opacity = 0.7 * blackHoleFade;
        topLensMat.opacity = 0.55 * blackHoleFade;
        einsteinMat.opacity = 0.85 * blackHoleFade;
        pullMat.opacity = 0.45 * blackHoleFade;

        camera.fov = 65 - p * 14;
        camera.updateProjectionMatrix();

        // GRAVITATIONAL SPIRAL INFLOW PHYSICS
        const pPos = pullGeo.attributes.position.array;
        for (let i = 0; i < pullParticleCount; i++) {
          pullRadii[i] -= pullSpeeds[i];
          pullAngles[i] += 0.02 + (15.0 / (pullRadii[i] + 1.0)) * 0.003;

          if (pullRadii[i] < 3.05) {
            pullRadii[i] = 14.0 + Math.random() * 4.0;
          }

          pPos[i * 3] = pullRadii[i] * Math.cos(pullAngles[i]);
          pPos[i * 3 + 1] = pullYOffsets[i];
          pPos[i * 3 + 2] = pullRadii[i] * Math.sin(pullAngles[i]);
        }
        pullGeo.attributes.position.needsUpdate = true;
      } else {
        blackHoleGroup.visible = false;
        if (camera.fov !== 65) {
          camera.fov = 65;
          camera.updateProjectionMatrix();
        }
      }

      tubeTexture.offset.y = -elapsed * (0.25 * ctaQuietFactor) - smoothScrollT * 6.0;
      tubeWireMesh.rotation.z = elapsed * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      tubeGeo.dispose();
      tubeMat.dispose();
      tubeWireMat.dispose();
      tubeTexture.dispose();
      meteorGeo.dispose();
      meteorMat.dispose();
      eventHorizonGeo.dispose();
      eventHorizonMat.dispose();
      accretionGeo.dispose();
      accretionMat.opacity;
      accretionTex.dispose();
      topLensGeo.dispose();
      topLensMat.dispose();
      einsteinGeo.dispose();
      einsteinMat.dispose();
      pullGeo.dispose();
      pullMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
}
