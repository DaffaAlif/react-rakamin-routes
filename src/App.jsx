import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { NavLink } from "react-router";
import "./App.css";
import Banner from "./components/Banner";
import Banner1 from "./components/Banner1";
import TableRakamin from "./components/TableRakamin";

function App() {
  return (
    <div className="grid gap-12">
      <Banner1 />
      <Banner />
      <TableRakamin/>
    </div>
  );
}

export default App;
