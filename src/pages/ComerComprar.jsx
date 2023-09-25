import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";

function ComerComprar() {
  const [comerComprarData, setComerComprarData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://apimocha.com/exploralocal/items")
      .then((response) => {
        const showData = response.data;

        // Filtrar los datos solo para "comer comprar"
        const comerComprarItems = showData.filter(
          (datos) => datos.category === "comer comprar"
        );

        setComerComprarData(comerComprarItems);
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
        Dónde comer y comprar
      </h1>
      <p className="text-lg text-gray-300">
        Encuentra los mejores restaurantes, bares y lugares de compra en nuestra ciudad.
      </p>

      {loading ? (
        // Mostrar CardSkeleton mientras se carga, cantidad según la longitud de comerComprarData
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-7 my-7">
          {Array.from({ length: comerComprarData.length > 0 ? comerComprarData.length : 12 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : comerComprarData.length > 0 ? (
        // Mostrar Card solo si hay datos
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-7 my-7">
          {comerComprarData.map((datos) => (
            <Card key={datos.id} datos={datos} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-7 my-7">
          {Array.from({ length: turismo.length > 0 ? turismo.length : 12 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ComerComprar;
