// useScrollTranslate.js

import { useState, useEffect } from 'react';

const useScrollTranslate = (threshold) => {
  const [scrollY, setScrollY] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > threshold) {
      setTranslateY(-12);
    } else {
      setTranslateY(0);
    }
  }, [scrollY, threshold]);

  return translateY;
};

export default useScrollTranslate;
