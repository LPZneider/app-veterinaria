"use client";
import EditUserAdapter from "@/adapters/EditUserAdapter";
import { Navbar } from "@/components/Navbar";
import { AppStore } from "@/redux/store";
import { propsNavUser } from "@/utilities";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./CuentaUser.css";

export type CuentaUserProps = {
  // types...
};

const CuentaUser: React.FC<CuentaUserProps> = () => {
  const userState = useSelector((store: AppStore) => store.user);
  const [nombre, setNombre] = useState(userState.nombre);
  const [direccion, setDireccion] = useState(userState.direccion);
  const [edit, setEdit] = useState(true);
  const [env, setEnv] = useState(false);
  return (
    <div className="cuentauser home">
      <Navbar {...propsNavUser} />
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
          value={userState.registro.email}
          disabled
        />
        <TextField
          id="standard-pas"
          label="Password"
          type="password"
          variant="standard"
          color="secondary"
          value={userState.registro.password}
          disabled
        />
        <Button variant="outlined" onClick={() => setEdit(!edit)}>
          {!edit ? "Cancelar" : "Editar"}
        </Button>
        {!edit && (
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
          <EditUserAdapter
            id={userState.id}
            nombre={nombre}
            direccion={direccion}
          />
        )}
      </article>
    </div>
  );
};

export default CuentaUser;
