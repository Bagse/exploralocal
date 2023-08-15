import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItems from "./CardItems";

function Categories() {
  const [categoriesData, setCategoriesData] = useState({
    comerComprar: [],
    appMoviles: [],
    turismo: [],
  });

  useEffect(() => {
    axios
      .get("https://apimocha.com/exploralocal/items")
      .then((response) => {
        const showData = response.data;

        const categorizedData = {
          comerComprar: [],
          appMoviles: [],
          turismo: [],
        };

        showData.forEach((datos) => {
          if (
            datos.category === "comer comprar" &&
            categorizedData.comerComprar.length < 4
          ) {
            categorizedData.comerComprar.push(datos);
          } else if (
            datos.category === "apps moviles" &&
            categorizedData.appMoviles.length < 4
          ) {
            categorizedData.appMoviles.push(datos);
          } else if (
            datos.category === "turismo" &&
            categorizedData.turismo.length < 4
          ) {
            categorizedData.turismo.push(datos);
          }
        });

        setCategoriesData(categorizedData);
      })
      .catch((error) => {
        console.error("error fetching data:", error);
      });
  }, []);

  return (
    <div className="px-3 md:px-36 py-5">
      <div className="flex flex-col gap-7 pt-5">
        <CardItems
          title="Dónde comer y comprar"
          itemsData={categoriesData.comerComprar}
          to="/donde-comer-y-comprar"
        />
        <CardItems
          title="Turismo local"
          itemsData={categoriesData.turismo}
          to="/turismo"
        />
        <CardItems
          title="Apps de comida y transporte"
          itemsData={categoriesData.appMoviles}
          to="/apps-moviles"
        />
      </div>
    </div>
  );
}

export default Categories;
