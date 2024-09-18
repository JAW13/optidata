// HowWeWork.js
import React from 'react';

function HowWeWork() {
  const steps = [
    {
      number: 1,
      title: 'Análisis Personalizado de Tu Negocio',
      description:
        'Comenzamos sumergiéndonos en el corazón de tu empresa. Realizamos un diagnóstico detallado de tus procesos actuales, identificando áreas de mejora y oportunidades para la automatización y optimización.',
      points: [
        {
          title: 'Entrevistas y Observación',
          items: [
            'Nos reunimos con tu equipo para entender sus desafíos diarios.',
            'Observamos tus operaciones en acción para captar matices que los datos por sí solos no revelan.',
          ],
        },
      ],
    },
    {
      number: 2,
      title: 'Diseño de Soluciones a Medida',
      description:
        'No creemos en soluciones genéricas. Diseñamos estrategias y herramientas que se adaptan específicamente a tus necesidades y objetivos empresariales.',
      points: [
        {
          title: 'Prototipado Rápido',
          items: [
            'Creamos modelos iniciales de las soluciones para validar su efectividad.',
          ],
        },
        {
          title: 'Feedback Iterativo',
          items: [
            'Trabajamos contigo para refinar las propuestas hasta que encajen perfectamente con tu visión.',
          ],
        },
      ],
    },
    {
      number: 3,
      title: 'Implementación Eficiente y Transparente',
      description:
        'Llevamos las soluciones del papel a la realidad de manera eficiente, asegurándonos de que la transición sea suave y sin interrupciones en tus operaciones.',
      points: [
        {
          title: 'Planificación Detallada',
          items: [
            'Establecemos un cronograma claro con hitos definidos.',
          ],
        },
        {
          title: 'Capacitación al Personal',
          items: [
            'Formamos a tu equipo para que saque el máximo provecho de las nuevas herramientas y procesos.',
          ],
        },
      ],
    },
    {
      number: 4,
      title: 'Capacitación y Transferencia de Conocimiento',
      description:
        'Creemos que siempre hay espacio para mejorar. Después de la implementación, seguimos monitoreando el rendimiento y buscamos oportunidades para optimizar aún más tus procesos.',
      points: [
        {
          title: 'Formación Práctica al Equipo',
          items: [
            'Aseguramos la adopción efectiva de las nuevas soluciones.',
          ],
        },
        {
          title: 'Entrega de Manuales y Documentación',
          items: [
            'Proporcionamos documentación detallada para referencia futura.',
          ],
        },
      ],
    },
    {
      number: 5,
      title: 'Soporte y Acompañamiento Constante',
      description:
        'Tu éxito es nuestro éxito. Ofrecemos soporte continuo y estamos siempre disponibles para resolver cualquier duda o desafío que surja en el camino.',
      points: [
        {
          title: 'Canales de Comunicación Abiertos',
          items: [
            'Puedes contactarnos cuando lo necesites, sin burocracias ni demoras.',
          ],
        },
        {
          title: 'Actualizaciones y Nuevas Funcionalidades',
          items: [
            'Te mantenemos al día con las últimas innovaciones que puedan beneficiar a tu negocio.',
          ],
        },
        {
          title: 'Ajustes Proactivos',
          items: [
            'Realizamos mejoras continuas basadas en datos y feedback, asegurando que las soluciones sigan siendo efectivas a largo plazo.',
          ],
        },
      ],
    },
  ];

  return (
    <section id="como-trabajamos" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Cómo Trabajamos</h2>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start md:items-center">
              {/* Número y Línea de Progreso */}
              <div className="flex items-center mb-6 md:mb-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold">
                  {step.number}
                </div>
                {index < steps.length  && (
                  <div className="hidden md:block h-1 w-32 bg-blue-600 ml-4"></div>
                )}
              </div>
              {/* Contenido del Paso */}
              <div className="md:ml-8">
                <h3 className="text-3xl font-semibold mb-4">{step.title}</h3>
                <p className="text-lg text-gray-700 mb-4">{step.description}</p>
                {step.points.map((point, idx) => (
                  <div key={idx} className="mb-4">
                    <h4 className="text-xl font-semibold mb-2">{point.title}:</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {point.items.map((item, idy) => (
                        <li key={idy}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
