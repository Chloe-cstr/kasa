import Image from '../../assets/image_source.png'
import './Banner.scss'

const Banner = () => {
    return(
        <div className="banner">
            <img src={Image} alt="Image de la mer" className='banner__image'/>
            <div className="banner__title">
                <h1 className='banner__title__textContent'>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    );
};

export default Banner;