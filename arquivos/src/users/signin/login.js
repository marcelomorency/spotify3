import axios from "axios";
import { useState } from "react";
import "./login.css";

export default function UserSignin() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    axios.get(`http://localhost:3001/users?email=${email}`).then( (res) => {
      const usuario = res.data[0];

      if (usuario) {

      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

      } else {

        alert("Usuário não encontrado. Por favor, cadastre-se primeiro.");

      }

    });

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label for="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <label for="pwd" className="form-label">
            Senha:
          </label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="form-control"
            id="pwd"
            placeholder="Senha"
          />
        </div>
        <button type="submit" className="btn-primary">
          Entrar
        </button>
      </form>
    </>
  );
}
