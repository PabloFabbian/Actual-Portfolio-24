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
    {children}
  </div>
);

export default DesktopNav;