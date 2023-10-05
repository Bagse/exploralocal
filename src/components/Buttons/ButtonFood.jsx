import "./buttonfood.css"

function ButtonFood({linkweb}) {
  return (
    <a href={linkweb} target="_blank" rel="noopener noreferrer" className="fancy-button uppercase w-[240px] mt-3">
      Visitar página web
    </a>
  );
}

export default ButtonFood;
