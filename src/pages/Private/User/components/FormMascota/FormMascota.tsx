"use client";
import { Navbar } from "@/components/Navbar";
import { useAsync, useFetchAndLoad } from "@/hooks";
import { Mascota, Raza } from "@/models";
import getRazas from "@/services/razas.service";
import { propsNavUser } from "@/utilities";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import React, { useState } from "react";
import "./FormMascota.css";
export type FormMascotaProps = {
  // types...
};
const emptyMascota: Mascota = {
  fechaNacimiento: 0,
  nombre: "",
  raza: {
    altura: 0,
    nombre: "",
    peso: 0,
    tamanio: "",
  },
};

function Label() {
  return (
    <span>
      <small>Fecha de Nacimiento</small>
      <small> (MM-dd-yyyy)</small>
    </span>
  );
}

const FormMascota: React.FC<FormMascotaProps> = () => {
  const [mascota, setMascota] = useState<Mascota>(emptyMascota);
  const [razas, setRazas] = useState<Raza[]>([]);
  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () => await callEndpoint(getRazas());

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    setRazas([...data]);
  };

  useAsync(getApiData, adaptUser, () => {});
  return (
    <div className=" home">
      <Navbar {...propsNavUser} />
      <section className="formulario__mascota">
        <article className="formulario__mascota_crear">
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            color="secondary"
            value={mascota.nombre}
            onChange={({ target }) => {
              setMascota((oldState) => ({
                ...oldState,
                nombre: target.value as string,
              }));
            }}
          />
          <FormControl sx={{ m: 0, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Raza</InputLabel>
            <Select
              color="secondary"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={mascota.raza}
              label="Raza"
              onChange={({ target }) => {
                setMascota((oldState) => ({
                  ...oldState,
                  raza: target.value as Raza,
                }));
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {loading ? (
                <MenuItem value="">
                  <em>Cargando Razas...</em>
                </MenuItem>
              ) : (
                razas.map((raza) => {
                  return (
                    <MenuItem value={JSON.stringify(raza)}>
                      {raza.nombre}
                    </MenuItem>
                  );
                })
              )}
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DemoItem label={<Label />}>
                <DatePicker />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
          <Button color="secondary" variant="contained">
            Agregar mascota
          </Button>
        </article>
        <div className="div-emma">
          <img src="/public/assets/chihuahua.svg" alt="luna" className="emma" />
        </div>
      </section>
    </div>
  );
};

export default FormMascota;
