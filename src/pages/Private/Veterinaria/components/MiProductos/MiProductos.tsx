/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Navbar } from "@/components/Navbar";
import { AppStore } from "@/redux/store";
import { propsNavVeterinariaMiProductos } from "@/utilities";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./MiProductos.css";

export type MiProductosProps = {
  // types...
};

const MiProductos: React.FC<MiProductosProps> = () => {
  const veterinariaState = useSelector((store: AppStore) => store.veterinaria);
  const navigate = useNavigate();

  return (
    <div className="miproductos home">
      <Navbar {...propsNavVeterinariaMiProductos} />
      {veterinariaState.productos.length > 0 ? (
        <section className="container__veterinaria">
          {veterinariaState.productos.map((producto: any) => (
            <section key={producto.nombre} className="item__mascota">
              <section className="item__image__mascota"></section>
              <article className="info__mascota">
                <h2 className="titulo__mascota">{producto.nombre}</h2>
                <h3>Cant: {producto.cantidad}</h3>
              </article>
              <button
                className="button__mascota"
                onClick={() => navigate(`/mis-productos/${producto.id}`)}
              >
                Ver más
              </button>
            </section>
          ))}
        </section>
      ) : (
        <img src="/public/assets/loader.svg" alt="loading" width={30} />
      )}
    </div>
  );
};

export default MiProductos;
