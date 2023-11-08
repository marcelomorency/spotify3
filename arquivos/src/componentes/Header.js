import { Link } from "react-router-dom";
import "./header.css";
export default function Header() {
    return(
        <header className="Header-main">
            <nav className="navBar">
            <div className="containerNav"> 
                <div className="LogoClass">
                <img className="logo" src="/logo-spotify-256.png" alt="" />
                </div>
            </div>
            <div className="ContainerLinks"> 
                <ul className="UlAll">
                <li className="liHome">
                    <Link to="/" className="page">Home</Link>
                </li>
                <li className="liFaq">
                    <Link to="/faq" className="page">FAQ</Link>
                </li>
                
                <li className="liCadastro">
                    <Link to="/users/signup" className="page">Cadastrar</Link>
                </li>
                <li className="liLogin">
                    <Link to="/users/signin" className="page">Login</Link>
                </li>
                </ul>
            </div>
            </nav>
        </header>
    );
}