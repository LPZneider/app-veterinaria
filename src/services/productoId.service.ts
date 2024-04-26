import { loadAbort } from "@/utilities";
import axios from "axios";

const getProductoId = (id: number) => {
  const controller = loadAbort();
  return {
    call: axios.get(
      `http://localhost:8080/veterinaria/productos?id=${id}`,

      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
export default getProductoId;
