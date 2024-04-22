"use client";
import { Navbar } from "@/components/Navbar";
import { AppStore } from "@/redux/store";
import { propsNavHome } from "@/utilities";
import React from "react";
import { useSelector } from "react-redux";
import "./Veterinaria.css";

const Veterinaria: React.FC = () => {
  const userState = useSelector((store: AppStore) => store.user);
  return (
    <div className="veterinaria home">
      <Navbar {...propsNavHome} />
      <h1>Bienvenido Veterinaria {userState.nombre}</h1>
    </div>
  );
};

export default Veterinaria;
