import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { rutas } from "./routes/rutas";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {rutas.map(({ id, path, Element }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
