import { PublicRoutes, Roles } from "@/models";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const VeterinariaGuard = () => {
  const veterinariaState = useSelector((store: AppStore) => store.veterinaria);

  if (veterinariaState.rol !== Roles.NO_REGISTRADO) {
    return <Outlet />;
  } else {
    return <Navigate replace to={PublicRoutes.HOME} />;
  }
};
export default VeterinariaGuard;
