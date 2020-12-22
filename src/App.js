import React from "react";
import "./App.css";
import { Router } from "react-router-dom";
import Routes from "../src/components/Routes/routes";
import History from "../src/utills/history";
import StoreProvider from "./components/Store/Provider";

export default function App() {
  return (
    <StoreProvider>
      <div className="App">
        <Router history={History}>
          <Routes />
        </Router>
      </div>
    </StoreProvider>
  );
}
