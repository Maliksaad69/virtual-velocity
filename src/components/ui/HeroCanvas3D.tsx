"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export const HeroCanvas3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Do not initialize Three.js WebGL context on mobile/tablet screens (< 1024px) since element is hidden
    if (window.innerWidth < 1024) return;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4.5;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // 3. Create 3D Geometry (Wireframe Icosahedron + Inner Core)
    const group = new THREE.Group();

    // Outer Wireframe Torus Knot
    const outerGeo = new THREE.TorusKnotGeometry(1.2, 0.35, 96, 24);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x178a66,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    group.add(outerMesh);

    // Inner Glowing Core
    const innerGeo = new THREE.IcosahedronGeometry(0.8, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x106e51,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // Floating Emerald Particles Array
    const particleCount = 150;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x178a66,
      size: 0.05,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    scene.add(group);

    // 4. Mouse Tracking & Spring Lerp
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // 5. Animation Loop with IntersectionObserver Pausing
    let animationFrameId: number | null = null;
    let isRendering = false;
    const clock = new THREE.Clock();

    const renderFrame = () => {
      if (!isRendering) return;
      const elapsedTime = clock.getElapsedTime();

      group.rotation.x = elapsedTime * 0.2;
      group.rotation.y = elapsedTime * 0.25;

      innerMesh.rotation.x = -elapsedTime * 0.4;
      innerMesh.rotation.y = -elapsedTime * 0.3;

      particles.rotation.y = elapsedTime * 0.05;

      group.position.x += (targetX * 0.25 - group.position.x) * 0.05;
      group.position.y += (-targetY * 0.25 - group.position.y) * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(renderFrame);
    };

    const startAnimation = () => {
      if (!isRendering) {
        isRendering = true;
        clock.start();
        renderFrame();
      }
    };

    const stopAnimation = () => {
      if (isRendering) {
        isRendering = false;
        if (animationFrameId !== null) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      stopAnimation();
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-1/2 -translate-y-1/2 right-2 lg:right-8 xl:right-16 w-[360px] sm:w-[460px] lg:w-[500px] xl:w-[580px] h-[480px] lg:h-[580px] pointer-events-none z-0 opacity-85 hidden lg:block overflow-hidden"
    />
  );
};
