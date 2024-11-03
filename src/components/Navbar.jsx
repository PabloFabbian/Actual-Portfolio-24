import React, { useState, useEffect, useCallback } from 'react';
import Logo from '../assets/Logo.webp';
import '../fonts.css';

const Navbar = React.memo(() => {
  const [showLogoAndButton, setShowLogoAndButton] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    let scrollTimeout;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const sections = ['Home', 'About', 'Projects', 'Tech-Stack'];

      let closestSection = '';
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

      if (scrollTop > lastScrollTop) {
        setIsScrollingDown(true);
        if (showLogoAndButton) {
          setShowLogoAndButton(false);
          if (scrollTimeout) clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => setShowLogoAndButton(true), 4000);
        }
      } else if (scrollTop < lastScrollTop) {
        setIsScrollingDown(false);
        setShowLogoAndButton(true);
        if (scrollTimeout) clearTimeout(scrollTimeout);
      }
      
      lastScrollTop = Math.max(scrollTop, 0);
    };

    const debouncedHandleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 50);
    };

    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [showLogoAndButton]);

  const handleSelect = useCallback((section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  }, []);

  const handleButtonClick = () => {
    document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-transparent fixed top-0 left-0 right-0 z-40">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center transition-transform duration-500">
        <a href="https://github.com/PabloFabbian" target="_blank" rel="noopener noreferrer" aria-label="Github Profile">
          <div className={`flex items-center mx-0 md:mx-12 hover:scale-105 transition-transform duration-500 ${showLogoAndButton ? 'translate-y-0' : '-translate-y-24'}`}>
            <img src={Logo} alt="Logo" className="mr-1 mt-0.5 h-14 2xl:h-[3.8rem] w-auto drop-shadow-lg" />
            <div className="hidden md:inline">
              <span className="text-gradient-PF block font-black text-2xl 2xl:text-3xl -mb-2 drop-shadow-lg">PF</span>
              <span className="text-gradient-PF block font-black text-2xl 2xl:text-3xl drop-shadow-lg">Portfolio</span>
            </div>
          </div>
        </a>

          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex bg-gradient-to-r from-[#7B4C33]/80 to-[#7B4C35]/80 mt-1 2xl:mt-1.5 pt-2 2xl:pt-3 pb-1.5 2xl:pb-2 px-20 2xl:px-32 rounded-full text-base 2xl:text-lg text-[#EDE0D4] space-x-24 2xl:space-x-32 drop-shadow">
              {['Home', 'Projects', 'About', 'Tech-Stack'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleSelect(section)}
                  className={`relative group flex items-center font-lt-soul ${activeSection === section ? 'text-[#FFD275]' : ''}`}
                  aria-label={`Go to ${section}`}
                >
                  {section}
                  <span
                    className={`absolute left-1/2 bottom-0.5 w-full h-0.5 transition-transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 origin-center rounded-full ${activeSection === section ? 'bg-[#FFD275] scale-x-100' : 'bg-[#EDE0D4]'}`}
                  ></span>
                </button>
              ))}
            </div>
          </div>

          <div className={`relative inline-block mx-12 transition-all hidden md:inline duration-500 ${showLogoAndButton ? 'translate-y-0' : '-translate-y-24'}`}>
            <div
              className="absolute top-1 left-1 w-full h-full bg-[#2B2B2B] rounded-lg"
              aria-hidden="true"
            ></div>
            <div className="flex-nowrap">
              <button
                type="button"
                onClick={handleButtonClick}
                className={`flex items-center justify-center space-x-2 bg-gradient-to-r from-[#DB5A42] to-[#C94A3B] md:text-sm 2xl:text-base text-white px-6 md:px-8 2xl:px-10 py-1 md:py-1.5 2xl:py-2 rounded-lg hover:bg-[#C95440] hover:border-[#C95440] drop-shadow-lg transition-all duration-100 transform active:translate-x-1 active:translate-y-1 active:scale-95`}
                aria-label="Contact Me"
                style={{ border: '2px solid #DB5A42' }}
              >
                <span>Let's Talk</span>
                <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M8 10.5H16" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path d="M8 14H13.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <div className="relative mr-6">
              <div
                className="absolute top-1.5 left-1.5 w-full h-full bg-[#2B2B2B] rounded-lg"
                aria-hidden="true"
              ></div>
              <button
                type="button"
                onClick={handleButtonClick}
                className="relative flex items-center justify-center space-x-2 bg-[#DB5A42] text-white px-6 py-2 rounded-lg transition-all duration-200 transform active:translate-x-1.5 active:translate-y-1.5 active:scale-95"
                style={{ border: '2px solid #DB5A42' }}
              >
                <span>Let's Talk</span>
                <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M8 10.5H16" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path d="M8 14H13.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"></path>
                    <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"></path>
                  </g>
                </svg>
              </button>
            </div>

            <button
              className="z-50 relative focus:outline-none mt-0.5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                <span className="block w-8 h-1 bg-[#DB5A42] mb-1 transition-transform duration-300"></span>
                <span className="block w-8 h-1 bg-[#DB5A42] mb-1 transition-transform duration-300"></span>
                <span className="block w-8 h-1 bg-[#DB5A42] transition-transform duration-300"></span>
              </div>
            </button>
          </div>
        </div>

        <div className={`fixed top-0 left-0 w-full h-full bg-gradient-to-br from-[rgba(156,102,68,0.8)] via-[rgba(94,59,28,0.7)] to-[rgba(43,26,15,0.6)] z-40 transition-transform duration-500 transform ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'} backdrop-blur-sm`}>
          <div className="flex flex-col items-center justify-center h-full space-y-12 text-4xl text-[#FFD275]">
            {['Home', 'Projects', 'About', 'Tech-Stack'].map((section, index) => (
              <button
                key={section}
                onClick={() => handleSelect(section)}
                className={`font-lt-soul transform transition-transform duration-300 hover:scale-105 ${activeSection === section ? 'text-[#FFD275]' : 'text-[#FFD275]/70'} fade-in`}
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

export default Navbar;