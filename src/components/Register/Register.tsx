"use client";
import RegisterAdapter from "@/adapters/RegisterAdapter";
import { AccountCircle, KeyOff } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "./Register.css";
const Register: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [idRol, setIdRol] = useState<string>("");
  const [loginUser, setLoginUser] = useState(false);
  const [errores, setErrores] = useState<string[]>([""]);

  const handleIdRol = (e: SelectChangeEvent) => {
    setIdRol(e.target.value as string);
  };
  const handleRegister = () => {
    const erroresTemp = [];

    // Validación de nombre
    if (nombre.trim() === "") {
      erroresTemp.push("El nombre no puede estar vacío.");
    }

    // Validación de email
    if (email.trim() === "") {
      erroresTemp.push("El correo electrónico no puede estar vacío.");
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      erroresTemp.push("El correo electrónico no tiene un formato válido.");
    }
    if (erroresTemp.length > 0) {
      console.log(errores);
      setErrores(erroresTemp);
    } else {
      setLoginUser(true);
    }
  };
  return (
    <form className="login-form">
      {!idRol ? (
        <FormControl color="secondary" variant="standard" fullWidth>
          <InputLabel sx={{ top: "0.1vh" }} id="demo-simple-select-label">
            Rol
          </InputLabel>
          <Select
            color="secondary"
            labelId="demo-simple-select-label"
            id="simple-select"
            label="Rol"
            placeholder="Rol"
            style={{ width: "90%" }}
            value={idRol}
            onChange={handleIdRol}
          >
            <MenuItem value={"1"}>Usuario</MenuItem>
            <MenuItem value={"3"}>Veterinaria</MenuItem>
          </Select>
        </FormControl>
      ) : (
        <>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              color="secondary"
              id="input-th-sx"
              label="Nombre"
              variant="standard"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              color="secondary"
              id="inpsx"
              label="Correo"
              variant="standard"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <KeyOff sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              color="secondary"
              id="inpth-sx"
              type="password"
              label="Password"
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>

          <Button
            color="secondary"
            variant="contained"
            onClick={handleRegister}
          >
            Enviar
          </Button>

          {loginUser && (
            <RegisterAdapter
              nombre={nombre}
              email={email}
              password={password}
              idRol={idRol}
            />
          )}
        </>
      )}
    </form>
  );
};

export default Register;
