import Styles from '../css/Header.module.css'
import Desenvolvimento from '../images/icons/icon_desenvolvimento.png'
import Forum from '../images/icons/icon_forum.png'
import Home from '../images/icons/icon_home.png'
import Loja from '../images/icons/icon_loja.png'
import Logo from '../images/logo/logo_acenis.png'

function Header() {

    return (
        <header>
            <div className={Styles.logo}>
                <img src={Logo} alt="Logo Acenis" />
            </div>
            <nav className={Styles.navigation}>
                <ul>
                    <li><img style={{
                        marginBottom: '5px',
                    }} className={Styles.icone} src={Home} alt="Icone Home" /><a href="#">Home</a></li>
                    <li><img className={Styles.icone} src={Forum} alt="Icone Forum" /><a href="#">Redes Sociais</a></li>
                    <li><img className={Styles.icone} src={Desenvolvimento} alt="Icone Desenvolvimento" /><a href="#">Desenvolvimento</a></li>
                    <li><img className={Styles.icone} src={Loja} alt="Icone Loja" /><a href="#">Loja</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;