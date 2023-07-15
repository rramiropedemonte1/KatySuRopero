import { useContext, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const cantidad = getTotalQuantityById(id);

  const onAdd = (quantity) => {
    let cantidad = {
      ...data,
      quantity: quantity,
    };

    addToCart(cantidad);
  };

  useEffect(() => {
    let itemsCollection = collection(db, "products");
    let refDoc = doc(itemsCollection, id);
    getDoc(refDoc).then((res) => {
      setData({ ...res.data(), id: res.id });
    });
  }, [id]);

  return (
    <ItemDetail
      cantidad={cantidad}
      data={data}
      addToCart={addToCart}
      onAdd={onAdd}
    />
  );
};

export default ItemDetailContainer;
