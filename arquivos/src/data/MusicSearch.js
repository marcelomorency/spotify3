import axios from "axios";
import { useState } from "react";
import './StyleMusicSearch.css';

export default function MusicSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Realize a chamada à API do JSON Server para buscar músicas com base no termo de pesquisa
    axios.get(`http://localhost:3001/musicas?titulo_like=${searchTerm}`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar músicas:", error);
      });
  };

  return (
    <div className="search-container music-element"> {/* Aplicar a classe 'music-element' aqui */}
      <label htmlFor="search" className="form-label">
        Buscar Música:
      </label>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control"
        id="search"
        placeholder="Digite o nome da música"
      />
      <button onClick={handleSearch} className="btn btn-primary">
        Pesquisar
      </button>
      <ul>
        {searchResults.map((musica) => (
          <li key={musica.id}>
            <strong className="music-title">{musica.titulo}</strong> - {musica.artista} ({musica.ano})
          </li>
        ))}
      </ul>
    </div>
  );
}