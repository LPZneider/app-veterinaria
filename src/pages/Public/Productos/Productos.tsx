"use client";
import { Navbar } from "@/components/Navbar";
import { useAsync, useFetchAndLoad } from "@/hooks";
import { Roles } from "@/models";
import { AppStore } from "@/redux/store";
import getProductos from "@/services/productos.service";
import { propsNavHome, propsNavProductos, propsNavUser } from "@/utilities";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Productos.css";

export type ProductosProps = {
  // types...
};

const Productos: React.FC<ProductosProps> = () => {
  const userState = useSelector((store: AppStore) => store.user);
  const { callEndpoint } = useFetchAndLoad();
  const getApiData = async () => await callEndpoint(getProductos());
  const [productos, setProductos] = useState<[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    console.log(data);
    setProductos(data);
  };

  useAsync(getApiData, adaptUser, () => {});
  const navigate = useNavigate();

  const isLogin =
    userState.rol !== Roles.NO_REGISTRADO ? propsNavProductos : propsNavHome;
  return (
    <div className="productos home">
      <Navbar {...isLogin} />
      {productos.length > 0 ? (
        <section className="container__veterinaria">
          {productos.map((producto: any) => (
            <section key={producto.nombre} className="item__mascota">
              <section className="item__image__mascota"></section>
              <article className="info__mascota">
                <h2 className="titulo__mascota">{producto.nombre}</h2>
                <h3>Cant: {producto.cantidad}</h3>
              </article>
              <button
                className="button__mascota"
                onClick={() => navigate(`/productos/${producto.id}`)}
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

export default Productos;
