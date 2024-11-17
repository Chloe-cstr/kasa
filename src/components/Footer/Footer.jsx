import Logo from '../../assets/logo_footer.png'
import './Footer.scss'

const Footer = () => {
    return(
        <footer className='footer'>
            <img src={Logo} alt="Logo Kasa" className='footer__logo'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;