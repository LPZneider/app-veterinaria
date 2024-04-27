import { loadAbort } from "@/utilities";
import axios from "axios";

const addUsuario = (idUsuario: number, idVeterinaria: number) => {
  const controller = loadAbort();
  return {
    call: axios.put(
      `http://localhost:8080/veterinaria/veterinaria-usuario?idUsuario=${idUsuario}&idVeterinaria=${idVeterinaria}`,
      {},
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
export default addUsuario;
