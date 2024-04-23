"use client";
import React from "react";
import "./Veterinarias.css";
import { propsNavHome } from "@/utilities";
import { Navbar } from "@/components/Navbar";

export type VeterinariasProps = {
  // types...
};

const Veterinarias: React.FC<VeterinariasProps> = ({}) => {
  return (
    <div className="veterinarias home">
      <Navbar {...propsNavHome} />
      NO hay veterinarias que mostrar aun
    </div>
  );
};

export default Veterinarias;
