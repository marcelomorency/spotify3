import Cards from "../../componentes/Cards";
import { Link } from 'react-router-dom';



const linkStyle = {
    color: 'white', // Cor do texto mais discreta
    textDecoration: 'none', // Remover o sublinhado
    marginLeft: '10px', // Margem à esquerda
    fontSize: '16px', // Tamanho da fonte
    backgroundColor: 'black', // Cor de fundo do botão/link
    padding: '10px 20px', // Espaçamento interno
    borderRadius: '6px', // Borda arredondada
    border: 'none',
    marginTop: '0px',
    display: 'inline-block',
};

export default function PlayLists() {
    return (
        <div className='container'>
            <Cards />
            <Link to="/playlists/search" style={linkStyle}>Ir para a página de buscas</Link>
        </div>
    )
}