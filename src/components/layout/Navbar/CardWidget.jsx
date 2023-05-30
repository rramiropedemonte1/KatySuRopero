import "./Navbar.css";

const CardWidget = () => {
  return (
    <div className="carrito">
      <a href="icon-carrito">
        <i className="bi bi-cart-fill"></i>
        <span className="numero">0</span>
      </a>
    </div>
  );
};

export default CardWidget;
