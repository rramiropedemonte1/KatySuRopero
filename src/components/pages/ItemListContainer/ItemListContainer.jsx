import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import TituloCard from "../../common/card/Card/TituloCard";

import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../../../../productsMock";

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    if (categoryName) {
      getProductsByCategory(categoryName).then((res) => setData(res));
    }
  }, [categoryName]);
  console.log(categoryName);

  return (
    <>
      <TituloCard />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
