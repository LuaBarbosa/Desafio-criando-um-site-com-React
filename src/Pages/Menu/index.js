import React from "react";
import Fonte from "../../App.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import home from "../../assets/home.svg";
import cobranças from "../../assets/money.svg";
import clientes from "../../assets/users.svg";

export default function Menu() {
  return (
    <div className="barraLateral">
      <img src={Logo} />
      <label>
        <div className="menu">
          <div className="telaHome">
            <img src={home} />
            <Link to="/home">Home</Link>
          </div>
          <div className="cobrancas">
            <img src={cobranças} /> Cobranças
          </div>
          <div className="clientes">
            <img src={clientes} />
            <Link to="/clientes">Clientes</Link>
          </div>{" "}
        </div>
        <button>Criar cobranças</button>
      </label>
    </div>
  );
}
