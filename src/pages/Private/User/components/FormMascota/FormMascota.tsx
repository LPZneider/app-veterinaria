"use client";
import { Navbar } from "@/components/Navbar";
import { useAsync, useFetchAndLoad } from "@/hooks";
import { Raza } from "@/models";
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
import { Dayjs } from "dayjs";
import React, { useState } from "react";
import "./FormMascota.css";
import { useSelector } from "react-redux";
import { AppStore } from "../../../../../redux/store";
import CreateMascotaAdapter from "@/adapters/CreateMascotaAdapter";
export type FormMascotaProps = {
  // types...
};
const emptyMascota = {
  fechaNacimiento: "",
  nombre: "",
  raza: {
    id: 0,
  },
  propietario: {
    id: 0,
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
  const [mascota, setMascota] = useState(emptyMascota);
  const [razas, setRazas] = useState<Raza[]>([]);
  const [fechaForm] = useState<Dayjs | null>(null);
  const [subMascota, setSubMascota] = useState(false);
  const { loading, callEndpoint } = useFetchAndLoad();
  const stateUser = useSelector((store: AppStore) => store.user);
  const getApiData = async () => await callEndpoint(getRazas());

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    setRazas([...data]);
  };

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      const formattedDate = date.format("YYYY-MM-DD");
      setMascota((oldState) => ({
        ...oldState,
        fechaNacimiento: formattedDate,
      }));
      console.log(mascota);
    }
  };

  useAsync(getApiData, adaptUser, () => {});

  const handleSubmit = () => {
    setMascota((oldState) => ({
      ...oldState,
      propietario: { id: stateUser.id },
    }));
    if (mascota.nombre !== "") {
      setSubMascota(true);
    }
  };
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
              value={mascota.raza.id}
              label="Raza"
              onChange={(e) =>
                setMascota((oldState) => ({
                  ...oldState,
                  raza: { id: e.target.value as number },
                }))
              }
            >
              <MenuItem value={0}>
                <em>None</em>
              </MenuItem>
              {loading ? (
                <MenuItem value="">
                  <em>Cargando Razas...</em>
                </MenuItem>
              ) : (
                razas.map((raza) => {
                  return (
                    <MenuItem key={raza.nombre} value={raza.id}>
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
                <DatePicker value={fechaForm} onChange={handleDateChange} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
          <Button color="secondary" variant="contained" onClick={handleSubmit}>
            Enviar
          </Button>

          {subMascota && (
            <CreateMascotaAdapter
              nombre={mascota.nombre}
              fechaNacimiento={mascota.fechaNacimiento}
              idPropietario={mascota.propietario.id}
              idRaza={mascota.raza.id}
            />
          )}
        </article>
        <div className="div-emma">
          <img src="/public/assets/chihuahua.svg" alt="luna" className="emma" />
        </div>
      </section>
    </div>
  );
};

export default FormMascota;
