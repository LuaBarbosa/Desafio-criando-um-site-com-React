import React, { useContext } from "react";
import { fazerRequisicao } from "../../utills/fetch";

import "./style.css";
import history from "../../utills/history";
import PaginaPrincipal from "../Pagina Principal";
import Header from "../Header";
import StoreContext from "../../components/Store/Context";

import ListarClientes from "../Listar Clientes";
import BuscarCliente from "../Buscar Cliente";

export default function Clientes() {
  const [clientes, setClientes] = React.useState();
  const [busca, setBusca] = React.useState();
  const { token } = useContext(StoreContext);

  React.useEffect(() => {
    fazerRequisicao(
      `https://pagamentos-back.herokuapp.com/clientes?${
        busca ? `busca=${busca}&` : ""
      }clientesPorPagina=10&offset=0`,
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
  }, [busca]);
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
          <BuscarCliente busca={busca} setBusca={setBusca} />
        </div>
        <div className="tabela">
          <ListarClientes clientes={clientes} />
        </div>
      </div>
    </div>
  );
}
