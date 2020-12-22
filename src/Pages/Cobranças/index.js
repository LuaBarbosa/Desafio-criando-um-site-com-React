import React, { useContext } from "react";
import Header from "../Header";
import PaginaPrincipal from "../Pagina Principal";
import StoreContext from "../../components/Store/Context";
import { fazerRequisicao } from "../../utills/fetch";
import "./style.css";

import ListarCobranca from "../Listar cobrança";
import BuscarCobranca from "../Buscar cobrança";

export default function Cobrancas() {
  const [cobranca, setCobranca] = React.useState();
  const [busca, setBusca] = React.useState();
  const { token } = useContext(StoreContext);

  React.useEffect(() => {
    fazerRequisicao(
      `https://pagamentos-back.herokuapp.com/cobrancas?${
        busca ? `busca=${busca}&` : ""
      }cobrancasPorPagina=10&offset=0`,
      "GET",
      token
    )
      .then((res) => res.json())
      .then((resposta) => {
        console.log(resposta);
        if (resposta.status === "sucesso") {
          setCobranca(resposta.dados.cobrancas);
        }
      });
  }, [busca]);
  return (
    <div className="cobrancas">
      <PaginaPrincipal />
      <div className="corpoP">
        <div className="header">
          <Header />
        </div>
        <div className="todasCobrancas">
          <div className="buscar">
            <BuscarCobranca busca={busca} setBusca={setBusca} />
          </div>
          <div className="tabela">
            <ListarCobranca cobranca={cobranca} />
          </div>
        </div>
      </div>
    </div>
  );
}
