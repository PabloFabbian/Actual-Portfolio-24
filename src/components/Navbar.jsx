import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo.webp';
import GitHubPreview from '../assets/github-preview.png';
import '../fonts.css';

// Datos constantes
const LANGUAGES = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' }
];

const ROTATING_TEXTS = [
  { line1: "Pablo", line2: "E. Fabbian" },
  { line1: "Frontend", line2: "Developer" },
  { line1: "UX/UI", line2: "Designer" },
  { line1: "Project", line2: "Manager" }
];

const SECTIONS = ['Home', 'About', 'Projects', 'Tech-Stack'];
const NAV_SECTIONS = ['Home', 'Projects', 'About', 'Tech-Stack'];

// Hook personalizado para manejar clicks fuera del elemento
const useClickOutside = (callback) => {
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.language-selector')) callback();
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [callback]);
};

// Hook para manejar scroll
const useScrollHandler = (updateActiveSection) => {
  const [showLogoAndButton, setShowLogoAndButton] = useState(true);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollTop = useRef(0);
  const scrollTimeout = useRef(null);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const isScrollingDownNow = scrollTop > lastScrollTop.current;
    
    updateActiveSection();
    
    if (isScrollingDownNow !== isScrollingDown) {
      setIsScrollingDown(isScrollingDownNow);
    }

    if (isScrollingDownNow && showLogoAndButton) {
      setShowLogoAndButton(false);
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => setShowLogoAndButton(true), 3000);
    } else if (!isScrollingDownNow && scrollTop < lastScrollTop.current) {
      setShowLogoAndButton(true);
      clearTimeout(scrollTimeout.current);
    }
    
    lastScrollTop.current = Math.max(scrollTop, 0);
    ticking.current = false;
  }, [showLogoAndButton, isScrollingDown, updateActiveSection]);

  const requestScrollUpdate = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(handleScroll);
      ticking.current = true;
    }
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    return () => {
      window.removeEventListener('scroll', requestScrollUpdate);
      clearTimeout(scrollTimeout.current);
    };
  }, [requestScrollUpdate]);

  return { showLogoAndButton, isScrollingDown };
};

// Componente del selector de idioma
const LanguageSelector = ({ currentLanguage, onLanguageChange, hasLoaded }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = LANGUAGES.find(lang => lang.code === currentLanguage) || LANGUAGES[0];

  useClickOutside(() => setIsOpen(false));

  return (
    <div className="language-selector relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative group flex items-center font-lt-soul transition-all duration-200 ${
          hasLoaded ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: hasLoaded ? '1s' : '0s', animationFillMode: 'both' }}
      >
        <div className="flex items-center px-3 py-1 rounded-full group-hover:bg-[#EDE0D4]/20 group-hover:text-[#FFD275] transition-all duration-300">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 919-9" />
          </svg>
          <span className="text-base 2xl:text-lg">{currentLang.flag}</span>
        </div>
      </button>

      {isOpen && (
        <div className="absolute -left-16 top-full mt-2 bg-gradient-to-br from-[#7B4C33]/95 to-[#7B4C35]/95 backdrop-blur-md rounded-lg shadow-xl border border-[#7B4C33]/30 min-w-[180px] z-50">
          {LANGUAGES.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onLanguageChange(language.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 ${
                currentLanguage === language.code 
                  ? 'bg-[#FFD275]/20 text-[#FFD275]' 
                  : 'text-[#EDE0D4] hover:bg-[#EDE0D4]/20 hover:text-[#FFD275]'
              }`}
            >
              <span className="text-base">{language.flag}</span>
              <span className="text-sm font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Componente del texto rotatorio
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

// Componente de la tarjeta de GitHub
const GitHubPreviewCard = ({ isVisible, onMouseEnter, onMouseLeave }) => (
  <motion.div 
    className="absolute top-full left-12 mt-4 z-50 pointer-events-auto"
    initial={{ opacity: 0, y: -10, scale: 0.95 }}
    animate={{ 
      opacity: isVisible ? 1 : 0, 
      y: isVisible ? 0 : -10,
      scale: isVisible ? 1 : 0.95
    }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
  >
    <div className="relative bg-gradient-to-br from-[#7B4C33]/75 to-[#7B4C35]/50 backdrop-blur-md rounded-lg shadow-2xl border border-[#7B4C33]/30 w-80">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-3">
          <svg className="w-5 h-5 text-[#EDE0D4]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span className="font-semibold text-[#EDE0D4]">GitHub Profile</span>
        </div>
        
        <div className="relative mb-3 rounded border border-[#7B4C33]/20 overflow-hidden bg-[#EDE0D4]/10">
          <img src={GitHubPreview} alt="GitHub Profile Preview" className="w-full h-40 object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#7B4C33]/20 to-transparent" />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-[#FFD275] text-sm">@PabloFabbian</p>
              <p className="text-xs text-[#EDE0D4]/80">Frontend Developer & UX/UI Designer</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1.5 bg-gradient-to-r from-[#DB5A42] to-[#C94A3B] text-white text-xs rounded-full hover:from-[#C95440] hover:to-[#B8432A] transition-all duration-200 font-medium"
              onClick={() => window.open('https://github.com/PabloFabbian', '_blank')}
            >
              Visit Profile
            </motion.button>
          </div>
          
          <div className="flex items-center space-x-4 pt-2 border-t border-[#7B4C33]/30">
            {[
              { color: '#FFD275', text: '11 repos' },
              { color: '#DB5A42', text: 'JavaScript' },
              { color: '#9C6644', text: 'React' }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-1 text-xs text-[#EDE0D4]/70">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Componente principal del Navbar
const Navbar = React.memo(() => {
  const [activeSection, setActiveSection] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const [showPreview, setShowPreview] = useState(false);
  const hoverTimeoutRef = useRef(null);

  // Función para actualizar la sección activa
  const updateActiveSection = useCallback(() => {
    let closestSection = 'Home';
    let minDistance = Infinity;

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section;
        }
      }
    });

    setActiveSection(closestSection);
  }, []);

  const { showLogoAndButton } = useScrollHandler(updateActiveSection);

  // Manejadores de eventos simplificados
  const handleSelect = useCallback((section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(section);
    setIsMenuOpen(false);
  }, []);

  const handleContactClick = useCallback(() => {
    document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  }, []);

  const handleLanguageChange = useCallback((newLanguage) => {
    setCurrentLanguage(newLanguage);
    console.log('Idioma cambiado a:', newLanguage);
  }, []);

  // Manejadores de hover para preview
  const handlePreviewHover = useCallback((show) => {
    clearTimeout(hoverTimeoutRef.current);
    if (show) {
      setShowPreview(true);
    } else {
      hoverTimeoutRef.current = setTimeout(() => setShowPreview(false), 300);
    }
  }, []);

  // Efectos
  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Componente del botón de contacto
  const ContactButton = ({ isMobile = false }) => (
    <div className={`relative ${isMobile ? '' : 'inline-block mx-12'} transition-all duration-500 ${
      !isMobile && (showLogoAndButton ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0')
    } ${hasLoaded ? 'animate-slide-in-right' : 'opacity-0'}`}
    style={{
      animationDelay: hasLoaded ? '0.8s' : '0s',
      animationFillMode: 'both'
    }}>
      {!isMobile && <div className="absolute top-1 left-1 w-full h-full bg-[#2B2B2B] rounded-lg" />}
      {isMobile && <div className="absolute top-1.5 left-1.5 w-full h-full bg-[#2B2B2B] rounded-lg" />}
      <button
        onClick={handleContactClick}
        className={`relative flex items-center justify-center space-x-2 bg-gradient-to-r from-[#DB5A42] to-[#C94A3B] text-white px-6 py-2 rounded-lg hover:from-[#C95440] hover:to-[#B8432A] transition-all duration-200 transform hover:scale-105 border-2 border-[#DB5A42] hover:border-[#C95440] ${
          isMobile ? 'active:translate-x-1.5 active:translate-y-1.5 active:scale-95' : 'active:translate-x-1 active:translate-y-1 active:scale-95'
        }`}
      >
        <span className={isMobile ? '' : 'whitespace-nowrap'}>Let's Talk</span>
        <svg className="h-5 w-auto transition-transform duration-200 group-hover:rotate-3" viewBox="0 0 24 24" fill="none">
          <path d="M8 10.5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M8 14H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );

  return (
    <>
      <nav className={`bg-transparent fixed top-0 left-0 right-0 z-40 transition-all duration-1000 ${
        hasLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="container mx-auto px-4 py-3 flex items-center">
          {/* Logo y texto rotatorio */}
          <div className="flex-shrink-0 w-[280px] 2xl:w-[320px] relative">
            <a 
              href="https://github.com/PabloFabbian" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center mx-0 md:mx-12 hover:scale-105 transition-all duration-500 ${
                showLogoAndButton ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
              } ${hasLoaded ? 'animate-slide-in-left' : ''}`}
              style={{ animationDelay: hasLoaded ? '0.2s' : '0s', animationFillMode: 'both' }}
              onMouseEnter={() => handlePreviewHover(true)}
              onMouseLeave={() => handlePreviewHover(false)}
            >
              <img src={Logo} alt="PF Portfolio Logo" className="mr-1 mt-0.5 h-14 2xl:h-[3.8rem] w-auto drop-shadow-lg" />
              <RotatingText hasLoaded={hasLoaded} />
            </a>

            <GitHubPreviewCard 
              isVisible={showPreview}
              onMouseEnter={() => handlePreviewHover(true)}
              onMouseLeave={() => handlePreviewHover(false)}
            />
          </div>

          {/* Navegación de escritorio */}
          <div className={`hidden md:flex flex-1 justify-center ${
            hasLoaded ? 'animate-slide-in-down' : 'opacity-0'
          }`} style={{ animationDelay: hasLoaded ? '0.4s' : '0s', animationFillMode: 'both' }}>
            <div className="flex items-center bg-gradient-to-r from-[#7B4C33]/80 to-[#7B4C35]/80 mt-1 2xl:mt-1.5 pt-2 md:pt-2 2xl:pt-3 pb-2 md:pb-1.5 2xl:pb-2 px-6 md:pl-16 md:pr-8 2xl:px-20 rounded-full text-base 2xl:text-lg text-[#EDE0D4] space-x-16 md:space-x-max 2xl:space-x-20 drop-shadow backdrop-blur-sm">
              {NAV_SECTIONS.map((section, index) => (
                <button
                  key={section}
                  onClick={() => handleSelect(section)}
                  className={`relative group flex items-center font-lt-soul transition-all duration-200 hover:text-[#FFD275] hover:scale-105 whitespace-nowrap ${
                    activeSection === section ? 'text-[#FFD275]' : 'text-[#EDE0D4]'
                  } ${hasLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: hasLoaded ? `${0.6 + index * 0.1}s` : '0s', animationFillMode: 'both' }}
                >
                  {section}
                  <span className={`absolute left-1/2 bottom-0.5 w-full h-0.5 transition-all duration-300 -translate-x-1/2 origin-center rounded-full ${
                    activeSection === section 
                      ? 'bg-[#FFD275] scale-x-100' 
                      : 'bg-[#FFD275] scale-x-0 group-hover:scale-x-75'
                  }`} />
                </button>
              ))}
              
              <div className="flex items-center">
                <div className="w-px h-6 bg-[#EDE0D4]/30 mr-4 md:mr-6 2xl:mr-8" />
                <div className="relative -mt-0.5">
                  <LanguageSelector 
                    currentLanguage={currentLanguage} 
                    onLanguageChange={handleLanguageChange}
                    hasLoaded={hasLoaded}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Botón de contacto de escritorio */}
          <div className="hidden md:flex flex-shrink-0 w-[280px] 2xl:w-[320px] justify-end">
            <ContactButton />
          </div>

          {/* Navegación móvil */}
          <div className={`md:hidden flex items-center space-x-6 ${
            hasLoaded ? 'animate-slide-in-right' : 'opacity-0'
          }`} style={{ animationDelay: hasLoaded ? '0.5s' : '0s', animationFillMode: 'both' }}>
            <ContactButton isMobile />

            <button
              className="z-50 relative rounded p-1 mt-1 hover:scale-110 transition-transform duration-200"
              onClick={() => setIsMenuOpen(prev => !prev)}
            >
              <div className="space-y-1">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`block w-6 h-1 bg-[#DB5A42] transition-all duration-300 ${
                      isMenuOpen 
                        ? i === 0 ? 'rotate-45 translate-y-2' 
                        : i === 1 ? 'opacity-0' 
                        : '-rotate-45 -translate-y-2'
                        : ''
                    }`}
                  />
                ))}
              </div>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div className={`fixed inset-0 bg-gradient-to-br from-[rgba(156,102,68,0.95)] via-[rgba(94,59,28,0.9)] to-[rgba(43,26,15,0.85)] z-30 transition-all duration-500 ease-in-out backdrop-blur-md ${
          isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
        }`} style={{ top: '0rem', height: 'calc(100vh - 4.5rem)' }}>
          <div className={`flex flex-col items-center justify-center h-full space-y-12 text-4xl transition-all duration-700 -mt-6 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {NAV_SECTIONS.map((section, index) => (
              <button
                key={section}
                onClick={() => handleSelect(section)}
                className={`font-lt-soul transform transition-all duration-300 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FFD275] focus:ring-opacity-50 rounded px-4 py-2 ${
                  activeSection === section ? 'text-[#FFD275] scale-105' : 'text-[#FFD275]/70'
                }`}
                style={{ animationDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
      `}</style>
    </>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;