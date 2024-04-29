import { Registro } from "./registro.modal";
import { Roles } from "./roles";

export interface VeterinarioInfo {
  id: number;
  nombre: string;
  registro: Registro;
  rol: Roles;
}
