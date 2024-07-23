import { PartOfSpeech, Source, WordAudio } from "../components";

import PropTypes from "prop-types";

const Layout = ({ wordObject }) => {
  const { word, phonetics, meanings, sourceUrls } = wordObject;
  return (
    <section>
      <WordAudio word={word} phonetics={phonetics} />
      {meanings.map((meaning, index) => (
        <PartOfSpeech key={meaning.partOfSpeech + index} meaning={meaning} />
      ))}
      <br />
      <Source sourceUrls={sourceUrls} />
    </section>
  );
};

Layout.propTypes = {
  wordObject: PropTypes.object.isRequired,
};

export default Layout;
