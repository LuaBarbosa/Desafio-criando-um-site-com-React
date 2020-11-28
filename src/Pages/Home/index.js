import React from "react";

import logout from "./logout.svg";
import css from "./style.css";
import Logo from "./logo.svg";
import home from "./home.svg";
import cobranças from "./cobrancas.svg";
import clientes from "./clientes.svg";

export default function Home(props) {
  return (
    <div className="Home">
      <div className="barraLateral">
        <label>
          <img src={Logo} />
          <div className="menu">
            <img src="home" /> Home
            <img src="cobrancas" /> Cobranças
            <img src="clientes" /> Clientes
          </div>
          <button>Criar cobranças</button>
        </label>
      </div>
      <div className="corpoPrincipal">
        <div className="header">
          <label className="fundo">
            <label className="saldo">Saldo em conta R$ 0,00</label>
            <img src={logout} />
          </label>
        </div>
      </div>
    </div>
  );
}
