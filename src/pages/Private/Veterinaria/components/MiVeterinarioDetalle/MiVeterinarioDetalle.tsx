"use client";
import DeleteVeterinarioAdapter from "@/adapters/DeleteVeterinarioAdapter";
import { Navbar } from "@/components/Navbar";
import { AppStore } from "@/redux/store";
import { propsNavVeterinariaMiCuenta } from "@/utilities";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./MiVeterinarioDetalle.css";

export type MiVeterinarioDetalleProps = {
  // types...
};

const MiVeterinarioDetalle: React.FC<MiVeterinarioDetalleProps> = () => {
  const veterinariaState = useSelector((store: AppStore) => store.veterinaria);
  const navigate = useNavigate();
  const params = useParams();
  const veterinarioIdString = params.veterinarioId;
  const veterinarioId = parseInt(veterinarioIdString ?? "0");
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [deleteM, setDeleteM] = useState(false);

  const handleDelete = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirmDelete = () => {
    setDeleteM(true);
    setShowConfirmDialog(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmDialog(false);
  };

  const veterinario = useSelector((store: AppStore) =>
    store.veterinaria.veterinarios.find((v) => v.id === veterinarioId)
  );

  if (!veterinario) {
    return <p>producto no encontrado</p>;
  }
  return (
    <div className="miveterinariodetalle home">
      <Navbar {...propsNavVeterinariaMiCuenta} />
      <article className="producto__detalle__article">
        <section className="mascota__presentacion">
          <h1>{veterinario.nombre}</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ut
            ipsam inventore iusto quasi tempore numquam magnam facere, quisquam
            ad fugit quam ipsa, aperiam maiores animi totam dolor quaerat
            provident!
          </p>
          <div className="buttons">
            <Button
              className="Button"
              variant="contained"
              color="secondary"
              onClick={() => navigate(`/veterinario-form/${veterinario.id}`)}
            >
              Editar
            </Button>
            <Button
              className="Button"
              variant="outlined"
              color="secondary"
              onClick={handleDelete}
            >
              Eliminar
            </Button>
            {showConfirmDialog && (
              <div className="dialog__remove">
                <div className="dialog__remove__mascota">
                  <p>
                    ¿Estás seguro de eliminar el veterianrio
                    {" " + veterinario.nombre}?
                  </p>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleConfirmDelete}
                  >
                    Sí
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleCancelDelete}
                  >
                    No
                  </Button>
                </div>
              </div>
            )}
            {deleteM && (
              <DeleteVeterinarioAdapter
                id={veterinario.id}
                idVeterinaria={veterinariaState.id}
              />
            )}
          </div>
        </section>
        <section className="mascota__detalle__imagen">
          <img
            src={`/public/assets/dog${Math.floor(Math.random() * 5) + 1}.svg`}
            alt="icono mascota"
          />
        </section>
        <section className="mascota__informacion">
          <h2>tratamientos</h2>
          <p>{veterinario.nombre}</p>
        </section>
      </article>
    </div>
  );
};

export default MiVeterinarioDetalle;
