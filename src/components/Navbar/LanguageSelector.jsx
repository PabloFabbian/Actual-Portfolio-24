import React, { useState, useEffect } from 'react';
import { LANGUAGES } from './navbarConstants';
import useClickOutside from '../../hooks/useClickOutside';

const LanguageSelector = ({ currentLanguage, onLanguageChange, hasLoaded }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = LANGUAGES.find(lang => lang.code === currentLanguage) || LANGUAGES[0];

  const ref = useClickOutside(() => setIsOpen(false));

  return (
    <div className="language-selector relative" ref={ref}>
      {/* Botón principal con mejor responsividad */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative group flex items-center font-lt-soul 
                   transition-all duration-200 hover:text-[#FFD275]
                   ${hasLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: hasLoaded ? '1s' : '0s', animationFillMode: 'both' }}
      >
        <div className="flex items-center 
                        px-2 sm:px-2.5 md:px-3 
                        py-1 sm:py-1 md:py-1 
                        rounded-full group-hover:bg-[#EDE0D4]/20 group-hover:text-[#FFD275] 
                        transition-all duration-300">
          {/* Icono responsivo */}
          <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 
                          mr-0.5 sm:mr-1 md:mr-1" 
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 919-9" />
          </svg>
          <span className="text-sm sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg">
            {currentLang.flag}
          </span>
        </div>
      </button>

      {/* Dropdown mejorado con mejor posicionamiento responsivo */}
      <div className={`absolute top-full mt-2 
                      bg-gradient-to-br from-[#7B4C33]/95 to-[#7B4C35]/95 backdrop-blur-md
                      rounded-lg shadow-xl z-50 transform transition-all duration-300
                      min-w-[140px] sm:min-w-[160px] md:min-w-[180px]
                      right-0 sm:right-0 md:-left-8 lg:-left-12 xl:-left-16
                      ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'}`}>
        {LANGUAGES.map((language) => (
          <button
            key={language.code}
            onClick={() => {
              onLanguageChange(language.code);
              setIsOpen(false);
            }}
            className={`w-full flex items-center 
                       space-x-2 sm:space-x-2.5 md:space-x-3 
                       px-3 sm:px-3.5 md:px-4 
                       py-2.5 sm:py-2.5 md:py-3 
                       text-left transition-all duration-200
                       first:rounded-t-lg last:rounded-b-lg
                       ${currentLanguage === language.code
                         ? 'bg-[#FFD275]/20 text-[#FFD275]'
                         : 'text-[#EDE0D4] hover:bg-[#EDE0D4]/20 hover:text-[#FFD275]'
                       }`}
          >
            <span className="text-sm sm:text-sm md:text-base shrink-0">
              {language.flag}
            </span>
            <span className="text-xs sm:text-sm md:text-sm font-medium truncate">
              {language.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;