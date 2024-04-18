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
          <h2 className="titulo__mascota">mara</h2>
          <p className="raza__mascota">mestizo</p>
        </section>
      </article>
    </div>
  );
};

export default Mascotas;
