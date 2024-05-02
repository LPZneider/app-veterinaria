import { editTratamiento } from "@/models/editTratamiento";
import { loadAbort } from "@/utilities";
import axios from "axios";

const editTratamieto = ({
  id,
  nombre,
  descripcion,
  id_veterinario,
  id_mascota,
}: editTratamiento) => {
  const controller = loadAbort();
  return {
    call: axios.put(
      `http://localhost:8080/veterinaria/tratamientos?id=${id}&nombre=${nombre}&descripcion=${descripcion}&id_veterinario=${id_veterinario}&id_mascota=${id_mascota}`,
      {},
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
export default editTratamieto;
