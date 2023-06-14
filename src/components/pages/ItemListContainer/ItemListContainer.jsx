import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import TituloCard from "../../common/card/Card/TituloCard";

const indumentaria = [
  {
    id: 1,
    title: "Buzo Essentials",
    price: 25000,
    img: "/img/buzo essentials.webp",
    stock: 3,
  },
  {
    id: 2,
    title: "Buzo Balenciaga blanco",
    price: 30000,
    img: "/img/buzo balenciaga blanco.jpg",
    stock: 2,
  },
  {
    id: 3,
    title: "Buzo Balenciaga negro",
    price: 30000,
    img: "/img/buzo balenciaga negro.jpg",
    stock: 3,
  },
  {
    id: 4,
    title: "Buzo Burberry negro",
    price: 22000,
    img: "/img/buzo burberry negro.jpg",
    stock: 4,
  },
];

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(indumentaria);
      }, 1000);
    });
    getData.then((res) => setData(res));
  }, []);

  return (
    <>
      <TituloCard />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
