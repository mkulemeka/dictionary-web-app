import { useContext, useState } from "react";

import { DictionaryContext } from "../context/DictionaryProvider";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import styles from "../styles/FontSwitcher.module.css";

const fonts = ["Sans Serif", "Serif", "Mono"];
const FontSwitcher = () => {
  const { font, setFont, isDarkMode } = useContext(DictionaryContext);
  const [showOptions, setShowOptions] = useState(false);

  const showFontOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleFontChange = (newFont) => {
    setFont(newFont);
    setShowOptions(false);
  };

  return (
    <div
      className={`${styles.fontSwitcher} ${isDarkMode ? styles.dark : styles.light}`}
    >
      <button
        className={`${styles.fontSwitcherButton} ${styles.button}`}
        onClick={showFontOptions}
        aria-label="Select font"
      >
        <span>{font}</span>
        <img src={arrowDown} alt="arrow down" />
      </button>
      {showOptions && (
        <div className={styles.buttonContainer}>
          {fonts.map((fontItem, index) => (
            <button
              key={fontItem + index}
              className={styles.button}
              aria-label={`Select ${fontItem}`}
              onClick={({ target }) => handleFontChange(target.innerText)}
            >
              {fontItem}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FontSwitcher;
