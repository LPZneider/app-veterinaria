import { CreateTratamiento } from "@/models/createTratamiento";
import { loadAbort } from "@/utilities";
import axios from "axios";

const getTratamieto = ({
  nombre,
  descripcion,
  id_veterinario,
  id_mascota,
}: CreateTratamiento) => {
  const controller = loadAbort();
  return {
    call: axios.post(
      "http://localhost:8080/veterinaria/tratamientos",
      {
        nombre,
        descripcion,
        id_veterinario,
        id_mascota,
      },
      {
        signal: controller.signal,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ),
    controller,
  };
};
export default getTratamieto;
