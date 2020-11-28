import React from "react";
import { fazerRequisicaoComBody } from "../../utills/fetch";
import { BrowserRouter } from "react-router-dom";
import History from "../../history";

import Logo from "../Login/Logo.svg";
import Olho from "./olho.svg";
import OlhoC from "./olhoc.svg";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [Senha, setSenha] = React.useState("");
  const [token, setToken] = React.useState("null");
  const [senhaVisivel, setSenhaVisivel] = React.useState(false);

  return (
    <div className="login">
      <BrowserRouter>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(email, Senha);
            fazerRequisicaoComBody(
              "https://cubos-desafio-4.herokuapp.com/auth",
              "POST",
              { email, Senha }
            )
              .then((res) => res.json())
              .then((resposta) => {
                const token = resposta.dados.token;
                setToken(token);
                History.push("/home");
              });
          }}
        >
          <label>
            <img src={Logo} />
            E-mail
            <input
              type="email"
              placeholder="exemplo@gmail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            Senha
            <div className="inputEnvelop">
              <input
                onChange={(event) => {
                  setSenha(event.target.value);
                }}
                className="login"
                type={senhaVisivel ? "text" : "password"}
              />
              <img src={Olho} alt="Ver Senha" />
            </div>
            Esqueci a senha
            <button>Entrar</button>
          </label>
          Não tem conta? <button className="cadastre-se"> Cadastre-se!</button>
        </form>
      </BrowserRouter>
    </div>
  );
}
