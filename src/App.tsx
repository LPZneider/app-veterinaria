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
import { Access } from "./pages/Public/Access";
import { Home } from "./pages/Public/Home";
import { CuentaUser, FormMascota, Mascotas, User } from "./pages/Private/User";
import { Veterinaria } from "./pages/Private/Veterinaria";
import store from "./redux/store";
import { RoutesWithNotFound } from "./utilities";
import { MascotaDetalle } from "./pages/Private/User/components/MascotaDetalle";
import { ProductoDetalle } from "./pages/Public/Productos/components/ProductoDetalle";
import { VeterinariasDetalle } from "./pages/Public/Veterinarias/components/VeterinariasDetalle";
import { LogoutUser } from "./pages/Private/User/components/LogoutUser";
import { CuentaVeterinaria } from "./pages/Private/Veterinaria/components/CuentaVeterinaria";
import { LogoutVeterinaria } from "./pages/Private/Veterinaria/components/LogoutVeterinaria";
import { MiVeterinarios } from "./pages/Private/Veterinaria/components/MiVeterinarios";
import { MiVeterinarioDetalle } from "./pages/Private/Veterinaria/components/MiVeterinarioDetalle";
import { MiProductos } from "./pages/Private/Veterinaria/components/MiProductos";
import { MiProductoDetalle } from "./pages/Private/Veterinaria/components/MiProductoDetalle";
import { MiProductoForm } from "./pages/Private/Veterinaria/components/MiProductoForm";
import { MiVeterinarioForm } from "./pages/Private/Veterinaria/components/MiVeterinarioForm";
import { CuentaVeterinario } from "./pages/Private/Veterinario/components/CuentaVeterinario";
import { LogoutVeterinario } from "./pages/Private/Veterinario/components/LogoutVeterinario";
import { MiPacientes } from "./pages/Private/Veterinario/components/MiPacientes";

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
    element: <MascotaDetalle />,
    path: PrivateRoutes.HOME_PRIVATE_USER_MASCOTA_DETALLE,
  },
  {
    element: <FormMascota />,
    path: PrivateRoutes.HOME_PRIVATE_USER_MASCOTA_FORM,
  },
  {
    element: <FormMascota />,
    path: PrivateRoutes.HOME_PRIVATE_USER_MASCOTA_FORM_EDIT,
  },
  {
    element: <ProductoDetalle />,
    path: PrivateRoutes.PRODUCTOS_DETALLE,
  },
  {
    element: <VeterinariasDetalle />,
    path: PrivateRoutes.VETERINARIAS_DETALLE,
  },
  {
    element: <CuentaUser />,
    path: PrivateRoutes.MI_CUENTA_USER,
  },
  {
    element: <LogoutUser />,
    path: PrivateRoutes.LOGOUT_USER,
  },
];
const rutasVeterinaria = [
  {
    element: <Veterinaria />,
    path: PrivateRoutes.HOME_PRIVATE_VETERINARIA,
  },
  {
    element: <CuentaVeterinaria />,
    path: PrivateRoutes.MI_CUENTA_VETERINARIA,
  },
  {
    element: <LogoutVeterinaria />,
    path: PrivateRoutes.LOGOUT_VETERINARIA,
  },
  {
    element: <MiVeterinarios />,
    path: PrivateRoutes.MI_VETERINARIOS_VETERINARIA,
  },
  {
    element: <MiVeterinarioDetalle />,
    path: PrivateRoutes.MI_VETERINARIOS_VETERINARIA_DETALLE,
  },
  {
    element: <MiProductos />,
    path: PrivateRoutes.MI_PRODUCTOS_VETERINARIA,
  },
  {
    element: <MiProductoDetalle />,
    path: PrivateRoutes.MI_PRODUCTOS_VETERINARIA_DETALLE,
  },
  {
    element: <MiProductoForm />,
    path: PrivateRoutes.MI_PRODUCTOS_VETERINARIA_FORM,
  },
  {
    element: <MiProductoForm />,
    path: PrivateRoutes.MI_PRODUCTOS_VETERINARIA_FORM_EDIT,
  },
  {
    element: <MiVeterinarioForm />,
    path: PrivateRoutes.MI_VETERINARIOS_VETERINARIA_FORM,
  },
  {
    element: <MiVeterinarioForm />,
    path: PrivateRoutes.MI_VETERINARIOS_VETERINARIA_FORM_EDIT,
  },
];
const rutasVet = [
  {
    element: <Veterinario />,
    path: PrivateRoutes.HOME_PRIVATE_VETERINARIO,
  },
  {
    element: <CuentaVeterinario />,
    path: PrivateRoutes.PRIVATE_VETERINARIO_CUENTA,
  },
  {
    element: <MiPacientes />,
    path: PrivateRoutes.PRIVATE_VETERINARIO_MIS_PACIENTES,
  },
  {
    element: <LogoutVeterinario />,
    path: PrivateRoutes.LOGOUT_VETERINARIO,
  },
];

export default App;
