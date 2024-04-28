"use client";
import EditVeterinariaAdapter from "@/adapters/EditVeterinariaAdapter";
import { Navbar } from "@/components/Navbar";
import { AppStore } from "@/redux/store";
import { propsNavVeterinariaMiCuenta } from "@/utilities";
import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./CuentaVeterinaria.css";

export type CuentaVeterinariaProps = {
  // types...
};

const CuentaVeterinaria: React.FC<CuentaVeterinariaProps> = () => {
  const vetState = useSelector((store: AppStore) => store.veterinaria);
  const [nombre, setNombre] = useState(vetState.nombre || "");
  const [direccion, setDireccion] = useState(vetState.direccion || "");
  const [edit, setEdit] = useState(true);
  const [env, setEnv] = useState(false);
  useEffect(() => {
    setEnv(false);
    setEdit(true);
  }, [vetState]);
  return (
    <div className="cuentauser home">
      <Navbar {...propsNavVeterinariaMiCuenta} />
      <article className="user__cuenta">
        <TextField
          id="standard-basic"
          label="Nombre"
          variant="standard"
          color="secondary"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          disabled={edit}
        />
        <TextField
          id="standard"
          label="Direccion"
          variant="standard"
          color="secondary"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          disabled={edit}
        />
        <TextField
          id="standard-ema"
          label="Email"
          variant="standard"
          color="secondary"
          value={vetState.registro.email}
          disabled
        />
        <TextField
          id="standard-pas"
          label="Password"
          type="password"
          variant="standard"
          color="secondary"
          value={vetState.registro.password}
          disabled
        />
        <Button variant="outlined" onClick={() => setEdit(!edit)}>
          {!edit ? "Cancelar" : "Editar"}
        </Button>
        {edit === false && (
          <Button
            variant="outlined"
            onClick={() => {
              setEnv(true);
            }}
          >
            Guardar
          </Button>
        )}
        {env && (
          <EditVeterinariaAdapter
            id={vetState.id}
            nombre={nombre}
            direccion={direccion}
          />
        )}
      </article>
    </div>
  );
};

export default CuentaVeterinaria;
