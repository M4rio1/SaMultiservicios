import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-regular-svg-icons';
import { faFileShield, faHeadset, faPiggyBank, faUserTie } from '@fortawesome/free-solid-svg-icons';
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
                  <button className='btn1 animate__animated animate__fadeInUpBig'> Ver Servicios</button>
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
                <i class="bi bi-graph-up-arrow"></i>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
                </svg>
                <h2 class="block antialiased tracking-normal cormorant-sc-bold text-xl font-semibold leading-snug text-blue-gray-900 mb-2 mt-3">Asesoria financiera y <br/>fiscal</h2>
                <p class="block antialiased font-inter text-base leading-relaxed font-normal text-blue-gray-600">Ofrecemos una oportuna asesoría podrá tener el control de sus finanzas, para una buena toma de decisiones y pueda alcanzar sus objetivos y crecimiento.</p>
                <a href='/Servicios/asesoria-financiera'>
                  <button className='btn-card-home font-inter'>Mas información</button>
                </a>
              </div>
          </div>
          <div className="card-home relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10 animate__animated animate__fadeInUp">
            <div className="p-6 px-8 text-center">
              <i class="bi bi-receipt"></i>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-receipt" viewBox="0 0 16 16">
              <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27m.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0z"/>
              <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"/>
              </svg>
              <h2 class="block antialiased tracking-normal cormorant-sc-bold text-xl font-semibold leading-snug text-blue-gray-900 mb-2 mt-3">Tramites</h2>
              <p class="block antialiased font-inter text-base leading-relaxed font-normal text-blue-gray-600">Con nuestro servicio de trámites simplificamos tus gestiones administrativas. Te ayudamos a cumplir con tus obligaciones legales y regulatorias de manera eficiente, ahorrándote tiempo y esfuerzos.</p>
              <a href='/Servicios/Tramites'>
                  <button className='btn-card-home font-inter'>Mas información</button>
              </a>
            </div>
          </div>
          <div className="card-home relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10 animate__animated animate__fadeInUp">
            <div className="p-6 px-8 text-center">
              <i class="bi bi-cash-coin"></i>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
              </svg>
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
