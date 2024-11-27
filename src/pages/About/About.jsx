import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import AboutImage from '../../assets/image_about.png';

const About = () => {
  const aboutData = [
    {
      id: '1',
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      id: '2',
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      id: '3',
      title: 'Service',
      content:
        'La qualité du service est au coeur de notre engagementchez Kasa. Nopus veillons à ce que chaque interraction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.',
    },
    {
      id: '4',
      title: 'Sécurité',
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div className="body-container">
      <Header />
      <Banner image={AboutImage} className="banner__about" />
      <main>
        {aboutData.map((item, index) => (
          <div key={index}>
            <Collapse title={item.title} content={item.content} />
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default About;
