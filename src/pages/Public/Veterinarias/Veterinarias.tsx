"use client";
import React, { useState } from "react";
import "./Veterinarias.css";
import { propsNavHome, propsNavUserMascota } from "@/utilities";
import { Navbar } from "@/components/Navbar";
import { useAsync, useFetchAndLoad } from "@/hooks";
import getVeterinarias from "@/services/veterinarias.service";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { Roles } from "@/models";

export type VeterinariasProps = {
  // types...
};

const Veterinarias: React.FC<VeterinariasProps> = () => {
  const userState = useSelector((store: AppStore) => store.user);
  const { callEndpoint } = useFetchAndLoad();
  const getApiData = async () => await callEndpoint(getVeterinarias());
  const [veterinarias, setVeterinarias] = useState<[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    console.log(data);
    setVeterinarias(data);
  };

  useAsync(getApiData, adaptUser, () => {});
  const navigate = useNavigate();

  const isLogin =
    userState.rol !== Roles.NO_REGISTRADO ? propsNavUserMascota : propsNavHome;
  return (
    <div className="veterinarias home">
      <Navbar {...isLogin} />
      {veterinarias.length > 0 ? (
        <section className="container__veterinaria">
          {veterinarias.map((veterinaria: any) => (
            <section key={veterinaria.nombre} className="item__mascota">
              <section className="item__image__mascota">
                <img
                  src={`/public/assets/vet${
                    Math.floor(Math.random() * 4) + 1
                  }.svg`}
                  alt="icono mascota"
                />
              </section>
              <article className="info__mascota">
                <h2 className="titulo__mascota">{veterinaria.nombre}</h2>
                <h3>{veterinaria.direccion}</h3>
              </article>
              <button
                className="button__mascota"
                onClick={() => navigate(`/veterinarias/${veterinaria.id}`)}
              >
                Ver mas
              </button>
            </section>
          ))}
        </section>
      ) : (
        <img src="/public/assets/loader.svg" alt="loading" width={30} />
      )}
    </div>
  );
};

export default Veterinarias;
