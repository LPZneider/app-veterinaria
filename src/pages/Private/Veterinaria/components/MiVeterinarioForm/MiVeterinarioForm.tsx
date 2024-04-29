"use client";
import React, { useState } from "react";
import "./MiVeterinarioForm.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { Navbar } from "@/components/Navbar";
import { propsNavVeterinariaMiCuenta } from "@/utilities";
import { Button, TextField } from "@mui/material";
import { Registro } from "@/models";
import CreateVeterianarioAdapter from "@/adapters/CreateVeterinarioAdapter";
import EditVeterinarioAdapter from "@/adapters/EditVeterinarioAdapter";

export type MiVeterinarioFormProps = {
  // types...
  id?: number;
  nombre: string;
  registro: Registro;
};

const MiVeterinarioForm: React.FC = () => {
  const params = useParams<{ miVeterinario?: string }>();
  const veterinarioId = parseInt(params.miVeterinario ?? "0", 10);

  const veterinarioEdit = useSelector((store: AppStore) =>
    store.veterinaria.veterinarios.find((v) => v.id === veterinarioId)
  );
  const veterinariaState = useSelector((store: AppStore) => store.veterinaria);
  const [veterinario, setVeterinario] = useState<MiVeterinarioFormProps>(() => {
    if (veterinarioEdit) {
      return {
        id: veterinarioEdit.id,
        nombre: veterinarioEdit.nombre,
        registro: veterinarioEdit.registro,
      };
    } else {
      return {
        nombre: "",
        registro: {
          email: "",
          password: "",
        },
      };
    }
  });

  const [subVeterinario, setSubVeterinario] = useState(false);
  const [editveterinario, setEditVeterinario] = useState(false);

  const handleSubmit = () => {
    if (veterinario.nombre.trim() !== "") {
      if (!veterinario.id) {
        setSubVeterinario(true);
      } else {
        setEditVeterinario(true);
      }
    }
  };
  return (
    <div className="producto__form home">
      <Navbar {...propsNavVeterinariaMiCuenta} />
      <article className="formulario__mascota_crear">
        <TextField
          id="outlsdfiasic"
          label="Nombre"
          variant="outlined"
          color="secondary"
          value={veterinario.nombre}
          onChange={({ target }) => {
            setVeterinario((oldState) => ({
              ...oldState,
              nombre: target.value as string,
            }));
          }}
        />
        <TextField
          id="tlisdfned-"
          type="email"
          label="Email"
          variant="outlined"
          color="secondary"
          disabled={!!veterinarioEdit}
          value={veterinario.registro.email}
          onChange={({ target }) => {
            setVeterinario((oldState) => ({
              ...oldState,
              registro: { ...oldState.registro, email: target.value as string },
            }));
          }}
        />
        <TextField
          id="ser-basifc"
          type="password"
          label="Password"
          variant="outlined"
          color="secondary"
          disabled={!!veterinarioEdit}
          value={veterinario.registro.password}
          onChange={({ target }) => {
            setVeterinario((oldState) => ({
              ...oldState,
              registro: {
                ...oldState.registro,
                password: target.value as string,
              },
            }));
          }}
        />

        <Button color="secondary" variant="contained" onClick={handleSubmit}>
          {veterinario.id ? "Editar" : "Crear"}
        </Button>

        {subVeterinario && (
          <CreateVeterianarioAdapter
            nombre={veterinario.nombre}
            email={veterinario.registro.email}
            password={veterinario.registro.password}
            idVeterinaria={veterinariaState.id}
          />
        )}

        {editveterinario && veterinario.id && (
          <EditVeterinarioAdapter
            id={veterinario.id}
            nombre={veterinario.nombre}
            idVeterinaria={veterinariaState.id}
          />
        )}
      </article>
    </div>
  );
};

export default MiVeterinarioForm;
