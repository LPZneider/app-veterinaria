import { Raza } from "./raza.model";
export interface Mascota {
  fechaNacimiento: number;
  nombre: string;
  raza: Raza;
}
