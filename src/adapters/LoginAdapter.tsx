import { useAsync, useFetchAndLoad } from "@/hooks";
import { LoginProps, Roles } from "@/models";
import { login } from "@/redux/states/user";
import getLogin from "@/services/login.service";
import { useDispatch } from "react-redux";

const LoginAdapter = ({ email, password, idRol }: LoginProps) => {
  const dispatch = useDispatch();

  const { callEndpoint } = useFetchAndLoad();
  const getApiData = async () =>
    await callEndpoint(getLogin({ email, password, idRol }));

  const adaptUser = (data: any) => {
    const role =
      idRol === "1"
        ? Roles.CLIENTE
        : idRol === "2"
        ? Roles.VETERINARIO
        : Roles.VETERINARIA;
    dispatch(login({ name: data.nombre, rol: role }));
  };

  useAsync(getApiData, adaptUser, () => {});
  return;
};
export default LoginAdapter;
