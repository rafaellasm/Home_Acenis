import { useState } from 'react';
import Styles from '../css/Carrossel_Responsivo.module.css';
import Sociais from '../images/cards_conteudo/redes_sociais.png';
import Educacao from '../images/cards_conteudo/educação_apoio.png'
import Jogos from '../images/cards_conteudo/jogos_terapia.png'
import Suporte from '../images/cards_conteudo/suporte.png'
import LocaisInclusivos from '../images/cards_conteudo/locais_inclusivos.png'
import Loja from '../images/cards_conteudo/loja_brinquedos.png'

const cards = [
    { title: 'Redes sociais', content: 'Apoie outras mães.', image: Sociais },
    { title: 'Educação e apoio', content: 'Educadores qualificados.', image: Educacao },
    { title: 'Jogos e terapia', content: 'Aprender, crescer e se divertir.', image: Jogos  },
    { title: 'Suporte', content: 'Aprendizado guiado.', image: Suporte  },
    { title: 'Locais inclusivos', content: 'Explore espaços acessíveis', image: LocaisInclusivos  },
    { title: 'Loja de brinquedos', content: 'Produtos educativos.', image: Loja  },
];

const cardClasses = [Styles.card1, Styles.card2, Styles.card3, Styles.card4, Styles.card5, Styles.card6];

const CarouselManual = () => {
    const [index, setIndex] = useState(0);
    const visibleCards = 1;

    const next = () => {
        if (index < cards.length - visibleCards) {
            setIndex(index + 1);
        }
    };

    const prev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <div className={Styles.card_container}>
            <button onClick={prev} disabled={index === 0}>←</button>
            <div style={{ display: 'flex', overflow: 'hidden' }}>
                {cards.slice(index, index + visibleCards).map((card, i) => (
                    <div
                        key={i}
                        className={`${Styles.card} ${cardClasses[index + i]}`}
                    >
                        {card.image && <img src={card.image} alt={card.title} />}
                        <h3>{card.title}</h3>
                        <p>{card.content}</p>
                        <button type='button'>Saiba mais</button>
                    </div>
                ))}
            </div>
            <button onClick={next} disabled={index >= cards.length - visibleCards}>→</button>
        </div>
    );
};

export default CarouselManual;
