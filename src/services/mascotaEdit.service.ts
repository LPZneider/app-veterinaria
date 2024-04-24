import { EditMascota } from "@/models/editMascota";
import { loadAbort } from "@/utilities";
import axios from "axios";

const editMascota = ({
  id,
  nombre,
  idRaza,
  idPropietario,
  fechaNacimiento,
}: EditMascota) => {
  const controller = loadAbort();
  return {
    call: axios.put(
      "http://localhost:8080/veterinaria/mascotas",
      {
        id,
        nombre,
        idRaza,
        idPropietario,
        fechaNacimiento,
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
export default editMascota;
