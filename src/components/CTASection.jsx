// CTASection.js
import React from 'react';

function CTASection() {
  return (
    <section className="py-20 px-6 bg-blue-600 text-white text-center">
      <h2 className="text-4xl font-bold mb-4">¿Listo para optimizar y automatizar tus procesos?</h2>
      <p className="text-xl mb-8">Descubre cómo podemos llevar tu negocio al siguiente nivel.</p>
      <a href="#contacto" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg hover:bg-gray-100">
        Contáctanos Ahora
      </a>
    </section>
  );
}

export default CTASection;
