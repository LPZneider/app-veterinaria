import { loadAbort } from "@/utilities";
import axios from "axios";

const deleteTratamiento = (idVeterinario: number, id: number) => {
  const controller = loadAbort();
  return {
    call: axios.delete(
      `http://localhost:8080/veterinaria/tratamientos?idVeterinario=${idVeterinario}&id=${id}`,

      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
export default deleteTratamiento;
