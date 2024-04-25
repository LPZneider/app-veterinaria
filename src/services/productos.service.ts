import { loadAbort } from "@/utilities";
import axios from "axios";

const getProductos = () => {
  const controller = loadAbort();
  return {
    call: axios.get(
      "http://localhost:8080/veterinaria/productos",

      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
export default getProductos;
