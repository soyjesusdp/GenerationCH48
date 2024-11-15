import './navbar.css';
import { Link } from 'react-router-dom';

function NavButton({ href, text }) {
  return (
    <Link className="btn-nav" to={href}>
      {text}
    </Link>
  );
}
function Navbar({ links }) {
  console.log(links);
  const title = "Jesús Duerto";

  return (
    <nav>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        {links.map((link, id) => (
          <NavButton href={link.href} text={link.text} key={id} />
        ))}
      </div>
    </nav>
  );
}

export default Navbar;