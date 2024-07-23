import PropTypes from "prop-types";
const PartOfSpeech = ({ meaning }) => {
  const { partOfSpeech, definitions } = meaning;
  return (
    <section>
      <h2>{partOfSpeech}</h2>
      <div>
        <h3>Meaning</h3>
        <ul>
          {definitions.map((def, index) => (
            <li key={def.definition[0] + index}>
              {def?.definition}
              {def.example && <blockquote>{`"${def.example}"`}</blockquote>}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Synonyms</h3>
      </div>
    </section>
  );
};

PartOfSpeech.propTypes = {
  meaning: PropTypes.object.isRequired,
};

export default PartOfSpeech;
