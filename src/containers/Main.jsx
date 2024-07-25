import { useContext, useState } from "react";

import { DictionaryContext } from "../context/DictionaryProvider";
import Header from "../components/Header";
import Layout from "./Layout";
import Search from "../components/Search";
import styles from "../styles/App.module.css";
import useAxios from "../hooks/useAxios";

const Main = () => {
  const [word, setWord] = useState("");
  const { isDarkMode, currentFont } = useContext(DictionaryContext);
  const { data, loading, error } = useAxios(word);


  if (loading) return <p>Loading...</p>;

  return (
    <main
      className={`${styles.main} ${
        isDarkMode ? styles.dark : styles.light
      } ${currentFont()}`}
    >
      <Header />
      <Search setWord={setWord} isDarkMode={isDarkMode} currentFont={currentFont}/>
      <Layout wordObject={data[0]} />
    </main>
  );
};

export default Main;
