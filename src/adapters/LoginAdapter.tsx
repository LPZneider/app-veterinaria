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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    console.log(data);
    let role;
    switch (idRol) {
      case "1":
        role = Roles.CLIENTE;
        dispatch(
          login({ name: data.nombre, mascostas: data.mascotas, rol: role })
        );
        navigate(`/${PrivateRoutes.HOME_PRIVATE_USER}`, { replace: true });
        break;

      case "2":
        role = Roles.VETERINARIO;
        dispatch(loginVet({ nombre: data.nombre, rol: role }));
        navigate(`/${PrivateRoutes.HOME_PRIVATE_VETERINARIO}`, {
          replace: true,
        });
        break;

      case "3":
        role = Roles.VETERINARIA;
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
    localStorage.setItem("user", JSON.stringify(data));
  };

  useAsync(getApiData, adaptUser, () => {});
  return <p>{loading ? "Ingresando" : ""}</p>;
};
export default LoginAdapter;
