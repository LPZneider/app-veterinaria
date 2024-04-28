"use client";
import React from "react";
import "./MiVeterinarioDetalle.css";
import { Navbar } from "@/components/Navbar";
import { propsNavVeterinariaMiCuenta } from "@/utilities";

export type MiVeterinarioDetalleProps = {
  // types...
};

const MiVeterinarioDetalle: React.FC<MiVeterinarioDetalleProps> = () => {
  return (
    <div className="miveterinariodetalle home">
      <Navbar {...propsNavVeterinariaMiCuenta} />
      MiVeterinarioDetalle works!
    </div>
  );
};

export default MiVeterinarioDetalle;
