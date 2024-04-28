"use client";
import React from "react";
import "./MiVeterinarios.css";
import { Navbar } from "@/components/Navbar";
import { propsNavVeterinariaMiCuenta } from "@/utilities";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { useNavigate } from "react-router-dom";

export type MiVeterinariosProps = {
  // types...
};

const MiVeterinarios: React.FC<MiVeterinariosProps> = () => {
  const navigate = useNavigate();
  const veterinariaState = useSelector((store: AppStore) => store.veterinaria);
  return (
    <div className="miveterinarios home">
      <Navbar {...propsNavVeterinariaMiCuenta} />
      <section className="container__veterinaria">
        {veterinariaState.veterinarios.map((veterinario) => (
          <section key={veterinario.nombre} className="item__mascota">
            <article>
              <h2 className="titulo__veterinario">{veterinario.nombre}</h2>
            </article>
            <button
              className="button__mascota"
              onClick={() => navigate(`/mis-veterinarios/${veterinario.id}`)}
            >
              Ver mas
            </button>
          </section>
        ))}
      </section>
    </div>
  );
};

export default MiVeterinarios;
