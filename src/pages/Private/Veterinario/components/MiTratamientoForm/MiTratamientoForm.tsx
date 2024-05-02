"use client";
import CreateTratamientoAdapter from "@/adapters/CreateTratamientoAdapter";
import EditTratamientoAdapter from "@/adapters/EditTratamientoAdapter";
import { Navbar } from "@/components/Navbar";
import { Tratamiento } from "@/models/tratamiento.model";
import { AppStore } from "@/redux/store";
import { propsNavVetCuenta } from "@/utilities";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./MiTratamientoForm.css";

export type MiTratamientoFormProps = {
  // types...
  id?: number;
  nombre: string;
  descripcion: string;
};

const MiTratamientoForm: React.FC = () => {
  const params = useParams<{ mipaciente?: string }>();
  const tratamientoId = parseInt(params.mipaciente ?? "0", 10);
  const paramsMas = useParams<{ miMascota?: string }>();
  const mascotaId = parseInt(paramsMas.miMascota ?? "0", 10);

  const TratamientoEdit: Tratamiento | undefined = useSelector(
    (store: AppStore) => {
      for (const usuario of store.veterinario.usuarios) {
        for (const mascota of usuario.mascotas) {
          const tratamiento = mascota.tratamientos.find(
            (t) => t.id === tratamientoId
          );
          if (tratamiento && !mascotaId) {
            return tratamiento; // Devuelve el tratamiento si se encuentra
          }
        }
      }
      return undefined; // Si no se encuentra ningún tratamiento, devuelve undefined
    }
  );

  const MascotaId: number | undefined = useSelector((store: AppStore) => {
    for (const usuario of store.veterinario.usuarios) {
      for (const mascota of usuario.mascotas) {
        const tratamiento = mascota.tratamientos.find(
          (t) => t.id === tratamientoId
        );
        if (tratamiento && !mascotaId) {
          return mascota.id; // Devuelve el ID de la mascota que tiene el tratamiento
        }
      }
    }
    return mascotaId;
  });

  const vetState = useSelector((store: AppStore) => store.veterinario);
  const [tratamiento, setTratamiento] = useState<MiTratamientoFormProps>(() => {
    if (TratamientoEdit) {
      return {
        id: TratamientoEdit.id,
        nombre: TratamientoEdit.nombre,
        descripcion: TratamientoEdit.descripcion,
      };
    } else {
      return {
        nombre: "",
        descripcion: "",
      };
    }
  });

  const [subTratamiento, setSubTratamiento] = useState(false);
  const [editTratamiento, setEditTratamiento] = useState(false);

  const handleSubmit = () => {
    if (tratamiento.nombre.trim() !== "") {
      if (!tratamiento.id) {
        setSubTratamiento(true);
      } else {
        setEditTratamiento(true);
      }
    }
  };
  return (
    <div className="producto__form home">
      <Navbar {...propsNavVetCuenta} />
      <article className="formulario__mascota_crear">
        <TextField
          id="outlsdic"
          label="Nombre"
          variant="outlined"
          color="secondary"
          value={tratamiento.nombre}
          onChange={({ target }) => {
            setTratamiento((oldState) => ({
              ...oldState,
              nombre: target.value as string,
            }));
          }}
        />
        <TextField
          id="iasic"
          label="Descripcion"
          variant="outlined"
          color="secondary"
          value={tratamiento.descripcion}
          onChange={({ target }) => {
            setTratamiento((oldState) => ({
              ...oldState,
              descripcion: target.value as string,
            }));
          }}
        />
        <Button color="secondary" variant="contained" onClick={handleSubmit}>
          {tratamiento.id ? "Editar" : "Crear"}
        </Button>
        {subTratamiento && MascotaId && (
          <CreateTratamientoAdapter
            nombre={tratamiento.nombre}
            descripcion={tratamiento.descripcion}
            id_veterinario={vetState.veterinarios.id}
            id_mascota={MascotaId}
          />
        )}

        {editTratamiento && tratamiento.id && MascotaId && (
          <EditTratamientoAdapter
            id={tratamiento.id}
            nombre={tratamiento.nombre}
            descripcion={tratamiento.descripcion}
            id_veterinario={vetState.veterinarios.id}
            id_mascota={MascotaId}
          />
        )}
      </article>
    </div>
  );
};

export default MiTratamientoForm;
