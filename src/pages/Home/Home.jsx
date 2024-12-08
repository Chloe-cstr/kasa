import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import HomeImage from '../../assets/Image_home.png';
import './home.scss';

const Home = () => {
  return (
    <div className="body-container">
      <Header />
      <Banner
        image={HomeImage}
        text={
          <>
            Chez vous,
            <br className="hidden-break" /> partout et ailleurs
          </>
        }
        className="banner__home"
      />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
