import { useEffect, useState } from "react";

// Componente para mostrar los detalles de la APOD (Astronomy Picture of the Day)
function AstronomyCard({ data }) {
    return (
        <div className="astronomy-card">
            <h2 className="astronomy-title">{data.title}</h2>
            <p className="astronomy-date">{data.date}</p>
            {data.media_type === "image" ? (
                <img
                    src={data.hdurl}
                    alt={`NASA APOD: ${data.title}`}
                    className="astronomy-image"
                />
            ) : (
                <p className="astronomy-media-not-supported">
                    Este tipo de contenido no es compatible.
                </p>
            )}
            <p className="astronomy-description">{data.explanation}</p>
            {data.copyright && (
                <p className="astronomy-copyright">
                    © {data.copyright}
                </p>
            )}
        </div>
    );
}

// Componente principal para obtener y mostrar la APOD
function AstronomyPicture() {
    const API_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
    const [apodData, setApodData] = useState(null); // Almacenamos los datos de la APOD
    const [error, setError] = useState(null); // Almacenamos errores

    useEffect(() => {
        const fetchApodData = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`Error al obtener datos: ${response.statusText}`);
                }
                const result = await response.json();
                setApodData(result);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchApodData();
    }, []);

    return (
        <div className="astronomy-container">
            {/* Mostramos un mensaje de carga, error o la tarjeta con los datos */}
            {error ? (
                <p className="error-message">{error}</p>
            ) : !apodData ? (
                <p className="loading-message">Cargando datos de la NASA...</p>
            ) : (
                <AstronomyCard data={apodData} />
            )}
        </div>
    );
}

export default AstronomyPicture;
