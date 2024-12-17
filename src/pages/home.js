import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-regular-svg-icons';
import {  faCommentsDollar, faFileInvoiceDollar, faFileShield, faHeadset, faPiggyBank, faReceipt, faUserTie } from '@fortawesome/free-solid-svg-icons';
import "./home.css";

function Header() {
  return (
    <>
        <div className="bg-banner">
          <div className="overlay bg-black/60">
            <div className='container-home'>
              <h1 className="title-home cormorant-sc-semibold animate__animated animate__fadeInLeft">ASESORIA CONTABLE Y FISCAL.</h1>
              <h2 className="subtitle-home cormorant-sc-semibold animate__animated animate__fadeInLeft">Responsabilidad Puntualidad y confianza</h2>
              <p className="p-home animate__animated animate__fadeInLeft">
                Somos una firma especializada en ofrecer soluciones integrales a pequeñas y medianas empresas en Guatemala. Contamos con amplia experiencia en Auditoría, Servicios Contables, Impuestos Fiscales y Consultoría Financiera. Nuestro compromiso es ayudarte a optimizar tus procesos, garantizar el cumplimiento normativo y fortalecer la toma de decisiones estratégicas con un enfoque profesional, eficiente y personalizado.
              </p>
              <div className='btn1-container'>
                <a href='/Servicios'>
                  <button className='btn1 animate__animated animate__fadeInUpBig'> VER SERVICIOS</button>
                </a>
              </div>
            </div>
          </div>
        </div>
    <div className="section-mt bg-white px-4 pb-20 pt-4 ">
      <div className='container mx-auto container-mt-home'>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 section-mt">
          <div className="card-home relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10 animate__animated animate__fadeInUp">
              <div className="p-6 px-8 text-center">
                <FontAwesomeIcon icon={faCommentsDollar} size='2x' className='icon-serv'/>
                <h2 class="block antialiased tracking-normal cormorant-sc-bold text-xl font-semibold leading-snug text-blue-gray-900 mb-2 mt-3">Asesoria financiera y <br/>fiscal</h2>
                <p class="block antialiased font-inter text-base leading-relaxed font-normal text-blue-gray-600">Ofrecemos una oportuna asesoría podrá tener el control de sus finanzas, para una buena toma de decisiones y pueda alcanzar sus objetivos y crecimiento.</p>
                <a href='/Servicios/asesoria-financiera'>
                  <button className='btn-card-home font-inter'>Mas información</button>
                </a>
              </div>
          </div>
          <div className="card-home relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10 animate__animated animate__fadeInUp">
            <div className="p-6 px-8 text-center">
              <FontAwesomeIcon icon={faReceipt} size='2x' className='icon-serv'/>
              <h2 class="block antialiased tracking-normal cormorant-sc-bold text-xl font-semibold leading-snug text-blue-gray-900 mb-2 mt-3">Tramites</h2>
              <p class="block antialiased font-inter text-base leading-relaxed font-normal text-blue-gray-600">Con nuestro servicio de trámites simplificamos tus gestiones administrativas. Te ayudamos a cumplir con tus obligaciones legales y regulatorias de manera eficiente, ahorrándote tiempo y esfuerzos.</p>
              <a href='/Servicios/Tramites'>
                  <button className='btn-card-home font-inter'>Mas información</button>
              </a>
            </div>
          </div>
          <div className="card-home relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10 animate__animated animate__fadeInUp">
            <div className="p-6 px-8 text-center">
              <FontAwesomeIcon icon={faFileInvoiceDollar} size='2x' className='icon-serv'/>
              <h2 class="block antialiased tracking-normal cormorant-sc-bold text-xl font-semibold leading-snug text-blue-gray-900 mb-2 mt-3">Servicios Contables</h2>
              <p class="block antialiased font-inter text-base leading-relaxed font-normal text-blue-gray-600">Con nuestro servicio contable tendrá la confianza del manejo de su contabilidad, con información oportuna y pago de impuestos de manera correcta, con buenas estrategias fiscales que representes a la empresa ahorro de dinero.</p>
              <a href='/Servicios/servicios-contables'>
                  <button className='btn-card-home'>Mas información</button>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-32 flex flex-wrap items-center">
          <div class="container">
            <div>
              <h2 class="block antialiased tracking-normal font-sans text-3xl leading-tight mb-8 text-center">Porque elegirnos:</h2>
            </div>
            <div className='separator mb-8'></div>
            <div class="benefit-list">
              <div class="benefit-card">
                <FontAwesomeIcon icon={faFileShield} size='2x' className='valor-icon'/>
                <h3 className='b-title'>Cumplimiento Normativo Garantizado</h3>
                <p className='font-inter'>Siempre estarás al día con las leyes fiscales y contables, eliminando riesgos legales.</p>
              </div>
              <div class="benefit-card">
                <FontAwesomeIcon icon={faPiggyBank} size='2x' className='valor-icon'/>
                <h3 className='b-title' >Optimización de Recursos</h3>
                <p className='font-inter'>Aumenta tus ingresos y reduce costos con nuestras estrategias fiscales inteligentes.</p>
              </div>
              <div class="benefit-card">
                <FontAwesomeIcon icon={faHeadset} size='2x' className='valor-icon'/>
                <h3 className='b-title'>Atención Rápida y Eficiente</h3>
                <p className='font-inter'>Resolvemos tus dudas de manera ágil y ofrecemos soporte constante.</p>
              </div>
              <div class="benefit-card">
                <FontAwesomeIcon icon={faUserTie} size='2x' className='valor-icon'/>
                <h3 className='b-title'>Asesoría Integral</h3>
                <p className='font-inter'>Contabilidad, impuestos, auditoría y planeación financiera en un solo lugar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Header;
