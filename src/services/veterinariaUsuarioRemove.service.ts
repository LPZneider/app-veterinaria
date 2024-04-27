import { loadAbort } from "@/utilities";
import axios from "axios";

const removeUsuario = (idUsuario: number, idVeterinaria: number) => {
  const controller = loadAbort();
  return {
    call: axios.put(
      `http://localhost:8080/veterinaria/veterinaria-usuario?idUsuario=${idUsuario}&idVeterinaria=${idVeterinaria}&isRemove=1`,
      {},
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
export default removeUsuario;
