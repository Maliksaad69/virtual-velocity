# Antigravity Framer Motion Skill & Animation System

## Core Animation Guidelines
1. **Scroll-Based Entrance Animations**:
   - Use `whileInView={{ opacity: 1, y: 0 }}` with `initial={{ opacity: 0, y: 35 }}`.
   - Set `viewport={{ once: true, margin: '-50px' }}` for clean single-trigger entrances.
   - Use custom cubic-bezier easing: `transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}`.

2. **Page Curtain Wipe Transitions (`PageTransition.jsx`)**:
   - Wrap routes in `<AnimatePresence mode="wait">`.
   - Scale curtain wipe with `scaleY: [1, 0]` and `transformOrigin: 'bottom'`.
   - Display glowing vermilion indicator badge during transitions.

3. **Background Parallax Layers (`AnimatedSectionBackground`)**:
   - Use `useScroll` with target container ref.
   - Bind subtle vertical parallax: `useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])`.
   - Ensure absolute positioning (`position: absolute; inset: 0`) and `pointer-events: none`.

4. **3D Tilt & Magnetic Physics**:
   - Apply perspective transforms: `transform: perspective(1000px) rotateX(...) rotateY(...) scale3d(...)`.
   - Smooth reset on mouse leave with cubic-bezier transition.
