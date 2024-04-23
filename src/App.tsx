import { ThemeProvider, createTheme } from "@mui/material/styles"; // Cambio en la importación
import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { UserGuard, VetGuard, VeterinariaGuard } from "./guards";
import LoginGuard from "./guards/login.guard";
import { PrivateRoutes, PublicRoutes } from "./models";
import { Productos, Veterinarias, Veterinario } from "./pages";
import { Access } from "./pages/Access";
import { Home } from "./pages/Home";
import { FormMascota, Mascotas, User } from "./pages/Private/User";
import { Veterinaria } from "./pages/Private/Veterinaria";
import store from "./redux/store";
import { RoutesWithNotFound } from "./utilities";

const theme = createTheme({
  palette: {
    primary: {
      main: "#22303d",
    },
    secondary: {
      main: "#5f362c",
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<>Cargando</>}>
          <Provider store={store}>
            <BrowserRouter>
              <RoutesWithNotFound>
                <Route
                  path="/"
                  element={<Navigate to={PrivateRoutes.HOME_PRIVATE_USER} />}
                />
                <Route
                  path={PublicRoutes.VETERINARIAS}
                  element={<Veterinarias />}
                />
                <Route path={PublicRoutes.PRODUCTOS} element={<Productos />} />
                <Route path={PublicRoutes.HOME} element={<Home />} />
                <Route element={<LoginGuard />}>
                  <Route
                    path={PublicRoutes.LOGIN}
                    element={
                      <Access>
                        <Login />
                      </Access>
                    }
                  />
                  <Route
                    path={PublicRoutes.REGISTER}
                    element={
                      <Access>
                        <Register />
                      </Access>
                    }
                  />
                </Route>
                <Route element={<UserGuard />}>
                  {rutasUser.map((r) => {
                    return (
                      <Route path={r.path} element={r.element} key={r.path} />
                    );
                  })}
                </Route>
                <Route element={<VetGuard />}>
                  {rutasVet.map((r) => {
                    return (
                      <Route path={r.path} element={r.element} key={r.path} />
                    );
                  })}
                </Route>
                <Route element={<VeterinariaGuard />}>
                  {rutasVeterinaria.map((r) => {
                    return (
                      <Route path={r.path} element={r.element} key={r.path} />
                    );
                  })}
                </Route>
              </RoutesWithNotFound>
            </BrowserRouter>
          </Provider>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

const rutasUser = [
  {
    element: <User />,
    path: PrivateRoutes.HOME_PRIVATE_USER,
  },
  {
    element: <Mascotas />,
    path: PrivateRoutes.HOME_PRIVATE_USER_MASCOTA,
  },
  {
    element: <FormMascota />,
    path: PrivateRoutes.HOME_PRIVATE_USER_MASCOTA_FORM,
  },
];
const rutasVeterinaria = [
  {
    element: <Veterinaria />,
    path: PrivateRoutes.HOME_PRIVATE_VETERINARIA,
  },
];
const rutasVet = [
  {
    element: <Veterinario />,
    path: PrivateRoutes.HOME_PRIVATE_VETERINARIO,
  },
];

export default App;
