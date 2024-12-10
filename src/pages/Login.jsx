import React, { useState } from "react";
import logo from "../assets/Logo.png";
import loginPic from "../assets/login-signup.png";
import { Button, Image, Input } from "antd";
import { useAuth } from "../context/AuthContext";
import { redirect } from "react-router";
import AuthLayout from "../layout/AuthLayout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const onSubmitForm = () => {
    login(email, password);
   
  };

  return (
    <AuthLayout>
      <div className="flex justify-between items-center w-[100vw]">
        <div className="flex flex-col gap-10 w-1/3 ">
          <div className="self-center">
            <img className="h-12" src={logo} alt="logo" />
          </div>

          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="bg-[#19918F] text-white h-10"
            onClick={onSubmitForm}
          >
            Login
          </Button>

          <p>
            belum punya akun?
            <a href="#" className="text-blue-400">
              &nbsp; Daftar di sini
            </a>
          </p>
        </div>
        <div className="w-2/3 flex justify-end">
          <img src={loginPic} className="h-[100vh]"/>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
