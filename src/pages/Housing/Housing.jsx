import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import Tag from '../../components/Tag/Tag';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse/Collapse';
import { useParams } from 'react-router-dom';
import data from '../../data/data.json';
import { Navigate } from 'react-router-dom';
import './housing.scss';

function Housing() {
  const { id } = useParams(); // Récupération de l'id depuis l'URL
  console.log("ID récupéré depuis l'URL :", id);
  const housingData = data.find((housing) => housing.id === id);
  const hostData = housingData.host;
  const tagData = housingData.tags;
  const ratingData = housingData.rating;

  if (!housingData) {
    return <Navigate to="*" />;
  }

  return (
    <div className="body-container">
      <Header />
      <Slider images={housingData.pictures} />

      <div className="info">
        <div className="info__content">
          <div className="info__content__title">
            <h2 className="info__content__title__description">
              {housingData.title}
            </h2>
            <p className="info__content__title__location">
              {housingData.location}
            </p>
          </div>
          <div className="info__content__tag">
            {tagData.map((item, index) => (
              <Tag key={index} text={item} />
            ))}
          </div>
        </div>

        <div className="info__element">
          <div className="info__element__host">
            <p className="info__element__host__name">{hostData.name}</p>
            <img
              src={hostData.picture}
              className="info__element__host__image"
            />
          </div>
          <div className="info__element__rating">
            <Rating rating={ratingData} />
          </div>
        </div>
      </div>

      <div className="infos">
        <div className="infos__description">
          <Collapse title="Description" content={housingData.description} />
        </div>
        <div className="infos__equipment">
          <Collapse
            title="Équipements"
            content={housingData.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Housing;
