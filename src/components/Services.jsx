// Services.js
import React from 'react';
import automatizaImg from '../assets/automatiza.png';

function Services() {
  return (
    <section id="servicios" className="py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Nuestros Servicios</h2>
        <div className="flex flex-col md:flex-row justify-center items-start md:space-x-12">
          {/* Servicio 1 */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <img src={automatizaImg} alt="Consultoría en Automatización" className="mx-auto h-16"/>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Automatización Inteligente de Procesos</h3>
              <p className="text-gray-700 mb-4">
              Implementamos soluciones de automatización que eliminan tareas manuales y repetitivas, aumentando la productividad y reduciendo errores humanos.
              </p>
              <a href="#contacto" className="text-blue-600 hover:text-blue-800 font-semibold">
                Más Información &rarr;
              </a>
            </div>
          </div>
          {/* Servicio 2 */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <img src="/icons/integration-icon.svg" alt="Integración de Sistemas" className="mx-auto h-16"/>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Centralización y Gestión de Datos</h3>
              <p className="text-gray-700 mb-4">
              Consolidamos tus datos dispersos en una plataforma única y segura, facilitando el acceso y la gestión de la información crítica de tu negocio
              </p>
              <a href="#contacto" className="text-blue-600 hover:text-blue-800 font-semibold">
                Más Información &rarr;
              </a>
            </div>
          </div>
          {/* Servicio 3 */}
          <div className="md:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <img src="/icons/data-analysis-icon.svg" alt="Análisis de Datos" className="mx-auto h-16"/>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Análisis Avanzado y Business Intelligence</h3>
              <p className="text-gray-700 mb-4">
              Aplicamos herramientas de análisis avanzado y BI para interpretar tus datos, revelando tendencias y oportunidades que impulsan el crecimiento.
              </p>
              <a href="#contacto" className="text-blue-600 hover:text-blue-800 font-semibold">
                Más Información &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
