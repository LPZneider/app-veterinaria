/* import { LoginProps } from "@/models";
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
      { signal: controller.signal }
    ),
    controller,
  };
};
export default getLogin; */

import axios from "axios";

interface PropsLogin {
  email: string;
  password: string;
  idRol: string;
}
const options = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};
const getLogin = ({ email, password, idRol }: PropsLogin) => {
  console.log(email, password, idRol);
  axios
    .post(
      "http://localhost:8080/veterinaria/login",
      {
        email,
        password,
        idRol,
      },
      options
    )
    .then((res) => {
      console.log("Respuesta exitosa:", res.data); // Imprime la respuesta exitosa en la consola
    })
    .catch((err) => {
      console.error("Error al realizar la solicitud:", err.message); // Imprime el mensaje de error en la consola
    });
};

export default getLogin;
