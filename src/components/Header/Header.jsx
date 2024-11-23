import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './Header.scss'

const Header = () => {
    return(
        <header className='header'>
            <img src={Logo} alt="Logo Kasa" className='header__logo'/>
            <nav className='header__nav'>
                <ul className='header__nav__list'>
                    <li className='header__nav__item'>
                        <Link to ="/" className='header__nav__item__maj'>Accueil</Link>
                    </li>
                    <li>
                        <Link to ="/about" className='header__nav__item__maj'>A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;