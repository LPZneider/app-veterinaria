"use client";
import { Navbar } from "@/components/Navbar";
import { propsNavUserMascota } from "@/utilities";
import React from "react";
import "./Mascotas.css";

export type MascotasProps = {
  // types...
};

const Mascotas: React.FC<MascotasProps> = ({}) => {
  return (
    <div className=" home">
      <Navbar {...propsNavUserMascota} />
      <article className="container__mascota">
        <section className="item__mascota">
          <section className="item__image__mascota">
            <img src="/public/assets/dog1.svg" alt="icono mascota" />
          </section>
          <article className="info__mascota">
            <h2 className="titulo__mascota">mara</h2>
            <h3>mestizo</h3>
          </article>
          <button className="button__mascota">Ver mas</button>
        </section>
      </article>
    </div>
  );
};

export default Mascotas;
