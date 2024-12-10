import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import TransferPage from "./pages/TransferPage.jsx";
import TopUpPage from "./pages/TopUpPage.jsx";
import Login from "./pages/login.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            index
            element={
              <ProtectedRoute>
                <App />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transfer"
            element={
              <ProtectedRoute>
                <TransferPage />
              </ProtectedRoute>
            }
          />
          <Route path="/topup" element={<TopUpPage />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
