import { DeleteMascota } from "@/models/deleteMascota";
import { loadAbort } from "@/utilities";
import axios from "axios";

const deleteMascota = ({ id, idPropietario }: DeleteMascota) => {
  const controller = loadAbort();
  return {
    call: axios.delete(
      `http://localhost:8080/veterinaria/mascotas?id=${id}&idPropietario=${idPropietario}`,
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
export default deleteMascota;
