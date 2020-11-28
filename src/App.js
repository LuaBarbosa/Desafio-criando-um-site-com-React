import React from "react";
import "./App.css";
import { Router } from "react-router-dom";
import Routes from "./Routes/routes";
import History from "./history";

export default function App() {
  return (
    <div className="App">
      <Router history={History}>
        <Routes />
      </Router>
    </div>
  );
}
