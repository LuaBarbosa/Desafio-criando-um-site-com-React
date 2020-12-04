import React from "react";

import lupa from "../../assets/lupa.svg";

export default function BuscarCobranca(props) {
  const handleChange = (event) => {
    props.setBusca(event.target.value);
  };
  return (
    <div className="buscar">
      <input
        type="text"
        placeholder="Procurar por nome, e-mail e CPF"
        value={props.busca}
        onChange={handleChange}
      ></input>
      <button>
        <img src={lupa} alt={"Buscar por cobranças"} />
        BUSCAR
      </button>
    </div>
  );
}
