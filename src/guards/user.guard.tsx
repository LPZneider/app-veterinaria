import { PublicRoutes, Roles } from "@/models";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const UserGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);

  if (userState.rol !== Roles.NO_REGISTRADO) {
    return <Outlet />;
  } else {
    return <Navigate replace to={PublicRoutes.HOME} />;
  }
};
export default UserGuard;
