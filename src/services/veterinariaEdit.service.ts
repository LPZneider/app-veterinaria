import { UserEdit } from "@/models";
import { loadAbort } from "@/utilities";
import axios from "axios";

const editVeterinaria = ({ id, nombre, direccion }: UserEdit) => {
  const controller = loadAbort();
  return {
    call: axios.put(
      `http://localhost:8080/veterinaria/veterinarias?id=${id}&nombre=${nombre}&direccion=${direccion}`,
      {},
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
export default editVeterinaria;
