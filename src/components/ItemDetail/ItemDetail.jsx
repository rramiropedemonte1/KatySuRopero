import "./ItemDetail.css";

const ItemDetail = ({ data }) => {
  return (
    <div className="indumentaria-items">
      <div className="induitems indu4">
        <img className="indu" src={data.img} />
        <div className="info-product">
          <h4 className="nombre">{data.title}</h4>
          <p className="price">{data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
