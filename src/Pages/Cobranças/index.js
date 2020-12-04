import React from "react";
import Header from "../Header";
import PaginaPrincipal from "../Pagina Principal";
import "./style.css";

import lupa from "../../assets/lupa.svg";

export default function Cobrancas() {
  return (
    <div className="cobrancas">
      <PaginaPrincipal />
      <div className="corpoP">
        <div className="header">
          <Header />
        </div>
        <div className="todasCobrancas">
          <div className="buscar">
            <input placeholder="Procurar por nome, e-mail e CPF"></input>
            <button>
              <img src={lupa} />
              BUSCAR
            </button>
          </div>
          <div className="tabela">
            <table>
              <thead>
                <th>Cliente</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Status</th>
                <th>Vencimento</th>
                <th>Boleto</th>
                <th></th>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
