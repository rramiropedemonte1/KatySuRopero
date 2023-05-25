import "./Card.css";
import Buzo from "/img/buzo essentials.webp";

const Card = () => {
  return (
    <div className="indumentaria-items">
      <div className="induitems indu4">
        <img className="indu" src={Buzo} />
        <div className="info-product">
          <h4 className="nombre">Buzo Essentials</h4>
          <p className="price">$70.800</p>
          <button>Añadir al carrito</button>
        </div>
      </div>

      <div className="induitems indu4">
        <img className="indu" src={Buzo} />
        <div className="info-product">
          <h4 className="nombre">Buzo Essentials</h4>
          <p className="price">$70.800</p>
          <button>Añadir al carrito</button>
        </div>
      </div>

      <div className="induitems indu4">
        <img className="indu" src={Buzo} />
        <div className="info-product">
          <h4 className="nombre">Buzo Essentials</h4>
          <p className="price">$70.800</p>
          <button>Añadir al carrito</button>
        </div>
      </div>

      <div className="induitems indu4">
        <img className="indu" src={Buzo} />
        <div className="info-product">
          <h4 className="nombre">Buzo Essentials</h4>
          <p className="price">$70.800</p>
          <button>Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
