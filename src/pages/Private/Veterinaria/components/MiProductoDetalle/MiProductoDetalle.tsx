"use client";
import React from "react";
import "./MiProductoDetalle.css";
import { Navbar } from "@/components/Navbar";
import { propsNavVeterinariaMiCuenta } from "@/utilities";

export type MiProductoDetalleProps = {
  // types...
};

const MiProductoDetalle: React.FC<MiProductoDetalleProps> = () => {
  return (
    <div className="miproductodetalle home">
      <Navbar {...propsNavVeterinariaMiCuenta} />
    </div>
  );
};

export default MiProductoDetalle;
