import Logo from '../../assets/logo.png'
import './Header.scss'

export default function Header(){
    return(
        <header className='header'>
            <h1>
                <img src={Logo} alt="Logo Kasa" className='header__logo'/>
            </h1>
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
    )
}