import Counter from "../common/card/Counter/Counter";
import "./ItemDetail.css";

const ItemDetail = ({ data, onAdd }) => {
  return (
    <>
      <div className="indumentaria-items">
        <div className="induitems indu4">
          <img className="indu" src={data.img} />
          <div className="info-product">
            <h4 className="nombre">{data.title}</h4>
            <p className="price">{data.price}</p>
            {data.stock > 0 ? (
              <Counter initial={1} stock={data.stock} onAdd={onAdd} />
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
