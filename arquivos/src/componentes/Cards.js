import "./Cards.css";
import { Link } from "react-router-dom";
import { cardMusic } from '../data/cardMusic';


export default function Cards() {
    return (
        <div className="music-right">
            <h1>Top 4 PlayLists mais tocadas em 2023!</h1>
            {cardMusic.map((card, index) => (
                <Link className="music-card" to={`playlist/${card.id}`} key={index}>
                    <img src={card.linkPhoto} alt="Capa da Música" />
                    <h3>{card.titleMusic}</h3>
                    <p>{card.name}</p>
                </Link>
            ))}
            <Link to="/cadastro_playlist" className="cta-button">Cadastrar playlist</Link>
        </div>
    );
}