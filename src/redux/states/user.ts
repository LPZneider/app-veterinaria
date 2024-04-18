import { Roles, UserInfo } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const EmptyUserState: UserInfo = {
  nombre: "",
  mascotas: [],
  rol: Roles.NO_REGISTRADO,
};
export const UserKey = "user";

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : EmptyUserState,
  reducers: {
    login: (state, action) => {
      if (state.rol === Roles.NO_REGISTRADO) {
        return action.payload;
      } else {
        return state;
      }
    },
    logout: (state) => {
      if (state.rol !== Roles.NO_REGISTRADO) {
        return EmptyUserState;
      } else {
        return state;
      }
    },
  },
});
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
