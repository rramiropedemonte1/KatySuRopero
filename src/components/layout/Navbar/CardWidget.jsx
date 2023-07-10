import { Link } from "react-router-dom";
import "./Navbar.css";

const CardWidget = () => {
  return (
    <div className="carrito">
      <Link to="/carrito">
        <i className="bi bi-cart-fill"></i>
        <span className="numero">0</span>
      </Link>
    </div>
  );
};

export default CardWidget;
