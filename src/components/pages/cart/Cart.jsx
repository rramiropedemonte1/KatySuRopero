import { Button } from "bootstrap";
import { Link } from "react-router-dom";

const Cart = ({ cart, removeById, limpiar, total }) => {
  return (
    <div>
      <div className="contenedor-carrito">
        <div className="carrito-indu">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-indu">
                <img src={item.img} alt="" />
                <small>Nombre</small>
                <p className="cart-nombre-indu">{item.title}</p>
                <div className="cart-indu-quantity">
                  <small>Cantidad</small>
                  <p>{item.quantity}</p>
                </div>
                <div className="cart-indu-price">
                  <small>Precio</small>
                  <p>{item.price}</p>
                </div>
                <Button variant="contained" onClick={() => removeById(item.id)}>
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
            <Link>
              <Button variant="contained">Comprar ahora</Button>
            </Link>
          </div>
        ) : (
          <Link to="/">
            <Button variant="contained">Agregar productos</Button>
          </Link>
        )}

        <div>
          <button>
            <p>Total: {total}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
