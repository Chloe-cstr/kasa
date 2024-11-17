import Logo from '../../assets/logo.png'
import './Header.scss'

const Header = () => {
    return(
        <header className='header'>
            <img src={Logo} alt="Logo Kasa" className='header__logo'/>
            <nav className='header__nav'>
                <ul className='header__nav__list'>
                    <li className='header__nav__item'>
                        <a href="#">Accueil</a>
                    </li>
                    <li>
                        <a href="#">A propos</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;