import { Roles } from "@/models";
import { VeterinarioInfo } from "@/models/veterinario.modal";
import { createSlice } from "@reduxjs/toolkit";

export const EmptyUserState: VeterinarioInfo = {
  nombre: "",
  rol: Roles.NO_REGISTRADO,
};
export const UserKey = "user";

export const veterinarioSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : EmptyUserState,
  reducers: {
    loginVet: (state, action) => {
      if (state.rol === Roles.NO_REGISTRADO) {
        return action.payload;
      } else {
        return state;
      }
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
export const { loginVet, logoutVet } = veterinarioSlice.actions;

export default veterinarioSlice.reducer;
