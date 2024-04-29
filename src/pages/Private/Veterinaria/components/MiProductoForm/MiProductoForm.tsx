"use client";
import { Navbar } from "@/components/Navbar";
import { propsNavVeterinariaMiCuenta } from "@/utilities";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./MiProductoForm.css";
import CreateProductoAdapter from "@/adapters/CreateProductoAdapter";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { useParams } from "react-router-dom";
import EditProductoAdapter from "@/adapters/EditProductoAdapter";

export type MiProductoFormProps = {
  id?: number;
  nombre: string;
  cantidad: number;
  precio: number;
};

const MiProductoForm: React.FC = () => {
  const params = useParams<{ miProducto?: string }>();
  const productoId = parseInt(params.miProducto ?? "0", 10);

  const productoEdit = useSelector((store: AppStore) =>
    store.veterinaria.productos.find((p) => p.id === productoId)
  );
  const veterinariaState = useSelector((store: AppStore) => store.veterinaria);
  const [producto, setProducto] = useState<MiProductoFormProps>(() => {
    if (productoEdit) {
      return {
        id: productoEdit.id,
        nombre: productoEdit.nombre,
        cantidad: productoEdit.cantidad,
        precio: productoEdit.precio,
      };
    } else {
      return {
        nombre: "",
        cantidad: 0,
        precio: 0,
      };
    }
  });

  const [subProducto, setSubProducto] = useState(false);
  const [editProducto, setEditProducto] = useState(false);

  const handleSubmit = () => {
    if (
      producto.nombre.trim() !== "" &&
      producto.cantidad !== 0 &&
      producto.cantidad > 0 &&
      producto.precio !== 0 &&
      producto.precio > 0
    ) {
      if (!producto.id) {
        setSubProducto(true);
      } else {
        setEditProducto(true);
      }
    }
  };
  return (
    <div className="producto__form home">
      <Navbar {...propsNavVeterinariaMiCuenta} />
      <article className="formulario__mascota_crear">
        <TextField
          id="outlsdfined-basic"
          label="Nombre"
          variant="outlined"
          color="secondary"
          value={producto.nombre}
          onChange={({ target }) => {
            setProducto((oldState) => ({
              ...oldState,
              nombre: target.value as string,
            }));
          }}
        />
        <TextField
          id="outlisdfned-"
          type="number"
          label="Precio"
          variant="outlined"
          color="secondary"
          value={producto.precio}
          onChange={({ target }) => {
            setProducto((oldState) => ({
              ...oldState,
              precio: target.value as unknown as number,
            }));
          }}
        />
        <TextField
          id="s-basisdfc"
          type="number"
          label="Cantidad"
          variant="outlined"
          color="secondary"
          value={producto.cantidad}
          onChange={({ target }) => {
            setProducto((oldState) => ({
              ...oldState,
              cantidad: target.value as unknown as number,
            }));
          }}
        />

        <Button color="secondary" variant="contained" onClick={handleSubmit}>
          {producto.id ? "Editar" : "Crear"}
        </Button>

        {subProducto && (
          <CreateProductoAdapter
            nombre={producto.nombre}
            cantidad={producto.cantidad}
            precio={producto.precio}
            idVeterinaria={veterinariaState.id}
          />
        )}

        {editProducto && producto.id && (
          <EditProductoAdapter
            id={producto.id}
            nombre={producto.nombre}
            cantidad={producto.cantidad}
            precio={producto.precio}
            idVeterinaria={veterinariaState.id}
          />
        )}
      </article>
    </div>
  );
};

export default MiProductoForm;
