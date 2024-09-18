// SuccessCases.js
import React from 'react';
import boletasImg from '../assets/boletas.png';
import chatbotImg from '../assets/chatbot.png';

function SuccessCases() {
  return (
    <section id="casos-exito" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Casos de Éxito</h2>
        {/* Caso 1 */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2">
            <img src={boletasImg} alt="Lector de Boletas Inteligente" className="rounded-lg shadow-lg"/>
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h3 className="text-3xl font-semibold mb-4">Lector de Boletas Inteligente</h3>
            <p className="text-lg text-gray-700 mb-4">
              Implementamos un sistema que automatiza la extracción de datos de boletas, logrando una reducción del <span className="font-bold">90%</span> en tiempo de rendición.
            </p>
            <p className="text-gray-600 italic">"Gracias a TuEmpresa, hemos optimizado enormemente nuestro proceso de rendición de gastos. El ahorro de tiempo es impresionante." - <span className="font-semibold">Cliente Satisfecho</span></p>
          </div>
        </div>
        {/* Caso 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2">
            <img src={chatbotImg} alt="ChatBot con Conocimiento sobre el Negocio" className="rounded-lg shadow-lg"/>
          </div>
          <div className="md:w-1/2 md:pr-12 mt-8 md:mt-0">
            <h3 className="text-3xl font-semibold mb-4">ChatBot con Conocimiento sobre el Negocio</h3>
            <p className="text-lg text-gray-700 mb-4">
              Brindamos soporte 24/7 con respuestas complejas basadas en información de la empresa, mejorando significativamente la atención al cliente.
            </p>
            <p className="text-gray-600 italic">"El ChatBot desarrollado por TuEmpresa ha revolucionado nuestra atención al cliente, brindando respuestas precisas y oportunas en todo momento." - <span className="font-semibold">Cliente Satisfecho</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessCases;
