import { Registro } from "./registro.modal";
import { Roles } from "./roles";
import { UserInfo } from "./user.modal";

export interface VeterinarioInfoRedux {
  id: number;
  nombre: string;
  registro: Registro;
}
export interface VeterinarioRedux {
  id: number;
  nombre: string;
  direccion: string;
  usuarios: UserInfo[];
  veterinarios: VeterinarioInfoRedux;
  rol: Roles;
}
