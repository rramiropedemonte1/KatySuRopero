import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect } from "react";

const indumentaria = [
  {
    id: 1,
    title: "Buzo Essentials",
    price: 25000,
    img: "/img/buzo essentials.webp",
    stock: 3,
  },
];

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  console.log(data);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(indumentaria);
      }, 1000);
    });

    getData.then((res) => setData(res));
  });

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
