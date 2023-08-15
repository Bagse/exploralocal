import React from "react";
import { Link } from "react-router-dom";

function CardItems(props) {
  const { title, itemsData, to } = props;

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
          <div
            key={datos.id}
            className="flex flex-col gap-2 bg-[#1E1E1E] rounded-xl p-2 md:hover:scale-105 transition hover:outline hover:outline-green-400"
          >
            <img
              src={datos.image1}
              alt={datos.title}
              className="w-[400px] h-[250px] object-cover rounded-xl"
            />
            <div className="pb-4 px-2">
              <h2 className="text-xl font-bold text-green-400 capitalize">
                {datos.title}
              </h2>
              <p className="line-clamp-2">{datos.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardItems;
