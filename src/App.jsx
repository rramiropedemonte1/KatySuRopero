import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
