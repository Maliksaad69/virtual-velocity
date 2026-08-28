import { motion } from 'framer-motion';
import './PageTransition.css';

export function PageTransition({ children }) {
  return (
    <motion.div className="page-transition-container">
      {children}
      {/* Wipe Curtain Overlay */}
      <motion.div
        className="page-wipe-curtain curtain-in"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        style={{ originY: 0 }}
      />
      <motion.div
        className="page-wipe-curtain curtain-out"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        style={{ originY: 1 }}
      >
        <div className="curtain-logo-badge">
          <span className="curtain-dot" />
          <span>VIRTUAL VELOCITY</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
