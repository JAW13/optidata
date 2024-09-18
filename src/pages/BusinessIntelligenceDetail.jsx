// BusinessIntelligenceDetail.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function BusinessIntelligenceDetail() {
  const navigate = useNavigate();

  return (
    <div className="font-sans antialiased">
      {/* Encabezado */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/images/business-intelligence-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-6 py-32 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">
            Análisis Avanzado y Business Intelligence
          </h1>
          <p className="text-2xl text-gray-200 mb-8">
            Convierte tus datos en insights claros para mejorar tus decisiones
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
            Aplicamos herramientas de análisis avanzado y BI para interpretar tus datos, revelando tendencias y oportunidades que impulsan el crecimiento.
          </p>
        </section>

        {/* Beneficios */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Beneficios</h2>
          <div className="flex flex-col md:flex-row md:space-x-8 items-center">
            {/* Beneficio 1 */}
            <div className="flex-1 mb-8 md:mb-0">
              <div className="flex flex-col items-center text-center">
                <img src="/icons/business-opportunities.svg" alt="Oportunidades de Negocio" className="h-16 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Identificación de Oportunidades</h3>
                <p className="text-gray-700">
                  Descubre nuevas áreas para el crecimiento y la expansión.
                </p>
              </div>
            </div>
            {/* Beneficio 2 */}
            <div className="flex-1 mb-8 md:mb-0">
              <div className="flex flex-col items-center text-center">
                <img src="/icons/market-trends.svg" alt="Anticipación al Mercado" className="h-16 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Anticipación a Cambios del Mercado</h3>
                <p className="text-gray-700">
                  Prepárate para las tendencias futuras y mantente por delante de la competencia.
                </p>
              </div>
            </div>
            {/* Beneficio 3 */}
            <div className="flex-1">
              <div className="flex flex-col items-center text-center">
                <img src="/icons/strategy-optimization.svg" alt="Optimización de Estrategias" className="h-16 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Optimización de Estrategias</h3>
                <p className="text-gray-700">
                  Toma decisiones basadas en datos reales y mejora tus resultados.
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
                <h3 className="text-2xl font-semibold mb-2">Definición de KPIs y Objetivos (1 semana)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Objetivo:</strong> Establecer métricas clave y objetivos de análisis.
                </p>
                <h4 className="text-xl font-semibold mb-2">Actividades:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Talleres con stakeholders para identificar necesidades.</li>
                  <li>Documentación de KPIs relevantes.</li>
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
                <h3 className="text-2xl font-semibold mb-2">Desarrollo de Modelos Analíticos (2 semanas)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Objetivo:</strong> Crear modelos para el análisis de datos.
                </p>
                <h4 className="text-xl font-semibold mb-2">Actividades:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Selección de herramientas analíticas (Power BI, Tableau).</li>
                  <li>Construcción de modelos predictivos y descriptivos.</li>
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
                <h3 className="text-2xl font-semibold mb-2">Diseño de Dashboards e Informes (2 semanas)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Objetivo:</strong> Visualizar datos de manera efectiva.
                </p>
                <h4 className="text-xl font-semibold mb-2">Actividades:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Creación de dashboards interactivos.</li>
                  <li>Configuración de informes automatizados.</li>
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
                <h3 className="text-2xl font-semibold mb-2">Implementación y Validación (1 semana)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Objetivo:</strong> Integrar las soluciones y asegurar su eficacia.
                </p>
                <h4 className="text-xl font-semibold mb-2">Actividades:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Conexión con DataCore para obtener datos en tiempo real.</li>
                  <li>Pruebas de funcionalidad y ajustes finales.</li>
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
                <h3 className="text-2xl font-semibold mb-2">Capacitación en Análisis de Datos (1 semana)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Objetivo:</strong> Empoderar al equipo en el uso de InsightIQ.
                </p>
                <h4 className="text-xl font-semibold mb-2">Actividades:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Sesiones de formación en interpretación de datos.</li>
                  <li>Talleres prácticos de toma de decisiones basadas en datos.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Total */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-semibold mb-4">Timeline Total: 7 semanas</h3>
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

export default BusinessIntelligenceDetail;

