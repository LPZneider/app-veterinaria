import { PrivateRoutes, Roles } from "@/models";
import { login } from "@/redux/states/user";
import { AppStore } from "@/redux/store";
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
    <div>
      <h2>Hola este es el login</h2>
      <button onClick={() => loginUser(validarRutas)}>Login</button>
    </div>
  );
};

export default Login;
