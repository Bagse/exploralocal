import React from "react";

function CardItems(props) {
  const { title, itemsData } = props;

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-poppins font-medium capitalize">{title}</h3>
        <span className="text-green-500 text-lg hover:text-green-600 font-poppins">
          Ver más
        </span>
      </div>
      <div className="grid grid-cols-4 gap-7 my-7">
        {itemsData.map((datos) => (
          <div
            key={datos.id}
            className="flex flex-col gap-2 bg-[#1E1E1E] rounded-xl p-2 hover:scale-105 transition hover:outline hover:outline-green-400"
          >
            <img
              src={datos.image1}
              alt={datos.title}
              className="w-[400px] h-[300px] object-cover rounded-xl"
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
