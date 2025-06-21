import React from 'react';
import { motion } from 'framer-motion';
import ContactButton from './ContactButton';

const MobileNav = ({ hasLoaded, handleContactClick, setIsMenuOpen, isMenuOpen, isScrollingDown }) => {
  // Determinar si el MobileNav debe estar visible (misma lógica que navbar)
  const isMobileNavVisible = hasLoaded && !isScrollingDown;

  return (
    <div 
      className={`md:hidden fixed bottom-4.5 right-4 z-50 transition-all delay-300 duration-300 ${
        isMobileNavVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
      }`}
    >
      <div className="relative group scale-90">
        <div className="flex items-center justify-center bg-gradient-to-br from-[#7B4C33]/90 to-[#7B4C35]/50 backdrop-blur-sm rounded-full shadow-2xl border border-[#7B4C33]/40 p-2 px-4">
          
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
          
          <div className="w-px h-6 bg-white/30 mx-2" />
          
          {/* Botón mejorado con física de hundimiento precisa */}
          <motion.button
            onClick={handleContactClick}
            className="
              relative overflow-hidden
              h-10 px-4 ml-1 
              flex items-center justify-center 
              rounded-full text-white text-sm font-medium
              transition-all duration-75 ease-out
            "
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
              className="flex items-center relative z-10"
              whileTap={{ y: 0.5 }}
              transition={{ duration: 0.05 }}
            >
              <span className="font-medium">Let's Talk</span>
              <motion.svg 
                className="h-4 w-4 ml-1" 
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

            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-t from-black/10 to-transparent opacity-0"
              whileTap={{ opacity: 1 }}
              transition={{ duration: 0.05 }}
            />
            
            <motion.div
              className="absolute top-0 left-1/4 right-1/4 h-px bg-white/30 rounded-full"
              whileTap={{ opacity: 0.1 }}
              transition={{ duration: 0.05 }}
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;