import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header'
import About from './Component/About'
import Services from './Component/Services'
import Gallery from './Component/Gallery'
import FAQ from './Component/FAQ'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Intro from './Component/IntroPage'

function App() {
  return (
    <div className="App">
       <Header></Header>
          <Intro></Intro>
        <main id="main">
          <About></About>
          <Services></Services>
          <Gallery></Gallery>
          <FAQ></FAQ>
          <Contact></Contact>
          <Footer></Footer>
        </main>
    </div>
  );
}

export default App;
