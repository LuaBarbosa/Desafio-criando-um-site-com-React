import React from "react";
import Context from "./Context.js";

const StoreProvider = ({ Children }) => {
  const [token, setToken] = React.useState();
  return (
    <Context.Provider value={{ token, setToken }}>{Children}</Context.Provider>
  );
};

export default StoreProvider;
