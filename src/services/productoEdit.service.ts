import { EditProducto } from "@/models";
import { loadAbort } from "@/utilities";
import axios from "axios";

const editProducto = ({
  id,
  nombre,
  cantidad,
  precio,
  idVeterinaria,
}: EditProducto) => {
  const controller = loadAbort();
  return {
    call: axios.put(
      `http://localhost:8080/veterinaria/productos?id=${id}&nombre=${nombre}&cantidad=${cantidad}&precio=${precio}&idVeterinaria=${idVeterinaria}`,
      {},
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
export default editProducto;
