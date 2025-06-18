import React from 'react';

const ContactButton = ({ handleContactClick, showLogoAndButton, hasLoaded, isMobile = false }) => (
  <div className={`relative ${isMobile ? '' : 'inline-block mx-12'} transition-all duration-500 ${
    !isMobile && (showLogoAndButton ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0')
  } ${hasLoaded ? 'animate-slide-in-right' : 'opacity-0'}`}
  style={{
    animationDelay: hasLoaded ? '0.8s' : '0s',
    animationFillMode: 'both'
  }}>
    {!isMobile && <div className="absolute top-1 left-1 w-full h-full bg-[#2B2B2B] rounded-lg" />}
    {isMobile && <div className="absolute top-1.5 left-1.5 w-full h-full bg-[#2B2B2B] rounded-lg" />}
    <button
      onClick={handleContactClick}
      className={`relative flex items-center justify-center space-x-2 bg-gradient-to-r from-[#DB5A42] to-[#C94A3B] text-white px-6 py-2 rounded-lg hover:from-[#C95440] hover:to-[#B8432A] transition-all duration-200 transform hover:scale-105 border-2 border-[#DB5A42] hover:border-[#C95440] ${
        isMobile ? 'active:translate-x-1.5 active:translate-y-1.5 active:scale-95' : 'active:translate-x-1 active:translate-y-1 active:scale-95'
      }`}
    >
      <span className={isMobile ? '' : 'whitespace-nowrap'}>Let's Talk</span>
      <svg className="h-5 w-auto transition-transform duration-200 group-hover:rotate-3" viewBox="0 0 24 24" fill="none">
        <path d="M8 10.5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 14H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </button>
  </div>
);

export default ContactButton;