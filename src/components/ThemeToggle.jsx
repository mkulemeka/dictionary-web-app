import { LuMoon, LuSun } from "react-icons/lu";

import PropTypes from "prop-types";

const ThemeToggle = ({ setIsDarkMode }) => {
  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return <button onClick={handleThemeToggle}>ThemeToggle</button>;
};

ThemeToggle.propTypes = {
  setIsDarkMode: PropTypes.func.isRequired,
};

export default ThemeToggle;
