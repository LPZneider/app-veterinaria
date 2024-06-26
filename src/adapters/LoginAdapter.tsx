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
          login({
            id: data.id,
            nombre: data.nombre,
            direccion: data.direccion,
            mascostas: data.mascotas,
            registro: data.registro,
            rol: role,
          })
        );
        navigate(`/${PrivateRoutes.HOME_PRIVATE_USER}`, { replace: true });
        localStorage.setItem("user", JSON.stringify(data));
        break;

      case "2":
        role = Roles.VETERINARIO;
        dispatch(
          loginVet({
            id: data.id,
            nombre: data.nombre,
            direccion: data.direccion,
            usuarios: data.usuarios,
            veterinarios: data.veterinarios[0],
            rol: role,
          })
        );
        navigate(`/${PrivateRoutes.HOME_PRIVATE_VETERINARIO}`, {
          replace: true,
        });
        console.log(data);
        data.veterinarios = data.veterinarios[0];
        localStorage.setItem("veterinario", JSON.stringify(data));
        break;

      case "3":
        role = Roles.VETERINARIA;
        dispatch(
          loginVeterinaria({
            id: data.id,
            nombre: data.nombre,
            direccion: data.direccion,
            productos: data.productos,
            usuarios: data.usuarios,
            registro: data.registro,
            veterinarios: data.veterinarios,
            rol: role,
          })
        );
        navigate(`/${PrivateRoutes.HOME_PRIVATE_VETERINARIA}`, {
          replace: true,
        });
        localStorage.setItem("veterinaria", JSON.stringify(data));

        break;
    }
  };

  useAsync(getApiData, adaptUser, () => {});
  return (
    <p>
      {loading ? (
        <img src="/public/assets/loader.svg" alt="loading" width={30} />
      ) : (
        ""
      )}
    </p>
  );
};
export default LoginAdapter;
