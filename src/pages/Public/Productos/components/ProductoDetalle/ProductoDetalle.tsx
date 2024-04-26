"use client";
import { Navbar } from "@/components/Navbar";
import { propsNavUserVeterinaria } from "@/utilities";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductoDetalle.css";
import { useAsync, useFetchAndLoad } from "@/hooks";
import getProductoId from "@/services/productoId.service";
import { Producto } from "@/models";

export type ProductoDetalleProps = {
  // types...
};

const emptyProducto: Producto = {
  id: 0,
  nombre: "",
  cantidad: 0,
  precio: 0,
};

const ProductoDetalle: React.FC<ProductoDetalleProps> = () => {
  const params = useParams();
  const productoIdString = params.productoId;
  const productoId = parseInt(productoIdString ?? "0");
  const { callEndpoint } = useFetchAndLoad();

  const getApiData = async () => await callEndpoint(getProductoId(productoId));
  const [producto, setProducto] = useState<Producto>(emptyProducto);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    console.log(data);
    setProducto(data);
  };

  useAsync(getApiData, adaptUser, () => {});
  return (
    <div className="productodetalle home">
      <Navbar {...propsNavUserVeterinaria} />
      <div className="producto__detalle">
        <section className="imagen_producto">
          <img
            src={`/public/assets/dog${Math.floor(Math.random() * 5) + 1}.svg`}
            alt="icono mascota"
          />
        </section>
        <section className="informacion__producto">
          <h1>{producto.nombre}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            nobis animi aliquam placeat natus accusamus quia reprehenderit quasi
            magnam maxime? Voluptatem eius labore autem magni eveniet
            accusantium nostrum alias molestias!
          </p>
          <div className="info">
            <h2>
              <strong>Precio :</strong> $ {producto.precio}
            </h2>
            <h2>
              <strong>Cant :</strong> {producto.cantidad}
            </h2>
          </div>
        </section>
        <section className="mascota__detalle__imagen"></section>
      </div>
    </div>
  );
};

export default ProductoDetalle;
