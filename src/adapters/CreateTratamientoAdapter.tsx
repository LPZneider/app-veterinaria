import { useAsync, useFetchAndLoad } from "@/hooks";
import { CreateTratamiento } from "@/models/createTratamiento";
import { updateVet } from "@/redux/states/veterinario";
import { AppStore } from "@/redux/store";
import getTratamieto from "@/services/tratamiento.service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateTratamientoAdapter = ({
  nombre,
  descripcion,
  id_veterinario,
  id_mascota,
}: CreateTratamiento) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const veteState = useSelector((store: AppStore) => store.veterinario);

  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () =>
    await callEndpoint(
      getTratamieto({ nombre, descripcion, id_veterinario, id_mascota })
    );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    const updatedVetState = {
      ...veteState,
      usuarios: data,
    };
    dispatch(updateVet(updatedVetState));

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
export default CreateTratamientoAdapter;
