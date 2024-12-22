import React from "react";
import asesoriaimg from "../asesoria.webp";
import contableimg from "../contable.webp";
import financieroimg from "../financiero.webp";
import tramitesimg from "../tramites.webp";
import aduanaimg from "../aduana.webp";
import logo2 from "../logo-2.png";
import "./Servicios.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentsDollar,
  faLandmark,
  faReceipt,
  faShip,
} from "@fortawesome/free-solid-svg-icons";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons/faFileInvoiceDollar";

function Servicios() {
  return (
    <>
      <div className="bg-banner section-spacing">
        <div class="overlay bg-black/60">
          <div class="container">
            <h1 className="block antialiased tracking-normal cormorant-sc-bold text-3xl leading-tight text-white mt-8 font-black animate__animated animate__fadeInDown">
              SERVICIOS
            </h1>
          </div>
        </div>
      </div>
      <div class="section-spacing ">
        <div class="container mx-auto">
          <div className="mb-8 -mt-8 block antialiased tracking-normal cormorant-sc-bold text-3xl leading-tight font-black text-center">
            <h2>Servicios que Ofrecemos</h2>
          </div>
          <div className="separator mb-12"></div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10">
              <div className="p-6 px-8 text-center">
                <FontAwesomeIcon
                  icon={faCommentsDollar}
                  size="2x"
                  className="icon-serv"
                />
                <h3 class="block antialiased tracking-normal cormorant-sc-bold text-xl font-semibold mb-3 mt-3">
                  Asesoria financiera y fiscal
                </h3>
                <div className="img-serv mb-3">
                  <img
                    src={asesoriaimg}
                    alt="Asesoria financiera y fiscal"
                    className="border-rad img-serv"
                  />
                </div>
                <p class="block antialiased font-inter text-base leading-relaxed font-normal text-blue-gray-600 mb-3">
                  Ofrecemos una oportuna asesoría podrá tener el control de sus
                  finanzas, para una buena toma de decisiones y pueda alcanzar
                  sus objetivos y crecimiento.
                </p>
                <a href="/Asesoria-financiera">
                  <button className="btn-serv">Más información</button>
                </a>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10">
              <div className="p-6 px-8 text-center">
                <FontAwesomeIcon
                  icon={faFileInvoiceDollar}
                  size="2x"
                  className="icon-serv"
                />
                <h3 class="block antialiased tracking-normal cormorant-sc-bold text-xl font-semibold leading-snug  mb-3 mt-3">
                  Servicios Contables
                </h3>
                <div className="img-serv mb-3">
                  <img
                    src={contableimg}
                    alt="Servicios contables"
                    className="border-rad img-serv"
                  />
                </div>
                <p class="block antialiased font-inter text-base leading-relaxed font-normal text-blue-gray-600 mb-3">
                  Con nuestro servicio contable tendrá la confianza del manejo
                  de su contabilidad, con información oportuna y pago de
                  impuestos de manera correcta, con buenas estrategias fiscales
                  que representes a la empresa ahorro de dinero.
                </p>
                <a href="/servicios-contables">
                  <button className="btn-serv">Más información</button>
                </a>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10">
              <div className="p-6 px-8 text-center">
                <FontAwesomeIcon
                  icon={faLandmark}
                  size="2x"
                  className="icon-serv"
                />
                <h3 class="block antialiased tracking-normal cormorant-sc-bold text-xl font-semibold leading-snug mb-3 mt-3">
                  Auditoría de estados financieros
                </h3>
                <div className="img-serv mb-3">
                  <img
                    src={financieroimg}
                    alt="Estados financieros"
                    className="border-rad img-serv"
                  />
                </div>
                <p class="block antialiased font-inter text-base leading-relaxed font-normal text-blue-gray-600 mb-3">
                  Brindamos un análisis exhaustivo y confiable de tus estados
                  financieros, asegurando que reflejen fielmente la situación
                  económica de tu empresa. Nuestra auditoría ayuda a la toma de
                  decisiones estratégicas.
                </p>
                <a href="/auditoria-estados">
                  <button className="btn-serv">Más información</button>
                </a>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10">
              <div className="p-6 px-8 text-center">
                <FontAwesomeIcon
                  icon={faReceipt}
                  size="2x"
                  className="icon-serv"
                />
                <h3 class="block antialiased tracking-normal cormorant-sc-bold text-xl font-semibold leading-snug mb-3 mt-3">
                  Tramites
                </h3>
                <div className="img-serv mb-3">
                  <img
                    src={tramitesimg}
                    alt="Tramites"
                    className="border-rad img-serv"
                  />
                </div>
                <p class="block antialiased font-inter text-base leading-relaxed font-normal text-blue-gray-600 mb-3">
                  Con nuestro servicio de trámites simplificamos tus gestiones
                  administrativas. Te ayudamos a cumplir con tus obligaciones
                  legales y regulatorias de manera eficiente, ahorrándote tiempo
                  y esfuerzos.
                </p>
                <a href="/Tramites">
                  <button className="btn-serv">Más información</button>
                </a>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10">
              <div className="p-6 px-8 text-center">
                <FontAwesomeIcon
                  icon={faShip}
                  size="2x"
                  className="icon-serv"
                />
                <h3 class="block antialiased tracking-normal cormorant-sc-bold text-xl font-semibold leading-snug mb-3 mt-3">
                  Servicios aduaneros
                </h3>
                <div className="img-serv mb-3">
                  <img
                    src={aduanaimg}
                    alt="Servicios aduaneros"
                    className="border-rad img-serv"
                  />
                </div>
                <p class="block antialiased font-inter text-base leading-relaxed font-normal text-blue-gray-600 mb-3">
                  Ofrecemos apoyo especializado en procesos aduaneros para
                  garantizar que tus operaciones de importación y exportación
                  cumplan con las normativas legales. Aseguramos rapidez y
                  precisión en cada paso.
                </p>
                <button className="btn-serv">Más información</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-banner section-spacing mb-0">
        <div className="overlay bg-black/60">
          <div className="container mx-auto">
            <div className="bt-lg">
              <div className="text-cont">
                <h3 className="block antialiased tracking-normal cormorant-sc-bold text-3xl text-left leading-tight text-white font-black mt-3">
                  ¿Buscas asesoramiento integral y personalizado?
                </h3>
                <p className="text-white font-inter text-left mt-3 mb-8 text-xl">
                  Contáctanos. Somos la solución perfecta para tus necesidades.
                </p>
                <a className="mb-8" href="/Contacto">
                  <button className="btn-contact">
                    <p>CONTACTANOS AHORA</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
              <div className="logo-img">
                <img src={logo2} className="border-logo"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicios;
