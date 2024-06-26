"use client";
import { Navbar } from "@/components/Navbar";
import { AppStore } from "@/redux/store";
import { propsNavUserMascota } from "@/utilities";
import React from "react";
import { useSelector } from "react-redux";
import "./Mascotas.css";
import { useNavigate } from "react-router-dom";

const Mascotas: React.FC = () => {
  const navigate = useNavigate();
  const userState = useSelector((store: AppStore) => store.user);
  return (
    <div className=" home">
      <Navbar {...propsNavUserMascota} />
      <article className="container__mascota">
        {!userState.mascotas ? (
          <section>No hay mascotas.</section>
        ) : (
          userState.mascotas.map((mascota) => (
            <section
              key={mascota.nombre + mascota.fechaNacimiento}
              className="item__mascota"
            >
              <section className="item__image__mascota">
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
                onClick={() => navigate(`/mascotas/${mascota.id}`)}
              >
                Ver más
              </button>
            </section>
          ))
        )}
      </article>
    </div>
  );
};

export default Mascotas;
