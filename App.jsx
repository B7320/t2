import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import PageSection from './components/PageSection';
import Intro from './components/Intro';
import Introcopy from './components/Introcopy';
import Cta from './components/cta';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <PageSection/>
      <Intro/>
      <Introcopy/>
      <Cta/>
      <Pricing/>
      <Footer/>
    
    </div>
  );
}

export default App;
