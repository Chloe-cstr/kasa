import './Banner.scss';
import PropTypes from 'prop-types';

const Banner = ({ image, text, className }) => {
  return (
    <div className="banner">
      <img src={image} alt="image bannière" className={className} />
      <div className="banner__title">
        <h1 className="banner__title__textContent">{text}</h1>
      </div>
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.node,
  className: PropTypes.string.isRequired,
};

export default Banner;
