import slugify from "slugify";
import { Link } from "react-router-dom";

function Card({ datos }) {
  return (
    <Link
      to={`/info/${slugify(datos.title, {
        lower: true,
        replacement: "-",
      })}`}
      key={datos.id}
    >
      <div className="flex flex-col gap-2 bg-[#1E1E1E] rounded-xl p-2 md:hover:scale-105 transition hover:outline hover:outline-green-400">
        <img
          src={datos.image1}
          alt={datos.title}
          className="w-[400px] h-[250px] object-cover rounded-xl"
        />
        <div className="pb-4 px-2">
          <h2 className="text-xl font-bold text-green-400 capitalize truncate">
            {datos.title}
          </h2>
          <p className="line-clamp-2">{datos.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
