import React from "react";
import Logout from "../Logout";
import PaginaPrincipal from "../Pagina Principal";

export default function CriarCobranca() {
  const [nome, setNome] = React.useState();
  const [valor, setValor] = React.useState();
  const [descricao, setDescricao] = React.useState();
  const [vencimento, setVencimento] = React.useState();
  return (
    <div className="criarCobranca">
      <PaginaPrincipal />

      <div className="paginaP">
        <div className="logout">
          <Logout />
        </div>

        <form>
          <h1>// CRIAR COBRANÇA</h1>
          <label className="cobranca">
            Clientes
            <input
              type="text"
              list="clientes"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            Descrição
            <input
              type="text"
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
            />
            Valor
            <input
              type="text"
              value={valor}
              onChange={(event) => setValor(event.target.value)}
            />
            Vencimento
            <input
              type="text"
              value={vencimento}
              onChange={(event) => setVencimento(event.target.value)}
            />
          </label>
          <div className="criar">
            <button>Cancelar</button>
            <button>Criar Cobrança</button>
          </div>
        </form>
      </div>
    </div>
  );
}
