import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import TituloCard from "../../common/card/Card/TituloCard";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import AgregarDocs from "../../../AgregarDocs";
import Carousel from "../Carousel/Carousel";
import { PulseLoader } from "react-spinners";

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

  if (data.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PulseLoader color="#36d7b7" loading margin={37} size={40} />
      </div>
    );
  }

  return (
    <>
      <Carousel />
      <TituloCard />
      {/* <AgregarDocs /> */}
      {data.length == 0 ? <h1>Loading</h1> : <ItemList data={data} />}
    </>
  );
};

export default ItemListContainer;
