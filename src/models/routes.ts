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
  MI_CUENTA_VETERINARIA: "mi-cuenta-veterinaria",
  MI_VETERINARIOS_VETERINARIA: "mis-veterinarios",
  MI_VETERINARIOS_VETERINARIA_FORM: "veterinario-form",
  MI_VETERINARIOS_VETERINARIA_FORM_EDIT: "/veterinario-form/:miVeterinario",
  MI_VETERINARIOS_VETERINARIA_DETALLE: "/mis-veterinarios/:veterinarioId",
  MI_PRODUCTOS_VETERINARIA: "mis-productos",
  MI_PRODUCTOS_VETERINARIA_FORM: "crear-producto",
  MI_PRODUCTOS_VETERINARIA_DETALLE: "/mis-productos/:miProducto",
  MI_PRODUCTOS_VETERINARIA_FORM_EDIT: "/producto-form/:miProducto",
  LOGOUT_VETERINARIA: "cerrar-seccion-veterinaria",
  HOME_PRIVATE_VETERINARIO: "veterinario",
  PRIVATE_VETERINARIO_CUENTA: "mi-cuenta-veterinario",
  PRIVATE_VETERINARIO_MIS_PACIENTES: "mis-pacientes",
  PRIVATE_VETERINARIO_MIS_PACIENTES_DETALLE: "/mi-paciente/:mipaciente",
  PRIVATE_VETERINARIO_MIS_PACIENTES_FORM: "/mi-tratamiento-form/:miMascota",
  PRIVATE_VETERINARIO_MIS_PACIENTES_FORM_EDIT: "/mi-tratamiento/:mipaciente",
  LOGOUT_VETERINARIO: "cerrar-seccion-veterinario",
};
