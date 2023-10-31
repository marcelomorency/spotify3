import './App.css';
import Header from './componentes/Header.js';
import Main from './componentes/Main.js';
import Footer from './componentes/Footer.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Faq from './faq/Faq';
import UserSignup from './users/signup/cadastro.js';
import UserSignin from './users/signin/login.js';
import PlayLists from './pages/playlists/playLists';
import MusicList from './componentes/MusicList';
import CadastroPlaylist from './cadastro_playlist/cadastro_playlist.js';
import PaginaCadastro from './pagina_cadastro/pagina_cadastro.js';
import Deletar from "./data/cardMusic"
function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Header/>
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/faq" element={<Faq/>}/>
              <Route path="/users/signup" element={<UserSignup/>}/>
              <Route path="/users/signin" element={<UserSignin/>}/>
              <Route path="/playlists" element={<PlayLists />}/>
              <Route path="/playlists/playlist/:id"  element={<MusicList />} />
              <Route path="/cadastro_playlist" element={<CadastroPlaylist/>} />
              <Route path="/pagina_cadastro" element={<PaginaCadastro/>} />
              <Route path="/data/cardMusic.js" element={<Deletar/>} />
            </Routes>
            <Footer/>
            
      </div>
    </BrowserRouter>
  
  );
}

export default App;
