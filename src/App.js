// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
import Home from './pages/Home';
import AutomationDetail from './pages/AutomationDetail';
import DataManagementDetail from './pages/DataManagementDetail'; // Importa el nuevo componente
import BusinessIntelligenceDetail from './pages/BusinessIntelligenceDetail'; // Importa el nuevo componente

function App() {
  return (
    <div className="font-sans antialiased">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/automatizacion-inteligente" element={<AutomationDetail />} />
        <Route path="/gestion-datos" element={<DataManagementDetail />} />
        <Route path="/business-intelligence" element={<BusinessIntelligenceDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


