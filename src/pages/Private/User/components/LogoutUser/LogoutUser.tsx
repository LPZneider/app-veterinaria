"use client";
import React from "react";
import "./LogoutUser.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/states/user";

export type LogoutUserProps = {
  // types...
};

const LogoutUser: React.FC<LogoutUserProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleConfirmLogout = () => {
    // confirm logout
    localStorage.removeItem("user");
    dispatch(logout());
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
            onClick={() => navigate(`/usuario`)}
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogoutUser;
