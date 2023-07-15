import { Link } from "react-router-dom";
import "./Navbar.css";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CardWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();

  return (
    <div className="carrito">
      <Link to="/carrito">
        <Badge badgeContent={totalItems} showZero color="primary">
          <i className="bi bi-cart-fill"></i>
        </Badge>
      </Link>
    </div>
  );
};

export default CardWidget;
