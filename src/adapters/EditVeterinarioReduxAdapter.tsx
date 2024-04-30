import { useAsync, useFetchAndLoad } from "@/hooks";
import { VeterinariaInfo, editVeterinario } from "@/models";
import { VeterinarioInfoRedux } from "@/models/veterinarioredux.modal";
import { updateVet } from "@/redux/states/veterinario";
import { AppStore } from "@/redux/store";
import editVeterinarios from "@/services/veterinarioEdit.service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditVeterinarioReduxAdapter = ({
  id,
  nombre,
  idVeterinaria,
}: editVeterinario) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const vetState = useSelector((store: AppStore) => store.veterinario);

  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () =>
    await callEndpoint(editVeterinarios({ id, nombre, idVeterinaria }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    console.log(data);
    const vet = data.filter(
      (veterinario: VeterinarioInfoRedux) => veterinario.id === id
    );
    const updatedVeterinariaState = {
      ...vetState,
      veterinarios: vet[0],
    };
    dispatch(updateVet(updatedVeterinariaState));

    navigate(`/mi-cuenta-veterinario`, { replace: true });

    const datalocal = localStorage.getItem("veterinario");
    const datalocalobj = datalocal
      ? (JSON.parse(datalocal) as VeterinariaInfo)
      : { veterinarios: [] };
    datalocalobj.veterinarios = vet[0];
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
export default EditVeterinarioReduxAdapter;
