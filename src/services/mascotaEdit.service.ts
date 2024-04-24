import { EditMascota } from "@/models/editMascota";
import { loadAbort } from "@/utilities";
import axios from "axios";
import dayjs from "dayjs";

const editMascota = ({
  id,
  nombre,
  idRaza,
  idPropietario,
  fechaNacimiento,
}: EditMascota) => {
  const controller = loadAbort();
  console.log(fechaNacimiento);
  const fecha = dayjs(fechaNacimiento);
  const formattedDate = fecha.format("YYYY-MM-DD");
  return {
    call: axios.put(
      `http://localhost:8080/veterinaria/mascotas?id=${id}&nombre=${nombre}&idRaza=${idRaza}&idPropietario=${idPropietario}&fechaNacimiento=${formattedDate}`,
      {},
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
export default editMascota;
