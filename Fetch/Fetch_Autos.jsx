import { useState, useEffect } from "react";

const Fetch_Autos = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch("http://localhost:3000/");

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
  //DESDE ACA FUNCIONA BIEN

  //Y ACA RETORNO
  console.log(datos);
  return (
    <>
      <h2>Desde el fetch</h2>
      {datos.length > 0 ? (
        <ul>
          {datos.map((auto, index) => (
            <li key={index}>
              <p>Marca: {auto.Marca}</p>
              <p>Modelo: {auto.Modelo}</p>
              <p>Color: {auto.Color}</p>
              <p>Precio: U$S{auto.Precio}</p>
              <hr />
              {/* <Botones datos={datos} setDatos={set} /> */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron datos</p>
      )}
    </>
  );
};

export default Fetch_Autos;
