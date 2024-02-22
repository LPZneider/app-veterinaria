import { BrowserRouter } from "react-router-dom";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback={<>Cargando</>}>
        <Provider store={store}>
          <BrowserRouter></BrowserRouter>
        </Provider>
      </Suspense>
    </>
  );
}

export default App;
