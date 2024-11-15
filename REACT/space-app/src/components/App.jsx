import About from './about';
import Apod from './Apod';
import Astros from './Astros';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  const links = [
    { href: "/astros", text: "Home" },
    { href: "/astros", text: "Astros" },
    { href: "/apod", text: "Apod" },
    { href: "/about", text: "About" }
  ];

  return (
    <>
      <Navbar links={links} />
      <Routes>
        <Route element={<Astros />} path="/astros" />
        <Route element={<Apod />} path="/apod" />
        <Route element={<About />} path="/about" />
      </Routes>
    </>
  );
}

export default App;