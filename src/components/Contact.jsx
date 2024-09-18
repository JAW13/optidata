// Contact.js
import React from 'react';

function Contact() {
  return (
    <section id="contacto" className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Ponte en Contacto</h2>
        <p className="text-xl text-center mb-12">Estamos aquí para ayudarte a transformar tu empresa.</p>
        <div className="flex flex-col md:flex-row justify-center">
          {/* Formulario de Contacto */}
          <div className="md:w-1/2 md:mr-8">
            <form className="bg-white p-8 rounded-lg shadow-md">
              {/* Nombre */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Ingresa tu nombre"
                  className="w-full p-4 border rounded focus:outline-none focus:border-blue-600"
                  required
                />
              </div>
              {/* Email */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Ingresa tu email"
                  className="w-full p-4 border rounded focus:outline-none focus:border-blue-600"
                  required
                />
              </div>
              {/* Presupuesto */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="presupuesto">
                  ¿Cuál es el presupuesto para tu proyecto?
                </label>
                <select
                  id="presupuesto"
                  className="w-full p-4 border rounded focus:outline-none focus:border-blue-600"
                  required
                >
                  <option value="" disabled selected>
                    Selecciona un rango
                  </option>
                  <option value="menos-de-1m">Menos de $1.000.000 CLP</option>
                  <option value="1m-5m">$1.000.000 - $5.000.000 CLP</option>
                  <option value="5m-10m">$5.000.000 - $10.000.000 CLP</option>
                  <option value="10m-20m">$10.000.000 - $20.000.000 CLP</option>
                  <option value="mas-de-20m">Más de $20.000.000 CLP</option>
                </select>
              </div>
              {/* Cómo podemos ayudar */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="mensaje">
                  ¿Cómo te podemos ayudar?
                </label>
                <textarea
                  id="mensaje"
                  placeholder="Cuéntanos sobre tu proyecto o consulta"
                  rows="5"
                  className="w-full p-4 border rounded focus:outline-none focus:border-blue-600"
                  required
                ></textarea>
              </div>
              {/* Botón Enviar */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded hover:bg-blue-700 transition duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
          {/* Información de Contacto */}
          <div className="md:w-1/2 md:ml-8 mt-12 md:mt-0">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">Información de Contacto</h3>
              <p className="text-lg mb-2">
                <strong>Email:</strong> contacto@tuempresa.com
              </p>
              <p className="text-lg mb-2">
                <strong>Teléfono:</strong> +56 9 1234 5678
              </p>
              <p className="text-lg mb-4">
                <strong>Dirección:</strong> Calle de la Innovación 123, Santiago, Chile
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-6">
                {/* Iconos de redes sociales */}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
