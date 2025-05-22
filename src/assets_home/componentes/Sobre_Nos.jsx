import Styles from '../css/Sobre_Nos.module.css'
import SobreNos from '../images/sobre_nos.png'
import SobreNos2 from '../images/sobre_nos2.png'
import Seta from '../images/icons/seta_saibamais.png'

function Sobre_Nos() {

    return (
        <section className={Styles.sobre_nos}>
            <div className={Styles.sobre_acenis}>
                <h2 className={Styles.titulo_acenis}>Sobre a Acenis</h2>
                <p className={Styles.paragrafo_acenis}>A Acenis é uma plataforma voltada para mães de crianças com sindrome de down.</p>
                <div className={Styles.porcentagem}>
                    <div className={Styles.container_porcentagem}>
                        <h2>97%</h2>
                        <p>Sorrisos diários</p>
                    </div>
                    <div className={Styles.container_porcentagem}>
                        <h2>10K</h2>
                        <p>Famílias felizes</p>
                    </div>
                    <div className={Styles.container_porcentagem}>
                        <h2>4.9K+</h2>
                        <p>Clientes</p>
                    </div>
                    <div className={Styles.saiba_mais}>
                        <button type='button'>Saiba mais
                            <span className={Styles.circle}>
                                <img src={Seta} alt="Seta saiba mais" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={Styles.imagens}>
                <img src={SobreNos} alt="Imagem criança com sindrome de down" />
                <img src={SobreNos2} alt="Imagem criança com sindrome de down" />
            </div>
        </section>
    )
}

export default Sobre_Nos