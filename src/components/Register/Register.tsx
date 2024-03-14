"use client";
import React from "react";
import "./Register.css";
import { AccountCircle, KeyOff } from "@mui/icons-material";
import { Box, TextField, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { PublicRoutes } from "@/models";
import { useNavigate } from "react-router-dom";
const Register: React.FC = () => {
  const navigate = useNavigate();
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
        <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          color="secondary"
          id="input-with-sx"
          label="Correo"
          variant="standard"
          type="email"
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

      <Button
        color="secondary"
        variant="contained"
        onClick={() => {
          navigate(`/${PublicRoutes.LOGIN}`, {
            replace: true,
          });
        }}
      >
        Registrarse
      </Button>
    </form>
  );
};

export default Register;
