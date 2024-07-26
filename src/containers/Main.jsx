import { Header, Search, SearchError } from "../components";
import { useContext, useState } from "react";

import { DictionaryContext } from "../context/DictionaryProvider";
import Layout from "./Layout";
import styles from "../styles/App.module.css";
import useAxios from "../hooks/useAxios";

const Main = () => {
  const [word, setWord] = useState("");
  const { isDarkMode, currentFont } = useContext(DictionaryContext);
  const { data, loading, error } = useAxios(word);

  // Combine styles based on dark mode and current font
  const mainClass = `${styles.main} ${
    isDarkMode ? styles.dark : styles.light
  } ${currentFont()}`;

  const renderContent = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <SearchError error={error} />;
    if (data.length) return <Layout wordObject={data[0]} />;
  };

  return (
    <main className={mainClass}>
      <section className={styles.container}>
        <Header />
        <Search
          setWord={setWord}
          isDarkMode={isDarkMode}
          currentFont={currentFont}
        />
        {renderContent()}
      </section>
    </main>
  );
};

export default Main;
