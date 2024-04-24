"use client";
import DeleteMascotaAdapter from "@/adapters/DeleteMascotaAdapter";
import { Navbar } from "@/components/Navbar";
import { AppStore } from "@/redux/store";
import { propsNavUser } from "@/utilities";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./MascotaDetalle.css";

export type MascotaDetalleProps = {
  // types...
};

const MascotaDetalle: React.FC<MascotaDetalleProps> = () => {
  const userState = useSelector((store: AppStore) => store.user);
  const navigate = useNavigate();
  const params = useParams();
  const mascotaIdString = params.mascotaId;
  const mascotaId = parseInt(mascotaIdString ?? "0");
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

  const mascota = useSelector((store: AppStore) =>
    store.user.mascotas.find((m) => m.id === mascotaId)
  );
  const fechaNacimiento = mascota?.fechaNacimiento
    ? new Date(mascota.fechaNacimiento)
    : null;

  if (!mascota) {
    return <p>Mascota no encontrada</p>;
  }
  return (
    <div className="mascotadetalle home">
      <Navbar {...propsNavUser} />
      <article className="mascota__detalle">
        <section className="mascota__presentacion">
          <h1>{mascota.nombre}</h1>
          <p>
            Cada mascota llevaba consigo un tesoro de amor y compasión, como un
            eco susurrante de la sabiduría de la naturaleza, enseñándonos a
            valorar la belleza y la importancia de cada criatura viviente en
            este vasto tapiz de vida.
          </p>
          <div className="buttons">
            <Button
              className="Button"
              variant="contained"
              color="secondary"
              onClick={() => navigate(`/mascota-form/${mascota.id}`)}
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
                  <p>¿Estás seguro de eliminar la mascota?</p>
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
              <DeleteMascotaAdapter
                id={mascota.id}
                idPropietario={userState.id}
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
          <h2>Fecha de nacimiento</h2>
          <p>{fechaNacimiento?.toLocaleDateString()}</p>
          <h2>Raza</h2>
          <p>{mascota.raza.nombre}</p>
          <h2>Tamaño</h2>
          <p>{mascota.raza.tamanio}</p>
          <h2>Peso</h2>
          <p>{mascota.raza.peso} kilos</p>
          <h2>Altura</h2>
          <p>{mascota.raza.altura} cm</p>
        </section>
      </article>
    </div>
  );
};

export default MascotaDetalle;
