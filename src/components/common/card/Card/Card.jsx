import { Link } from "react-router-dom";

const Card = ({ info }) => {
  return (
    <div className="indumentaria-items">
      <div className="induitems indu4">
        <img className="indu" src={info.img} />
        <div className="info-product">
          <h4 className="nombre">{info.title}</h4>
          <p className="price">${info.price}</p>
          <Link to={`/itemDetail/${info.id}`}>
            <button className="boton">Ver el </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
