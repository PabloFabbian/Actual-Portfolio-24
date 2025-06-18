import { useState, useEffect, useCallback, useRef } from 'react';

const useScrollHandler = (updateActiveSection) => {
  const [showLogoAndButton, setShowLogoAndButton] = useState(true);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollTop = useRef(0);
  const scrollTimeout = useRef(null);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const isScrollingDownNow = scrollTop > lastScrollTop.current;
    
    updateActiveSection();
    
    if (isScrollingDownNow !== isScrollingDown) {
      setIsScrollingDown(isScrollingDownNow);
    }

    if (isScrollingDownNow && showLogoAndButton) {
      setShowLogoAndButton(false);
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => setShowLogoAndButton(true), 3000);
    } else if (!isScrollingDownNow && scrollTop < lastScrollTop.current) {
      setShowLogoAndButton(true);
      clearTimeout(scrollTimeout.current);
    }
    
    lastScrollTop.current = Math.max(scrollTop, 0);
    ticking.current = false;
  }, [showLogoAndButton, isScrollingDown, updateActiveSection]);

  const requestScrollUpdate = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(handleScroll);
      ticking.current = true;
    }
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    return () => {
      window.removeEventListener('scroll', requestScrollUpdate);
      clearTimeout(scrollTimeout.current);
    };
  }, [requestScrollUpdate]);

  return { showLogoAndButton, isScrollingDown };
};

export default useScrollHandler;