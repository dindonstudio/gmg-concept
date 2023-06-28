// useScrollTranslate.js

import { useState, useEffect } from 'react';

const useScrollTranslate = (threshold) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollY && currentScrollY > threshold) {
        setScrollDirection('down');
        console.log('down')
      } else if (currentScrollY < scrollY && currentScrollY > threshold) {
        setScrollDirection('up');
        console.log('up')

      }

      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY, threshold]);

  return scrollDirection;
};

export default useScrollTranslate;
