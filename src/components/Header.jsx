import { FontSwitcher, ThemeToggle } from "../components";

import { DictionaryContext } from "../context/DictionaryProvider";
import logo from "../assets/images/logo.svg";
import styles from "../styles/Header.module.css";
import { useContext } from "react";

const Header = () => {
  const { isDarkMode, font, setIsDarkMode, setFont, currentFont } =
    useContext(DictionaryContext);
  return (
    <header className={styles.header}>
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <section className={styles.section}>
        <FontSwitcher
          font={font}
          isDarkMode={isDarkMode}
          setFont={setFont}
          currentFont={currentFont}
        />
        <div className={styles.dividerLine}></div>
        <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </section>
    </header>
  );
};

export default Header;
