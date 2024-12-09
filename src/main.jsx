import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import TransferPage from "./TransferPage.jsx";
import TopUpPage from "./TopUpPage.jsx";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="px-[100px] py-[40px]">
        <Routes>
          <Route index element={<App />} />
          <Route path="transfer" element={<TransferPage />} />
          <Route path="topup" element={<TopUpPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
);
