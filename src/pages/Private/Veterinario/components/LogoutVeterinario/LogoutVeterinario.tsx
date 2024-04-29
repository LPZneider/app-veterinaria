"use client";
import React from "react";
import "./LogoutVeterinario.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutVet } from "@/redux/states/veterinario";
import { Button } from "@mui/material";

export type LogoutVeterinarioProps = {
  // types...
};

const LogoutVeterinario: React.FC<LogoutVeterinarioProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleConfirmLogout = () => {
    // confirm logout
    localStorage.removeItem("veterinario");
    dispatch(logoutVet());
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
            onClick={() => navigate(`/veterinario`)}
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogoutVeterinario;
