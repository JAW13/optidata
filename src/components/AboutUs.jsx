// AboutUs.js
import React from 'react';
import aboutUsImg from '../assets/AboutUs.png';

function AboutUs() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">¿Quiénes Somos?</h2>
          <p className="text-lg text-gray-700">
            En <span className="font-semibold">Optidata</span>, nos dedicamos a transformar las operaciones internas de las organizaciones. Nuestro equipo de expertos trabaja contigo para identificar oportunidades de mejora y aplicar soluciones de automatización que impulsan la eficiencia y el crecimiento.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <img src={aboutUsImg} alt="Sobre Nosotros" className="rounded-lg shadow-lg"/>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
