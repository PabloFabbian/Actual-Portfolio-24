import React from 'react';
import { motion } from 'framer-motion';
import ContactButton from './ContactButton';

const MobileNav = ({ hasLoaded, handleContactClick, setIsMenuOpen, isMenuOpen }) => {
  return (
    <motion.div 
      className={`md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 ${
        hasLoaded ? 'animate-slide-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: hasLoaded ? '0.5s' : '0s', animationFillMode: 'both' }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative group">
        {/* Barra flotante principal */}
        <div className="flex items-center justify-center bg-gradient-to-br from-[#7B4C33]/80 to-[#7B4C35]/80 backdrop-blur-lg rounded-full shadow-2xl border border-[#7B4C33]/40 p-2 px-4">
          
          {/* Botón de menú (hamburguesa) */}
          <motion.button
            onClick={() => setIsMenuOpen(prev => !prev)}
            className="relative z-10 h-10 w-10 flex items-center justify-center rounded-full mr-2"
            whileTap={{ scale: 0.9 }}
          >
            <div className="space-y-1.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen 
                      ? i === 0 ? 'rotate-45 translate-y-1.5' 
                      : i === 1 ? 'opacity-0' 
                      : '-rotate-45 -translate-y-1.5'
                      : ''
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </div>
          </motion.button>
          
          {/* Separador */}
          <div className="w-px h-6 bg-white/30 mx-2" />
          
          {/* Botón de contacto */}
          <motion.button
            onClick={handleContactClick}
            className="relative h-10 px-4 flex items-center justify-center rounded-full bg-gradient-to-r from-[#DB5A42] to-[#C94A3B] text-white transition-all duration-200 hover:from-[#C95440] hover:to-[#B8432A]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-medium">Let's Talk</span>
            <svg className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none">
              <path d="M8 10.5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8 14H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileNav;