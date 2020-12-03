import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "../../Store/Context";

const RoutesPrivate = ({ component: Component, ...props }) => {
  const { token } = useContext(Context);
  console.log(token);
  return (
    <Route
      {...props}
      render={() => (token ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default RoutesPrivate;
