import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes, Roles } from "../models";
import { AppStore } from "../redux/store";

export interface Props {
  rol: Roles;
}

const RoleGuard = (roles: Props[]) => {
  const useState = useSelector((store: AppStore) => store.user);
  const isPresent = Array.from(roles).filter(
    (user) => user.rol === useState.rol
  );
  return isPresent ? <Outlet /> : <Navigate replace to={PublicRoutes.HOME} />;
};
export default RoleGuard;
