import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Header from "./pages/home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import AsesoriaFinanciera from "./pages/servicios/AsesoriaFinanciera";
import ServiciosContables from "./pages/servicios/ServiciosContables";
import AuditoriaEstados from "./pages/servicios/AuditoriaEstados";
import Tramites from "./pages/servicios/Tramites";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/asesoria-financiera" element={<AsesoriaFinanciera />} />
          <Route
            path="/Servicios/servicios-contables"
            element={<ServiciosContables />}
          />
          <Route
            path="/Servicios/auditoria-estados"
            element={<AuditoriaEstados />}
          />
          <Route path="/Servicios/Tramites" element={<Tramites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;
