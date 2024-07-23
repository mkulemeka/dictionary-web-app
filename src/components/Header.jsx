import { FontSwitcher, ThemeToggle } from "../components";

import PropTypes from "prop-types";
import logo from "../assets/images/logo.svg";
import styles from "../styles/Header.module.css";

const Header = ({ setIsDarkMode }) => {
  return (
    <header className={styles.header}>
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <section className={styles.section}>
        <FontSwitcher />
        <div className={styles.dividerLine}></div>
        <ThemeToggle setIsDarkMode={setIsDarkMode} />
      </section>
    </header>
  );
};

Header.propTypes = {
  setIsDarkMode: PropTypes.func.isRequired,
};

export default Header;
