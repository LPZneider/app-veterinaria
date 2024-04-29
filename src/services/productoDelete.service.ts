import { loadAbort } from "@/utilities";
import axios from "axios";

const deleteProducto = (id: number, idVeterinaria: number) => {
  const controller = loadAbort();
  return {
    call: axios.delete(
      `http://localhost:8080/veterinaria/productos?id=${id}&idVeterinaria=${idVeterinaria}`,

      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
export default deleteProducto;
