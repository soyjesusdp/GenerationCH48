import './App.css';
import About from './components/about';
import Apod from './components/apod';
import Astros from './components/Astros';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  const links = [
    { href: "/astros", text: "Astros" },
    { href: "/apod", text: "Apod" },
    { href: "/about", text: "About me" }
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