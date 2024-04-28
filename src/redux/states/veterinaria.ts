import { Roles } from "@/models";
import { VeterinariaInfo } from "@/models/veterinariaInfo";
import { createSlice } from "@reduxjs/toolkit";

export const EmptyUserState: VeterinariaInfo = {
  id: 0,
  nombre: "",
  direccion: "",
  usuarios: [],
  veterinarios: [],
  registro: {
    email: "",
    password: "",
  },
  productos: [],
  rol: Roles.NO_REGISTRADO,
};

export const veterinariaSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("veterinaria")
    ? JSON.parse(localStorage.getItem("veterinaria") as string)
    : EmptyUserState,
  reducers: {
    loginVeterinaria: (state, action) => {
      if (state.rol === Roles.NO_REGISTRADO) {
        return action.payload;
      } else {
        return state;
      }
    },
    updateVeterinaria: (state, action) => {
      console.log(action.payload, state);
      return action.payload;
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
export const { loginVeterinaria, updateVeterinaria, logoutVeterinaria } =
  veterinariaSlice.actions;

export default veterinariaSlice.reducer;
