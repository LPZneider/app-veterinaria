import { PublicRoutes, Roles } from "@/models";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const VetGuard = () => {
  const vetState = useSelector((store: AppStore) => store.veterinario);

  if (vetState.rol !== Roles.NO_REGISTRADO) {
    return <Outlet />;
  } else {
    return <Navigate replace to={PublicRoutes.HOME} />;
  }
};
export default VetGuard;
