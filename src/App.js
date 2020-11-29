import React, { useEffect } from 'react';
// import logo from './logo.svg';
// import Portfolio from './components/Portfolio'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Description from './components/Description'
import HowToHelp from './components/HowToHelp'
import Goal from './components/Goal'
import Apply from './components/Apply'
import './App.css';

function App() {
  const portfolioLinks = [
    {
      title: 'Threads',
      caption: 'Illustration'
    },
    {
      title: 'Explore',
      caption: 'Graphic Design'
    }
  ]

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "js/scripts.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="App">
      <Navbar items={[
        {
          label: "¿Qué es?",
          href: "#description"
        },
        {
          label: "¿Cómo Ayudar?",
          href: "#help"
        },
        {
          label: "Meta",
          href: "#goal"
        },
        {
          label: "Postular",
          href: "#howto"
        },
        {
          label: "Contacto",
          href: "#contact"
        }
      ]} />

      <Header></Header>

      {/* Sections */}
      <Description></Description>

      <HowToHelp></HowToHelp>

      <Goal></Goal>

      <Apply></Apply>

      {/* Concact us */}
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contáctenos</h2>
              <p className="section-subheading " style={{ color: "white" }}>Email: beca.telecom@gmail.com</p>
              <p className="section-subheading " style={{ color: "white" }}>Facebook: <a href={"https://www.facebook.com/beca.telecom.pucp"} target="_blank">beca.telecom.pucp</a></p>
            </div>
          </div>
        </div>
      </section>


      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; Beca Telecom PUCP</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/beca.telecom.pucp">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;