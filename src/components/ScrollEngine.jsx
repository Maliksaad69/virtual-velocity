import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import './ScrollEngine.css';

export default function ScrollEngine() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorText, setCursorText] = useState('');
  const [cursorHover, setCursorHover] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
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
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Smooth anchor navigation
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl, { offset: -70 });
          }
        }
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  // Enhanced Magnetic Cursor with Labels
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    let animId;
    const renderCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      animId = requestAnimationFrame(renderCursor);
    };
    renderCursor();

    const handleElementHover = () => {
      const interactiveEls = document.querySelectorAll('[data-cursor], .portfolio-card, .service-card, .btn, .team-card, .ai-card, .why-card, .faq-item');

      interactiveEls.forEach((el) => {
        const onEnter = () => {
          const customText = el.getAttribute('data-cursor') || (el.classList.contains('portfolio-card') ? 'VIEW' : el.classList.contains('btn') ? 'GO' : '');
          setCursorText(customText);
          setCursorHover(true);
        };
        const onLeave = () => {
          setCursorText('');
          setCursorHover(false);
        };

        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    handleElementHover();
    const timer = setTimeout(handleElementHover, 1000);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
      clearTimeout(timer);
    };
  }, []);

  // Interactive 3D Card Tilt & Rotation Engine
  useEffect(() => {
    const initCardTilt = () => {
      const cards = document.querySelectorAll('.glass-card, .service-card, .portfolio-card, .why-card, .ai-tab-card, .team-card, .timeline-card');

      cards.forEach((card) => {
        card.style.transformStyle = 'preserve-3d';
        card.style.transition = 'transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease';

        const onMouseMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          // Set CSS Variables for Radial Spotlight
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);

          // Calculate 3D tilt angles
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg tilt
          const rotateY = ((x - centerX) / centerX) * 10;

          card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`;
        };

        const onMouseLeave = () => {
          card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease';
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        };

        card.addEventListener('mousemove', onMouseMove);
        card.addEventListener('mouseleave', onMouseLeave);
      });
    };

    initCardTilt();
    const timer = setTimeout(initCardTilt, 800);

    return () => clearTimeout(timer);
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
