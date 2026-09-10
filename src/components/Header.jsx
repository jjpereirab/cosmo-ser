import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="nav" aria-label="Navegación principal">
        <Link to="/#inicio">Inicio</Link>
        <Link to="/#nosotros">Nosotros</Link>
        <NavLink to="/servicios">Servicios</NavLink>
        <Link to="/#contacto">Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;