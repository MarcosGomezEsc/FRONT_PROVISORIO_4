import { useState, useEffect } from "react";

const Fetch_Autos = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch("http://localhost:3000");

        if (!response.ok) {
          throw new Error("Error al obtener los datos:", response.status);
        }

        const data = await response.json();
        setDatos(data);
      } catch (error) {
        console.error("Error de red:", error);
      }
    };
    obtenerDatos();
  }, []);
  console.log("datos", datos);
  return <></>;
};

export default Fetch_Autos;
