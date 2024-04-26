import { useAsync, useFetchAndLoad } from "@/hooks";
import { PrivateRoutes, UserEdit, UserInfo } from "@/models";
import { update } from "@/redux/states/user";
import { AppStore } from "@/redux/store";
import editUsuario from "@/services/usuarioEdit.service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditUserAdapter = ({ id, nombre, direccion }: UserEdit) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((store: AppStore) => store.user);

  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () =>
    await callEndpoint(editUsuario({ id, nombre, direccion }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    const updatedUserState = {
      ...userState,
      nombre: data.nombre,
      direccion: data.direccion,
    };
    dispatch(update(updatedUserState));

    navigate(`/${PrivateRoutes.MI_CUENTA_USER}`, { replace: true });

    const datalocal = localStorage.getItem("user");
    let datalocalobj = datalocal ? (JSON.parse(datalocal) as UserInfo) : {};
    datalocalobj = data;
    localStorage.setItem("user", JSON.stringify(datalocalobj));
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
export default EditUserAdapter;
