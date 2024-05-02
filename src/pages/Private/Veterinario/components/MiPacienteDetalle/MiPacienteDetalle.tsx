"use client";
import { Navbar } from "@/components/Navbar";
import { AppStore } from "@/redux/store";
import { propsNavVetCuenta } from "@/utilities";
import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { TablaTratamientos } from "../TablaTratamientos";
import "./MiPacienteDetalle.css";

export type MiPacienteDetalleProps = {
  // types...
};
//mipaciente
const MiPacienteDetalle: React.FC<MiPacienteDetalleProps> = () => {
  const navigate = useNavigate();
  const params = useParams();
  const pacienteIdString = params.mipaciente;
  const pacienteId = parseInt(pacienteIdString ?? "0");
  const vetState = useSelector((store: AppStore) => store.veterinario);

  const paciente = useSelector((store: AppStore) => {
    const pacientes = store.veterinario.usuarios;
    for (const paciente of pacientes) {
      const mascota = paciente.mascotas.find(
        (mascota) => mascota.id === pacienteId
      );
      if (mascota) {
        return mascota;
      }
    }
    return null;
  });
  const fechaNacimiento = paciente?.fechaNacimiento
    ? new Date(paciente.fechaNacimiento)
    : null;

  if (!paciente) {
    return <p>producto no encontrado</p>;
  }
  return (
    <div className="mipacientedetalle home">
      <Navbar {...propsNavVetCuenta} />
      <article className="producto__detalle__article">
        <section className="mascota__presentacion">
          <h1>{paciente.nombre}</h1>
          <p>
            Cada mascota llevaba consigo un tesoro de amor y compasión, como un
            eco susurrante de la sabiduría de la naturaleza, enseñándonos a
            valorar la belleza y la importancia de cada criatura viviente en
            este vasto tapiz de vida.
          </p>
          <article className="tratamientos">
            <h2>Tratamientos</h2>
            <Button
              className="button__tratamiento"
              color="secondary"
              variant="outlined"
              onClick={() => navigate(`/mi-tratamiento-form/${paciente.id}`)}
            >
              Agregar nuevo tratamiento
            </Button>
            <TablaTratamientos idVeterinario={vetState.id} />
          </article>
        </section>
        <article className="mascota__article__paciente">
          <section className="mascota__detalle__imagen">
            <img
              src={`/public/assets/dog${Math.floor(Math.random() * 5) + 1}.svg`}
              alt="icono mascota"
            />
          </section>
          <section className="mascota__informacion">
            <h2>Fecha de nacimiento</h2>
            <p>{fechaNacimiento?.toLocaleDateString()}</p>
            <h2>Raza</h2>
            <p>{paciente.raza.nombre}</p>
            <h2>Tamaño</h2>
            <p>{paciente.raza.tamanio}</p>
            <h2>Peso</h2>
            <p>{paciente.raza.peso} kilos</p>
            <h2>Altura</h2>
            <p>{paciente.raza.altura} cm</p>
          </section>
        </article>
      </article>
    </div>
  );
};

export default MiPacienteDetalle;
