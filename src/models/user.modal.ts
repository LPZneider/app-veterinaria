import { Roles } from "./roles";
import { Mascota } from "./mascota.model";
interface Registro {
  email: string;
  password: string;
}
export interface UserInfo {
  id: number;
  nombre: string;
  direccion: string;
  mascotas: Mascota[];
  registro: Registro;
  rol: Roles;
}
