import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.webp';
import '../fonts.css';

function Navbar() {
  const [showLogoAndButton, setShowLogoAndButton] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const sections = ['Home', 'About', 'Projects', 'Tech-Stack'];

      let closestSection = '';
      let minDistance = Infinity;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const windowCenter = window.innerHeight / 2;
          const distance = Math.abs(sectionCenter - windowCenter);

          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        }
      });

      setActiveSection(closestSection);

      if (scrollTop > lastScrollTop) {
        if (!isScrollingDown) {
          setIsScrollingDown(true);
          if (scrollTimeout) {
            clearTimeout(scrollTimeout);
          }
          const newTimeout = setTimeout(() => {
            setShowLogoAndButton(false);
          }, 4000);
          setScrollTimeout(newTimeout);
        }
      } else {
        setIsScrollingDown(false);
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
        setShowLogoAndButton(true);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout, isScrollingDown]);

  const handleSelect = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleButtonClick = () => {
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-transparent fixed top-0 left-0 right-0 z-40">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center transition-transform duration-500">
        <a href="https://github.com/PabloFabbian" target="_blank" rel="noopener noreferrer">
          <div className={`flex items-center mx-0 md:mx-12 hover:translate-y-1 transition-transform duration-500 ${showLogoAndButton ? 'translate-y-0' : '-translate-y-24'}`}>
            <img src={Logo} alt="Logo" className="mr-1 mt-0.5 h-[3.8rem] w-auto drop-shadow-lg" />
            <div className="hidden md:inline">
              <span className="text-gradient-PF block font-black text-3xl -mb-2 drop-shadow-lg">PF</span>
              <span className="text-gradient-PF block font-black text-3xl drop-shadow-lg">Portfolio</span>
            </div>
          </div>
        </a>

          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex bg-gradient-to-r from-[#9C6644] to-[#9C6649] pt-3 pb-2 px-32 rounded-full text-lg text-[#EDE0D4] space-x-32 drop-shadow-lg">
              {['Home', 'Projects', 'About', 'Tech-Stack'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleSelect(section)}
                  className={`relative group flex items-center font-lt-soul ${activeSection === section ? 'text-[#FFD275]' : ''}`}
                >
                  {section}
                  <span
                    className={`absolute left-1/2 bottom-0.5 w-full h-0.5 transition-transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 origin-center rounded-full ${activeSection === section ? 'bg-[#FFD275] scale-x-100' : 'bg-[#EDE0D4]'}`}
                  ></span>
                </button>
              ))}
            </div>
          </div>

          {/* Button for Desktop */}
          <div className={`relative inline-block mx-12 transition-all hidden md:inline ${showLogoAndButton ? 'translate-y-0' : '-translate-y-24'}`}>
            {/* Div que actúa como sombra */}
            <div
              className="absolute top-1 left-1 w-full h-full bg-[#2B2B2B] rounded-lg"
              aria-hidden="true"
            ></div>

            {/* Botón que se hunde hacia la sombra */}
            <button
              type="button"
              onClick={handleButtonClick}
              className={`relative bg-[#DB5A42] text-white px-12 py-2 rounded-lg hover:bg-[#C95440] hover:border-[#C95440] drop-shadow-lg transition-all duration-200 transform active:translate-x-1 active:translate-y-1 active:scale-95`}
              style={{ border: '2px solid #DB5A42' }}
            >
              Let's Talk
            </button>
          </div>

          {/* Burger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            {/* Botón Let's Talk con animación de hundimiento */}
            <div className="relative mr-6">
              <div
                className="absolute top-1.5 left-1.5 w-full h-full bg-[#2B2B2B] rounded-lg"
                aria-hidden="true"
              ></div>
              <button
                type="button"
                onClick={handleButtonClick}
                className="relative bg-[#DB5A42] text-white px-6 py-2 rounded-lg transition-all duration-200 transform active:translate-x-1.5 active:translate-y-1.5 active:scale-95"
                style={{ border: '2px solid #DB5A42' }}
              >
                Let's Talk
              </button>
            </div>

            {/* Botón de hamburguesa */}
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

        {/* Mobile Menu Overlay */}
        <div className={`fixed top-0 left-0 w-full h-full bg-[rgba(156,102,68,0.9)] z-40 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-12 text-3xl text-[#FFD275]">
            {['Home', 'Projects', 'About', 'Tech-Stack'].map((section) => (
              <button
                key={section}
                onClick={() => handleSelect(section)}
                className={`font-lt-soul ${activeSection === section ? 'text-[#FFD275]' : ''}`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;