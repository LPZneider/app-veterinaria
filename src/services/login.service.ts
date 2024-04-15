import { LoginProps } from "@/models";
import { loadAbort } from "@/utilities";
import axios from "axios";

const getLogin = ({ email, password, idRol }: LoginProps) => {
  const controller = loadAbort();
  return {
    call: axios.post(
      "http://localhost:8080/veterinaria/login",
      {
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
export default getLogin;


