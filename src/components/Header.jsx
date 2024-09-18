// Header.js
import React from 'react';

function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-blue-600">
          {/* Logo de la empresa */}
          <a href="#inicio">Optidata</a>
        </div>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li><a href="#inicio" className="hover:text-blue-600">Inicio</a></li>
            <li><a href="#modelo-ari" className="hover:text-blue-600">Modelo ARI</a></li>
            <li><a href="#servicios" className="hover:text-blue-600">Servicios</a></li>
            <li><a href="#casos-exito" className="hover:text-blue-600">Casos de Éxito</a></li>
            <li><a href="#equipo" className="hover:text-blue-600">Equipo</a></li>
            <li><a href="#blog" className="hover:text-blue-600">Blog</a></li>
            <li><a href="#contacto" className="hover:text-blue-600">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
