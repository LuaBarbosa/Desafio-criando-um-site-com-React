import React from "react";
import { fazerRequisicaoComBody } from "../../utills/fetch";
import History from "../../utills/history";
import { Link } from "react-router-dom";

import "./style.css";
import Logo from "../Login/Logo.svg";
import Olho from "./olho.svg";
import OlhoC from "./olhoc.svg";

export default function Cadastro() {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [senhaVisivel, setSenhaVisivel] = React.useState(false);

  return (
    <div className="cadastro">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(name, email, password);
          fazerRequisicaoComBody(
            "https://pagamentos-back.herokuapp.com/usuarios",
            "POST",
            {
              nome: name,
              email,
              senha: password,
            }
          )
            .then((res) => res.json())
            .then((resposta) => {
              console.log(resposta);
              const id = resposta.dados.id;
              if (id) {
                alert("Usuário criado com sucesso!");
                History.push("/");
              } else {
                alert(" Dados incorretos ");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        <label>
          <img src={Logo} alt="Logo da Cubos Academy" />
          Nome
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          Senha
          <div className="inputEnvelop">
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="login"
              type={senhaVisivel ? "text" : "password"}
            />
            <img
              src={senhaVisivel ? OlhoC : Olho}
              onClick={() => {
                setSenhaVisivel(!senhaVisivel);
              }}
              alt="Ver Senha"
            />
          </div>
          <button> Criar Conta </button>
        </label>

        <div className="acesse">
          Ja possui conta?<Link to="/">Acesse agora</Link>
        </div>
      </form>
    </div>
  );
}
