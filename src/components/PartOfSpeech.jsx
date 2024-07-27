import { DictionaryContext } from "../context/DictionaryProvider";
import PropTypes from "prop-types";
import styles from "../styles/PartOfSpeech.module.css";
import { useContext } from "react";
const PartOfSpeech = ({ meaning }) => {
  const { isDarkMode } = useContext(DictionaryContext);
  const { partOfSpeech, definitions, synonyms } = meaning;
  return (
    <section className={styles.partOfSpeech}>
      <section className={styles.heading}>
        <h2>{partOfSpeech}</h2>
        <div
          className={`${styles.line} ${isDarkMode ? styles.dark : styles.light}`}
        ></div>
      </section>
      <section className={styles.meaningSection}>
        <h3>Meaning</h3>
        <ul className={styles.definitions}>
          {definitions.slice(0, 4).map((def, index) => (
            <li key={def.definition[0] + index}>
              {def?.definition}
              {def.example && <blockquote>{`"${def.example}"`}</blockquote>}
            </li>
          ))}
        </ul>
      </section>
      {synonyms.length ? (
        <section className={styles.synonyms}>
          <h3>Synonyms</h3>
          <span>{synonyms.slice(0, 10).join(", ")}</span>
        </section>
      ) : (
        <></>
      )}
    </section>
  );
};

PartOfSpeech.propTypes = {
  meaning: PropTypes.object.isRequired,
};

export default PartOfSpeech;
