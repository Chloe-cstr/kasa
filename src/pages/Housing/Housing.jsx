import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import { useParams } from 'react-router-dom';
import data from '../../data/data.json';

function Housing() {
  const { id } = useParams(); // Récupération de l'id depuis l'URL
  console.log("ID récupéré depuis l'URL :", id);
  const housingData = data.find((housing) => housing.id === id);

  if (!housingData) {
    return <p>Logement non trouvé. Vérifiez URL.</p>;
  }

  return(
    <div className='body-container'>
      <Header/>
      <Slider images={housingData.pictures}/>
      <Footer/>
    </div>
  );
}

export default Housing;
