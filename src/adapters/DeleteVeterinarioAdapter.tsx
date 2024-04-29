import { useAsync, useFetchAndLoad } from "@/hooks";
import { VeterinariaInfo } from "@/models";
import { updateVeterinaria } from "@/redux/states/veterinaria";
import { AppStore } from "@/redux/store";
import deleteVeterinario from "@/services/veterinarioDelete.service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface deleteVeterinario {
  id: number;
  idVeterinaria: number;
}

const DeleteVeterinarioAdapter = ({ id, idVeterinaria }: deleteVeterinario) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const veterinariaState = useSelector((store: AppStore) => store.veterinaria);

  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () =>
    await callEndpoint(deleteVeterinario(id, idVeterinaria));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    console.log(data);
    const updatedVeterinariaState = {
      ...veterinariaState,
      veterinarios: data,
    };
    dispatch(updateVeterinaria(updatedVeterinariaState));

    navigate(`/mis-veterinarios`, { replace: true });

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
export default DeleteVeterinarioAdapter;
