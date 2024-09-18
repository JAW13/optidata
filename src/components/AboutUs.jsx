// AboutUs.js
import React from 'react';
import aboutUsImg from '../assets/AboutUs.png';

function AboutUs() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">¿Por que lo hacemos?</h2>
          <p className="text-lg text-gray-700">
            En el competitivo mundo empresarial actual, la eficiencia y la agilidad son clave para el éxito. Muchas organizaciones se enfrentan a procesos internos ineficientes que consumen tiempo y recursos valiosos. En <span className="font-semibold">Optidata</span>, nuestra pasión es transformar estas dificultades en oportunidades, optimizando tus procesos internos para que puedas enfocarte en lo que realmente importa: <span className="font-semibold">hacer crecer tu negocio.</span>
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
