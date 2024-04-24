import { DeleteMascota } from "@/models/deleteMascota";
import { loadAbort } from "@/utilities";
import axios from "axios";

const deleteMascota = ({ id }: DeleteMascota) => {
  const controller = loadAbort();
  return {
    call: axios.delete(`http://localhost:8080/veterinaria/mascotas?id=${id}`, {
      signal: controller.signal,
    }),
    controller,
  };
};
export default deleteMascota;
