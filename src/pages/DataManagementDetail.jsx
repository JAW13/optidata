// DataManagementDetail.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function DataManagementDetail() {
  const navigate = useNavigate();

  return (
    <div className="font-sans antialiased">
      {/* Encabezado */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/images/data-management-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-6 py-32 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">
            Centralización y Gestión de Datos
          </h1>
          <p className="text-2xl text-gray-200 mb-8">
            Organiza todos tus datos en un solo lugar, accesibles y estructurados
          </p>
          <button
            onClick={() => navigate('/#contacto')}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition duration-300"
          >
            Contáctanos
          </button>
        </div>
      </section>

      {/* Contenido Principal */}
      <div className="container mx-auto py-20 px-6">
        {/* Descripción */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Descripción</h2>
          <p className="text-lg text-gray-700 mb-4">
            Consolidamos tus datos dispersos en una plataforma única y segura, facilitando el acceso y la gestión de la información crítica de tu negocio.
          </p>
        </section>

        {/* Beneficios */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Beneficios</h2>
          <div className="flex flex-col md:flex-row md:space-x-8 items-center">
            {/* Beneficio 1 */}
            <div className="flex-1 mb-8 md:mb-0">
              <div className="flex flex-col items-center text-center">
                <img src="/icons/real-time.svg" alt="Decisiones en Tiempo Real" className="h-16 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Toma de Decisiones en Tiempo Real</h3>
                <p className="text-gray-700">
                  Accede a información actualizada para decisiones más acertadas.
                </p>
              </div>
            </div>
            {/* Beneficio 2 */}
            <div className="flex-1 mb-8 md:mb-0">
              <div className="flex flex-col items-center text-center">
                <img src="/icons/collaboration.svg" alt="Mejora en la Comunicación" className="h-16 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Mejora en la Comunicación Interna</h3>
                <p className="text-gray-700">
                  Facilita la colaboración entre equipos con datos centralizados.
                </p>
              </div>
            </div>
            {/* Beneficio 3 */}
            <div className="flex-1">
              <div className="flex flex-col items-center text-center">
                <img src="/icons/eliminate-silos.svg" alt="Eliminación de Silos" className="h-16 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Eliminación de Silos de Información</h3>
                <p className="text-gray-700">
                  Evita duplicidades y asegura la consistencia de los datos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metodología */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Nuestra Metodología</h2>
          <div className="space-y-12">
            {/* Fase 1 */}
            <div className="flex flex-col md:flex-row items-start md:items-center">
              {/* Número y Línea de Progreso */}
              <div className="flex items-center mb-6 md:mb-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold">
                  1
                </div>
                <div className="hidden md:block h-1 w-32 bg-blue-600 ml-4"></div>
              </div>
              {/* Contenido de la Fase */}
              <div className="md:ml-8">
                <h3 className="text-2xl font-semibold mb-2">Auditoría de Datos (1 semana)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Objetivo:</strong> Evaluar las fuentes y calidad de los datos actuales.
                </p>
                <h4 className="text-xl font-semibold mb-2">Actividades:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Inventario de sistemas y bases de datos existentes.</li>
                  <li>Análisis de calidad y consistencia de datos.</li>
                </ul>
              </div>
            </div>

            {/* Fase 2 */}
            <div className="flex flex-col md:flex-row items-start md:items-center">
              {/* Número y Línea de Progreso */}
              <div className="flex items-center mb-6 md:mb-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold">
                  2
                </div>
                <div className="hidden md:block h-1 w-32 bg-blue-600 ml-4"></div>
              </div>
              {/* Contenido de la Fase */}
              <div className="md:ml-8">
                <h3 className="text-2xl font-semibold mb-2">Diseño de Arquitectura de Datos (2 semanas)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Objetivo:</strong> Definir la estructura de la base de datos centralizada.
                </p>
                <h4 className="text-xl font-semibold mb-2">Actividades:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Selección de plataformas tecnológicas (SQL, NoSQL, cloud).</li>
                  <li>Diseño del esquema de la base de datos.</li>
                </ul>
              </div>
            </div>

            {/* Fase 3 */}
            <div className="flex flex-col md:flex-row items-start md:items-center">
              {/* Número y Línea de Progreso */}
              <div className="flex items-center mb-6 md:mb-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold">
                  3
                </div>
                <div className="hidden md:block h-1 w-32 bg-blue-600 ml-4"></div>
              </div>
              {/* Contenido de la Fase */}
              <div className="md:ml-8">
                <h3 className="text-2xl font-semibold mb-2">Migración de Datos (2 semanas)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Objetivo:</strong> Transferir datos a la nueva plataforma.
                </p>
                <h4 className="text-xl font-semibold mb-2">Actividades:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Procesos ETL (Extracción, Transformación y Carga).</li>
                  <li>Validación de integridad y calidad post-migración.</li>
                </ul>
              </div>
            </div>

            {/* Fase 4 */}
            <div className="flex flex-col md:flex-row items-start md:items-center">
              {/* Número y Línea de Progreso */}
              <div className="flex items-center mb-6 md:mb-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold">
                  4
                </div>
                <div className="hidden md:block h-1 w-32 bg-blue-600 ml-4"></div>
              </div>
              {/* Contenido de la Fase */}
              <div className="md:ml-8">
                <h3 className="text-2xl font-semibold mb-2">Integración de Sistemas (1 semana)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Objetivo:</strong> Conectar aplicaciones y sistemas al nuevo núcleo de datos.
                </p>
                <h4 className="text-xl font-semibold mb-2">Actividades:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Desarrollo de APIs y conectores.</li>
                  <li>Pruebas de integración.</li>
                </ul>
              </div>
            </div>

            {/* Fase 5 */}
            <div className="flex flex-col md:flex-row items-start md:items-center">
              {/* Número y Línea de Progreso */}
              <div className="flex items-center mb-6 md:mb-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold">
                  5
                </div>
                <div className="hidden md:block h-1 w-32 bg-blue-600 ml-4"></div>
              </div>
              {/* Contenido de la Fase */}
              <div className="md:ml-8">
                <h3 className="text-2xl font-semibold mb-2">Seguridad y Respaldo (1 semana)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Objetivo:</strong> Proteger y asegurar la disponibilidad de los datos.
                </p>
                <h4 className="text-xl font-semibold mb-2">Actividades:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Implementación de protocolos de seguridad y acceso.</li>
                  <li>Configuración de sistemas de respaldo y recuperación.</li>
                </ul>
              </div>
            </div>

            {/* Fase 6 */}
            <div className="flex flex-col md:flex-row items-start md:items-center">
              {/* Número y Línea de Progreso */}
              <div className="flex items-center mb-6 md:mb-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold">
                  6
                </div>
              </div>
              {/* Contenido de la Fase */}
              <div className="md:ml-8">
                <h3 className="text-2xl font-semibold mb-2">Capacitación y Soporte (1 semana)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Objetivo:</strong> Garantizar el uso efectivo de la plataforma.
                </p>
                <h4 className="text-xl font-semibold mb-2">Actividades:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Formación al equipo en gestión y acceso a DataCore.</li>
                  <li>Establecimiento de canales de soporte.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Total */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-semibold mb-4">Timeline Total: 8 semanas</h3>
        </div>

        {/* Botón para volver a la sección de Servicios */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/#servicios')}
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300"
          >
            Volver a Servicios
          </button>
        </div>
      </div>
    </div>
  );
}

export default DataManagementDetail;

