import "./buttonseemore.css";

function ButtonSeeMore() {
  return (
    <button className="px-4 py-1 hover:scale-105 transition flex items-center font-semibold">
  <span>Ver más</span>
  <svg width="15" height="15" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round"></path>
</svg>
</button>
  );
}

export default ButtonSeeMore;
