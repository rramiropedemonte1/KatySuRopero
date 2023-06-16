import { Link } from "react-router-dom";
import CardWidget from "./CardWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/buzo">
                Buzos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/campera">
                Camperas
              </Link>
            </li>
          </ul>
        </div>
        <CardWidget />
      </div>
    </nav>
  );
};

export default Navbar;
