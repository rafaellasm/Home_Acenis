import Styles from '../css/Carrossel_Acenis.module.css'
import Clara from '../images/clara.png'
import FlorRosa from '../images/vire_membro/flor_rosa1.png'
import FlorRosa2 from '../images/vire_membro/flor_rosa2.png'
import Macarrao from '../images/vire_membro/macarrão_rosa.png'

function Carrossel_Acenis() {

    return (
        <section className={Styles.conteudo_acenis}>
            <div className={Styles.carrossel_container}>
                <div className={Styles.carrossel_texto}>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                    <p>ACENIS</p>
                </div>
            </div>

            <div className={Styles.flores}>
                <img src={FlorRosa} alt="Imagem de uma flor rosa" />
            </div>
            <div className={Styles.flores2}>
                <img src={FlorRosa2} alt="Imagem de uma flor rosa" />
            </div>
             <div className={Styles.flores3}>
                <img src={Macarrao} alt="Imagem de um macarrão" />
            </div>
            <div className={Styles.precisa_ajuda}>
                <h2>Precisa de ajuda?</h2>
                <hr />
                <p>Nossa assistente virtual está disponível 24 horas para tirar suas dúvidas!</p>
            </div>

            <div className={Styles.container_chatbot}>
                <div className={Styles.chatbot}>
                    <img src={Clara} alt="Nossa mascote Clara" />
                    <h3>Converse com a Clara</h3>
                    <p>Nosso chatbot inteligente pode responder suas perguntas sobre instituições, profissionais, produtos e muito mais. Clique no ícone no canto inferior direito para iniciar uma conversa.</p>
                    <button type='button'>Iniciar conversa</button>
                </div>
            </div>
        </section>
    )
}

export default Carrossel_Acenis;