import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle.js";

function NotFound() {
  usePageTitle("Página no encontrada | Cosmo ser");

  return (
    <section className="not-found">
      <h1>Esta página aún no germina aquí</h1>
      <p>Lo que buscas no está sembrado en este rincón.</p>
      <Link to="/" className="btn btn-primary">
        Volver al inicio
      </Link>
    </section>
  );
}

export default NotFound;