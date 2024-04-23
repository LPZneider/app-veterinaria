"use client";
import { Navbar } from "@/components/Navbar";
import { AppStore } from "@/redux/store";
import { propsNavVet } from "@/utilities";
import React from "react";
import { useSelector } from "react-redux";
import "./Veterinario.css";

export type VeterinarioProps = {
  // types...
};

const Veterinario: React.FC<VeterinarioProps> = ({}) => {
  const userState = useSelector((store: AppStore) => store.veterinario);
  return (
    <div className="veterinario home">
      <Navbar {...propsNavVet} />
      <section className="user">
        <h1 className="titulo__user">
          Bienvenido Veterinario {userState.nombre} a mara lugar de tratamientos
          y citas.
        </h1>
        <div className="div-emma">
          <img src="/public/assets/vet.svg" alt="luna" className="emma" />
        </div>
      </section>
    </div>
  );
};

export default Veterinario;
