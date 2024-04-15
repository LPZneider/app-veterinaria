import { Roles } from "./roles";
import { Mascota } from "./mascota.model";

export interface UserInfo {
  name: string;
  mascotas: Mascota[];
  rol: Roles;
}
