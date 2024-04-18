"use client";
import { Navbar } from "@/components/Navbar";
import { propsNavUser } from "@/utilities";
import React from "react";
import "./User.css";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";

const User: React.FC = () => {
  const userState = useSelector((store: AppStore) => store.user);

  return (
    <div className="user home">
      <Navbar {...propsNavUser} />
      <h1>
        bienvenido {userState.nombre} a Mara sitio de veterinarias, servicios y
        productos
      </h1>
    </div>
  );
};

export default User;
