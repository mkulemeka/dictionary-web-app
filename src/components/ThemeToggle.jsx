import { LuMoon, LuSun } from "react-icons/lu";

import PropTypes from "prop-types";
import styles from "../styles/ThemeToggle.module.css";

const ThemeToggle = ({ isDarkMode, setIsDarkMode }) => {
  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className={styles.toggleContainer}>
      <div className={styles.buttonContainer}>
        <input
          type="checkbox"
          id="themeToggle"
          className={styles.input}
          onClick={handleThemeToggle}
        />
        <label
          htmlFor="themeToggle"
          className={`${styles.button} ${isDarkMode ? styles.dark : styles.light}`}
        ></label>
      </div>
      <figure className={`${styles.icon} ${isDarkMode ? styles.icon_moon : ""}`}>
        {isDarkMode ? <LuMoon /> : <LuSun />}
      </figure>
    </div>
  );
};

ThemeToggle.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
};

export default ThemeToggle;
