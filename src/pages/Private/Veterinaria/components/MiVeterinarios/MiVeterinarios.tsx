"use client";
import { Navbar } from "@/components/Navbar";
import { AppStore } from "@/redux/store";
import { propsNavVeterinariaMiVeterinarios } from "@/utilities";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./MiVeterinarios.css";

export type MiVeterinariosProps = {
  // types...
};

const MiVeterinarios: React.FC<MiVeterinariosProps> = () => {
  const navigate = useNavigate();
  const veterinariaState = useSelector((store: AppStore) => store.veterinaria);
  return (
    <div className="miveterinarios home">
      <Navbar {...propsNavVeterinariaMiVeterinarios} />
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
