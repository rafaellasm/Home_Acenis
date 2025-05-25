import Styles from '../css/Acenis_Oferece.module.css'
import Sociais from '../images/cards_conteudo/redes_sociais.png'
import Educacao from '../images/cards_conteudo/educação_apoio.png'
import Jogos from '../images/cards_conteudo/jogos_terapia.png'
import Suporte from '../images/cards_conteudo/suporte.png'
import LocaisInclusivos from '../images/cards_conteudo/locais_inclusivos.png'
import Loja from '../images/cards_conteudo/loja_brinquedos.png'

function Acenis_Oferece() {

    return (
        <section className={Styles.acenis_conteudo}>
            <div className={Styles.descubra_container}>
                <div className={Styles.descubra}>
                    <h2><span className={Styles.mudar_cor}>Descubra</span> o que a <br /> Acenis oferece</h2>
                </div>
                <div className={Styles.paragrafo_explicacao}>
                    <p>Bem-vindo à Acenis, onde apoiamos seu <br /> crescimento com cuidado e inovação.</p>
                </div>
                <div className={Styles.carrossel_mobile}>
                    <p>Deslize para o lado e descubra mais!</p>
                </div>
            </div>
            <div className={Styles.card_container}>
                <div className={Styles.conteudo}>
                    <img src={Sociais} alt="Imagem redes sociais" />
                    <h3>Redes sociais</h3>
                    <p>Apoie outras mães.</p>
                    <button type='button'>Saiba mais</button>
                </div>
                 <div className={Styles.conteudo_2}>
                    <img src={Educacao} alt="Imagem educação e apoio" />
                    <h3>Educação e apoio</h3>
                    <p>Educadores qualificados.</p>
                    <button type='button'>Saiba mais</button>
                </div>
                <div className={Styles.conteudo_3}>
                    <img src={Jogos} alt="Imagem jogos e terapia" />
                    <h3>Jogos e terapia</h3>
                    <p>Aprender, crescer e se divertir.</p>
                    <button type='button'>Saiba mais</button>
                </div>
            </div>
            <div className={Styles.card_container2}>
                   <div className={Styles.conteudo_4}>
                    <img src={Suporte} alt="Imagem suporte" />
                    <h3>Suporte</h3>
                    <p>Aprendizado guiado.</p>
                    <button type='button'>Saiba mais</button>
                </div>
                 <div className={Styles.conteudo_5}>
                    <img src={LocaisInclusivos} alt="Imagem locais inclusivos" />
                    <h3>Locais inclusivos</h3>
                    <p>Explore espaços acessíveis</p>
                    <button type='button'>Saiba mais</button>
                </div>
                 <div className={Styles.conteudo_6}>
                    <img src={Loja} alt="Imagem loja de brinquedos" />
                    <h3>Loja de brinquedos</h3>
                    <p>Produtos educativos.</p>
                    <button type='button'>Saiba mais</button>
                </div>
            </div>
        </section>
    )
}

export default Acenis_Oferece;