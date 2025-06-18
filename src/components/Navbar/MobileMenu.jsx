import React from 'react';
import { NAV_SECTIONS } from './navbarConstants';

const MobileMenu = ({ isMenuOpen, activeSection, handleSelect }) => (
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
);

export default MobileMenu;