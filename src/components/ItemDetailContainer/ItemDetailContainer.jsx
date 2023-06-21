import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../productsMock";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productFind = products.find((product) => product.id === +id);

    const getData = new Promise((res) => {
      res(productFind);
    });

    getData.then((res) => setData(res)).catch((err) => console.log(err));
  }, [id]);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
