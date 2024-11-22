import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './NotFound.scss'

const NotFound = () => {
  return (
    <div className='body-container'>
      <Header/>
      <main className='notFound'>
        <h1 className='notFound__title'>404</h1>
        <p className='notFound__text'>Oups! La page que vous demandez n’existe pas.</p>
        <Link to="/" className='notFound__link'>Retourner sur la page d’accueil</Link>
      </main>
      <Footer/>
    </div>
  );
}

export default NotFound;
