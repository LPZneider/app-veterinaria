import { createVeterinario } from "@/models";
import { loadAbort } from "@/utilities";
import axios from "axios";

const getVeterinario = ({
  idVeterinaria,
  password,
  nombre,
  email,
}: createVeterinario) => {
  const controller = loadAbort();
  return {
    call: axios.post(
      "http://localhost:8080/veterinaria/veterinarios",
      {
        idVeterinaria,
        password,
        nombre,
        email,
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
export default getVeterinario;
