import { useAsync, useFetchAndLoad } from "@/hooks";
import { EditProducto, VeterinariaInfo } from "@/models";
import { updateVeterinaria } from "@/redux/states/veterinaria";
import { AppStore } from "@/redux/store";
import editProducto from "@/services/productoEdit.service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditProductoAdapter = ({
  id,
  nombre,
  cantidad,
  precio,
  idVeterinaria,
}: EditProducto) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const veterinariaState = useSelector((store: AppStore) => store.veterinaria);

  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () =>
    await callEndpoint(
      editProducto({ id, nombre, cantidad, precio, idVeterinaria })
    );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    const updatedVeterinariaState = {
      ...veterinariaState,
      productos: data,
    };
    dispatch(updateVeterinaria(updatedVeterinariaState));

    navigate(`/mis-productos/${id}`, { replace: true });

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
export default EditProductoAdapter;
