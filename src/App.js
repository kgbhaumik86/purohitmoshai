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

function App() {
  return (
    <div className="App">
       <Header></Header>
        <section id="intro">
          <div className="intro-container" data-aos="zoom-in" data-aos-delay="100">
          <h1 className="mb-4 pb-0"><span>Purohitmoshai</span> <br/>Bangalore</h1>          
            <p className="mb-4 pb-0">Electronic City Phase 1, Kalibari</p>
            <a href="https://youtu.be/BrUZ34PIe1U" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
            <a href="#about" className="about-btn scrollto">About Kalibari</a>
          </div>
        </section>     
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
