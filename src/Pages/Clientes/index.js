import React from "react";
import { fazerRequisicaoComBody } from "../../utills/fetch";

import "./style.css";
import history from "../../utills/history";
import PaginaPrincipal from "../Pagina Principal";
import Header from "../Header";

import lupa from "../../assets/lupa.svg";

export default function Clientes() {
  const [clientes, setClientes] = React.useState();

  React.useEffect(() => {
    fazerRequisicaoComBody(
      "https://cubos-desafio-4.herokuapp.com//clientes?clientesPorPagina=10&offset=20"
    )
      .then((res) => res.json())
      .then((resposta) => {
        console.log(resposta);
        if (resposta.status === "Sucesso") {
          setClientes(resposta.dados);
        }
      });
  }, []);
  return (
    <div className="Clientes">
      <PaginaPrincipal />
      <div className="corpoP">
        <div className="header">
          <Header />
        </div>
        <div className="todosClientes">
          <div className="headerC">
            <button
              onClick={() => {
                history.push("/criarClientes");
              }}
            >
              Adicionar Cliente
            </button>
          </div>
          <div className="buscar">
            <input placeholder="Procurar por nome, e-mail e CPF"></input>
            <button>
              <img src={lupa} />
              BUSCAR
            </button>
          </div>
        </div>
        <div className="tabela">
          <table>
            <thead>
              <th>Cliente</th>
              <th>Cobranças Feitas</th>
              <th>Cobranças Recebidas</th>
              <th>Status</th>
            </thead>
            <tbody>
              {clientes &&
                clientes.dados.map((clientes) => (
                  <tr>
                    <td>{clientes.nome}</td>
                    <td>{clientes.email}</td>
                    <td>{clientes.telefone}</td>
                    <td>{clientes.cobrancasFeitas}</td>
                    <td>{clientes.cobrancasRecebidas}</td>
                    <td>{clientes.estaInadimplente}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
