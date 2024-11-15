import img from '../assets/fotodeperfilcuadrada.png';

function About() {
  return (
    <div>
      <img src={img} alt="Foto de perfil Jesús Duerto" className='about-profilepicture' />
      <h2>Jesús Duerto</h2>
      <p className='about-textprofile'>Jesús es Desarrollador Java Full Stack Jr, Diseñador Gráfico especializado en UX Marketing y emprendedor en marketing de redes sociales con su empresa JD Marketing. Está desarrollando habilidades en programación (Java, Python, HTML, CSS, JavaScript) y construyendo un portafolio personal. Además, maneja proyectos de diseño web, colabora en equipos de desarrollo y sigue un plan de aprendizaje de inglés con enfoque profesional. Es un apasionado del manga y le gusta crear contenido visual y educativo en marketing, buscando siempre mejorar sus habilidades técnicas y blandas para impulsar su carrera.</p>
      <div className='about-instagramprofile-center'>
        <span className='about-instagramprofile'>@soyjesusdp</span>
      </div>
    </div>
  );
}

export default About;