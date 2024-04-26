import { loadAbort } from "@/utilities";
import axios from "axios";

const getVeterinariasId = (id: number) => {
  const controller = loadAbort();
  return {
    call: axios.get(
      `http://localhost:8080/veterinaria/veterinarias?id=${id}`,

      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
export default getVeterinariasId;
