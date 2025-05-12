import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Servicios from "./components/Services";
import SobreMi from "./components/AboutMe";
import Portafolio from "./components/Portfolio";
import Contacto from "./components/ContactForm";
import Gracias from "./components/Gracias";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <div id="servicios" ><Servicios style={{backgroundColor: '#f8f9fa'}} /></div>
              <div id="sobre-mi"><SobreMi /></div>
              <div id="portafolio"><Portafolio /></div>
              <div id="contacto"><Contacto /></div>
            </Layout>
          }
        />
        <Route path="/gracias" element={<Gracias />} />
      </Routes>
    </Router>
  );
}

export default App;
