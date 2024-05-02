"use client";
import { Navbar } from "@/components/Navbar";
import { AppStore } from "@/redux/store";
import { propsNavVetCuenta } from "@/utilities";
import React from "react";
import { useSelector } from "react-redux";
import "./MiPacientes.css";
import { useNavigate } from "react-router-dom";

export type MiPacientesProps = {
  // types...
};

const MiPacientes: React.FC<MiPacientesProps> = () => {
  const navigate = useNavigate();
  const vetState = useSelector((store: AppStore) => store.veterinario);
  return (
    <div className="mipacientes home">
      <Navbar {...propsNavVetCuenta} />
      {vetState.usuarios.map((usuario) => {
        return (
          <div key={usuario.id} className="container__mascota">
            {usuario.mascotas.map((mascota) => {
              return (
                <section
                  key={mascota.nombre + mascota.fechaNacimiento}
                  className="item__mascota"
                >
                  <section className="item__image__mascota">
                    <h2>{usuario.nombre}</h2>
                    <img
                      src={`/public/assets/dog${
                        Math.floor(Math.random() * 5) + 1
                      }.svg`}
                      alt="icono mascota"
                    />
                  </section>
                  <article className="info__mascota">
                    <h2 className="titulo__mascota">{mascota.nombre}</h2>
                    <h3>{mascota.raza.nombre}</h3>
                  </article>
                  <button
                    className="button__mascota"
                    onClick={() => navigate(`/mi-paciente/${mascota.id}`)}
                  >
                    Ver mas
                  </button>
                </section>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default MiPacientes;
