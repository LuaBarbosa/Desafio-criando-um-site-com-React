import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Cadastro from "../Pages/Cadastro";
import Clientes from "../Pages/Clientes";

function useAuth() {
  const [logged, setLogged] = React.useState(true);
  return { logged, setLogged };
}

//function RotaProtegida({ children, ...props }) {
//const { logged } = useAuth();
// return (
//  <Route
//   {...props}
//  render={() => {
//  if (!logged) {
//    console.log({ logged });
//    return <Redirect to="/" />;
//  }

// return children;
//  }}
// />
//  );
//}

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/usuarios" component={Cadastro} />
	  <Route exact path="/clientes" component={Clientes} />
    </Switch>
  );
}
