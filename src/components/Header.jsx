// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logotipoImg from '../assets/logotipo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo y Nombre de la Empresa */}
        <div className="flex items-center">
          <img src={logotipoImg} alt="" className="h-8 mr-2" />
          <Link to="/" className="text-2xl font-bold text-black">
            Optidata
          </Link>
        </div>

        {/* Botón del menú móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-600 focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menú de navegación */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-white md:bg-transparent md:static md:flex`}
        >
          <ul className="md:flex md:space-x-6 text-lg items-center md:ml-auto">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/#servicios"
                className="block py-2 px-4 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Servicios
              </Link>
            </li>

            <li>
              <Link
                to="/#como-trabajamos"
                className="block py-2 px-4 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Como Trabajamos
              </Link>
            </li>
            <li>
              <Link
                to="/#casos-exito"
                className="block py-2 px-4 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Casos de Éxito
              </Link>
            </li>
            <li>
              <Link
                to="/#equipo"
                className="block py-2 px-4 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Equipo
              </Link>
            </li>
            <li>
              <Link
                to="/#blog"
                className="block py-2 px-4 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/#contacto"
                className="block py-2 px-4 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
