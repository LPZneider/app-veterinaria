import { loadAbort } from "@/utilities";
import axios from "axios";

const getRazas = () => {
  const controller = loadAbort();
  return {
    call: axios.get(
      "http://localhost:8080/veterinaria/razas",

      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
export default getRazas;
