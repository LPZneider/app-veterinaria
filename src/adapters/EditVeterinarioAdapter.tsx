import { useAsync, useFetchAndLoad } from "@/hooks";
import { VeterinariaInfo, editVeterinario } from "@/models";
import { updateVeterinaria } from "@/redux/states/veterinaria";
import { AppStore } from "@/redux/store";
import editVeterinarios from "@/services/veterinarioEdit.service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditVeterinarioAdapter = ({
  id,
  nombre,
  idVeterinaria,
}: editVeterinario) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const veterinariaState = useSelector((store: AppStore) => store.veterinaria);

  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () =>
    await callEndpoint(editVeterinarios({ id, nombre, idVeterinaria }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    const updatedVeterinariaState = {
      ...veterinariaState,
      veterinarios: data,
    };
    dispatch(updateVeterinaria(updatedVeterinariaState));

    navigate(`/mis-veterinarios/${id}`, { replace: true });

    const datalocal = localStorage.getItem("veterinaria");
    const datalocalobj = datalocal
      ? (JSON.parse(datalocal) as VeterinariaInfo)
      : { veterinarios: [] };
    datalocalobj.veterinarios = data;
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
export default EditVeterinarioAdapter;
