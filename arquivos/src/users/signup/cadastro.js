import axios from "axios";
import { useState } from "react";
import "./cadastro.css";

export default function UserSignup() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (senha !== confirmSenha) {
      alert("Senhas não conferem");
      return;
    }

    try {
      const user = { email, senha, nome, endereco };

      const response = await axios.post("http://localhost:3001/users", user);

      if (response.status === 200) {
        console.log("Usuário cadastrado com sucesso!");
        
      } else {
        console.error("Erro ao cadastrar o usuário.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar o usuário:", error);
    }

    
    setEmail("");
    setEndereco("");
    setSenha("");
    setNome("");
    setConfirmSenha("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="email"
            placeholder="Email ou Usuário"
          />
        </div>
        <div>
          <label htmlFor="Name" className="form-label">
            Nome:
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="form-control"
            id="Name"
            placeholder="Nome"
          />
        </div>
        <div>
          <label htmlFor="Address" className="form-label">
            Endereço:
          </label>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            className="form-control"
            id="Address"
            placeholder="Endereço"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
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
        <div>
          <label htmlFor="confirmPwd" className="form-label">
            Confirme Senha:
          </label>
          <input
            type="password"
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
            className="form-control"
            id="confirmPwd"
            placeholder="Confirme Senha"
          />
        </div>
        <button type="submit" className="btn-primary">
          Cadastrar
        </button>
      </form>
    </>
  );
}
