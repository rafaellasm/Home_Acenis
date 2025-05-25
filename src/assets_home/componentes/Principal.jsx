import Styles from '../css/Principal.module.css'

function Principal(){

    return(
        <section className={Styles.infos_principais}>
            <h1><span className={Styles.muda_cor}>AC</span>ENIS</h1>
            <p>Transformando desafios em conquistas!</p>
        </section>
    )
}

export default Principal;