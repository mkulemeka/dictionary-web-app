import PropTypes from "prop-types";
import styles from "../styles/PartOfSpeech.module.css";
const PartOfSpeech = ({ meaning }) => {
  const { partOfSpeech, definitions, synonyms } = meaning;
  return (
    <section className={styles.partOfSpeech}>
      <section className={styles.heading}>
        <h2>{partOfSpeech}</h2>
        <div></div>
      </section>
      <section className={styles.meaningSection}>
        <h3>Meaning</h3>
        <ul className={styles.definitions}>
          {definitions.slice(0,4).map((def, index) => (
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
          <span>{synonyms.join(", ")}</span>
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
