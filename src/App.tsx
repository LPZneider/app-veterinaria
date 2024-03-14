import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import "./App.css";
import AuthGuard from "./guards/auth.guard";
import { PrivateRoutes, PublicRoutes, Roles } from "./models";
import { Home } from "./pages/Home";
import store from "./redux/store";
import { RoutesWithNotFound } from "./utilities";
import { RoleGuard } from "./guards";
import { Props } from "./guards/rol.guard";
import { createTheme } from "@mui/material/styles"; // Cambio en la importación
import { ThemeProvider } from "@mui/material/styles";
import { Access } from "./pages/Access";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

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
                <Route path="/" element={<Navigate to={PublicRoutes.HOME} />} />
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
                <Route element={<AuthGuard privateValidation={true} />}>
                  <Route element={<RoleGuard {...tipoUser} />}>
                    {rutas.map((r) => {
                      return (
                        <Route path={r.path} element={r.element} key={r.path} />
                      );
                    })}
                  </Route>
                </Route>
              </RoutesWithNotFound>
            </BrowserRouter>
          </Provider>
        </Suspense>
      </ThemeProvider>
    </>
  );
}
const tipoUser: Props[] = [
  {
    rol: Roles.CLIENTE,
  },
  {
    rol: Roles.VETERINARIA,
  },
  {
    rol: Roles.VETERINARIO,
  },
];

const rutas = [
  {
    element: <>user</>,
    path: PrivateRoutes.HOME_PRIVATE_USER,
  },
  {
    element: <>HOME_PRIVATE_VETERINARIA</>,
    path: PrivateRoutes.HOME_PRIVATE_VETERINARIA,
  },
  {
    element: <>HOME_PRIVATE_VETERINARIO</>,
    path: PrivateRoutes.HOME_PRIVATE_VETERINARIO,
  },
];

export default App;
