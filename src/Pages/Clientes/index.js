import React, { useContext } from "react";
import { fazerRequisicao } from "../../utills/fetch";

import "./style.css";
import history from "../../utills/history";
import PaginaPrincipal from "../Pagina Principal";
import Header from "../Header";
import StoreContext from "../../components/Store/Context";

import lupa from "../../assets/lupa.svg";

export default function Clientes() {
  const [clientes, setClientes] = React.useState();
  const { token } = useContext(StoreContext);

  React.useEffect(() => {
    fazerRequisicao(
      "https://cubos-desafio-4.herokuapp.com/clientes?clientesPorPagina=10&offset=0",
      "GET",
      token
    )
      .then((res) => res.json())
      .then((resposta) => {
        console.log(resposta);
        if (resposta.status === "sucesso") {
          setClientes(resposta.dados.clientes);
        }
      });
  }, []);
  console.log(clientes, "clientes");
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
                clientes.map((cliente) => (
                  <tr>
                    <td>
                      {cliente.nome}
                      {cliente.email}
                      {cliente.telefone}
                    </td>
                    <td>
                      {Number(cliente.cobrancasFeitas || "0").toLocaleString(
                        "pt-br",
                        {
                          style: "currency",
                          currency: "BRL",
                        }
                      )}
                    </td>
                    <td>
                      {Number(cliente.cobrancasRecebidas || "0").toLocaleString(
                        "pt-br",
                        {
                          style: "currency",
                          currency: "BRL",
                        }
                      )}
                    </td>
                    <td>
                      {cliente.estaInadimplente ? "Inadimplente" : "Em dias"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
