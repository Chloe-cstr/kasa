import PropTypes from 'prop-types';
import './tag.scss';

const Tag = ({ text }) => {
  return (
    <div className="tag">
      <p className="tag__title">{text}</p>
    </div>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tag;
