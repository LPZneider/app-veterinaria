import { Roles } from "@/models";
import { VeterinariaInfo } from "@/models/veterinariaInfo";
import { createSlice } from "@reduxjs/toolkit";

export const EmptyUserState: VeterinariaInfo = {
  nombre: "",
  direccion: "",
  usuarios: [],
  veterinarios: [],
  rol: Roles.NO_REGISTRADO,
};
export const UserKey = "user";

export const veterinariaSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : EmptyUserState,
  reducers: {
    loginVeterinaria: (state, action) => {
      if (state.rol === Roles.NO_REGISTRADO) {
        return action.payload;
      } else {
        return state;
      }
    },
    logoutVeterinaria: (state) => {
      if (state.rol !== Roles.NO_REGISTRADO) {
        return EmptyUserState;
      } else {
        return state;
      }
    },
  },
});
export const { loginVeterinaria, logoutVeterinaria } = veterinariaSlice.actions;

export default veterinariaSlice.reducer;
