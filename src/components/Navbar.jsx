import { Image } from "antd";
import React from "react";
import logo from "../assets/Logo.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="h-6 px-10 py-10  flex justify-between shadow-lg items-center ">
      <Image width={150} src={logo} />
      <div className="flex gap-8">
        <NavLink to="/" end>
          Dashboard
        </NavLink>
        <NavLink to="/transfer" end>
          Transfer
        </NavLink>
        <NavLink to="/topup" end>
          Top Up
        </NavLink>
        <NavLink to="#" end>
          Sign Out
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
