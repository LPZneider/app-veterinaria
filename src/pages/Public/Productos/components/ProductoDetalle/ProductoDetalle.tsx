"use client";
import { Navbar } from "@/components/Navbar";
import { propsNavUserVeterinaria } from "@/utilities";
import React from "react";
import { useParams } from "react-router-dom";
import "./ProductoDetalle.css";

export type ProductoDetalleProps = {
  // types...
};

const ProductoDetalle: React.FC<ProductoDetalleProps> = () => {
  const params = useParams();
  const productoIdString = params.productoId;
  const productoId = parseInt(productoIdString ?? "0");

  return (
    <div className="productodetalle home">
      <Navbar {...propsNavUserVeterinaria} />
    </div>
  );
};

export default ProductoDetalle;
