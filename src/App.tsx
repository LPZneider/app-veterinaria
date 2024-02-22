import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Suspense } from "react";
import { PrivateRoutes, PublicRoutes } from "./models";
import AuthGuard from "./guards/auth.guard";
import { Private } from "./pages/Private";
import { Home } from "./pages/Home";
import { RoutesWithNotFound } from "./utilities";

function App() {
  return (
    <>
      <Suspense fallback={<>Cargando</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route
                path="/"
                element={<Navigate to={PrivateRoutes.PRIVATE} />}
              />
              <Route path={PublicRoutes.HOME} element={<Home />} />
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </>
  );
}

export default App;
