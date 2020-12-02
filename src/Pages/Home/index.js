import React from "react";
import "./style.css";

import cobranças from "../../assets/money.svg";
import clientes from "../../assets/users.svg";
import faturamento from "../../assets/faturamento.svg";
import PaginaPrincipal from "../Pagina Principal";
import Header from "../Header";

export default function Home(props) {
  return (
    <div className="Home">
      <PaginaPrincipal />
      <div className="conteudo">
        <div className="header">
          <Header />
        </div>
        <div className="abaFiltros">
          <button>Este mês</button>
          <button>Este ano</button>
          <button>Desde o inicio</button>
        </div>
        <div className="cards">
          <label className="cardCliente">
            <div className="headerCardC">
              <img src={clientes} /> <h2>Clientes</h2>
            </div>
            <div className="emDia">
              {" "}
              Em dia <h2>0</h2>
            </div>
            <div className="inadimplentes">Inadimplentes 0</div>
          </label>
          <label className="cardCobrancas">
            <div className="headerCardCo">
              <img src={cobranças} /> <h2>Cobranças</h2>
            </div>
            <div className="previstas">Previstas 0</div>
            <div className="vencidas"></div>
            <div className="pagas"></div>
          </label>
        </div>
      </div>
    </div>
  );
}
