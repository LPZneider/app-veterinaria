"use client";
import React, { useEffect } from "react";
import "./Login.css";
import { AccountCircle, KeyOff } from "@mui/icons-material";
import { Box, TextField, Button } from "@mui/material";
import { PrivateRoutes, PublicRoutes, Roles } from "@/models";
import { login } from "@/redux/states/user";
import { AppStore } from "@/redux/store";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((store: AppStore) => store.user);

  const validarRutas = () => {
    if (userState.rol) {
      // Validación del usuario y redirección basada en el rol
      switch (userState.rol) {
        case Roles.CLIENTE:
          navigate(`/${PrivateRoutes.HOME_PRIVATE_USER}`, { replace: true });
          break;
        case Roles.VETERINARIA:
          navigate(`/${PrivateRoutes.HOME_PRIVATE_VETERINARIA}`, {
            replace: true,
          });
          break;
        case Roles.VETERINARIO:
          navigate(`/${PrivateRoutes.HOME_PRIVATE_VETERINARIO}`, {
            replace: true,
          });
          break;
        default:
          break;
      }
    }
  };
  const loginUser = () => {
    // Dispara el login
    dispatch(login({ rol: Roles.CLIENTE }));
  };
  useEffect(() => {
    validarRutas();
  }, [userState]);
  return (
    <form className="login-form">
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          color="secondary"
          id="input-with-sx"
          label="Usuario"
          variant="standard"
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <KeyOff sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          color="secondary"
          id="input-with-sx"
          type="password"
          label="Password"
          variant="standard"
        />
      </Box>
      <div className="buttons">
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => {
            navigate(`/${PublicRoutes.REGISTER}`, {
              replace: true,
            });
          }}
        >
          Registrar
        </Button>
        <Button color="secondary" variant="contained" onClick={loginUser}>
          Enviar
        </Button>
      </div>
    </form>
  );
};

export default Login;
