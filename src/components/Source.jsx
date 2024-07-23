import PropTypes from "prop-types";
import sourceIcon from "../assets/images/icon-new-window.svg";
const Source = ({ sourceUrls }) => {
  const [source] = sourceUrls;
  return (
    <div>
      <h3>Source</h3>
      <a href={source} target="_blank" rel="noreferrer">
        {source}
        <img src={sourceIcon} alt="source icon" />
      </a>
    </div>
  );
};

Source.propTypes = {
  sourceUrls: PropTypes.array.isRequired,
};

export default Source;
