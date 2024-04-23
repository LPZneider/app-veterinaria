import { useAsync, useFetchAndLoad } from "@/hooks";
import { PrivateRoutes, UserInfo } from "@/models";
import { update } from "@/redux/states/user";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreateMascota } from "../models/createMascota";
import getMascota from "../services/mascota.service";
import { AppStore } from "@/redux/store";

const CreateMascotaAdapter = ({
  nombre,
  idRaza,
  idPropietario,
  fechaNacimiento,
}: CreateMascota) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((store: AppStore) => store.user);

  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () =>
    await callEndpoint(
      getMascota({ nombre, idRaza, idPropietario, fechaNacimiento })
    );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    console.log(data);
    const updatedUserState = {
      ...userState,
      mascotas: data,
    };
    dispatch(update(updatedUserState));

    navigate(`/${PrivateRoutes.HOME_PRIVATE_USER_MASCOTA}`, { replace: true });

    const datalocal = localStorage.getItem("user");
    const datalocalobj = datalocal
      ? (JSON.parse(datalocal) as UserInfo)
      : { mascotas: [] };
    datalocalobj.mascotas = data;
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
export default CreateMascotaAdapter;
