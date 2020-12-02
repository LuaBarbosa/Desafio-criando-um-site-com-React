import React from "react";
import { Link } from "react-router-dom";
import history from "../../utills/history";
import "./style.css";

import logo from "../../assets/logo.svg";
import home from "../../assets/home.svg";
import cobranças from "../../assets/money.svg";
import clientes from "../../assets/users.svg";

export default function PaginaPrincipal() {
  return (
    <div className="paginaP">
      <div className="barraLateral">
        <img src={logo} />
        <div className="menu">
          <Link to="/home">
            {" "}
            <img src={home} /> Home
          </Link>

          <Link to="/cobrancas">
            {" "}
            <img src={cobranças} />
            Cobranças
          </Link>

          <Link to="/clientes">
            {" "}
            <img src={clientes} />
            Clientes
          </Link>
        </div>
        <button>Criar cobranças</button>
      </div>
    </div>
  );
}
