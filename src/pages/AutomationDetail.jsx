// AutomationDetail.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function AutomationDetail() {
  const navigate = useNavigate();

  return (
    <div className="font-sans antialiased">
      {/* Encabezado */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/images/automation-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-6 py-32 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">
            Automatización Inteligente de Procesos
          </h1>
          <p className="text-2xl text-gray-200 mb-8">
            Haz que las tareas repetitivas se realicen solas
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
            Implementamos soluciones de automatización que eliminan tareas manuales y repetitivas, aumentando la productividad y reduciendo errores humanos.
          </p>
        </section>

        {/* Beneficios */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Beneficios</h2>
          <div className="flex flex-col md:flex-row md:space-x-8 items-center">
            {/* Beneficio 1 */}
            <div className="flex-1 mb-8 md:mb-0">
              <div className="flex flex-col items-center text-center">
                <img src="/icons/time-saving.svg" alt="Ahorro de Tiempo" className="h-16 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Ahorro de Tiempo y Recursos</h3>
                <p className="text-gray-700">
                  Reduce significativamente el tiempo dedicado a tareas repetitivas.
                </p>
              </div>
            </div>
            {/* Beneficio 2 */}
            <div className="flex-1 mb-8 md:mb-0">
              <div className="flex flex-col items-center text-center">
                <img src="/icons/strategic-focus.svg" alt="Enfoque Estratégico" className="h-16 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Enfoque en Actividades Estratégicas</h3>
                <p className="text-gray-700">
                  Permite a tu equipo centrarse en tareas que aportan mayor valor al negocio.
                </p>
              </div>
            </div>
            {/* Beneficio 3 */}
            <div className="flex-1">
              <div className="flex flex-col items-center text-center">
                <img src="/icons/precision.svg" alt="Precisión Operativa" className="h-16 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Precisión y Consistencia</h3>
                <p className="text-gray-700">
                  Mejora la exactitud de las operaciones y reduce errores humanos.
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
                <h3 className="text-2xl font-semibold mb-2">Análisis de Procesos (1 semana)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Objetivo:</strong> Identificar tareas repetitivas y procesos susceptibles de automatización.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Reuniones con equipos clave para comprender los flujos de trabajo actuales.</li>
                  <li>Mapeo de procesos existentes.</li>
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
                <h3 className="text-2xl font-semibold mb-2">Diseño de Soluciones (2 semanas)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Objetivo:</strong> Crear un plan detallado para la automatización.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Selección de herramientas y tecnologías adecuadas.</li>
                  <li>Desarrollo de diagramas de flujo y modelos de procesos.</li>
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
                <h3 className="text-2xl font-semibold mb-2">Desarrollo y Configuración (3 semanas)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Objetivo:</strong> Implementar las soluciones de automatización.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Programación de scripts y configuración de software.</li>
                  <li>Integración con sistemas existentes.</li>
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
                <h3 className="text-2xl font-semibold mb-2">Pruebas y Validación (1 semana)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Objetivo:</strong> Asegurar el correcto funcionamiento de las automatizaciones.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Pruebas piloto con usuarios clave.</li>
                  <li>Ajustes basados en feedback.</li>
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
              </div>
              {/* Contenido de la Fase */}
              <div className="md:ml-8">
                <h3 className="text-2xl font-semibold mb-2">Implementación y Capacitación (1 semana)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Objetivo:</strong> Desplegar las soluciones y capacitar al personal.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Implementación en el entorno de producción.</li>
                  <li>Sesiones de formación para el equipo.</li>
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

export default AutomationDetail;

