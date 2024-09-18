// Blog.js
import React from 'react';

function Blog() {
  const blogPosts = [
    {
      title: '5 Claves para Automatizar tus Procesos Empresariales',
      image: '/images/blog/automatizacion-procesos.jpg',
      summary: 'Descubre cómo la automatización puede transformar la eficiencia de tu empresa y las mejores prácticas para implementarla con éxito.',
      date: '10 de Octubre de 2023',
      link: '/blog/5-claves-automatizar-procesos',
    },
    {
      title: 'El Impacto del Análisis de Datos en la Toma de Decisiones',
      image: '/images/blog/analisis-datos.jpg',
      summary: 'Exploramos cómo el análisis de datos permite a las empresas tomar decisiones informadas y estratégicas para el crecimiento sostenible.',
      date: '5 de Octubre de 2023',
      link: '/blog/impacto-analisis-datos',
    },
    // Agrega más entradas según sea necesario
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Blog</h2>
        <p className="text-xl text-center mb-12">
          Mantente al día con las últimas tendencias y noticias en automatización de procesos. Descubre consejos, análisis y casos de éxito que te ayudarán a impulsar tu negocio.
        </p>
        <div className="flex flex-wrap -mx-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src={post.image} alt={post.title} className="rounded-t-lg h-48 w-full object-cover"/>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <p className="text-gray-700 mb-4">{post.summary}</p>
                  <a href={post.link} className="text-blue-600 hover:text-blue-800 font-semibold">
                    Leer Más &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
