// Importamos el archivo de estilos y la herramienta Link para la navegación.
import './navbar.css';
import { Link } from 'react-router-dom';

// Componente reutilizable para cada botón de navegación.
function NavButton({ href, text }) {
  // Devuelve un enlace estilizado con los props de destino y texto.
  return (
    <Link className="nav-button" to={href}>
      {text}
    </Link>
  );
}

// Componente principal de la barra de navegación.
function Navbar({ links }) {
  // Definimos un título estático para el navbar.
  const title = "Jesús Duerto";

  return (
    <nav className="navbar">
      {/* Contenedor del título */}
      <div className="navbar-title">
        <h1>{title}</h1>
      </div>
      {/* Contenedor de los enlaces de navegación */}
      <div className="navbar-links">
        {/* Iteramos sobre los enlaces recibidos por props */}
        {links.map((link, id) => (
          <NavButton href={link.href} text={link.text} key={id} />
        ))}
      </div>
    </nav>
  );
}

export default Navbar;