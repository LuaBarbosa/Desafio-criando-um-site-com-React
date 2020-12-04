import React, { useContext } from "react";
import { fazerRequisicaoComBody } from "../../utills/fetch";
import { Link } from "react-router-dom";
import History from "../../utills/history";
import StoreContext from "../../components/Store/Context";
import "./style.css";

import Logo from "../Login/Logo.svg";
import Olho from "./olho.svg";
import OlhoC from "./olhoc.svg";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const { setToken } = useContext(StoreContext);
  const [senhaVisivel, setSenhaVisivel] = React.useState(false);

  return (
    <div className="login">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          fazerRequisicaoComBody(
            "https://pagamentos-back.herokuapp.com/auth",
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
                alert(" E-mail ou senha incorretos ");
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
        Não tem conta?
        <div className="cadastre">
          <Link to="/usuarios"> Cadastre-se </Link>
        </div>
      </form>
    </div>
  );
}
