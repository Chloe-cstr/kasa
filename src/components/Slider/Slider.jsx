import PropTypes from 'prop-types';
import { useState } from 'react';
import './slider.scss';
import Arrow_left from '../../assets/arrow_left.png';
import Arrow_right from '../../assets/arrow_right.png';

const Slider = ({ images }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goBack = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goNext = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="slider">
      <img
        src={images[currentSlideIndex]}
        className="slider__image"
        alt="slide image"
      />

      {images.length !== 1 && (
        <>
          <img
            src={Arrow_left}
            className="slider__arrow slider__arrow--left"
            onClick={goBack}
            alt="Arrow left"
          />
          <img
            src={Arrow_right}
            className="slider__arrow slider__arrow--right"
            onClick={goNext}
            alt="Arrow right"
          />
          <div className="slider__indicator">
            {currentSlideIndex + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
};

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
