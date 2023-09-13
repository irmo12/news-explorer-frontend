import React, { createContext, useState, useEffect } from 'react';

const SmallScreenContext = createContext();

const SmallScreenProvider = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 550px)');

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
    <SmallScreenContext.Provider value={{ isSmallScreen,setIsSmallScreen }}>
      {children}
    </SmallScreenContext.Provider>
  );
};

export { SmallScreenContext, SmallScreenProvider };