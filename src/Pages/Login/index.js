import React from "react";
import { fazerRequisicaoComBody } from "../../utills/fetch";
import { BrowserRouter } from "react-router-dom";
import History from "../../history";
import style from "../Login/style.css";

import Logo from "../Login/Logo.svg";
import Olho from "./olho.svg";
import OlhoC from "./olhoc.svg";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [token, setToken] = React.useState("null");
  const [senhaVisivel, setSenhaVisivel] = React.useState(false);

  return (
    <div className="login">
      <BrowserRouter>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            fazerRequisicaoComBody(
              "https://cubos-desafio-4.herokuapp.com/auth",
              "POST",
              { email, senha }
            )
              .then((res) => res.json())
              .then((resposta) => {
                console.log(resposta);
                const token = resposta.dados.token;
                if (token) {
                  setToken(token);

                  History.push("/home");
                } else {
                  alert(" Erro ");
                }
              });
          }}
        >
          <label>
            <img src={Logo} />
            <div className="dadosLogin"></div>
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
              <img
                src={senhaVisivel ? OlhoC : Olho}
                onClick={() => {
                  setSenhaVisivel(!senhaVisivel);
                }}
                alt="Ver Senha"
              />
            </div>
            Esqueci a senha
            <button>Entrar</button>
          </label>
          <div className="cadastre">
            Não tem conta?{" "}
            <button className="cadastre-se"> Cadastre-se!</button>
          </div>
        </form>
      </BrowserRouter>
    </div>
  );
}
