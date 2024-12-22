import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faHandshake } from "@fortawesome/free-regular-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import "./Nosotros.css";

function Nosotros() {
  return (
    <>
      <div className="bg-banner mb-12">
        <div class="overlay bg-black/60">
          <div class="container">
            <h1 className="cormorant-sc-bold text-3xl text-white mt-8 font-black animate__animated animate__fadeInDown">
              NOSOTROS
            </h1>
          </div>
        </div>
      </div>
      <div class="about-two no-bg section-spacing">
        <div className="container mx-auto ">
          <h2 className="block antialiased tracking-normal cormorant-sc-bold text-3xl leading-tight mb-8 font-black text-center">
            Sobre Nosotros
          </h2>
          <div className="separator mb-8"></div>
          <div className="p-about">
            <p>
              En <strong>SaMultiservicios</strong>, somos un equipo
              multidisciplinario de profesionales altamente capacitados,
              comprometidos con la excelencia, la transparencia y la innovación.
              Desde nuestros inicios, hemos trabajado con la misión de ayudar a
              empresas y organizaciones a alcanzar sus objetivos financieros y
              estratégicos mediante servicios personalizados y soluciones
              adaptadas a sus necesidades. Nos especializamos en auditoría
              financiera, consultoría estratégica y cumplimiento normativo,
              ofreciendo herramientas y conocimientos que inspiran confianza en
              la toma de decisiones. Con un enfoque centrado en la ética y el
              profesionalismo, garantizamos que nuestros clientes cumplan con
              los más altos estándares de calidad y regulaciones.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-banner section-spacing">
        <div className="overlay bg-black/60"></div>
      </div>
      <div className="container mx-auto">
        <div className="section-spacing">
          <div className="block antialiased tracking-normal cormorant-sc-bold text-3xl leading-tight mb-8 font-black text-center">
            <h2>Nuestra filosofia</h2>
          </div>
          <div className="separator mb-12"></div>
          <div class="container-valores">
            <div className="valor-item">
              <FontAwesomeIcon icon={faBolt} size="2x" className="valor-icon" />
              <div className="valor-title">Eficiencia</div>
              <div className="valor-text">
                Optimizamos procesos para garantizar resultados rápidos y
                precisos.
              </div>
            </div>
            <div className="valor-item">
              <FontAwesomeIcon
                icon={faLightbulb}
                size="2x"
                className="valor-icon"
              />
              <div className="valor-title">Innovación</div>
              <div className="valor-text">
                Impulsamos soluciones creativas y adaptadas para enfrentar
                desafíos contables y fiscales.
              </div>
            </div>
            <div className="valor-item">
              <FontAwesomeIcon
                icon={faHandshake}
                size="2x"
                className="valor-icon"
              />
              <div className="valor-title">Colaboración</div>
              <div className="valor-text">
                Construimos relaciones basadas en integridad, profesionalismo y
                compromiso.
              </div>
            </div>
          </div>
          <div className="v-m-container">
            <div className="vision">
              <div class="vision-title">
                <h3 className="cormorant-sc-bold">Visión</h3>
              </div>
              <p className="p-vision">
                Ser una firma de auditoría reconocida a nivel nacional e
                internacional por nuestra excelencia profesional, ética
                intachable y enfoque innovador en la prestación de servicios de
                auditoría, consultoría y cumplimiento normativo. Aspiramos a
                convertirnos en aliados estratégicos de nuestros clientes,
                impulsando la transparencia, la confianza y la sostenibilidad en
                los mercados donde operamos.
              </p>
            </div>
            <div className="mission">
              <div class="mission-title">
                <h3 className="cormorant-sc-bold">Misión</h3>
              </div>
              <p className="p-mission">
                Proporcionar servicios de auditoría, consultoría y cumplimiento
                normativo de la más alta calidad, ayudando a nuestros clientes a
                mejorar su transparencia financiera, fortalecer su desempeño
                organizacional y cumplir con las regulaciones aplicables.Nos
                dedicamos a identificar riesgos, garantizar la precisión en la
                información financiera y aportar soluciones estratégicas que
                impulsen la confianza y la sostenibilidad en el entorno
                empresarial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nosotros;
