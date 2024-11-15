import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress'; // Importación de CircularProgress
import './Style.css';

function AstroCard({ name, craft }) {
  return (
    <div className="astro-card">
      <p className="astro-name">{name}</p>
      <p className="astro-craft">{craft}</p>
    </div>
  );
}

function Astros() {
  const API_URL = "http://api.open-notify.org/astros.json";
  const [astros, setAstros] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(API_URL);
        const res = await data.json();
        setAstros(res.people);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="astro-container">
      <div>
        <img src="https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/369597186_737723605034389_3714318008681882848_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JW2vaKq6toIQ7kNvgHVuPET&_nc_zt=23&_nc_ht=scontent-qro1-1.xx&_nc_gid=AJ7w0m-6NaflFUAA_STQc7N&oh=00_AYBASQVnk3-AD6hitXIfmunDK5bvROgFqb3jd8EPwMLWaw&oe=673D1C1B" alt="" className='astro-img1'/>
      </div>
      <div className='astro-text'>
        {!astros ? (
          <CircularProgress color="secondary" />
        ) : (
          astros.map((astro, id) => <AstroCard key={id} {...astro} />)
        )}
      </div>
    </div>
  );
}

export default Astros;