import React from "react";
import "./style.css";

import saldo from "../../assets/saldo.svg";
import Logout from "../Logout";

export default function Header() {
  return (
    <div className="header">
      <label className="saldo">
        <img src={saldo} alt="Saldo" />
        Saldo em conta
        <p>R$ 0,00</p>
      </label>
      <Logout />
    </div>
  );
}
