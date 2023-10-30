
import { Link } from "react-router-dom";
import "./cadastro.css";


export default function CadastroPlaylist() {
    function CadastrarPlaylist(c){
        c.preventDefault()
        console.log("Cadastrou o usuario!")
    }

    return(
        <div className="cadastro_playlist">
  
            <h1>Meu cadastro de Playlist:</h1>
            <form onSubmi={CadastrarPlaylist}> 
                <div>
                    <input className="botao_input" type="text" placeholder="Nome da Playlist:"/>
                </div>
                <div>
                    <input className="botao_cadastrar" type="submit" value="Cadastrar Playlist"/>
                </div>
            </form>
        </div>

        
    );
}

