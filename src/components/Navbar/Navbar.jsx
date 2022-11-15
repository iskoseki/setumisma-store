import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link to="/">
            {" "}
            🎀<span className="ml-3 text-xl">SE TU MISMA</span>
          </Link>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:underline hover:decoration-4 hover:text-gray-900">
            <Link to="/">Menu</Link>
          </a>
          <a className="mr-5 hover:underline hover:decoration-4 hover:text-gray-900">
            <Link to="/tienda">Tienda</Link>
          </a>
          <a className="mr-5 hover:underline hover:decoration-4 hover:text-gray-900">
            Nosotrxs
          </a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          🛒 Carrito()
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
