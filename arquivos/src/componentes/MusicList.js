import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { cardMusic } from '../data/cardMusic'; // Importe seu vetor de playlists
import './MusicList.css';


function MusicList() {
    const [currentSong, setCurrentSong] = useState(null); //hook use state para analisar o estado da musica que esta tocando no atual momento
    const { id } = useParams(); // hook use params para obter o id da playlist vindo da url
    const playlist = cardMusic.find((p) => p.id === parseInt(id)); // metodo find para achar a playlist correta, uma vez que ele analisa se o id e o valor do hook sao iguais

    //mensagem de erro caso a playlist nao for encontrada
    if (!playlist) {
        return <div>Playlist não encontrada.</div>;
    }

    // funcao responsavel por tocar a musica baseada na current song, usando o objeto Audio do react
    const playSong = (audioUrl) => {
        if (currentSong) {
            currentSong.pause();
            currentSong.currentTime = 0;
        }

        const audio = new Audio(audioUrl);
        audio.play();
        setCurrentSong(audio);
    };

    return (
        <div>
            <h1 className='playlist-title'>{playlist.titleMusic}</h1>
            <img className='playlist-image' src={playlist.linkPhoto} alt={playlist.titleMusic} />
            <ul className='music-list'>
                {/* funcao map que percorre o vetor musica dentro do vetor playlist e mostra os valores especificos */}
                {playlist.musicas.map((musica) => (
                    <>
                        <li className="music-item" key={musica.id}>{musica.nome}</li>
                        <span className="play-icon"
                            onClick={() => playSong(musica.arquivo)}>&#9654; Play</span>
                    </>
                ))}
            </ul>
        </div>
    );
}

export default MusicList;
