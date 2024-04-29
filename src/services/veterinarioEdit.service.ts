import { editVeterinario } from "@/models";
import { loadAbort } from "@/utilities";
import axios from "axios";

const editVeterinarios = ({ id, nombre, idVeterinaria }: editVeterinario) => {
  const controller = loadAbort();
  return {
    call: axios.put(
      `http://localhost:8080/veterinaria/veterinarios?id=${id}&nombre=${nombre}&idVeterinaria=${idVeterinaria}`,
      {},
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
export default editVeterinarios;
