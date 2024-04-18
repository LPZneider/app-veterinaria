import { Roles } from "./roles";
import { Mascota } from "./mascota.model";

export interface UserInfo {
  nombre: string;
  mascotas: Mascota[];
  rol: Roles;
}
