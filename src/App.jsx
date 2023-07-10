import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { rutas } from "./routes/rutas";
import CartContextProvider from "./context/CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Layout />
        <Routes>
          {rutas.map(({ id, path, Element }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
