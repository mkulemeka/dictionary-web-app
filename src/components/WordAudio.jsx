import PropTypes from "prop-types";
import playIcon from "../assets/images/icon-play.svg";
import styles from "../styles/WordAudio.module.css";
const WordAudio = ({ word, phonetics }) => {
  const phonetic = phonetics.at(-1) ?? { text: "", audio: "" };
  
  const handleAudioPlay = () => {
    const audio = document.getElementById("word-audio");
    audio.play();
  };

  return (
    <section className={styles.section}>
      <div className={styles.div}>
        <h1>{word}</h1>
        <small>{phonetic.text}</small>
      </div>
      <figure>
        <button className={styles.playButton} onClick={handleAudioPlay} onKeyDown={handleAudioPlay}>
          <img src={playIcon} alt="Play Icon" />
        </button>
        <audio src={phonetic.audio} id="word-audio">
          <track kind="captions" src="" />
        </audio>
      </figure>
    </section>
  );
};

WordAudio.propTypes = {
  word: PropTypes.string.isRequired,
  phonetics: PropTypes.array.isRequired,
};

export default WordAudio;
