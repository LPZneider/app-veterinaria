import { Roles } from "@/models";
import { VeterinarioRedux } from "@/models/veterinarioredux.modal";
import { createSlice } from "@reduxjs/toolkit";

export const EmptyUserState: VeterinarioRedux = {
  id: 0,
  nombre: "",
  direccion: "",
  usuarios: [],
  veterinarios: {
    id: 0,
    nombre: "",
    registro: {
      email: "",
      password: "",
    },
  },
  rol: Roles.NO_REGISTRADO,
};
export const UserKey = "user";

export const veterinarioSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("veterinario")
    ? JSON.parse(localStorage.getItem("veterinario") as string)
    : EmptyUserState,
  reducers: {
    loginVet: (state, action) => {
      if (state.rol === Roles.NO_REGISTRADO) {
        return action.payload;
      } else {
        return state;
      }
    },
    updateVet: (state, action) => {
      return action.payload;
    },
    logoutVet: (state) => {
      if (state.rol !== Roles.NO_REGISTRADO) {
        return EmptyUserState;
      } else {
        return state;
      }
    },
  },
});
export const { loginVet, updateVet, logoutVet } = veterinarioSlice.actions;

export default veterinarioSlice.reducer;
