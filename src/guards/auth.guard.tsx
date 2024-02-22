import { PrivateRoutes, PublicRoutes, Roles } from "@/models";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  privateValidation: boolean;
}
export const AuthGuard = ({ privateValidation }: Props) => {
  const userState = useSelector((store: AppStore) => store.user);

  return userState.rol && userState.rol !== Roles.NO_REGISTRADO ? (
    privateValidation ? (
      <Outlet />
    ) : (
      <Navigate replace to={PrivateRoutes.PRIVATE} />
    )
  ) : (
    <Navigate replace to={PublicRoutes.HOME} />
  );
};
export default AuthGuard;
