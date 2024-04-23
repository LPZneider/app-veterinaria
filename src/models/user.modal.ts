import { Roles } from "./roles";
import { Mascota } from "./mascota.model";

export interface UserInfo {
  id: number;
  nombre: string;
  mascotas: Mascota[];
  rol: Roles;
}
