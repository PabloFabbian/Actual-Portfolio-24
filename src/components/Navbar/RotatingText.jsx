import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROTATING_TEXTS } from './navbarConstants';

const RotatingText = ({ hasLoaded, isInsideSharedContainer = false, showLogoAndButton = true }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!hasLoaded) return;
    
    // Mostrar el primer texto
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentTextIndex(prev => (prev + 1) % ROTATING_TEXTS.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [hasLoaded]);

  const currentText = ROTATING_TEXTS[currentTextIndex];
  
  // En mobile, usar showLogoAndButton para controlar visibilidad
  // En desktop, siempre mostrar
  const shouldShow = typeof window !== 'undefined' && (window.innerWidth >= 768 || showLogoAndButton);

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: shouldShow ? 1 : 0 },
    exit: { opacity: 0 }
  };

  return (
    <motion.div 
      className={`relative overflow-hidden w-[130px] 2xl:w-[168px]`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {isInsideSharedContainer ? (
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              key={currentTextIndex}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-gradient-PF block font-black text-2xl 2xl:text-3xl drop-shadow-sm -mb-2 whitespace-nowrap">
                {currentText.line1}
              </span>
              <span className="text-gradient-PF block font-black text-2xl 2xl:text-3xl drop-shadow-sm whitespace-nowrap">
                {currentText.line2}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <div className="relative backdrop-blur-[2px] bg-gradient-to-r from-white/10 to-white/5 rounded-xl pl-3 py-1">
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                key={currentTextIndex}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-gradient-PF block font-black text-2xl 2xl:text-3xl drop-shadow-sm -mb-2 whitespace-nowrap">
                  {currentText.line1}
                </span>
                <span className="text-gradient-PF block font-black text-2xl 2xl:text-3xl drop-shadow-sm whitespace-nowrap">
                  {currentText.line2}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
};

export default RotatingText;