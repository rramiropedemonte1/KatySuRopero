import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, removeById, limpiar, total }) => {
  return (
    <div>
      <div className="contenedor-carrito">
        <div className="carrito-indu">
          {cart.map((data) => {
            return (
              <div key={data.id} className="cart-indu">
                <img className="cart-indu-img" src={data.img} alt="" />
                <div>
                  <small className="cart-small-indu">Nombre</small>
                  <p className="cart-nombre-indu">{data.title}</p>
                </div>
                <div className="cart-indu-quantity">
                  <small className="cart-small-indu">Cantidad</small>
                  <p className="cart-quantity-indu">{data.quantity}</p>
                </div>
                <div className="cart-indu-price">
                  <small className="cart-small-indu">Precio</small>
                  <p className="cart-price-indu">{data.price}</p>
                </div>
                <Button variant="contained" onClick={() => removeById(data.id)}>
                  <i className="bi bi-trash-fill"></i>
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="carrito-acciones">
        {cart.length > 0 ? (
          <div className="carrito-acciones-izquierda">
            <Button onClick={limpiar} className="carrito-acciones-vaciar">
              Vaciar carrito
            </Button>
            <Link to="/checkout">
              <Button className="carrito-acciones-comprar">
                Comprar ahora
              </Button>
            </Link>
          </div>
        ) : (
          <Link to="/">
            <Button className="carrito-acciones-agregar">
              Agregar productos
            </Button>
          </Link>
        )}

        <div>
          <button className="carrito-acciones-total">Total: {total}</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
