import { PublicRoutes } from "@/models";
import { AccountCircle, KeyOff } from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
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
import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginAdapter from "../../adapters/LoginAdapter";
import "./Login.css";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [idRol, setIdRol] = useState<string>("");
  const [loginUser, setLoginUser] = useState(false);

  const handleLoginUser = () => {
    setLoginUser(!loginUser);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleIdRol = (e: SelectChangeEvent) => {
    setIdRol(e.target.value as string);
  };

  return (
    <form className="login-form">
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          color="secondary"
          id="input-Usuario"
          label="Usuario"
          value={email}
          variant="standard"
          onChange={handleEmail}
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <KeyOff sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          color="secondary"
          id="input-password"
          type="password"
          label="Password"
          variant="standard"
          value={password}
          onChange={handlePassword}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <PeopleIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <FormControl color="secondary" variant="standard" fullWidth>
          <InputLabel sx={{ top: "0.1vh" }} id="demo-simple-select-label">
            Rol
          </InputLabel>
          <Select
            color="secondary"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Rol"
            placeholder="Rol"
            style={{ width: "90%" }}
            value={idRol}
            onChange={handleIdRol}
          >
            <MenuItem value={"1"}>Usuario</MenuItem>
            <MenuItem value={"2"}>Veterinario</MenuItem>
            <MenuItem value={"3"}>Veterinaria</MenuItem>
          </Select>
        </FormControl>
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
        <Button color="secondary" variant="contained" onClick={handleLoginUser}>
          Enviar
        </Button>
      </div>
      {loginUser && (
        <LoginAdapter email={email} password={password} idRol={idRol} />
      )}
    </form>
  );
};

export default Login;
