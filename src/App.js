// App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ModelARI from './components/ModelARI';
import Services from './components/Services';
import SuccessCases from './components/SuccessCases';
import Team from './components/Team'; // Nuevo componente
import Blog from './components/Blog'; // Nuevo componente
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased">
      <Header />
      <Hero />
      <AboutUs />
      <ModelARI />
      <Services />
      <SuccessCases />
      <Team /> 
      <Blog /> 
      <CTASection />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;

