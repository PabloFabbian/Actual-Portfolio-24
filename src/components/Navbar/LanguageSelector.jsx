import React, { useState, useEffect } from 'react';
import { LANGUAGES } from './navbarConstants';
import useClickOutside from '../../hooks/useClickOutside';

const LanguageSelector = ({ currentLanguage, onLanguageChange, hasLoaded }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = LANGUAGES.find(lang => lang.code === currentLanguage) || LANGUAGES[0];

  const ref = useClickOutside(() => setIsOpen(false));

  return (
    <div className="language-selector relative" ref={ref}>
      {/* Botón principal responsivo que coincide con DesktopNav */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative group flex items-center font-lt-soul 
                   transition-all duration-200 hover:text-[#FFD275]
                   ${hasLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: hasLoaded ? '1s' : '0s', animationFillMode: 'both' }}
      >
        <div className="flex items-center 
                        px-1 sm:px-1.5 md:px-2 lg:px-2.5 xl:px-3 2xl:px-3
                        py-0.5 sm:py-0.5 md:py-1 lg:py-1 xl:py-1 2xl:py-1 mt-0.5
                        rounded-full group-hover:bg-[#EDE0D4]/20 group-hover:text-[#FFD275] 
                        transition-all duration-300">
          {/* Icono responsivo que escala con el navbar */}
          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 2xl:w-5 2xl:h-5
                          mr-0.5 sm:mr-0.5 md:mr-1 lg:mr-1 xl:mr-1 2xl:mr-1" 
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 919-9" />
          </svg>
          <span className="text-xs sm:text-sm md:text-base 2xl:text-lg">
            {currentLang.flag}
          </span>
        </div>
      </button>

      {/* Dropdown responsivo con posicionamiento inteligente */}
      <div className={`absolute top-full mt-1.5 sm:mt-2 md:mt-2 2xl:mt-3
                      bg-gradient-to-br from-[#7B4C33]/65 to-[#7B4C35]/65 backdrop-blur-sm
                      rounded-md sm:rounded-lg md:rounded-lg lg:rounded-lg xl:rounded-lg 2xl:rounded-xl
                      z-50 transform transition-all duration-300
                      min-w-[120px] sm:min-w-[140px] md:min-w-[135px] 2xl:min-w-[185px]
                      right-0 sm:right-0 md:-left-2 lg:-left-4 xl:-left-8 2xl:-left-12
                      ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        {LANGUAGES.map((language) => (
          <button
            key={language.code}
            onClick={() => {
              onLanguageChange(language.code);
              setIsOpen(false);
            }}
            className={`w-full flex items-center 
                       space-x-1.5 sm:space-x-2 md:space-x-2.5 lg:space-x-2.5 xl:space-x-3 2xl:space-x-3
                       px-2 sm:px-2.5 md:px-3 lg:px-3.5 xl:px-4 2xl:px-4
                       py-1.5 sm:py-2 md:py-2 2xl:py-3
                       text-left transition-all duration-200
                       first:rounded-t-md first:sm:rounded-t-lg first:md:rounded-t-lg 
                       last:rounded-b-md last:sm:rounded-b-lg last:md:rounded-b-lg
                       ${currentLanguage === language.code
                         ? 'bg-[#FFD275]/20 text-[#FFD275]'
                         : 'text-[#EDE0D4] hover:bg-[#EDE0D4]/5 hover:text-[#FFD275]'
                       }`}
          >
            <span className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base shrink-0">
              {language.flag}
            </span>
            <span className="text-xs sm:text-xs md:text-xs 2xl:text-base font-normal truncate mt-0.5">
              {language.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;