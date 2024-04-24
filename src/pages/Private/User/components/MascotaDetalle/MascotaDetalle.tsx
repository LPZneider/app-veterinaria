"use client";
import { Navbar } from "@/components/Navbar";
import { AppStore } from "@/redux/store";
import { propsNavUser } from "@/utilities";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./MascotaDetalle.css";
import { Button } from "@mui/material";

export type MascotaDetalleProps = {
  // types...
};

const MascotaDetalle: React.FC<MascotaDetalleProps> = () => {
  const params = useParams();
  const mascotaIdString = params.mascotaId;
  const mascotaId = parseInt(mascotaIdString ?? "0");

  const mascota = useSelector((store: AppStore) =>
    store.user.mascotas.find((m) => m.id === mascotaId)
  );
  const fechaNacimiento = new Date(mascota?.fechaNacimiento ?? "");

  if (!mascota) {
    return <p>Mascota no encontrada</p>;
  }
  return (
    <div className="mascotadetalle home">
      <Navbar {...propsNavUser} />
      <article className="mascota__detalle">
        <section className="mascota__presentacion">
          <h1>{mascota.nombre}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            provident accusamus consequuntur nam nulla ratione, fugiat est error
            perspiciatis eius expedita, doloremque corporis ab itaque veniam
            quod! Voluptatem, tempore repudiandae.
          </p>
          <Button variant="contained" color="secondary">
            Editar
          </Button>
          <Button variant="outlined" color="secondary">
            Eliminar
          </Button>
        </section>
        <section className="mascota__detalle__imagen">
          <img
            src={`/public/assets/dog${Math.floor(Math.random() * 5) + 1}.svg`}
            alt="icono mascota"
          />
        </section>
        <section className="mascota__informacion">
          <h2>fecha de nacimiento</h2>
          <p>{fechaNacimiento?.toLocaleDateString()}</p>
          <h2>Raza</h2>
          <p>{mascota.raza.nombre}</p>
          <h2>Tamaño</h2>
          <p>{mascota.raza.tamanio}</p>
          <h2>Peso</h2>
          <p>{mascota.raza.peso}</p>
          <h2>Altura</h2>
          <p>{mascota.raza.altura}</p>
        </section>
      </article>
    </div>
  );
};

export default MascotaDetalle;
