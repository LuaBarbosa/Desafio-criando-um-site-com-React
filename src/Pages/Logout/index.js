import React from "react";
import logout from "../../assets/logout.svg";
import "./style.css";

const Logout = (props) => {
  return (
    <>
      <button className="logout" onClick={props.onClick}>
        <img src={logout} alt="Deslogar" />
      </button>
    </>
  );
};

export default Logout;
