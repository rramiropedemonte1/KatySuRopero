import Counter from "../common/card/Counter/Counter";
import "./ItemDetail.css";

const ItemDetail = ({ productIndumentaria }) => {
  const onAdd = (quantity) => {
    let cantidad = {
      ...productIndumentaria,
      quantity: quantity,
    };
    console.log(cantidad);
  };
  return (
    <>
      <div className="indumentaria-items">
        <div className="induitems indu4">
          <img className="indu" src={productIndumentaria.img} />
          <div className="info-product">
            <h4 className="nombre">{productIndumentaria.title}</h4>
            <p className="price">{productIndumentaria.price}</p>
            {productIndumentaria.stock > 0 ? (
              <Counter
                initial={1}
                stock={productIndumentaria.stock}
                onAdd={onAdd}
              />
            ) : (
              <h3>No tenemos mas stock</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
