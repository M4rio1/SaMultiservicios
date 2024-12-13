import React from 'react';
import "./home.css";

function Header() {
  return (
    <>
        <div className="bg-banner">
          <div className="overlay bg-black/60">
            <div className='flex-container'>
              <div className="content-wrapper">
                  <div className="text-container">
                      <h1 className="block antialiased tracking-normal font-sans text-5xl leading-tight text-white mb-4 font-black animate__animated animate__fadeInLeft">ASESORIA CONTABLE Y FISCAL.</h1>
                      <h2 className="block antialiased tracking-normal font-sans text-3xl leading-tight text-white mb-8 font-black animate__animated animate__fadeInLeft">Responsabilidad Puntualidad y confianza</h2>
                      <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white opacity-90 mb-8 animate__animated animate__fadeInLeft">
                        Somos una firma especializada en ofrecer soluciones integrales a pequeñas y medianas empresas en Guatemala. Contamos con amplia experiencia en Auditoría, Servicios Contables, Impuestos Fiscales y Consultoría Financiera. Nuestro compromiso es ayudarte a optimizar tus procesos, garantizar el cumplimiento normativo y fortalecer la toma de decisiones estratégicas con un enfoque profesional, eficiente y personalizado.
                      </p>
                      <a href='/Servicios'>
                        <button className='btn1 animate__animated animate__fadeInUpBig'> Ver Servicios</button>
                      </a>  
                  </div>
                </div>
            </div>
          </div>
        </div>
    <div className="section-mt bg-white px-4 pb-20 pt-4 ">
      <div className='container mx-auto container-mt-home'>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="card-home relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10 animate__animated animate__fadeInUp">
              <div className="p-6 px-8 text-center">
                <i class="bi bi-graph-up-arrow"></i>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
                </svg>
                <h2 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 mt-3">Asesoria financiera y <br/>fiscal</h2>
                <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">Ofrecemos una oportuna asesoría podrá tener el control de sus finanzas, para una buena toma de decisiones y pueda alcanzar sus objetivos y crecimiento.</p>
                <a href='/Servicios/asesoria-financiera'>
                  <button className='btn-card-home'>Mas información</button>
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
              <h2 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 mt-3">Tramites</h2>
              <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">Con nuestro servicio de trámites simplificamos tus gestiones administrativas. Te ayudamos a cumplir con tus obligaciones legales y regulatorias de manera eficiente, ahorrándote tiempo y esfuerzos.</p>
              <a href='/Servicios/Tramites'>
                  <button className='btn-card-home'>Mas información</button>
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
              <h2 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 mt-3">Servicios Contables</h2>
              <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">Con nuestro servicio contable tendrá la confianza del manejo de su contabilidad, con información oportuna y pago de impuestos de manera correcta, con buenas estrategias fiscales que representes a la empresa ahorro de dinero.</p>
              <a href='/Servicios/servicios-contables'>
                  <button className='btn-card-home'>Mas información</button>
              </a>
            </div>
            
          </div>
        </div>
        <div className="mt-32 flex flex-wrap items-center">
          <div class="container">
            <div>
              <h2 class="block antialiased tracking-normal font-sans text-3xl leading-tight mb-8 font-black text-center">Nuestros Beneficios</h2>
            </div>
            <div className='separator mb-8'></div>
            <div class="benefit-list font-sans">
              <div class="benefit-card">
                <i class="bi bi-shield-fill-check"></i>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-shield-fill-check" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"/>
                </svg>
                <h3 className='b-title mt-3'>Cumplimiento Normativo Garantizado</h3>
                <p>Siempre estarás al día con las leyes fiscales y contables, eliminando riesgos legales.</p>
              </div>
              <div class="benefit-card">
                <i class="bi bi-graph-up-arrow"></i>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
                </svg>
                <h3 className='b-title mt-3' >Optimización de Recursos</h3>
                <p>Aumenta tus ingresos y reduce costos con nuestras estrategias fiscales inteligentes.</p>
              </div>
              <div class="benefit-card">
                <i class="bi bi-headset"></i>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
                  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5"/>
                </svg>
                <h3 className='b-title mt-3'>Atención Rápida y Eficiente</h3>
                <p>Resolvemos tus dudas de manera ágil y ofrecemos soporte constante.</p>
              </div>
              <div class="benefit-card">
                <i class="bi bi-briefcase-fill"></i>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"/>
                  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"/>
                </svg>
                <h3 className='b-title mt-3'>Asesoría Integral</h3>
                <p>Contabilidad, impuestos, auditoría y planeación financiera en un solo lugar.</p>
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
