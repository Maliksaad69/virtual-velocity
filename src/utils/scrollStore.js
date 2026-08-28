import Lenis from 'lenis';
import gsap from 'gsap';

// Master Single Source of Truth for Scroll Progress and Velocity
class ScrollStore {
  constructor() {
    this.progress = 0;
    this.rawVelocity = 0;
    this.velocity = 0;
    this.lenis = null;
    this.listeners = new Set();
    this.initialized = false;
  }

  init() {
    if (this.initialized || typeof window === 'undefined') return;
    this.initialized = true;

    // 01. Initialize Lenis Smooth Scroll Engine
    this.lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Heavy cinematic smooth curve
      smoothTouch: false, // Touch uses native physics for responsiveness
      touchMultiplier: 1.8,
    });

    // 02. Hook Lenis to GSAP Ticker for 60FPS Sync
    this.lenis.on('scroll', (e) => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight || 1;
      this.progress = Math.min(Math.max(e.scroll / maxScroll, 0), 1);
      this.rawVelocity = Math.abs(e.velocity || 0);

      // Notify all 3D WebGL and HTML listeners
      this.notify();
    });

    const updateLenis = (time) => {
      this.lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);

    // 03. Smooth Velocity Damping RAF Loop
    const smoothLoop = () => {
      // Exponential decay for buttery smooth velocity transitions
      this.velocity += (this.rawVelocity - this.velocity) * 0.12;
      requestAnimationFrame(smoothLoop);
    };
    smoothLoop();
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notify() {
    this.listeners.forEach((cb) => cb(this.progress, this.velocity));
  }

  getState() {
    return {
      progress: this.progress,
      velocity: this.velocity,
    };
  }

  scrollTo(target, options = {}) {
    if (this.lenis) {
      this.lenis.scrollTo(target, options);
    }
  }
}

export const scrollStore = new ScrollStore();
