import PropTypes from "prop-types";
import styles from "../styles/SearchError.module.css";
const SearchError = ({ error }) => {
  const { title, message, resolution } = error;

  return (
    <section className={styles.section}>
      <span>😕</span>
      <h2>{title}</h2>
      <p>{`${message}. ${resolution}`}</p>
    </section>
  );
};

SearchError.propTypes = {
  error: PropTypes.object,
};

export default SearchError;
