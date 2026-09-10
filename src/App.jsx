import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout.jsx";
import ScrollManager from "./components/ScrollManager.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

const Servicios = lazy(() => import("./pages/Servicios.jsx"));

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="servicios"
            element={
              <Suspense fallback={<div className="page-loading">Cargando…</div>}>
                <Servicios />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;