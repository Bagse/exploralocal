import React from "react";
import { Link } from "react-router-dom";
import CardSkeleton from "./CardSkeleton";
import Card from "./Card";

function CardItems(props) {
  const { title, itemsData, to } = props;

  if (itemsData.length === 0) {
    // Si no hay datos disponibles, mostrar CardSkeleton
    return (
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-xl md:text-2xl font-poppins font-medium capitalize">
            {title}
          </h3>
          <Link to={to}>
            <button className="bg-green-400 px-2 rounded-lg text-sm md:text-lg text-white font-poppins font-medium hover:outline outline-white">
              Ver más
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-7 my-7">
          {/* Mostrar CardSkeleton mientras se carga */}
          {[1, 2, 3, 4].map((index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  // Mostrar los datos reales cuando están disponibles
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-xl md:text-2xl font-poppins font-medium capitalize">
          {title}
        </h3>
        <Link to={to}>
          <button className="bg-green-400 px-2 rounded-lg text-sm md:text-lg text-white font-poppins font-medium hover:outline outline-white">
            Ver más
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-7 my-7">
        {itemsData.map((datos) => (
          <Card key={datos.id} datos={datos} />
        ))}
      </div>
    </div>
  );
}

export default CardItems;
