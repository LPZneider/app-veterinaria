import { Navbar } from "@/components/Navbar";
import { PrivateRoutes, Roles } from "@/models";
import { login } from "@/redux/states/user";
import { AppStore } from "@/redux/store";
import { propsNavLogin } from "@/utilities/navProps";
import { AccountCircle, KeyOff } from "@mui/icons-material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export type LoginProps = {
  // types...
};

const Login: React.FC<LoginProps> = ({}) => {
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
  const loginUser = (validarRutas: () => void) => {
    // Dispara el login
    dispatch(login({ rol: Roles.VETERINARIA }));

    validarRutas();
  };

  return (
    <article className="home">
      <Navbar {...propsNavLogin} />
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Usuario" variant="standard" />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <KeyOff sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          type="password"
          label="Password"
          variant="standard"
        />
      </Box>
    </article>
  );
};

export default Login;
