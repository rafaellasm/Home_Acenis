import Styles from '../css/Card_Celular.module.css'

function Card_Celular() {

    return (
        <div className={Styles.container_porcentagem}>
            <div className={Styles.container_verde}>
                <h2>97%</h2>
                <p>Sorrisos diários</p>
            </div>
            <div className={Styles.container_rosa}>
                <h2>10K</h2>
                <p>Famílias felizes</p>
            </div>
            <div className={Styles.container_azul}>
                <h2>4.9K+</h2>
                <p>Clientes</p>
            </div>
        </div>
    )
}

export default Card_Celular