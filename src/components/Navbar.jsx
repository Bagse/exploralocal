import React, { useState } from "react";
import { SiAzuredataexplorer } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="px-3 md:px-36 py-5">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl font-bold text-green-500 flex items-center">
            Explora<span className="text-white pr-2">Local</span>
            <SiAzuredataexplorer />
          </h1>
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "fixed inset-0 bg-black bg-opacity-50 z-50" : "hidden"
          } md:relative md:flex md:items-center w-full md:w-auto`}
        >
          <ul className="md:flex-row md:text-lg items-center flex flex-col gap-10 place-content-center bg-[#181719] h-screen text-xl md:h-0 uppercase font-poppins">
            <li className="block hover:underline transition underline-offset-8">
              comer y comprar
            </li>
            <li className="block hover:underline transition underline-offset-8">
              turismo
            </li>
            <li className="block hover:underline transition underline-offset-8">
              apps móviles
            </li>
            <li className="block hover:underline transition underline-offset-8">
              contacto
            </li>
          </ul>
          <div className="absolute top-0 right-0 p-4">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white focus:outline-none md:hidden"
            >
              <FaTimes size={30} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
