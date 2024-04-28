import { useAsync, useFetchAndLoad } from "@/hooks";
import { PrivateRoutes, UserEdit, VeterinariaInfo } from "@/models";
import { updateVeterinaria } from "@/redux/states/veterinaria";
import { AppStore } from "@/redux/store";
import editVeterinaria from "@/services/veterinariaEdit.service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditVeterinariaAdapter = ({ id, nombre, direccion }: UserEdit) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const veterinariaState = useSelector((store: AppStore) => store.veterinaria);

  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () =>
    await callEndpoint(editVeterinaria({ id, nombre, direccion }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    const updatedUserState = {
      ...veterinariaState,
      id: data.id,
      nombre: data.nombre,
      direccion: data.direccion,
    };
    dispatch(updateVeterinaria(updatedUserState));

    navigate(`/${PrivateRoutes.MI_CUENTA_VETERINARIA}`, { replace: true });

    const datalocal = localStorage.getItem("veterinaria");
    let datalocalobj = datalocal
      ? (JSON.parse(datalocal) as VeterinariaInfo)
      : {};
    datalocalobj = data;
    localStorage.setItem("veterinaria", JSON.stringify(datalocalobj));
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
export default EditVeterinariaAdapter;
