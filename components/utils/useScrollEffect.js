// useScrollTranslate.js

import { useState, useEffect } from 'react';

const useScrollTranslate = (threshold) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('');
  const [isVisible, setVisible] = useState(true); // Initialize visibility state

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollY && currentScrollY > threshold) {
        setScrollDirection('down');
      } else if (currentScrollY < scrollY) {
        setScrollDirection('up');
      }

      setScrollY(currentScrollY);

      // Check if we're at the top of the page
      if (currentScrollY === 0) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY, threshold]);

  useEffect(() => {
    let timeoutId;

    const handleScrollDirection = () => {
      if (scrollDirection === "down") {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setVisible(false);
        }, 200);
      }
    };

    handleScrollDirection();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [scrollDirection]);

  return { isVisible, scrollDirection };
};

export default useScrollTranslate;
