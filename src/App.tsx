import { ThemeProvider, createTheme } from "@mui/material/styles"; // Cambio en la importación
import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import AuthGuard from "./guards/auth.guard";
import { PrivateRoutes, PublicRoutes } from "./models";
import { Access } from "./pages/Access";
import { Home } from "./pages/Home";
import { Mascotas, User } from "./pages/Private/User";
import { Veterinaria } from "./pages/Private/Veterinaria";
import store from "./redux/store";
import { RoutesWithNotFound } from "./utilities";

const theme = createTheme({
  palette: {
    primary: {
      main: "#22303d", // Color principal
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
                <Route path={PublicRoutes.HOME} element={<Home />} />
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
                <Route element={<AuthGuard />}>
                  {rutas.map((r) => {
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

const rutas = [
  {
    element: <User />,
    path: PrivateRoutes.HOME_PRIVATE_USER,
  },
  {
    element: <Mascotas />,
    path: PrivateRoutes.HOME_PRIVATE_USER_MASCOTA,
  },
  {
    element: <Veterinaria />,
    path: PrivateRoutes.HOME_PRIVATE_VETERINARIA,
  },
  {
    element: <>HOME_PRIVATE_VETERINARIO</>,
    path: PrivateRoutes.HOME_PRIVATE_VETERINARIO,
  },
];

export default App;
