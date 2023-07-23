import React, { createContext, useState, useEffect } from 'react';

export const SmallScreenContext = createContext();

export const SmallScreenProvider = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleMediaQueryChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <SmallScreenContext.Provider value={isSmallScreen}>
      {children}
    </SmallScreenContext.Provider>
  );
};
