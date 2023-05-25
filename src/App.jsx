import Titulo from "./components/layout/Titulo/Titulo";
import Navbar from "./components/layout/Navbar/Navbar";
import "./App.css";
import Card from "./components/common/card/Card";
import Carousel from "./components/layout/Carousel/Carousel";
import TituloCard from "./components/common/card/TituloCard";

const App = () => {
  return (
    <div>
      <Titulo />
      <Navbar />
      <Carousel />
      <TituloCard />
      <br />
      <Card />
      <br />
    </div>
  );
};

export default App;
