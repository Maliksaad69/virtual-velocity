import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import './ScrollEngine.css';

export default function ScrollEngine() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorText, setCursorText] = useState('');
  const [cursorHover, setCursorHover] = useState(false);

  // Initialize Lenis Smooth Scroll safely
  useEffect(() => {
    let lenis;
    let animId;

    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      });

      lenis.on('scroll', (e) => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          setScrollProgress((e.scroll / totalHeight) * 100);
        }
      });

      function raf(time) {
        if (lenis) {
          lenis.raf(time);
          animId = requestAnimationFrame(raf);
        }
      }
      animId = requestAnimationFrame(raf);
    } catch (err) {
      console.warn('Lenis scroll engine init fallback:', err);
    }

    // Smooth anchor navigation
    const handleAnchorClick = (e) => {
      const target = e.target;
      if (!target || typeof target.closest !== 'function') return;
      const anchor = target.closest('a[href^="#"]');
      if (!anchor) return;
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId !== '#') {
        try {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            if (lenis) {
              lenis.scrollTo(targetEl, { offset: -70 });
            } else {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          }
        } catch (err) {
          // ignore query selector syntax error
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      document.removeEventListener('click', handleAnchorClick);
      if (lenis) lenis.destroy();
    };
  }, []);

  // Enhanced Magnetic Cursor & Dynamic Hover Labels
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const renderCursor = () => {
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      animId = requestAnimationFrame(renderCursor);
    };
    renderCursor();

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target || typeof target.closest !== 'function') return;
      const interactive = target.closest('[data-cursor], .portfolio-card, .service-card, .btn, .team-card, .ai-card, .why-card, .faq-item');
      if (interactive) {
        const customText = interactive.getAttribute('data-cursor') ||
          (interactive.classList.contains('portfolio-card') ? 'VIEW' : interactive.classList.contains('btn') ? 'GO' : '');
        setCursorText(customText);
        setCursorHover(true);
      } else {
        setCursorText('');
        setCursorHover(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Interactive 3D Card Tilt & Radial Spotlight (Event Delegation)
  useEffect(() => {
    const handleMouseMoveTilt = (e) => {
      const target = e.target;
      if (!target || typeof target.closest !== 'function') return;
      const card = target.closest('.glass-card, .service-card, .portfolio-card, .why-card, .ai-tab-card, .team-card, .timeline-card');
      if (!card) return;

      card.style.transformStyle = 'preserve-3d';
      card.style.transition = 'transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease';

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.018, 1.018, 1.018)`;
    };

    const handleMouseOutTilt = (e) => {
      const target = e.target;
      if (!target || typeof target.closest !== 'function') return;
      const card = target.closest('.glass-card, .service-card, .portfolio-card, .why-card, .ai-tab-card, .team-card, .timeline-card');
      if (!card) return;

      if (!e.relatedTarget || !card.contains(e.relatedTarget)) {
        card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      }
    };

    document.addEventListener('mousemove', handleMouseMoveTilt, { passive: true });
    document.addEventListener('mouseout', handleMouseOutTilt, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMoveTilt);
      document.removeEventListener('mouseout', handleMouseOutTilt);
    };
  }, []);

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Advanced Magnetic Cursor */}
      <div id="custom-cursor" className={`magnetic-cursor ${cursorHover ? 'active' : ''}`}>
        <span id="cursor-label" className="cursor-text">{cursorText}</span>
      </div>
    </>
  );
}
