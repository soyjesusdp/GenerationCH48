import { useEffect, useState } from "react";
import './Apod.css';

// Este componente muestra la información específica de la APOD (Astronomy Picture of the Day)
function ApodCard({ apod }) {
    return (
        <div className="apod-centercard">
            <div className="apod-card">
                <h2 className="apod-card-title">{apod.title}</h2>
                <p className="apod-card-date">{apod.date}</p>
                {/* La imagen de alta definición de la APOD, usando el tipo de medio como texto alternativo */}
                <img src={apod.hdurl} alt={apod.media_type} className="apod-card-img" />
                <p className="apod-card-description">{apod.explanation}</p>
                {/* Muestra los derechos de autor, si están disponibles */}
                {apod.copyright && <p className="apod-card-copy">© {apod.copyright}</p>}
            </div>
        </div>
    );
}

// Este es el componente principal que se encarga de obtener los datos de la API de NASA
function Apod() {
    const api_url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"; // URL de la API
    const [apod, setApod] = useState(null); // Estado para almacenar la respuesta de la API

    useEffect(() => {
        // Función asincrónica para obtener datos de la API
        const fetchData = async () => {
            try {
                const response = await fetch(api_url); // Llama a la API
                const data = await response.json(); // Convierte la respuesta a JSON
                setApod(data); // Actualiza el estado con los datos obtenidos
            } catch (error) {
                console.error("Error al obtener los datos:", error); // Muestra un error en caso de fallo
            }
        };

        fetchData(); // Llama a la función para obtener datos
    }, []); // El arreglo vacío indica que este efecto solo se ejecuta una vez al montar el componente

    return (
        <div className="apod-container">
            {/* Si `apod` aún no tiene datos, muestra un mensaje de carga, de lo contrario muestra el componente ApodCard */}
            {!apod ? (
                <p>Loading...</p>
            ) : (
                <ApodCard key={apod.date} apod={apod} />
            )}
        </div>
    );
}

export default Apod;