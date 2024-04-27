import { Roles } from "./roles";
import { UserInfo } from "./user.modal";
import { VeterinarioInfo } from "./veterinario.modal";

export interface VeterinariaInfo {
  id: number;
  nombre: string;
  direccion: string;
  usuarios: UserInfo[];
  veterinarios: VeterinarioInfo[];
  rol: Roles;
}
