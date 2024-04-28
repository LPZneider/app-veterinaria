"use client";
import React from "react";
import "./LogoutVeterinaria.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutVeterinaria } from "@/redux/states/veterinaria";
import { Button } from "@mui/material";

export type LogoutVeterinariaProps = {
  // types...
};

const LogoutVeterinaria: React.FC<LogoutVeterinariaProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleConfirmLogout = () => {
    // confirm logout
    localStorage.removeItem("veterinaria");
    dispatch(logoutVeterinaria());
    navigate(`/home`);
  };

  return (
    <div className="logoutuser">
      <div className="dialog__remove">
        <div className="dialog__remove__mascota">
          <p>¿Estás seguro que desea salir?</p>
          <Button
            variant="contained"
            color="primary"
            onClick={handleConfirmLogout}
          >
            Sí
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate(`/veterinaria`)}
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogoutVeterinaria;
