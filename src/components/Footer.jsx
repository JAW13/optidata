// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">© 2023 TuEmpresa. Todos los derechos reservados.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">Política de Privacidad</a>
          <a href="#" className="hover:text-white">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
