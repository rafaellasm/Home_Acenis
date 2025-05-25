import Styles from '../css/Vire_membro.module.css'
import Girl from '../images/vire_membro/vire_membro.png'
import Flor from '../images/vire_membro/flor.png'
import Seta from '../images/icons/seta_saibamais.png'

function Vire_membro() {

    return (
        <section className={Styles.conteudo_vire_membro}>
            <div className={Styles.vire_membro}>
                <img src={Girl} alt="Mascote vire membro" />
            </div>
            <div className={Styles.imagem_flor}>
                <img src={Flor} alt="Imagem de uma flor" />
            </div>
            <div className={Styles.ver_planos}>
                <h2>Vire membro da <span className={Styles.muda_cor}>Ac</span>enis!</h2>
                <p>Muito mais do que uma assinatura, é o cuidado.</p>
                <button type='button'>Ver planos</button>
                <span className={Styles.circle}>
                    <img src={Seta} alt="Seta saiba mais" />
                </span>
            </div>
        </section>
    )
}

export default Vire_membro;