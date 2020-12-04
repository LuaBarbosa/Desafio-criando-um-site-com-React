import React, { useContext } from "react";

import envelope from "../../assets/envelope.svg";
import tel from "../../assets/phone.svg";
import editar from "../../assets/editar.svg";
import "./style.css";

export default function ListarClientes(props) {
  return (
    <div className="tabela">
      <table>
        <thead>
          <th>Cliente</th>
          <th>Cobranças Feitas</th>
          <th>Cobranças Recebidas</th>
          <th>Status</th>
          <th></th>
        </thead>
        <tbody>
          {props.clientes &&
            props.clientes.map((cliente) => (
              <tr>
                <td>
                  <div className="dadosClientes">
                    <b>{cliente.nome}</b>
                    <img src={envelope} />
                    {cliente.email}
                    <img src={tel} />
                    {cliente.telefone}
                  </div>
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
                <td>{cliente.estaInadimplente ? "Inadimplente" : "Em dia"}</td>
                <td>
                  <img src={editar} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
