import React from "react";
import boleto from "../../assets/boleto.svg";
import "./style.css";

export default function ListarCobranca(props) {
  return (
    <div className="tabela">
      <table>
        <thead>
          <th>Cliente</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Status</th>
          <th>Vencimento</th>
          <th>Boleto</th>
        </thead>
        <tbody>
          {props.cobranca &&
            props.cobranca.map((cobranca) => (
              <tr>
                <td>{cobranca.idDoCliente}</td>
                <td>{cobranca.descricao}</td>
                <td>{cobranca.valor}</td>
                <td>{cobranca.status}</td>
                <td>
                  {cobranca.vencimento
                    .split("T")[0]
                    .split("-")
                    .reverse()
                    .join("/")}
                </td>
                <td>
                  <button>
                    <img src={boleto} alt="Visualizar boleto" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
