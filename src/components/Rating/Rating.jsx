import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';
import PropTypes from 'prop-types';
import './rating.scss';

const Rating = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <img
            key={index}
            src={ratingValue <= rating ? redStar : greyStar}
            alt="star"
            className="rating"
          />
        );
      })}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
