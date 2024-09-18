// Header.js
import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo y Nombre de la Empresa */}
        <div className="flex items-center">
          <img src="/images/logo.png" alt="" className="h-8 mr-2" />
          <a href="#inicio" className="text-2xl font-bold text-blue-600">
            Optidata
          </a>
        </div>

        {/* Botón del menú móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-600 focus:outline-none"
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
              <a href="#inicio" className="block py-2 px-4 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#modelo-ari" className="block py-2 px-4 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
                Modelo ARI
              </a>
            </li>
            <li>
              <a href="#servicios" className="block py-2 px-4 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
                Servicios
              </a>
            </li>
            <li>
              <a href="#casos-exito" className="block py-2 px-4 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
                Casos de Éxito
              </a>
            </li>
            <li>
              <a href="#equipo" className="block py-2 px-4 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
                Equipo
              </a>
            </li>
            <li>
              <a href="#blog" className="block py-2 px-4 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="block py-2 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 text-center md:inline-block" onClick={() => setMenuOpen(false)}
              >
                Conversemos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;


