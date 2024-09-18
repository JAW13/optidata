// Services.js
import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <section id="servicios" className="py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Nuestros Servicios</h2>
        <div className="flex flex-col md:flex-row justify-center items-start md:space-x-12">
          {/* Servicio 1: Automatización Inteligente de Procesos */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <img src="/icons/automation-icon.svg" alt="Automatización Inteligente de Procesos" className="mx-auto h-16" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Automatización Inteligente de Procesos</h3>
              <p className="text-gray-700 mb-4">
              Implementamos soluciones de automatización que eliminan tareas manuales y repetitivas, aumentando la productividad y reduciendo errores humanos.
              </p>
              <Link to="/automatizacion-inteligente" className="text-blue-600 hover:text-blue-800 font-semibold">
                Más Información &rarr;
              </Link>
            </div>
          </div>

          {/* Servicio 2: Centralización y Gestión de Datos */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <img src="/icons/data-management-icon.svg" alt="Centralización y Gestión de Datos" className="mx-auto h-16" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Centralización y Gestión de Datos</h3>
              <p className="text-gray-700 mb-4">
              Consolidamos tus datos dispersos en una plataforma única y segura, facilitando el acceso y la gestión de la información crítica de tu negocio.
              </p>
              <Link to="/gestion-datos" className="text-blue-600 hover:text-blue-800 font-semibold">
                Más Información &rarr;
              </Link>
            </div>
          </div>

          {/* Servicio 3: Análisis Avanzado y Business Intelligence */}
          <div className="md:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <img src="/icons/business-intelligence-icon.svg" alt="Análisis Avanzado y Business Intelligence" className="mx-auto h-16" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Análisis Avanzado y Business Intelligence</h3>
              <p className="text-gray-700 mb-4">
              Aplicamos herramientas de análisis avanzado y BI para interpretar tus datos, revelando tendencias y oportunidades que impulsan el crecimiento.
              </p>
              <Link to="/business-intelligence" className="text-blue-600 hover:text-blue-800 font-semibold">
                Más Información &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;


