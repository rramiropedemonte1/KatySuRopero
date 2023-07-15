import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="div__navegacion">
          <h5 className="titulo__footer">Navegación</h5>
          <ul className="navegacion">
            <li>
              <Link className="navegacion-li" to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="navegacion-li" to="/category/buzo">
                Buzos
              </Link>
            </li>
            <li>
              <Link className="navegacion-li" to="/category/campera">
                Camperas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="titulo__footer">Contacto</h5>
          <ul className="navegacion">
            <li>
              <i className="bi bi-telephone">+54-1122444156</i>
            </li>
            <li className="navegacion-li">
              <i className="bi bi-envelope"></i>ramiivan59@gmail.com
            </li>
          </ul>
        </div>
        <ul className="navegacion">
          <h5 className="titulo__footer">Redes sociales</h5>
          <li className="navegacion-li">
            <Link to="https://www.instagram.com/rramiropedemonte/">
              <i className="bi bi-instagram"></i>
            </Link>
          </li>
          <li className="navegacion-li">
            <Link to="https://twitter.com/rramiropedemont">
              <i className="bi bi-twitter"></i>
            </Link>
          </li>
          <li className="navegacion-li">
            <Link to="https://github.com/rramiropedemonte1">
              <i className="bi bi-github"></i>
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
