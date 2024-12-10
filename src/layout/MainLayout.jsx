import React from "react";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="px-[100px] py-[40px]">{children}</div>
    </div>
  );
};

export default MainLayout;
