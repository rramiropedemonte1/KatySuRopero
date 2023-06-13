import Counter from "../Counter/Counter";

const Card = ({ info }) => {
  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);
  };

  return (
    <div className="indumentaria-items">
      <div className="induitems indu4">
        <img className="indu" src={info.img} />
        <div className="info-product">
          <h4 className="nombre">{info.title}</h4>
          <p className="price">${info.price}</p>
          <Counter initial={1} stock={5} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default Card;
