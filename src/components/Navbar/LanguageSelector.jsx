import React, { useState, useEffect } from 'react';
import { LANGUAGES } from './navbarConstants';
import useClickOutside from '../../hooks/useClickOutside';

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

export default LanguageSelector;