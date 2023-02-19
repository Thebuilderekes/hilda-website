import React from 'react';
import './App.css';
import './index.css';
import Navigation from './components/Navigation/Navigation';
import Herosection from './components/HeroSection/Herosection';
import About from './components/About/About';
import GetInvolved from './components/GetInvolved/GetInvolved';
import Footer from './components/Footer/Footer';
import Bills from './components/Bills/Bills';
function App() {
  return (
    <div className="flex flex-col">
      <Navigation />
      <Herosection />
      <About />
      <Bills />
      <GetInvolved />
      <Footer />
    </div>
  );
}

export default App;
