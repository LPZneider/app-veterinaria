"use client";
import { Navbar } from "@/components/Navbar";
import { Mascota } from "@/models";
import { propsNavUser } from "@/utilities";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
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
          />
          <FormControl sx={{ m: 0, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Raza</InputLabel>
            <Select
              color="secondary"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              // value={age}
              label="Raza"
              // onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
