import axios from "axios";
import { useState, useEffect } from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

export default function Cards() {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/playlists')
          .then(response => {
            setPlaylists(response.data);
            console.log("JSON ", response.data);
          })
          .catch(error => {
            console.error('Erro ao obter playlists:', error);
          });
    }, []);

    return (
        <div className="music-right">
            <h1>Top {playlists.length} PlayLists mais tocadas em 2023!</h1>
            <div className="card-container">
                {playlists.map((playlists, index) => (
                    <Link className="music-card" to={`playlist/${playlists.id}`} key={index}>
                        <img src={playlists.linkPhoto} alt="Capa da Música" />
                        <h3>{playlists.titleMusic}</h3>
                        <p>{playlists.name}</p>
                    </Link>
                ))}
            </div>
            <Link to="/cadastro_playlist" className="cta-button">Cadastrar playlist</Link>
        </div>
    );
}