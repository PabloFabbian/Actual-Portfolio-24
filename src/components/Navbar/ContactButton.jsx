import React from 'react';
import { motion } from 'framer-motion';

const ContactButton = ({ handleContactClick, showLogoAndButton, hasLoaded, isMobile = false }) => (
  <div className={`relative transition-all duration-500 md:scale-90 2xl:scale-100 ${
    isMobile 
      ? '' 
      : `inline-block 
         ml-8 sm:ml-10 md:mr-14 2xl:mr-0
         ${showLogoAndButton ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'}`
  } ${hasLoaded ? 'animate-slide-in-right' : 'opacity-0'}`}
  style={{
    animationDelay: hasLoaded ? '0.8s' : '0s',
    animationFillMode: 'both'
  }}>
    
    {/* Botón con físicas mejoradas y consistencia visual */}
    <motion.button
      onClick={handleContactClick}
      className={`
        relative overflow-hidden group
        flex items-center justify-center gap-2
        sm:font-sm 2xl:font-medium text-white font-lt-soul
        transition-all duration-75 ease-out
        ${isMobile 
          ? 'mt-0 px-4 py-2 rounded-full text-sm' 
          : `mt-1 sm:mt-1 md:mt-1 2xl:mt-2
             px-4 sm:px-4 md:px-5 2xl:px-10
             py-2 sm:py-2 md:py-2.5 2xl:py-2.5
             rounded-full
             text-sm sm:text-sm md:text-base 2xl:text-lg`
        }
      `}
      style={{
        background: 'linear-gradient(145deg, #E86B52, #DB5A42)',
        boxShadow: `
          0 4px 8px rgba(219, 90, 66, 0.4),
          0 2px 4px rgba(0, 0, 0, 0.2),
          inset 0 1px 2px rgba(255, 255, 255, 0.2),
          inset 0 -1px 1px rgba(0, 0, 0, 0.1)
        `,
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
      initial={{ 
        y: 0,
        boxShadow: `
          0 4px 8px rgba(219, 90, 66, 0.4),
          0 2px 4px rgba(0, 0, 0, 0.2),
          inset 0 1px 2px rgba(255, 255, 255, 0.2),
          inset 0 -1px 1px rgba(0, 0, 0, 0.1)
        `,
        background: 'linear-gradient(145deg, #E86B52, #DB5A42)'
      }}
      whileHover={{ 
        y: -1,
        scale: 1.02,
        boxShadow: `
          0 6px 12px rgba(219, 90, 66, 0.5),
          0 3px 6px rgba(0, 0, 0, 0.25),
          inset 0 1px 3px rgba(255, 255, 255, 0.25),
          inset 0 -1px 2px rgba(0, 0, 0, 0.05)
        `,
        background: 'linear-gradient(145deg, #F07A61, #E86B52)',
        transition: { duration: 0.15, ease: "easeOut" }
      }}
      whileTap={{ 
        y: 2,
        scale: 0.98,
        boxShadow: `
          0 1px 3px rgba(219, 90, 66, 0.3),
          0 1px 2px rgba(0, 0, 0, 0.3),
          inset 0 2px 4px rgba(0, 0, 0, 0.2),
          inset 0 -1px 1px rgba(255, 255, 255, 0.1)
        `,
        background: 'linear-gradient(145deg, #C95440, #B8432A)',
        transition: { duration: 0.05, ease: "easeInOut" }
      }}
    >
      {/* Contenido del botón con movimiento sutil */}
      <motion.div 
        className="flex items-center gap-1.5 sm:gap-1.5 md:gap-2 relative z-10"
        whileTap={{ y: 0.5 }}
        transition={{ duration: 0.05 }}
      >
        <span className="md:font-sm 2xl:font-medium whitespace-nowrap">
          Let's Talk
        </span>
        
        <motion.svg 
          className={`${isMobile 
            ? 'h-4 w-4' 
            : 'h-3.5 w-3.5 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 lg:h-4 lg:w-4 xl:h-5 xl:w-5 2xl:h-5 2xl:w-5'
          }`}
          viewBox="0 0 24 24" 
          fill="none"
          whileHover={{ x: 1 }}
          whileTap={{ x: 0 }}
        >
          <path d="M8 10.5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M8 14H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </motion.svg>
      </motion.div>

      {/* Overlay de presión */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-t from-black/10 to-transparent opacity-0"
        whileTap={{ opacity: 1 }}
        transition={{ duration: 0.05 }}
      />
      
      {/* Highlight superior */}
      <motion.div
        className="absolute top-0 left-1/4 right-1/4 h-px bg-white/30 rounded-full"
        whileTap={{ opacity: 0.1 }}
        transition={{ duration: 0.05 }}
      />
    </motion.button>
  </div>
);

export default ContactButton;