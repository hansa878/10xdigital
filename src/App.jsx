import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import BookCallButton from './components/BookCallButton';
import './output.css'
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Contact from './components/Contact';
import Clients from "./components/Clients";



function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Features />
      <CaseStudies />
      <Clients/>
      <About />
      <BookCallButton />
      <Contact/>
      <Footer />
    
      
    </div>
  );
}

export default App;
