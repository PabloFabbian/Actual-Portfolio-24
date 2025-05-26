import React, { useState, useEffect, useCallback, useRef } from 'react';
import Logo from '../assets/Logo.webp';
import '../fonts.css';

const Navbar = React.memo(() => {
  const [showLogoAndButton, setShowLogoAndButton] = useState(true);
  const [activeSection, setActiveSection] = useState('Home');
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  
  // Referencias para optimizar
  const lastScrollTop = useRef(0);
  const scrollTimeout = useRef(null);
  const ticking = useRef(false);

  // Constantes para evitar recreación
  const sections = ['Home', 'About', 'Projects', 'Tech-Stack'];
  const navSections = ['Home', 'Projects', 'About', 'Tech-Stack'];

  const updateActiveSection = useCallback(() => {
    let closestSection = 'Home';
    let minDistance = Infinity;

    sections.forEach((section) => {
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
  }, [sections]);

  const handleScrollLogic = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    updateActiveSection();

    const isScrollingDownNow = scrollTop > lastScrollTop.current;
    
    if (isScrollingDownNow !== isScrollingDown) {
      setIsScrollingDown(isScrollingDownNow);
    }

    if (isScrollingDownNow && showLogoAndButton) {
      setShowLogoAndButton(false);
      // Limpiar timeout anterior
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      // Mostrar elementos después de 3 segundos (reducido de 4)
      scrollTimeout.current = setTimeout(() => {
        setShowLogoAndButton(true);
      }, 3000);
    } else if (!isScrollingDownNow && scrollTop < lastScrollTop.current) {
      setShowLogoAndButton(true);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = null;
      }
    }
    
    lastScrollTop.current = Math.max(scrollTop, 0);
    ticking.current = false;
  }, [showLogoAndButton, isScrollingDown, updateActiveSection]);

  const requestScrollUpdate = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(handleScrollLogic);
      ticking.current = true;
    }
  }, [handleScrollLogic]);

  useEffect(() => {
    // Usar requestAnimationFrame para mejor rendimiento
    window.addEventListener('scroll', requestScrollUpdate, { passive: true });

    return () => {
      window.removeEventListener('scroll', requestScrollUpdate);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [requestScrollUpdate]);

  // Animación de entrada inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleSelect = useCallback((section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(section);
      setIsMenuOpen(false);
    }
  }, []);

  const handleButtonClick = useCallback(() => {
    const contactElement = document.getElementById('Contact');
    if (contactElement) {
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // Cerrar menú al presionar Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevenir scroll del body cuando el menú está abierto
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`bg-transparent fixed top-0 left-0 right-0 z-40 transition-all duration-1000 ${
        hasLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <a 
            href="https://github.com/PabloFabbian" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Github Profile"
            className={`flex items-center mx-0 md:mx-12 hover:scale-105 transition-all duration-500 ${
              showLogoAndButton ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
            } ${
              hasLoaded ? 'animate-slide-in-left' : ''
            }`}
            style={{
              animationDelay: hasLoaded ? '0.2s' : '0s',
              animationFillMode: 'both'
            }}
          >
            <img 
              src={Logo} 
              alt="PF Portfolio Logo" 
              className="mr-1 mt-0.5 h-14 2xl:h-[3.8rem] w-auto drop-shadow-lg" 
              loading="eager"
            />
            <div className="hidden md:inline">
              <span className="text-gradient-PF block font-black text-2xl 2xl:text-3xl -mb-2 drop-shadow-lg">PF</span>
              <span className="text-gradient-PF block font-black text-2xl 2xl:text-3xl drop-shadow-lg">Portfolio</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex flex-grow justify-center ${
            hasLoaded ? 'animate-slide-in-down' : 'opacity-0'
          }`}
          style={{
            animationDelay: hasLoaded ? '0.4s' : '0s',
            animationFillMode: 'both'
          }}>
            <div className="flex bg-gradient-to-r from-[#7B4C33]/80 to-[#7B4C35]/80 mt-1 2xl:mt-1.5 pt-2 2xl:pt-3 pb-1.5 2xl:pb-2 px-20 2xl:px-32 rounded-full text-base 2xl:text-lg text-[#EDE0D4] space-x-24 2xl:space-x-32 drop-shadow backdrop-blur-sm">
              {navSections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => handleSelect(section)}
                  className={`relative group flex items-center font-lt-soul transition-all duration-200 hover:text-[#FFD275] hover:scale-105 ${
                    activeSection === section ? 'text-[#FFD275]' : 'text-[#EDE0D4]'
                  } ${
                    hasLoaded ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: hasLoaded ? `${0.6 + index * 0.1}s` : '0s',
                    animationFillMode: 'both'
                  }}
                  aria-label={`Ir a sección ${section}`}
                  aria-current={activeSection === section ? 'page' : undefined}
                >
                  {section}
                  <span
                    className={`absolute left-1/2 bottom-0.5 w-full h-0.5 transition-all duration-300 -translate-x-1/2 origin-center rounded-full ${
                      activeSection === section 
                        ? 'bg-[#FFD275] scale-x-100' 
                        : 'bg-[#EDE0D4] scale-x-0 group-hover:scale-x-75'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Contact Button */}
          <div className={`relative inline-block mx-12 transition-all duration-500 hidden md:inline ${
            showLogoAndButton ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
          } ${
            hasLoaded ? 'animate-slide-in-right' : 'opacity-0'
          }`}
          style={{
            animationDelay: hasLoaded ? '0.8s' : '0s',
            animationFillMode: 'both'
          }}>
            <div
              className="absolute top-1 left-1 w-full h-full bg-[#2B2B2B] rounded-lg"
              aria-hidden="true"
            />
            <button
              type="button"
              onClick={handleButtonClick}
              className="relative flex items-center justify-center space-x-2 bg-gradient-to-r from-[#DB5A42] to-[#C94A3B] md:text-sm 2xl:text-base text-white px-6 md:px-8 2xl:px-10 py-1 md:py-1.5 2xl:py-2 rounded-lg hover:from-[#C95440] hover:to-[#B8432A] drop-shadow-lg transition-all duration-200 transform hover:scale-105 active:translate-x-1 active:translate-y-1 active:scale-95 border-2 border-[#DB5A42] hover:border-[#C95440]"
              aria-label="Contactarme"
            >
              <span>Let's Talk</span>
              <svg className="h-5 w-auto transition-transform duration-200 group-hover:rotate-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M8 10.5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 14H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Mobile Section */}
          <div className={`md:hidden flex items-center ${
            hasLoaded ? 'animate-slide-in-right' : 'opacity-0'
          }`}
          style={{
            animationDelay: hasLoaded ? '0.5s' : '0s',
            animationFillMode: 'both'
          }}>
            {/* Mobile Contact Button */}
            <div className="relative mr-6">
              <div
                className="absolute top-1.5 left-1.5 w-full h-full bg-[#2B2B2B] rounded-lg"
                aria-hidden="true"
              />
              <button
                type="button"
                onClick={handleButtonClick}
                className="relative flex items-center justify-center space-x-2 bg-gradient-to-r from-[#DB5A42] to-[#C94A3B] text-white px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:translate-x-1.5 active:translate-y-1.5 active:scale-95 border-2 border-[#DB5A42]"
                aria-label="Contactarme"
              >
                <span>Let's Talk</span>
                <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M8 10.5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M8 14H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Hamburger Menu */}
            <button
              className="z-50 relative focus:outline-none focus:ring-2 focus:ring-[#DB5A42] focus:ring-opacity-50 rounded p-1 mt-0.5 hover:scale-110 transition-transform duration-200"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="space-y-1">
                <span className={`block w-8 h-1 bg-[#DB5A42] transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}/>
                <span className={`block w-8 h-1 bg-[#DB5A42] transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}/>
                <span className={`block w-8 h-1 bg-[#DB5A42] transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}/>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          id="mobile-menu"
          className={`fixed inset-0 bg-gradient-to-br from-[rgba(156,102,68,0.95)] via-[rgba(94,59,28,0.9)] to-[rgba(43,26,15,0.85)] z-40 transition-all duration-500 backdrop-blur-md ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className={`flex flex-col items-center justify-center h-full space-y-12 text-4xl transition-all duration-700 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 id="mobile-menu-title" className="sr-only">Menú de navegación</h2>
            {navSections.map((section, index) => (
              <button
                key={section}
                onClick={() => handleSelect(section)}
                className={`font-lt-soul transform transition-all duration-300 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FFD275] focus:ring-opacity-50 rounded px-4 py-2 ${
                  activeSection === section ? 'text-[#FFD275] scale-105' : 'text-[#FFD275]/70'
                }`}
                style={{
                  animationDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
                }}
                aria-current={activeSection === section ? 'page' : undefined}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;