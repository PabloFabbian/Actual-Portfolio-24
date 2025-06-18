import { useEffect } from 'react';

const useClickOutside = (callback) => {
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.language-selector')) callback();
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [callback]);
};

export default useClickOutside;