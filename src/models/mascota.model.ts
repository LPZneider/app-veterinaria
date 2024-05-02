import { Raza } from "./raza.model";
import { Tratamiento } from "./tratamiento.model";
export interface Mascota {
  id: number;
  fechaNacimiento: number;
  nombre: string;
  raza: Raza;
  tratamientos: Tratamiento[];
}
