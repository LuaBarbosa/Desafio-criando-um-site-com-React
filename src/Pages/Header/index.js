import React from "react";
import "./style.css";

import logout from "../../assets/logout.svg";
import saldo from "../../assets/saldo.svg";

export default function Header() {
  return (
    <div className="header">
      <label className="saldo">
        <img src={saldo} alt="Saldo" />
        Saldo em conta
        <p>R$ 0,00</p>
      </label>
      <img src={logout} alt="logout" />
    </div>
  );
}
