import { useAsync, useFetchAndLoad } from "@/hooks";
import { PrivateRoutes, VeterinariaInfo, createProducto } from "@/models";
import { updateVeterinaria } from "@/redux/states/veterinaria";
import { AppStore } from "@/redux/store";
import getProducto from "@/services/producto.service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateProductoAdapter = ({
  nombre,
  cantidad,
  precio,
  idVeterinaria,
}: createProducto) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const veterinariaState = useSelector((store: AppStore) => store.veterinaria);

  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () =>
    await callEndpoint(
      getProducto({ nombre, cantidad, precio, idVeterinaria })
    );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    const updatedVeterinariaState = {
      ...veterinariaState,
      productos: data,
    };
    dispatch(updateVeterinaria(updatedVeterinariaState));

    navigate(`/${PrivateRoutes.MI_PRODUCTOS_VETERINARIA}`, { replace: true });

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
export default CreateProductoAdapter;
