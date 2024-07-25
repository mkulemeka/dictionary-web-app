import { createContext, useState } from "react";

import PropTypes from "prop-types";
import styles from "../styles/App.module.css";

const DictionaryContext = createContext();

const DictionaryProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [font, setFont] = useState("Sans Serif");

  /**
   * Updates the font style based on the current font
   * @returns {string} - The current font style
   */
  const currentFont = () => {
    if (font === "Serif") return styles.serif;
    if (font === "Mono") return styles.mono;
    return styles.sansSerif;
  };

  const contextValue = {
    isDarkMode,
    setIsDarkMode,
    font,
    setFont,
    currentFont
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
