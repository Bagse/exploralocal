import React, { useState } from "react";
import { SiAzuredataexplorer } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="px-3 lg:px-40 py-5 bg-gray-800">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl font-bold text-green-500 flex items-center">
            Explora<span className="text-white pr-2">Local</span>
            <SiAzuredataexplorer />
          </h1>
        </Link>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="border-none">
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "fixed inset-0 bg-black bg-opacity-50 z-50 outline-none" : "hidden"
          } lg:relative lg:flex md:items-center w-full lg:w-auto`}
        >
          <ul className="lg:flex-row lg:text-lg items-center flex flex-col gap-10 place-content-center bg-[#181719] h-screen text-xl lg:h-0 uppercase font-poppins">
            <NavLink to="/donde-comer-y-comprar">
              <li className="block hover:underline transition underline-offset-8">
              Restaurantes y más
              </li>
            </NavLink>

            <NavLink to="/turismo">
              <li className="block hover:underline transition underline-offset-8">
                turismo
              </li>
            </NavLink>

            <NavLink to="/apps-moviles">
              <li className="block hover:underline transition underline-offset-8">
                apps móviles
              </li>
            </NavLink>

            <NavLink to="/contacto">
              <li className="block hover:underline transition underline-offset-8">
                contacto
              </li>
            </NavLink>
          </ul>
          <div className="absolute top-0 right-0 p-4">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white outline-none lg:hidden border-none"
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
