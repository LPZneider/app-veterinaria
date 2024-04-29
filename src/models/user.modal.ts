import { Roles } from "./roles";
import { Mascota } from "./mascota.model";
import { Registro } from "./registro.modal";

export interface UserInfo {
  id: number;
  nombre: string;
  direccion: string;
  mascotas: Mascota[];
  registro: Registro;
  rol: Roles;
}
