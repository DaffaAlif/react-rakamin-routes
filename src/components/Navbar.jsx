import { Image } from "antd";
import React from "react";
import logo from "../assets/Logo.png";
import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();
  return (
    <div className="h-6 px-10 py-10  flex justify-between items-center sticky top-0 bg-white">
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
        
          <button onClick={logout}>Sign Out</button>
     
      </div>
    </div>
  );
};

export default Navbar;
