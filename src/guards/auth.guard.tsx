import { PublicRoutes, Roles } from "@/models";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);
  const veterinariaState = useSelector((store: AppStore) => store.veterinaria);
  const vetState = useSelector((store: AppStore) => store.veterinario);

  if (userState.rol !== Roles.NO_REGISTRADO) {
    return <Outlet />;
  } else if (vetState.rol !== Roles.NO_REGISTRADO) {
    return <Outlet />;
  } else if (veterinariaState.rol !== Roles.NO_REGISTRADO) {
    return <Outlet />;
  } else {
    return <Navigate replace to={PublicRoutes.HOME} />;
  }
};
export default AuthGuard;
