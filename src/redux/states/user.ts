import { Roles, UserInfo } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const EmptyUserState: UserInfo = {
  id: 0,
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
    update: (state, action) => {
      console.log(action.payload, state);
      return action.payload;
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
export const { login, update, logout } = userSlice.actions;

export default userSlice.reducer;
