import { useAsync, useFetchAndLoad } from "@/hooks";
import { PrivateRoutes, VeterinariaInfo, createVeterinario } from "@/models";
import { updateVeterinaria } from "@/redux/states/veterinaria";
import { AppStore } from "@/redux/store";
import getVeterinario from "@/services/veterinario.service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateVeterianarioAdapter = ({
  idVeterinaria,
  password,
  nombre,
  email,
}: createVeterinario) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const veterinariaState = useSelector((store: AppStore) => store.veterinaria);

  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () =>
    await callEndpoint(
      getVeterinario({ idVeterinaria, password, nombre, email })
    );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    const updatedVeterinariaState = {
      ...veterinariaState,
      veterinarios: data,
    };
    dispatch(updateVeterinaria(updatedVeterinariaState));

    navigate(`/${PrivateRoutes.MI_VETERINARIOS_VETERINARIA}`, {
      replace: true,
    });

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
export default CreateVeterianarioAdapter;
