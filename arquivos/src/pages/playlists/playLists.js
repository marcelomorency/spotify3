import Cards from "../../componentes/Cards";
import { Link } from 'react-router-dom';



const linkStyle = {
    color: 'gray', // Cor do texto mais discreta
    textDecoration: 'none', // Remover o sublinhado
    marginLeft: '10px', // Margem à esquerda
    fontSize: '14px', // Tamanho da fonte
    backgroundColor: 'lightgray', // Cor de fundo do botão/link
    padding: '5px 10px', // Espaçamento interno
    borderRadius: '5px', // Borda arredondada
};

export default function PlayLists() {
    return (
        <div className='container'>
            <Cards />
            <Link to="/playlists/search" style={linkStyle}>Ir para a página de buscas</Link>
        </div>
    )
}