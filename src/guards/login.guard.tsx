import { PrivateRoutes, Roles } from "@/models";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const LoginGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);
  const veterinariaState = useSelector((store: AppStore) => store.veterinaria);
  const vetState = useSelector((store: AppStore) => store.veterinario);

  if (userState.rol !== Roles.NO_REGISTRADO) {
    return <Navigate replace to={`/${PrivateRoutes.HOME_PRIVATE_USER}`} />;
  } else if (vetState.rol !== Roles.NO_REGISTRADO) {
    return (
      <Navigate replace to={`/${PrivateRoutes.HOME_PRIVATE_VETERINARIO}`} />
    );
  } else if (veterinariaState.rol !== Roles.NO_REGISTRADO) {
    return (
      <Navigate replace to={`/${PrivateRoutes.HOME_PRIVATE_VETERINARIA}`} />
    );
  } else {
    return <Outlet />;
  }
};
export default LoginGuard;
