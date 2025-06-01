import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

function ProjectImage({ currentProject, isImageHovered, setIsImageHovered, setIsLoading, direction }) {
  const [showInitialOverlay, setShowInitialOverlay] = useState(true);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMouseDown) {
      controls.stop();
    } else {
      controls.start({
        backgroundPositionY: isImageHovered ? '100%' : '0%',
        transition: { duration: 5, ease: 'easeInOut' }
      });
    }
  }, [isMouseDown, isImageHovered, controls]);

  const handleMouseEnter = () => {
    setIsImageHovered(true);
    if (showInitialOverlay) setShowInitialOverlay(false);
  };

  const handleMouseLeave = () => setIsImageHovered(false);
  const handleMouseLeaveCombined = () => {
    handleMouseLeave();
    setIsMouseDown(false);
  };

  return (
    <div className="w-11/12 sm:10/12 md:w-2/3 relative mx-auto mt-7 md:-mt-2 md:order-2 md:mx-6 2xl:mx-5 mb-6">
      <div
        className="overflow-hidden relative h-[24.5vh] sm:h-[90vh] md:h-[70vh] max-h-[36rem] rounded-md shadow-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeaveCombined}
        onMouseDown={() => setIsMouseDown(true)}
        onMouseUp={() => setIsMouseDown(false)}
        onTouchStart={() => setIsMouseDown(true)}
        onTouchEnd={() => setIsMouseDown(false)}
      >
        <AnimatePresence custom={direction}>
          <motion.div
            key={currentProject.name}
            custom={direction}
            className="absolute inset-0 bg-cover bg-top"
            style={{
              backgroundImage: `url(${currentProject?.image})`,
              backgroundSize: 'cover',
            }}
            initial={{ scale: 0.8, opacity: 0, zIndex: 1 }}
            animate={{ 
              scale: 1,
              opacity: 1,
              zIndex: 2
            }}
            exit={{ 
              scale: 0.9,
              opacity: 0,
              zIndex: 1
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            onLoad={() => setIsLoading(false)}
          >
            <motion.div 
              className="absolute inset-0 bg-cover bg-top"
              style={{
                backgroundImage: `url(${currentProject?.image})`,
                backgroundSize: 'cover',
              }}
              animate={controls}
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>

            {showInitialOverlay && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/70 to-black/80 backdrop-blur-sm rounded-lg flex items-center justify-center"
                initial={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.div
                  className="text-center bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-6 border border-white/20 shadow-2xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <motion.div
                    className="mb-4 flex justify-center"
                    animate={{ y: [0, -5, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                      <path d="M3 2L7 21L10.5 14.5L17 21L21 17L14.5 10.5L21 7L3 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>

                  <motion.p
                    className="text-white text-lg md:text-xl font-medium mb-2 tracking-wide drop-shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    {isMobile ? 'Tap to Explore' : 'Hover to Explore'}
                  </motion.p>

                  <motion.div
                    className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-60"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  />
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ProjectImage;