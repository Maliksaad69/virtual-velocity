import { useState, useEffect } from 'react';
import './Text3DFlip.css';

export default function Text3DFlip({
  words = ['That Grow & Scale', 'That Innovate & Disrupt', 'That Outperform & Dominate'],
  interval = 3000,
  className = '',
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsFlipping(false);
      }, 350); // half duration of 3D rotate flip
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  const currentWord = words[currentIndex];

  return (
    <span className={`text-3d-flip-container ${className}`}>
      <span className={`text-3d-flip-word ${isFlipping ? 'flipping' : ''}`}>
        {currentWord.split('').map((char, index) => (
          <span
            key={`${currentIndex}-${index}`}
            className="text-3d-flip-char"
            style={{ animationDelay: `${index * 0.03}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </span>
  );
}
