import React from "react";
import { Switch, Route } from "react-router-dom";
import RoutesPrivate from "../Routes/Private/private";

import Login from "../../Pages/Login";
import Cadastro from "../../Pages/Cadastro";
import Clientes from "../../Pages/Clientes";
import CriarCliente from "../../Pages/Criar Cliente";
import Cobrancas from "../../Pages/Cobranças";
import Home from "../../Pages/Home";

import CriarCobranca from "../../Pages/Criar Cobrança";
import EditarCliente from "../../Pages/Editar Cliente";

("/editar-cliente");

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/usuarios" component={Cadastro} />
      <RoutesPrivate exact path="/home" component={Home} />
      <RoutesPrivate exact path="/clientes" component={Clientes} />
      <RoutesPrivate exact path="/criarClientes" component={CriarCliente} />
      <RoutesPrivate exact path="/cobrancas" component={Cobrancas} />
      <RoutesPrivate exact path="/criarCobranca" component={CriarCobranca} />
      <RoutesPrivate exact path="/editarCliente" component={EditarCliente} />
    </Switch>
  );
}
