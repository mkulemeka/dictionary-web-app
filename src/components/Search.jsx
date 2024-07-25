import { useRef, useState } from "react";

import PropTypes from "prop-types";
import searchIcon from "../assets/images/icon-search.svg";
import styles from "../styles/Search.module.css";

const Search = ({ isDarkMode, setWord, currentFont }) => {
  const [formError, setFormError] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.length <= 0) {
      setFormError(true);
      return;
    }
    setWord(inputRef.current.value);
  };

  const handleChange = () => {
    setFormError(false);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchContainer}>
      <div className={styles.searchbarContainer}>
        <input
          type="text"
          ref={inputRef}
          className={`${styles.searchbar} ${formError && styles.empty_search} ${
            isDarkMode ? styles.dark : styles.light
          } ${currentFont()}`}
          onChange={handleChange}
          placeholder="Search for a word..."
        />
        <button type="submit" className={styles.searchButton}>
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </div>
      {formError && (
        <p className={styles.errorText}>{"Whoops, can't be empty..."}</p>
      )}
    </form>
  );
};

Search.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setWord: PropTypes.func.isRequired,
  currentFont: PropTypes.func.isRequired,
};

export default Search;
