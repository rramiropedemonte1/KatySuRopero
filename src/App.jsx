import Titulo from "./components/layout/Titulo/Titulo";
import Navbar from "./components/layout/Navbar/Navbar";
import "./App.css";
import Card from "./components/common/card/Card";
import Carousel from "./components/layout/Carousel/Carousel";
import TituloCard from "./components/common/card/TituloCard";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <Titulo />
      <Navbar />
      <ItemListContainer texto="Hola Coder" />
      <Carousel />
      <TituloCard />
      <br />
      <Card />
      <br />
    </div>
  );
};

export default App;
