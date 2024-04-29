import { loadAbort } from "@/utilities";
import axios from "axios";

const deleteVeterinario = (id: number, idVeterinaria: number) => {
  const controller = loadAbort();
  return {
    call: axios.delete(
      `http://localhost:8080/veterinaria/veterinarios?id=${id}&idVeterinaria=${idVeterinaria}`,

      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
export default deleteVeterinario;
