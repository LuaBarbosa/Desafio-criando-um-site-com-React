import React, { useContext } from "react";
import Logout from "../Logout";
import PaginaPrincipal from "../Pagina Principal";
import { fazerRequisicaoComBody } from "../../utills/fetch";
import StoreContext from "../../components/Store/Context";
import History from "../../utills/history";
import { fazerRequisicao } from "../../utills/fetch";

import "./style.css";

export default function CriarCobranca() {
  const [valor, setValor] = React.useState();
  const [descricao, setDescricao] = React.useState();
  const [vencimento, setVencimento] = React.useState();
  const [idDoCliente, setIdDoCliente] = React.useState();
  const [clientes, setClientes] = React.useState();

  const { token } = useContext(StoreContext);

  React.useEffect(() => {
    fazerRequisicao(
      "https://pagamentos-back.herokuapp.com/clientes?clientesPorPagina=10&offset=0",
      "GET",
      token
    )
      .then((res) => res.json())
      .then((resposta) => {
        console.log(resposta);
        if (resposta.status === "sucesso") {
          setClientes(resposta.dados.clientes);
        }
      });
  }, []);

  return (
    <div className="criarCobranca">
      <PaginaPrincipal />
      <div className="logout">
        <Logout />
      </div>
      <div className="conteudo">
        <div className="formulario">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const valorNumber = parseInt(valor, 10);
              fazerRequisicaoComBody(
                "https://pagamentos-back.herokuapp.com/cobrancas",
                "POST",
                { idDoCliente, descricao, valor: valorNumber, vencimento },
                token
              )
                .then((res) => res.json())
                .then((resposta) => {
                  console.log(resposta);
                  alert("Cobrança cadastrada com sucesso!");
                  History.push("/cobrancas");
                });
            }}
          >
            <span>// CRIAR COBRANÇA</span>
            <label className="cobranca">
              <div className="inputNomeDesc">
                Nome
                <select
                  onChange={(event) => setIdDoCliente(event.target.value)}
                >
                  {clientes &&
                    clientes.map((cliente) => (
                      <option key={cliente.id} value={cliente.id}>
                        {cliente.nome}
                      </option>
                    ))}
                </select>
                Descrição
                <input
                  type="text"
                  value={descricao}
                  onChange={(event) => setDescricao(event.target.value)}
                />
                <span>A descrição informada será impressa no boleto.</span>
              </div>
              <div className="inputMenor">
                <div className="inputValor">
                  Valor
                  <input
                    type="text"
                    placeholder="R$0,00"
                    value={valor}
                    onChange={(event) => setValor(event.target.value)}
                  />
                </div>

                <div className="inputVencimento">
                  Vencimento
                  <input
                    type="date"
                    value={vencimento}
                    onChange={(event) => setVencimento(event.target.value)}
                  />
                </div>
              </div>
              <div className="criar">
                <button>Cancelar</button>
                <button type="submit">Criar Cobrança</button>
              </div>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
