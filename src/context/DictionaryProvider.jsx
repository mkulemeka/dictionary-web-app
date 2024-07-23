import { createContext, useState } from "react";

import PropTypes from "prop-types";

const DictionaryContext = createContext();

const DictionaryProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [font, setFont] = useState("Sans Serif");

  const contextValue = {
    isDarkMode,
    setIsDarkMode,
    font,
    setFont,
  };

  return (
    <DictionaryContext.Provider value={contextValue}>
      {children}
    </DictionaryContext.Provider>
  );
};

DictionaryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DictionaryContext, DictionaryProvider };
