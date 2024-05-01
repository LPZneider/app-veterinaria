import { loadAbort } from "@/utilities";
import axios from "axios";

const getTratamientoId = (idVeterinario: number, id: number) => {
  const controller = loadAbort();
  return {
    call: axios.get(
      `http://localhost:8080/veterinaria/tratamientos?idVeterinario=${idVeterinario}&id=${id}`,

      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
export default getTratamientoId;
