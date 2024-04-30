"use client";
import EditVeterinarioReduxAdapter from "@/adapters/EditVeterinarioReduxAdapter";
import { Navbar } from "@/components/Navbar";
import { AppStore } from "@/redux/store";
import { propsNavVetCuenta } from "@/utilities";
import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./CuentaVeterinario.css";

export type CuentaVeterinarioProps = {
  // types...
};

const CuentaVeterinario: React.FC<CuentaVeterinarioProps> = () => {
  const vetState = useSelector((store: AppStore) => store.veterinario);
  const [nombre, setNombre] = useState(vetState.veterinarios.nombre || "");
  const [edit, setEdit] = useState(true);
  const [env, setEnv] = useState(false);
  useEffect(() => {
    setEnv(false);
    setEdit(true);
  }, [vetState]);
  return (
    <div className=" home cuentauser">
      <Navbar {...propsNavVetCuenta} />
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
          id="standard-ema"
          label="Email"
          variant="standard"
          color="secondary"
          value={vetState.veterinarios.registro.email}
          disabled
        />
        <TextField
          id="standard-pas"
          label="Password"
          type="password"
          variant="standard"
          color="secondary"
          value={vetState.veterinarios.registro.password}
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
          <EditVeterinarioReduxAdapter
            id={vetState.veterinarios.id}
            idVeterinaria={vetState.id}
            nombre={nombre}
          />
        )}
      </article>
    </div>
  );
};

export default CuentaVeterinario;
