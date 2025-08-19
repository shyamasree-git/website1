import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo_travlog.png";
import Menu from "./Menu";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header flex justify-between items-center text-center p-5">
        <div onClick={() => navigate("/")}>
          <img src={logo} alt="page logo" />
        </div>
        <Menu />
      </div>
    </>
  );
};

export default Header;
