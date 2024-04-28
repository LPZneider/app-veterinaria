export const PublicRoutes = {
  LOGIN: "login",
  HOME: "home",
  REGISTER: "register",
  VETERINARIAS: "veterinarias",
  PRODUCTOS: "productos",
};
export const PrivateRoutes = {
  PRIVATE: "private",
  DASHBOARD: "dashboard",
  MI_CUENTA_USER: "mi-cuenta-user",
  HOME_PRIVATE_USER: "usuario",
  HOME_PRIVATE_USER_MASCOTA: "mascotas",
  HOME_PRIVATE_USER_MASCOTA_DETALLE: "/mascotas/:mascotaId",
  HOME_PRIVATE_USER_MASCOTA_FORM: "mascota-form",
  HOME_PRIVATE_USER_MASCOTA_FORM_EDIT: "/mascota-form/:mascotaId",
  LOGOUT_USER: "cerrar-sesion",
  VETERINARIAS_DETALLE: "/veterinarias/:veterinariaId",
  PRODUCTOS_DETALLE: "/productos/:productoId",
  HOME_PRIVATE_VETERINARIA: "veterinaria",
  HOME_PRIVATE_VETERINARIO: "veterinario",
};
