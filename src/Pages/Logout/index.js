import React, { useContext } from "react";
import logout from "../../assets/logout.svg";
import StoreContext from "../../components/Store/Context";
import "./style.css";

const Logout = () => {
  const { setToken } = useContext(StoreContext);
  return (
    <>
      <button
        className="logout"
        onClick={() => {
          setToken(null);
        }}
      >
        <img src={logout} alt="Deslogar" />
      </button>
    </>
  );
};

export default Logout;
