// RotatingText.js
import React, { useState, useEffect } from 'react';
import { ROTATING_TEXTS } from './navbarConstants';

const RotatingText = ({ hasLoaded }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!hasLoaded) return;
    
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex(prev => (prev + 1) % ROTATING_TEXTS.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [hasLoaded]);

  const currentText = ROTATING_TEXTS[currentTextIndex];

  return (
    <div className="relative overflow-hidden w-[140px] 2xl:w-[168px]">
      <div className={`transition-all duration-300 transform ${
        isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
      }`}>
        <span className="text-gradient-PF block font-black text-2xl 2xl:text-3xl -mb-2 whitespace-nowrap">
          {currentText.line1}
        </span>
        <span className="text-gradient-PF block font-black text-2xl 2xl:text-3xl whitespace-nowrap">
          {currentText.line2}
        </span>
      </div>
    </div>
  );
};

export default RotatingText;