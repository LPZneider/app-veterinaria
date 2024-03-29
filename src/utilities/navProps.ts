import { Pages, PropsNav, Settings } from "@/models";

const pages: Pages[] = [
  { title: "Productos", path: "/productos" },
  { title: "Veterinarias", path: "/veterinarias" },
  { title: "Acceder", path: "/login" },
];
const settings: Settings[] = [{ title: "Acceder", path: "/login" }];

const pagesLogin: Pages[] = [
  { title: "Productos", path: "/productos" },
  { title: "Veterinarias", path: "/veterinarias" },
];

export const propsNavHome: PropsNav = {
  pages,
  settings,
};
export const propsNavLogin: PropsNav = {
  pages: pagesLogin,
  settings,
};
export const propsNavUser: PropsNav = {
  pages: [
    { title: "Productos", path: "/productos" },
    { title: "Veterinarias", path: "/veterinarias" },
    { title: "Mis Mascotas", path: "/mascotas" },
  ],
  settings: [
    { title: "Mi cuenta", path: "/mi-cuenta" },
    { title: "configuracion", path: "/configuracion" },
    { title: "Salir", path: "/home" },
  ],
};
