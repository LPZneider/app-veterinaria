import { useAsync, useFetchAndLoad } from "@/hooks";
import { updateVeterinaria } from "@/redux/states/veterinaria";
import { AppStore } from "@/redux/store";
import deleteTratamiento from "@/services/TratamientoDelete.service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface deleteTratamieto {
  id: number;
  idVeterinario: number;
}

const DeleteTratamientoAdapter = ({ id, idVeterinario }: deleteTratamieto) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const veterinarioState = useSelector((store: AppStore) => store.veterinario);

  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () =>
    await callEndpoint(deleteTratamiento(idVeterinario, id));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    console.log(data);
    const updatedVeterinarioState = {
      ...veterinarioState,
      usuarios: data,
    };
    dispatch(updateVeterinaria(updatedVeterinarioState));

    navigate(`/mis-pacientes`, { replace: true });

    const datalocal = localStorage.getItem("veterinario");
    const datalocalobj = datalocal ? JSON.parse(datalocal) : { usuarios: [] };
    datalocalobj.usuarios = data;
    localStorage.setItem("veterinario", JSON.stringify(datalocalobj));
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
export default DeleteTratamientoAdapter;
