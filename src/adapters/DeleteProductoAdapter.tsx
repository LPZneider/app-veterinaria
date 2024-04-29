import { useAsync, useFetchAndLoad } from "@/hooks";
import { VeterinariaInfo } from "@/models";
import { updateVeterinaria } from "@/redux/states/veterinaria";
import { AppStore } from "@/redux/store";
import deleteProducto from "@/services/productoDelete.service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface deleteProducto {
  id: number;
  idVeterinaria: number;
}

const DeleteProductoAdapter = ({ id, idVeterinaria }: deleteProducto) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const veterinariaState = useSelector((store: AppStore) => store.veterinaria);

  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () =>
    await callEndpoint(deleteProducto(id, idVeterinaria));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    console.log(data);
    const updatedVeterinariaState = {
      ...veterinariaState,
      productos: data,
    };
    dispatch(updateVeterinaria(updatedVeterinariaState));

    navigate(`/mis-productos`, { replace: true });

    const datalocal = localStorage.getItem("veterinaria");
    const datalocalobj = datalocal
      ? (JSON.parse(datalocal) as VeterinariaInfo)
      : { productos: [] };
    datalocalobj.productos = data;
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
export default DeleteProductoAdapter;
