import { UserInfo } from "@/models";
import { VeterinariaInfo } from "@/models/veterinariaInfo";
import { VeterinarioInfo } from "@/models/veterinario.modal";
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states/user";
import { veterinariaSlice } from "./states/veterinaria";
import { veterinarioSlice } from "./states/veterinario";

export interface AppStore {
  user: UserInfo;
  veterinaria: VeterinariaInfo;
  veterinario: VeterinarioInfo;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer,
    veterinaria: veterinariaSlice.reducer,
    veterinario: veterinarioSlice.reducer,
  },
});
