// ModelARI.js
import React from 'react';
import automatizaImg from '../assets/automatiza.png';
import recopilaImg from '../assets/recopila.png';
import interpretaImg from '../assets/interpreta.png';

function ModelARI() {
  return (
    <section id="modelo-ari" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Nuestro Modelo ARI</h2>
        <div className="flex flex-col md:flex-row justify-center items-start md:space-x-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <img src={automatizaImg} alt="Automatiza" className="mx-auto h-16"/>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Automatiza</h3>
              <p className="text-gray-700">
                Implementamos sistemas que automatizan tareas repetitivas, liberando tiempo y recursos para lo que realmente importa.
              </p>
            </div>
          </div>
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <img src={recopilaImg} alt="Recopila" className="mx-auto h-16"/>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Recopila</h3>
              <p className="text-gray-700">
                Recogemos datos clave de tus procesos para ofrecer una visión completa y detallada de tu operación.
              </p>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">
                <img src={interpretaImg} alt="Interpreta" className="mx-auto h-16"/>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Interpreta</h3>
              <p className="text-gray-700">
                Analizamos la información recopilada para generar insights accionables que impulsan decisiones estratégicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModelARI;
