import img from '../assets/fotodeperfil.jpg';

function About() {
  return (
    <div>
      <img src={img} alt="Jesús Duerto" className='profile-img' />
      <h1>Jesús Duerto</h1>
      <p className='profile-text'>
      Jesús es Desarrollador Java Full Stack Jr, Diseñador Gráfico especializado en UX Marketing y emprendedor en marketing de redes sociales con su empresa JD Marketing. Está desarrollando habilidades en programación (Java, Python, HTML, CSS, JavaScript) y construyendo un portafolio personal. Además, maneja proyectos de diseño web, colabora en equipos de desarrollo y sigue un plan de aprendizaje de inglés con enfoque profesional. Es un apasionado del manga y le gusta crear contenido visual y educativo en marketing, buscando siempre mejorar sus habilidades técnicas y blandas para impulsar su carrera.
      </p>
      <a className='profile-user' href='https://www.instagram.com/soyjesusdp'>@soyjesusdp</a>
    </div>
  );
}

export default About;