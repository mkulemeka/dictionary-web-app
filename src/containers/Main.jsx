import { useContext, useState } from "react";

import { DictionaryContext } from "../context/DictionaryProvider";
import Header from "../components/Header";
import Layout from "./Layout";
import Search from "../components/Search";
import styles from "../styles/App.module.css";
import useAxios from "../hooks/useAxios";

const Main = () => {
  const [word, setWord] = useState("");
  const { isDarkMode, setIsDarkMode, font } = useContext(DictionaryContext);
  const { data, loading, error } = useAxios(word);

  /**
   * Updates the font style based on the current font
   * @returns {string} - The current font style
   */
  const currentFont = () => {
    if (font === "Serif") return styles.serif;
    if (font === "Mono") return styles.mono;
    return styles.sansSerif;
  };

  if (loading) return <p>Loading...</p>;

  return (
    <main
      className={`${styles.main} ${
        isDarkMode ? styles.dark : styles.light
      } ${currentFont()}`}
    >
      <Header />
      <Search setWord={setWord} />
      <Layout wordObject={data[0]} />
    </main>
  );
};

export default Main;
