import Logo from '../../assets/logo_footer.png'
import './Footer.scss'

export default function Footer(){
    return(
        <footer className='footer'>
            <img src={Logo} alt="Logo Kasa" className='footer__logo'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}