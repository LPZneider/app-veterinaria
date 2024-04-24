import { loadAbort } from "@/utilities";
import axios from "axios";

const getVeterinarias = () => {
  const controller = loadAbort();
  return {
    call: axios.get(
      "http://localhost:8080/veterinaria/veterinarias",

      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
export default getVeterinarias;
