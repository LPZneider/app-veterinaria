import { createProducto } from "@/models";
import { loadAbort } from "@/utilities";
import axios from "axios";

const getProducto = ({
  nombre,
  cantidad,
  precio,
  idVeterinaria,
}: createProducto) => {
  const controller = loadAbort();
  return {
    call: axios.post(
      "http://localhost:8080/veterinaria/productos",
      {
        nombre,
        cantidad,
        precio,
        idVeterinaria,
      },
      {
        signal: controller.signal,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ),
    controller,
  };
};
export default getProducto;
