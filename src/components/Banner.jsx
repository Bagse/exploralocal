import React from "react";

function Banner() {
  return (
    <div className="relative">
      <img
        src="./plaza-armas.webp"
        alt="banner plaza de armas"
        className="w-full h-[480px] md:h-[550px] object-cover opacity-80 md:opacity-70"
      />
      <div className="absolute z-10 top-28 left-5 md:left-36 space-y-7 md:space-y-10 font-mont">
        <h2 className="text-4xl md:text-7xl font-bold">
          Explora Cusco a través de sus sabores y lugares!
        </h2>
        <p className="text-xl md:text-2xl font-medium w-[340px] md:w-[800px]">
          Descubre la esencia de la ciudad mientras exploras cada rincón y
          degustas sus delicias locales.
        </p>
      </div>
    </div>
  );
}

export default Banner;
