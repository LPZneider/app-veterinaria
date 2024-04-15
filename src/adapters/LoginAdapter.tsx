import { useAsync, useFetchAndLoad } from "@/hooks";
import { LoginProps, PrivateRoutes, Roles } from "@/models";
import { login } from "@/redux/states/user";
import { loginVeterinaria } from "@/redux/states/veterinaria";
import { loginVet } from "@/redux/states/veterinario";
import getLogin from "@/services/login.service";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginAdapter = ({ email, password, idRol }: LoginProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () =>
    await callEndpoint(getLogin({ email, password, idRol }));

  const adaptUser = (data: any) => {
    console.log(data);
    const role =
      idRol === "1"
        ? Roles.CLIENTE
        : idRol === "2"
        ? Roles.VETERINARIO
        : Roles.VETERINARIA;

    switch (idRol) {
      case "1":
        dispatch(
          login({ name: data.nombre, mascostas: data.mascotas, rol: role })
        );
        navigate(`/${PrivateRoutes.HOME_PRIVATE_USER}`, { replace: true });
        break;
      case "2":
        dispatch(loginVet({ nombre: data.nombre, rol: role }));
        navigate(`/${PrivateRoutes.HOME_PRIVATE_VETERINARIO}`, {
          replace: true,
        });
        break;
        break;
      case "3":
        dispatch(
          loginVeterinaria({
            nombre: data.nombre,
            direccion: data.direccion,
            usuarios: data.usuarios,
            veterinarios: data.veterinarios,
            rol: role,
          })
        );
        navigate(`/${PrivateRoutes.HOME_PRIVATE_VETERINARIA}`, {
          replace: true,
        });
        break;
    }
  };

  useAsync(getApiData, adaptUser, () => {});
  return <p>{loading ? "Ingresando" : ""}</p>;
};
export default LoginAdapter;
