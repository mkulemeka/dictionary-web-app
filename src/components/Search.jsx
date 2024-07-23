import PropTypes from "prop-types";
import searchIcon from "../assets/images/icon-search.svg";
import { useRef } from "react";
const Search = ({ setWord }) => {
  const inputRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setWord(inputRef.current.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">
        <img src={searchIcon} alt="Search Icon" />
      </button>
    </form>
  );
};

Search.propTypes = {
  setWord: PropTypes.func.isRequired,
};

export default Search;
