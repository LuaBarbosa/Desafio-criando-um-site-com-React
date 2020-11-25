import React from "react";
import { fazerRequisicaoComBody } from "../../utills/fetch";
import { Home } from "../Home";
import Logo from "./Logo.svg";
import Olho from "./olho.svg";

export function Login(props) {
  const { email, setEmail } = React.useState("");
  const { senha, setSenha } = React.useState("");
  const { token, setToken } = React.useState(null);

  return (
    <div className="login">
      {token !== null ? (
        <button onClick={() => setToken(null)}>
          {" "}
          <Home />{" "}
        </button>
      ) : (
        <form
          onSubmit={(event) => {
            event.Default();

            fazerRequisicaoComBody(
              "https://cubos-desafio-4.herokuapp.com/auth",
              "POST",
              { email, senha }
                .then((res) => res.json())
                .then((respostaJson) => {
                  const novoToken = respostaJson.dados.token;
                  setToken(novoToken);
                  setEmail("");
                  setSenha("");
                })
            );
          }}
        >
          <label>
            <img src={Logo} />
            E-mail
            <input
              type="email"
              placeholder="exemplo@gmail.com"
              value={email}
              onInput={(event) => setEmail(event.target.value)}
            />
            Senha
            <div className="inputEnvelop">
              <input
                type="senha"
                value={senha}
                onInput={(event) => setSenha(event.target.value)}
              />
              <img src={Olho} />
            </div>
            Esqueci a senha
            <button>Entrar</button>
          </label>
          Não tem conta? <button> Cadastre-se!</button>
        </form>
      )}
      ;
    </div>
  );
}
