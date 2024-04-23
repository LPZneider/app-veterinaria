import { CreateMascota } from "@/models";
import { loadAbort } from "@/utilities";
import axios from "axios";

const getMascota = ({
  nombre,
  idRaza,
  idPropietario,
  fechaNacimiento,
}: CreateMascota) => {
  const controller = loadAbort();
  return {
    call: axios.post(
      "http://localhost:8080/veterinaria/mascotas",
      {
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
export default getMascota;
