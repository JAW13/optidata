// Team.js
import React from 'react';

function Team() {
  const teamMembers = [
    {
      name: 'Juan Pérez',
      role: 'CEO y Fundador',
      image: '/images/team/juan-perez.jpg',
      bio: 'Con más de 15 años de experiencia en la industria, Juan lidera la visión estratégica de la empresa, impulsando la innovación y la excelencia en cada proyecto.',
    },
    {
      name: 'María Gómez',
      role: 'Directora de Tecnología',
      image: '/images/team/maria-gomez.jpg',
      bio: 'Especialista en sistemas de automatización y arquitectura de software, María es responsable de dirigir nuestros equipos técnicos hacia soluciones de alto impacto.',
    },

    // Agrega más miembros según sea necesario
  ];

  return (
    <section id="equipo" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestro Equipo</h2>
        <p className="text-xl text-center mb-12">
          Conoce a los profesionales detrás de nuestras soluciones innovadoras. Nuestro equipo está compuesto por expertos apasionados en automatización, análisis de datos y gestión de procesos.
        </p>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src={member.image} alt={member.name} className="rounded-t-lg h-64 w-full object-cover"/>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
