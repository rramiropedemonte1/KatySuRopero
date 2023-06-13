const Item = ({ info }) => {
  return (
    <>
      <div className="indumentaria-items">
        <div className="induitems indu4">
          <img className="indu" src={info.img} />
          <div className="info-products">
            <h4 className="nombre">{info.title}</h4>
            <p className="price">{info.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
