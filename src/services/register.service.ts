import { RegisterProps } from "@/models";
import { loadAbort } from "@/utilities";
import axios from "axios";

const getRegister = ({ nombre, email, password, idRol }: RegisterProps) => {
  const controller = loadAbort();
  return {
    call: axios.post(
      "http://localhost:8080/veterinaria/register",
      {
        nombre,
        email,
        password,
        idRol,
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
export default getRegister;
