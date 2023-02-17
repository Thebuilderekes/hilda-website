import React from 'react';
import './App.css';
import './index.css';
import Navigation from './components/Navigation/Navigation';
import Herosection from './components/HeroSection/Herosection';
import About from './components/About/About';
import GetInvolved from './components/GetInvolved/GetInvolved';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="flex flex-col">
      <Navigation />
      <Herosection />
      <About />
      <GetInvolved />
      <Footer />
    </div>
  );
}

export default App;
