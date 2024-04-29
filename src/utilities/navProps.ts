import { Pages, PrivateRoutes, PropsNav, Settings } from "@/models";

const pages: Pages[] = [
  { title: "Productos", path: "/productos" },
  { title: "Veterinarias", path: "/veterinarias" },
  { title: "Acceder", path: "/login" },
];

const settingsUser: Settings[] = [
  { title: "Mi cuenta", path: "/mi-cuenta-user" },
  { title: "Salir", path: "/cerrar-sesion" },
];

const pagesLogin: Pages[] = [
  { title: "Productos", path: "/productos" },
  { title: "Veterinarias", path: "/veterinarias" },
];

export const propsNavHome: PropsNav = {
  pages,
  settings: [{ title: "Acceder", path: "/login" }],
};

export const propsNavLogin: PropsNav = {
  pages: pagesLogin,
  settings: [{ title: "Acceder", path: "/login" }],
};

export const propsNavUser: PropsNav = {
  pages: [
    { title: "Productos", path: "/productos" },
    { title: "Veterinarias", path: "/veterinarias" },
    { title: "Mis Mascotas", path: "/mascotas" },
  ],
  settings: settingsUser,
};

export const propsNavProductos: PropsNav = {
  pages: [
    { title: "Home", path: "/usuario" },
    { title: "Veterinarias", path: "/veterinarias" },
    { title: "Mis Mascotas", path: "/mascotas" },
  ],
  settings: settingsUser,
};

export const propsNavUserMascota: PropsNav = {
  pages: [
    { title: "Productos", path: "/productos" },
    {
      title: "Agregar Mascota",
      path: `/${PrivateRoutes.HOME_PRIVATE_USER_MASCOTA_FORM}`,
    },
    { title: "Home", path: `/${PrivateRoutes.HOME_PRIVATE_USER}` },
  ],
  settings: settingsUser,
};

export const propsNavUserVeterinaria: PropsNav = {
  pages: [
    { title: "Home", path: `/${PrivateRoutes.HOME_PRIVATE_USER}` },
    { title: "Productos", path: "/productos" },
    { title: "Mis Mascotas", path: "/mascotas" },
  ],
  settings: settingsUser,
};
const settingsVeterinaria: Settings[] = [
  { title: "Mi cuenta", path: "/mi-cuenta-veterinaria" },
  { title: "Salir", path: "/cerrar-seccion-veterinaria" },
];
export const propsNavVeterinaria: PropsNav = {
  pages: [
    { title: "Mis productos", path: "/mis-productos" },
    {
      title: "Mis veterinarios",
      path: "/mis-veterinarios",
    },
  ],
  settings: settingsVeterinaria,
};

export const propsNavVeterinariaMiCuenta: PropsNav = {
  pages: [
    { title: "Mis productos", path: "/mis-productos" },
    {
      title: "Mis veterinarios",
      path: "/mis-veterinarios",
    },
    {
      title: "Home",
      path: "/veterinaria",
    },
  ],
  settings: settingsVeterinaria,
};
export const propsNavVeterinariaMiVeterinarios: PropsNav = {
  pages: [
    { title: "Mis productos", path: "/mis-productos" },

    {
      title: "Home",
      path: "/veterinaria",
    },
    {
      title: "Crear Veterinario",
      path: "/veterinario-form",
    },
  ],
  settings: settingsVeterinaria,
};
export const propsNavVeterinariaMiProductos: PropsNav = {
  pages: [
    {
      title: "Mis veterinarios",
      path: "/mis-veterinarios",
    },
    {
      title: "Home",
      path: "/veterinaria",
    },
    {
      title: "Crear producto",
      path: "/crear-producto",
    },
  ],
  settings: settingsVeterinaria,
};

export const propsNavVet: PropsNav = {
  pages: [{ title: "Mis pacientes", path: "/mis-pacientes" }],
  settings: settingsUser,
};
