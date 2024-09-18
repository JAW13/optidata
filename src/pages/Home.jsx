// Home.js
import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import ModelARI from '../components/ModelARI';
import Services from '../components/Services';
import SuccessCases from '../components/SuccessCases';
import HowWeWork from '../components/HowWeWork';
import Team from '../components/Team';
import Blog from '../components/Blog';
import CTASection from '../components/CTASection';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <ModelARI />
      <Services />
      <SuccessCases />
      <HowWeWork />
      <Team />
      <Blog />
      <CTASection />
      <Contact />
    </>
  );
}

export default Home;
