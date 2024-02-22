"use client";
import { PrivateRoutes, Roles } from "@/models";
import { login } from "@/redux/states/user";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export type LoginProps = {
  // types...
};

const Login: React.FC<LoginProps> = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = () => {
    dispatch(login({ rol: Roles.CLIENTE }));
    navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
  };

  return (
    <div>
      <h2>Hola este es el login</h2>
      <button onClick={loginUser}>Login</button>
    </div>
  );
};

export default Login;
