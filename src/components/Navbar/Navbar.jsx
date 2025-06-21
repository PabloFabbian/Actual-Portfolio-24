import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import Logo from '../../assets/Logo.webp';
import GitHubPreview from '../../assets/github-preview.png';
import '../../fonts.css';

import LanguageSelector from './LanguageSelector';
import RotatingText from './RotatingText';
import GitHubPreviewCard from './GitHubPreviewCard';
import ContactButton from './ContactButton';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import MobileMenu from './MobileMenu';

import { LANGUAGES, ROTATING_TEXTS, SECTIONS, NAV_SECTIONS } from './navbarConstants';

import useClickOutside from '../../hooks/useClickOutside';
import useScrollHandler from '../../hooks/useScrollHandler';

const Navbar = React.memo(() => {
  const [activeSection, setActiveSection] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const [showPreview, setShowPreview] = useState(false);
  const hoverTimeoutRef = useRef(null);

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

  const { showLogoAndButton, isScrollingDown } = useScrollHandler(updateActiveSection);

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

  const handlePreviewHover = useCallback((show) => {
    clearTimeout(hoverTimeoutRef.current);
    if (show) {
      setShowPreview(true);
    } else {
      hoverTimeoutRef.current = setTimeout(() => setShowPreview(false), 300);
    }
  }, []);

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

  // Determinar si el navbar debe estar visible
  const isNavbarVisible = hasLoaded && !isScrollingDown;

  return (
    <>
      <nav className={`bg-transparent fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isNavbarVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="container mx-auto px-4 py-3 flex items-center">
          <div className="flex-shrink-0 w-full md:w-[280px] 2xl:w-[320px] relative">
            <a 
              href="https://github.com/PabloFabbian" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center mx-0 md:mx-12 hover:scale-105 transition-all duration-500 ${
                showLogoAndButton ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
              } ${hasLoaded ? 'animate-slide-in-left' : ''} md:bg-transparent md:backdrop-blur-none backdrop-blur-sm bg-gradient-to-r md:bg-none from-white/20 to-[#7B4C33]/15 border border-white/15 rounded-xl md:rounded-none pl-3 py-1 md:pl-0 md:py-0`}
              style={{ animationDelay: hasLoaded ? '0.2s' : '0s', animationFillMode: 'both' }}
              onMouseEnter={() => handlePreviewHover(true)}
              onMouseLeave={() => handlePreviewHover(false)}
            >
              <img src={Logo} alt="PF Portfolio Logo" className="mr-1 -ml-1 mt-0.5 h-14 2xl:h-[3.8rem] w-auto drop-shadow-lg" />
              <RotatingText hasLoaded={hasLoaded} isInsideSharedContainer={true} />
            </a>

            <GitHubPreviewCard 
              isVisible={showPreview}
              onMouseEnter={() => handlePreviewHover(true)}
              onMouseLeave={() => handlePreviewHover(false)}
            />
          </div>

          <DesktopNav 
            hasLoaded={hasLoaded}
            activeSection={activeSection}
            handleSelect={handleSelect}
            currentLanguage={currentLanguage}
            handleLanguageChange={handleLanguageChange}
            showLogoAndButton={showLogoAndButton}
          >
            <ContactButton 
              handleContactClick={handleContactClick}
              showLogoAndButton={showLogoAndButton}
              hasLoaded={hasLoaded}
            />
          </DesktopNav>

          <MobileNav 
            hasLoaded={hasLoaded}
            handleContactClick={handleContactClick}
            setIsMenuOpen={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            isScrollingDown={isScrollingDown}
          />
        </div>

        <MobileMenu 
          isMenuOpen={isMenuOpen}
          activeSection={activeSection}
          handleSelect={handleSelect}
        />
      </nav>
    </>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;