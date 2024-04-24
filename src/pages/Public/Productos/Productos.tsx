"use client";
import React from "react";
import "./Productos.css";
import { Navbar } from "@/components/Navbar";
import { propsNavHome } from "@/utilities";

export type ProductosProps = {
  // types...
};

const Productos: React.FC<ProductosProps> = ({}) => {
  return (
    <div className="productos home">
      <Navbar {...propsNavHome} />
      NO hay productos que mostrar aun
    </div>
  );
};

export default Productos;
