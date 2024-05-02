"use client";
import { Navbar } from "@/components/Navbar";
import { AppStore } from "@/redux/store";
import { propsNavVeterinaria } from "@/utilities";
import React from "react";
import { useSelector } from "react-redux";
import "./Veterinaria.css";

const Veterinaria: React.FC = () => {
  const userState = useSelector((store: AppStore) => store.veterinaria);
  return (
    <div className="veterinaria home">
      <Navbar {...propsNavVeterinaria} />
      <section className="user">
        <h1 className="titulo__user">
          Bienvenido, {userState.nombre}, a Mara, el lugar de clientes y ventas.
        </h1>
        <div className="div-emma">
          <img src="/public/assets/vet.svg" alt="luna" className="emma" />
        </div>
      </section>
    </div>
  );
};

export default Veterinaria;
