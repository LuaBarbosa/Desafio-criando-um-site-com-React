import React, { useContext } from "react";

import { fazerRequisicaoComBody } from "../../utills/fetch";
import StoreContext from "../../components/Store/Context";
import History from "../../utills/history";

import "./style.css";
import PaginaPrincipal from "../Pagina Principal";

export default function CriarCliente() {
  const [nome, setNome] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const { token } = useContext(StoreContext);

  return (
    <div className="paginaAddC">
      <div className="menu">
        <PaginaPrincipal />
      </div>

      <div className="criarCliente">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            fazerRequisicaoComBody(
              "https://pagamentos-back.herokuapp.com/clientes",
              "POST",
              { nome, cpf, email, tel: telefone },
              token
            )
              .then((res) => res.json())
              .then((resposta) => {
                console.log(resposta);
                const id = resposta.dados.id;
                alert("Cliente cadastrado com sucesso!");
                History.push("/clientes");
              });
          }}
        >
          <div className="cadastrarCliente">
            <label className="cadastroC">
              <b>Nome</b>
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
                type="tel"
                value={telefone}
                onChange={(event) => setTelefone(event.target.value)}
              />
            </label>

            <div className="confirmarCadastro">
              <button>Cancelar</button>
              <button>Adicionar Cliente</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
