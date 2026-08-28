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

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      console.warn('WebGL init fallback:', e);
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.02);

    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.85; // Muted exposure for zero glare & high text legibility
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
    const tubeGeo = new THREE.TubeGeometry(wormholeCurve, 220, 4.5, 32, false);

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 512, 512);

    ctx.strokeStyle = '#ec4899';
    ctx.lineWidth = 1.0;
    for (let x = 0; x <= 512; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 512);
      ctx.stroke();
    }
    ctx.strokeStyle = '#831843';
    ctx.lineWidth = 0.7;
    for (let y = 0; y <= 512; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
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

    // --- 03. METEORITE RAIN SYSTEM (METEORS RAINING DOWN THROUGH SPACE) ---
    const meteorCount = 120;
    const meteorGeo = new THREE.BufferGeometry();
    const meteorPos = new Float32Array(meteorCount * 6); // 2 vertices per line streak
    const meteorVelocities = new Float32Array(meteorCount * 3);
    const meteorLengths = new Float32Array(meteorCount);

    for (let i = 0; i < meteorCount; i++) {
      const rx = (Math.random() - 0.5) * 60;
      const ry = Math.random() * 50 + 10;
      const rz = (Math.random() - 0.5) * 60;

      const len = 1.5 + Math.random() * 3.5;
      meteorLengths[i] = len;

      // Line start (head)
      meteorPos[i * 6] = rx;
      meteorPos[i * 6 + 1] = ry;
      meteorPos[i * 6 + 2] = rz;

      // Line end (tail)
      meteorPos[i * 6 + 3] = rx + len * 0.3;
      meteorPos[i * 6 + 4] = ry + len;
      meteorPos[i * 6 + 5] = rz + len * 0.2;

      // Downward velocity
      meteorVelocities[i * 3] = -(0.1 + Math.random() * 0.15); // X drift
      meteorVelocities[i * 3 + 1] = -(0.4 + Math.random() * 0.6); // Y rain speed
      meteorVelocities[i * 3 + 2] = -(0.08 + Math.random() * 0.1); // Z drift
    }

    meteorGeo.setAttribute('position', new THREE.BufferAttribute(meteorPos, 3));

    const meteorMat = new THREE.LineBasicMaterial({
      color: 0xec4899,
      transparent: true,
      opacity: 0.7,
      linewidth: 2,
    });

    const meteorRainLines = new THREE.LineSegments(meteorGeo, meteorMat);
    scene.add(meteorRainLines);

    // --- 04. HERO SECTION BLACK HOLE ENGINE ---
    const blackHoleGroup = new THREE.Group();
    blackHoleGroup.position.set(0, 0, 11.5);
    scene.add(blackHoleGroup);

    // 4.1 Pitch-Black Event Horizon Void Core
    const eventHorizonGeo = new THREE.SphereGeometry(3.0, 64, 64);
    const eventHorizonMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
    });
    const eventHorizonMesh = new THREE.Mesh(eventHorizonGeo, eventHorizonMat);
    blackHoleGroup.add(eventHorizonMesh);

    // 4.2 Multi-Stripe Accretion Disk Canvas Texture
    const accretionCanvas = document.createElement('canvas');
    accretionCanvas.width = 1024;
    accretionCanvas.height = 1024;
    const actx = accretionCanvas.getContext('2d');
    
    const cx = 512, cy = 512;
    actx.fillStyle = '#000000';
    actx.fillRect(0, 0, 1024, 1024);

    const ringColors = [
      '#ec4899', '#ffffff', '#be185d', '#9d174d', '#831843', '#581c87',
      '#000000', '#db2777', '#ffffff', '#ec4899', '#831843'
    ];

    for (let r = 500; r > 130; r -= 10) {
      actx.beginPath();
      actx.arc(cx, cy, r, 0, Math.PI * 2);
      const colorIdx = Math.floor((r / 500) * ringColors.length) % ringColors.length;
      actx.fillStyle = ringColors[colorIdx];
      actx.fill();
    }

    for (let i = 0; i < 360; i += 4) {
      const angle = (i * Math.PI) / 180;
      actx.beginPath();
      actx.moveTo(cx + Math.cos(angle) * 140, cy + Math.sin(angle) * 140);
      actx.lineTo(cx + Math.cos(angle + 0.45) * 495, cy + Math.sin(angle + 0.45) * 495);
      actx.strokeStyle = 'rgba(0,0,0,0.55)';
      actx.lineWidth = 5;
      actx.stroke();
    }

    const accretionTex = new THREE.CanvasTexture(accretionCanvas);
    const accretionGeo = new THREE.RingGeometry(3.05, 11.8, 128);
    const accretionMat = new THREE.MeshBasicMaterial({
      map: accretionTex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.55,
      blending: THREE.NormalBlending,
    });
    const accretionMesh = new THREE.Mesh(accretionGeo, accretionMat);
    accretionMesh.rotation.x = Math.PI / 2.4;
    accretionMesh.rotation.y = -Math.PI / 9;
    blackHoleGroup.add(accretionMesh);

    // 4.3 Gravitational Lensing Arches
    const topLensGeo = new THREE.TorusGeometry(3.3, 0.45, 32, 128, Math.PI);
    const topLensMat = new THREE.MeshBasicMaterial({
      map: accretionTex,
      transparent: true,
      opacity: 0.5,
      blending: THREE.NormalBlending,
    });
    const topLensMesh = new THREE.Mesh(topLensGeo, topLensMat);
    topLensMesh.rotation.x = Math.PI / 2;
    topLensMesh.rotation.z = Math.PI;
    blackHoleGroup.add(topLensMesh);

    const bottomLensMesh = new THREE.Mesh(topLensGeo, topLensMat);
    bottomLensMesh.rotation.x = -Math.PI / 2;
    blackHoleGroup.add(bottomLensMesh);

    // 4.4 Intense Photon Core Ring
    const einsteinGeo = new THREE.TorusGeometry(3.06, 0.09, 32, 128);
    const einsteinMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.75,
    });
    const einsteinRing = new THREE.Mesh(einsteinGeo, einsteinMat);
    blackHoleGroup.add(einsteinRing);

    // 4.5 Soft Cosmic Dust / Cloud Particles
    const nebulaCount = 35;
    const nebulaGroup = new THREE.Group();

    for (let i = 0; i < nebulaCount; i++) {
      const nebCanvas = document.createElement('canvas');
      nebCanvas.width = 128;
      nebCanvas.height = 128;
      const nctx = nebCanvas.getContext('2d');
      const ngrad = nctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      ngrad.addColorStop(0, 'rgba(236, 72, 153, 0.18)');
      ngrad.addColorStop(1, 'transparent');
      nctx.fillStyle = ngrad;
      nctx.fillRect(0, 0, 128, 128);

      const nebTex = new THREE.CanvasTexture(nebCanvas);
      const nebMat = new THREE.SpriteMaterial({
        map: nebTex,
        transparent: true,
        opacity: 0.3,
      });
      const sprite = new THREE.Sprite(nebMat);

      const angle = Math.random() * Math.PI * 2;
      const dist = 6.0 + Math.random() * 18.0;
      sprite.position.set(
        Math.cos(angle) * dist,
        (Math.random() - 0.5) * 10,
        Math.sin(angle) * dist
      );
      const scale = 8.0 + Math.random() * 14.0;
      sprite.scale.set(scale, scale, 1);
      nebulaGroup.add(sprite);
    }
    blackHoleGroup.add(nebulaGroup);

    // 4.6 Gravitational Particle Inflow System
    const pullParticleCount = 3000;
    const pullGeo = new THREE.BufferGeometry();
    const pullPos = new Float32Array(pullParticleCount * 3);
    const pullVelocities = new Float32Array(pullParticleCount);
    const pullColors = new Float32Array(pullParticleCount * 3);

    const pinkColor = new THREE.Color(0xec4899);
    const whiteColor = new THREE.Color(0xffffff);
    const purpleColor = new THREE.Color(0x831843);

    for (let i = 0; i < pullParticleCount; i++) {
      const radius = 4.0 + Math.random() * 16.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.9;

      pullPos[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      pullPos[i * 3 + 1] = radius * Math.sin(phi);
      pullPos[i * 3 + 2] = 11.5 + radius * Math.sin(theta) * Math.cos(phi);

      pullVelocities[i] = 0.03 + Math.random() * 0.05;

      const randVal = Math.random();
      const randColor = randVal > 0.6 ? pinkColor : (randVal > 0.3 ? whiteColor : purpleColor);
      pullColors[i * 3] = randColor.r;
      pullColors[i * 3 + 1] = randColor.g;
      pullColors[i * 3 + 2] = randColor.b;
    }

    pullGeo.setAttribute('position', new THREE.BufferAttribute(pullPos, 3));
    pullGeo.setAttribute('color', new THREE.BufferAttribute(pullColors, 3));

    const pullMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
    });

    const pullParticles = new THREE.Points(pullGeo, pullMat);
    scene.add(pullParticles);

    // --- 05. AMBIENT ATMOSPHERIC LIGHTING ---
    scene.add(new THREE.AmbientLight(0x000000, 1.0));

    // --- 06. MOUSE PARALLAX & EVENT LISTENERS ---
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 1.5;
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

    // --- 07. ANIMATION RAF LOOP ---
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      const { progress: scrollPercent, velocity: scrollVel } = scrollStore.getState();

      // ANIMATE METEORITE RAIN
      const mPos = meteorGeo.attributes.position.array;
      for (let i = 0; i < meteorCount; i++) {
        const len = meteorLengths[i];

        mPos[i * 6] += meteorVelocities[i * 3];     // head X
        mPos[i * 6 + 1] += meteorVelocities[i * 3 + 1]; // head Y
        mPos[i * 6 + 2] += meteorVelocities[i * 3 + 2]; // head Z

        mPos[i * 6 + 3] = mPos[i * 6] + len * 0.3; // tail X
        mPos[i * 6 + 4] = mPos[i * 6 + 1] + len;   // tail Y
        mPos[i * 6 + 5] = mPos[i * 6 + 2] + len * 0.2; // tail Z

        // Reset meteor when it passes bottom
        if (mPos[i * 6 + 1] < -30) {
          const rx = (Math.random() - 0.5) * 60;
          const ry = 35 + Math.random() * 15;
          const rz = (Math.random() - 0.5) * 60;

          mPos[i * 6] = rx;
          mPos[i * 6 + 1] = ry;
          mPos[i * 6 + 2] = rz;

          mPos[i * 6 + 3] = rx + len * 0.3;
          mPos[i * 6 + 4] = ry + len;
          mPos[i * 6 + 5] = rz + len * 0.2;
        }
      }
      meteorGeo.attributes.position.needsUpdate = true;

      // FLY-THROUGH CAMERA MOTION ALONG SPLINE
      const splineT = Math.min(scrollPercent * 0.98, 0.98);
      const camPoint = wormholeCurve.getPointAt(splineT);
      const lookPoint = wormholeCurve.getPointAt(Math.min(splineT + 0.04, 1.0));
      const tangent = wormholeCurve.getTangentAt(splineT);

      // Smooth Lerp Position
      const targetX = camPoint.x + mouseX * 0.5;
      const targetY = camPoint.y - mouseY * 0.5;
      const targetZ = camPoint.z;

      camera.position.x += (targetX - camera.position.x) * 0.15;
      camera.position.y += (targetY - camera.position.y) * 0.15;
      camera.position.z += (targetZ - camera.position.z) * 0.15;

      camera.lookAt(lookPoint.x + mouseX * 0.25, lookPoint.y - mouseY * 0.25, lookPoint.z);

      const rollAngle = tangent.x * 0.2;
      camera.rotation.z += (rollAngle - camera.rotation.z) * 0.1;

      // HERO SECTION BLACK HOLE RINGS & GRAVITATIONAL PULL
      if (scrollPercent < 0.28) {
        blackHoleGroup.visible = true;
        pullParticles.visible = true;

        const p = scrollPercent / 0.28;

        accretionMesh.rotation.z = elapsed * 0.75 + p * Math.PI;
        topLensMesh.rotation.z = Math.PI - elapsed * 0.25;
        bottomLensMesh.rotation.z = elapsed * 0.25;
        nebulaGroup.rotation.y = elapsed * 0.1;

        camera.fov = 65 - p * 16;
        camera.updateProjectionMatrix();

        blackHoleGroup.scale.set(1.0 + p * 2.8, 1.0 + p * 2.8, 1.0 + p * 2.8);
      } else {
        blackHoleGroup.visible = false;
        pullParticles.visible = false;
        if (camera.fov !== 65) {
          camera.fov = 65;
          camera.updateProjectionMatrix();
        }
      }

      // GRAVITATIONAL INWARD PARTICLE ACCELERATION PHYSICS
      if (blackHoleGroup.visible) {
        const pPos = pullGeo.attributes.position.array;
        for (let i = 0; i < pullParticleCount; i++) {
          const dx = 0 - pPos[i * 3];
          const dy = 0 - pPos[i * 3 + 1];
          const dz = 11.5 - pPos[i * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;
          const dist = Math.sqrt(distSq);

          const gravityForce = (0.04 + scrollVel * 0.002) / Math.max(dist, 0.4);

          pPos[i * 3] += dx * gravityForce;
          pPos[i * 3 + 1] += dy * gravityForce;
          pPos[i * 3 + 2] += dz * gravityForce;

          if (dist < 0.4) {
            const radius = 8.0 + Math.random() * 12.0;
            const theta = Math.random() * Math.PI * 2;
            const phi = (Math.random() - 0.5) * Math.PI * 0.9;
            pPos[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
            pPos[i * 3 + 1] = radius * Math.sin(phi);
            pPos[i * 3 + 2] = 11.5 + radius * Math.sin(theta) * Math.cos(phi);
          }
        }
        pullGeo.attributes.position.needsUpdate = true;
      }

      // Animate wormhole texture offset and wireframe rotation
      tubeTexture.offset.y = -elapsed * 0.4 - scrollPercent * 7.0 - scrollVel * 0.04;
      tubeWireMesh.rotation.z = elapsed * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
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
      accretionMat.dispose();
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
