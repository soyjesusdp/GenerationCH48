import img from '../assets/jesus.png';

function About() {
  return (
    <div>
      <img src={img} alt="Katya Echazarreta" />
      <h2>Katya Echazarreta</h2>
      <span>@katvoltage</span>
      <p>
        Katya Celeste Echazarreta González, conocida como Katya Echazarreta, es una ingeniera electrónica y divulgadora científica mexicana. En junio de 2022 se convirtió en la primera mujer mexicana en viajar al espacio exterior como parte de la misión Blue Origin NS-21 a bordo de una nave espacial New Shepard.
      </p>
    </div>
  );
}

export default About;