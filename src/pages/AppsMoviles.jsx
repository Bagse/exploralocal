import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";

function AppsMoviles() {
  const [appsData, setAppsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://apimocha.com/exploralocal/items")
      // https://apimocha.com/apilura/items
      .then((response) => {
        const showData = response.data;

        // Filtrar los datos solo para "apps moviles"
        const appsItems = showData.filter(
          (datos) => datos.category === "apps moviles"
        );

        setAppsData(appsItems);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("error fetching data:", error);
      });
  }, []);
  return (
    <div className="py-20 px-3 md:px-40">
      <h1 className="text-3xl md:text-4xl font-bold text-green-500">
        Apps De Comida Y Transporte
      </h1>
      <p className="text-lg text-gray-300">
        Encuentra las mejores apps de comida y transporte para hacer de tu estancia más sencilla.
      </p>

      {loading ? (
        // Mostrar CardSkeleton mientras se carga, cantidad según la longitud de comerComprarData
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-7 my-7">
          {Array.from({
            length: appsData.length > 0 ? appsData.length : 12,
          }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : appsData.length > 0 ? (
        // Mostrar Card solo si hay datos
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-7 my-7">
          {appsData.map((datos) => (
            <Card key={datos.id} datos={datos} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-7 my-7">
          {Array.from({
            length: appsData.length > 0 ? appsData.length : 12,
          }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AppsMoviles;
