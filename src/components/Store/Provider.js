import React from "react";
import Context from "./Context.js";

const StoreProvider = ({ children }) => {
  const [token, setToken] = React.useState();
  return (
    <Context.Provider value={{ token, setToken }}>{children}</Context.Provider>
  );
};

export default StoreProvider;
