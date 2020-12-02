import React, { useContext } from "react";

import { fazerRequisicaoComBody } from "../../utills/fetch";
import StoreContext from "../../components/Store/Context";

import "./style.css";
import PaginaPrincipal from "../Pagina Principal";

export default function CriarCliente() {
  const [nome, setNome] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const { setToken } = useContext(StoreContext);

  const token = React.useContext(StoreContext);

  return (
    <div className="criarCliente">
      <div className="menu">
        <PaginaPrincipal />
      </div>

      <div className="formClientes">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            fazerRequisicaoComBody(
              "https://cubos-desafio-4.herokuapp.com/clientes",
              "POST",
              { nome, CPF: cpf, email, telefone }
            )
              .then((res) => res.json())
              .then((resposta) => {
                console.log(resposta);
                const id = resposta.dados.id;
                const token = resposta.dados.token;
                if (id && token) {
                  setToken(token);
                  alert("Cliente cadastrado com sucesso!");
                  History.push("/clientes");
                } else {
                  alert(" Dados incorretos ");
                }
              });
          }}
        >
          <div className="cadastrarCliente">
            Nome{" "}
            <input
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            E-mail{" "}
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            CPF{" "}
            <input
              type="text"
              value={cpf}
              onChange={(event) => setCpf(event.target.value)}
            />
            Telefone{" "}
            <input
              type="text"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
            />
          </div>
          <div className="confirmarCadastro">
            <button>Cancelar</button>
            <button>Adicionar Cliente</button>
          </div>
        </form>
      </div>
    </div>
  );
}
