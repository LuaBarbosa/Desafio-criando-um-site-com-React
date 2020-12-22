import React from "react";

import lupa from "../../assets/lupa.svg";

export default function BuscarCliente(props) {
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
      />
      <button>
        <img src={lupa} alt={"Buscar por cobranças"} />
        BUSCAR
      </button>
    </div>
  );
}
