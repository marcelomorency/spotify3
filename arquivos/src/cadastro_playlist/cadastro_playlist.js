
import { Link } from "react-router-dom";
import "./cadastro.css";


export default function CadastroPlaylist() {
    return(
        <div className="cadastro_playlist">
           <h1>Cadastrar Playlist!</h1>
           <input type="text">Nome Da Sua playlist</input>
           <Link to="/pagina_cadastro/pagina_cadastro" className="cta-button">Cadastrar</Link>
        </div>
    );
}