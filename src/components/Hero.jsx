// Hero.js
import React from 'react';
import sobreNosotrosImg from '../assets/hero.png';


function Hero() {
  return (
    <section id="inicio" className="relative bg-cover bg-center" style={{ backgroundImage: `url(${sobreNosotrosImg})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 py-32 relative z-10">
        <h1 className="text-5xl font-bold text-white mb-4">
          Revoluciona tus procesos internos y lleva tu empresa al siguiente nivel
        </h1>
        <p className="text-2xl text-gray-200 mb-8">
          Especialistas en automatización y optimización para maximizar el rendimiento de tu organización
        </p>
        <a href="#contacto" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700">
          Solicita tu Asesoría Gratuita
        </a>
      </div>
    </section>
  );
}

export default Hero;
