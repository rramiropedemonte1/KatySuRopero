import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import TituloCard from "../../common/card/Card/TituloCard";

import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../../../../productsMock";
import { getProducts } from "../../../../productsMock";

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const { categoryName } = useParams("/category/:buzo");

  useEffect(() => {
    if (categoryName) {
      console.log("categorias");
      getProductsByCategory(categoryName).then((res) => setData(res));
    } else {
      console.log("no categorias");
      getProducts().then((res) => setData(res));
    }
  }, [categoryName]);

  console.log(data);

  return (
    <>
      <TituloCard />
      {data.length == 0 ? <h1>Loading</h1> : <ItemList data={data} />}
    </>
  );
};

export default ItemListContainer;
