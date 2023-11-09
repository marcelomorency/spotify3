import axios from "axios";
import { useState } from "react";
import './StyleMusicSearch.css';

import EineKleineNachtmusik from '../assets/musicas/Eine Kleine Nachtmusik.mp3';
import MoonlightSonata from "../assets/musicas/Beethoven - Moonlight Sonata 1st Movement (320 kbps).mp3";

export default function MusicSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const musicMap = {
    "Eine Kleine Nachtmusik": EineKleineNachtmusik,
    "Beethoven - Moonlight Sonata 1st Movement": MoonlightSonata,
    // Adicione mais músicas ao mapeamento conforme necessário
  };

  const handleSearch = () => {
    axios.get(`http://localhost:3001/musicas?nome_like=${searchTerm}`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar músicas:", error);
      });
  };

  const playSong = (songName) => {
    // Verifique se a música selecionada está no mapeamento
    if (musicMap[songName]) {
      setCurrentSong(musicMap[songName]);
      setIsPlaying(true);
    }
  };

  const stopSong = () => {
    setCurrentSong(null);
    setIsPlaying(false);
  };

  return (
    <div className="search-container music-element">
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
            <strong className="music-title">{musica.nome}</strong> - {musica.artista} ({musica.ano})
            <button onClick={() => playSong(musica.nome)}>Play</button>
          </li>
        ))}
      </ul>
      {currentSong && (
        <div>
          <h3>Reproduzindo:</h3>
          <audio controls autoPlay={isPlaying}>
            <source src={currentSong} type="audio/mpeg" />
            Seu navegador não suporta a reprodução de áudio.
          </audio>
          <button onClick={stopSong}>Parar Reprodução</button>
        </div>
      )}
    </div>
  );
}