"use client";
import React from "react";
import "./Veterinaria.css";
import { Navbar } from "@/components/Navbar";
import { propsNavHome } from "@/utilities";

export type VeterinariaProps = {
  // types...
};

const Veterinaria: React.FC<VeterinariaProps> = ({}) => {
  return (
    <div className="veterinaria home">
      <Navbar {...propsNavHome} />
    </div>
  );
};

export default Veterinaria;
