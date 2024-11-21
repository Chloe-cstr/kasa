import './Banner.scss'
import PropTypes from 'prop-types'


const Banner = ({image, text, className}) => {
    return(
        <div className="banner">
            <img src={image} alt="Image de la mer" className={className}/>
            <div className="banner__title">
                <h1 className='banner__title__textContent'>{text}</h1>
            </div>
        </div>
    );
};

Banner.propTypes = {
    image: PropTypes.string.isRequired, 
    text: PropTypes.string,            
    className : PropTypes.string.isRequired
};

export default Banner;