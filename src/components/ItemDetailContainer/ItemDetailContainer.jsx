import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let itemsCollection = collection(db, "products");
    let refDoc = doc(itemsCollection, id);
    getDoc(refDoc).then((res) => {
      setData({ ...res.data(), id: res.id });
    });
  }, [id]);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
