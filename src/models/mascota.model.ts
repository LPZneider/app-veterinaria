import { Raza } from "./raza.model";
export interface Mascota {
  id: number;
  fechaNacimiento: number;
  nombre: string;
  raza: Raza;
}
