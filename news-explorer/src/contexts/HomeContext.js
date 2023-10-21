import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

const HomeContext = createContext();

const HomeProvider = ({ children }) => {
    const location = useLocation();
  const [isHome, setHome] = useState(location.pathname==='/');

  return (
    <HomeContext.Provider value={{ isHome, setHome }}>
      {children}
    </HomeContext.Provider>
  );
};

export { HomeContext, HomeProvider };
