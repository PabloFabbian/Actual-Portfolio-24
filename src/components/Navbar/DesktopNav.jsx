import React from 'react';
import LanguageSelector from './LanguageSelector';
import { NAV_SECTIONS } from './navbarConstants';

const DesktopNav = ({ 
  hasLoaded, 
  activeSection, 
  handleSelect, 
  currentLanguage, 
  handleLanguageChange,
  showLogoAndButton,
  children 
}) => (
  <div className={`hidden md:flex flex-1 justify-center items-center ${
    hasLoaded ? 'animate-slide-in-down' : 'opacity-0'
  }`} style={{ animationDelay: hasLoaded ? '0.4s' : '0s', animationFillMode: 'both' }}>
    <div className="flex items-center bg-gradient-to-r from-[#7B4C33]/80 to-[#7B4C35]/80 mt-1 2xl:mt-1.5 pt-2 md:pt-1.5 2xl:pt-2.5 pb-2 md:pb-1 2xl:pb-2 px-4 sm:px-6 md:pl-16 md:pr-12 2xl:pl-20 2xl:pr-[4.5rem] rounded-full text-sm sm:text-base md:text-base lg:text-sm 2xl:text-lg text-[#EDE0D4] space-x-2 sm:space-x-3 md:space-x-20 lg:space-x-10 xl:space-x-14 2xl:space-x-20 drop-shadow backdrop-blur-sm">
      {NAV_SECTIONS.map((section, index) => (
        <button
          key={section}
          onClick={() => handleSelect(section)}
          className={`relative group flex items-center font-lt-soul transition-all duration-200 hover:text-[#FFD275] hover:scale-105 whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-sm 2xl:text-lg ${
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
        <div className="w-px h-4 sm:h-5 md:h-6 lg:h-6 2xl:h-6 bg-[#EDE0D4]/30 mr-2 sm:mr-3 md:mr-4 lg:mr-6 xl:mr-8 2xl:mr-12" />
        <div className="relative -mt-0.5">
          <LanguageSelector 
            currentLanguage={currentLanguage} 
            onLanguageChange={handleLanguageChange}
            hasLoaded={hasLoaded}
          />
        </div>
      </div>
    </div>
    {children}
  </div>
);

export default DesktopNav;