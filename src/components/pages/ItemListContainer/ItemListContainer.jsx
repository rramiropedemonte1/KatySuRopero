import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import TituloCard from "../../common/card/Card/TituloCard";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../../../../productsMock";
import { getProducts } from "../../../../productsMock";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let itemsCollection = collection(db, "products");

    let consulta;

    if (!categoryName) {
      consulta = itemsCollection;
    } else {
      consulta = query(itemsCollection, where("category", "==", categoryName));
    }
    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        setData(products);
      })
      .catch((err) => console.log(err));
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
