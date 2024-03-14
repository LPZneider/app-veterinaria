"use client";
import React from "react";
import "./Register.css";
import { AccountCircle, KeyOff } from "@mui/icons-material";
import { Box, TextField, Button } from "@mui/material";

const Register: React.FC = () => {
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
        <Button color="secondary" variant="outlined">
          Enviar
        </Button>
      </div>
    </form>
  );
};

export default Register;
