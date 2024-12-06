import React from 'react';
import asesoriaimg from "../asesoria.webp";
import contableimg from "../contable.webp";
import financieroimg from "../financiero.webp";
import tramitesimg from "../tramites.webp";
import aduanaimg from "../aduana.webp";
import "./Servicios.css";

function Servicios() {
  
  return (
    <>
    <div className="bg-banner section-spacing">
    <div class="overlay bg-black/60">
			<div class="container">
				<h2 className="block antialiased tracking-normal font-sans text-3xl leading-tight text-white mb-3 font-black">SERVICIOS</h2>
			</div>
		</div>
   </div>
   <div class="section-spacing">
    <div class="container mx-auto">
      <div className='mb-8 -mt-8 block antialiased tracking-normal font-sans text-3xl leading-tight font-black text-center'>
        <h2>Servicios que Ofrecemos</h2>
      </div>
      <div className='separator mb-12'></div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10">
              <div className="p-6 px-8 text-center">
                  <i class="bi bi-shop-window"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" class="bi bi-shop-window" viewBox="0 0 16 16">
                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5"/>
                  </svg>
                <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold mb-3 mt-3 text-blue-gray-900">Asesoria financiera <br/>y fiscal</h5>
                <div className='img-serv mb-3'>
                  <img src={asesoriaimg} alt='Asesoria financiera y fiscal' className='border-rad img-serv'/>
                </div>
                <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600 mb-3">Ofrecemos una oportuna asesoría podrá tener el control de sus finanzas, para una buena toma de decisiones y pueda alcanzar sus objetivos y crecimiento.
                </p>
                <a href='/Servicios/Asesoria-financiera'>
                  <button className='btn-serv'>Más información</button>
                </a>
              </div>
          </div>
          <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10">
              <div className="p-6 px-8 text-center">
                <i class="bi bi-cash-coin"></i>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" class="bi bi-cash-coin" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
                </svg>
                <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-3 mt-3">Servicios Contables</h5>
                <div className='img-serv mb-3'>
                  <img src={contableimg} alt='Servicios contables'className='border-rad img-serv'/>
                </div>
                <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600 mb-3">Con nuestro servicio contable tendrá la confianza del manejo de su contabilidad, con información oportuna y pago de impuestos de manera correcta, con buenas estrategias fiscales que representes a la empresa ahorro de dinero.</p>
                <a href='/Servicios/servicios-contables'>
                  <button className='btn-serv'>Más información</button>
                </a>
              </div>
          </div>
          <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10">
              <div className="p-6 px-8 text-center">
                <i class="bi bi-bank2"></i>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" class="bi bi-bank2" viewBox="0 0 16 16">
                  <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916zM12.375 6v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2M.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1z"/>
                </svg>
                <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-3 mt-3">Auditoría de estados financieros</h5>
                <div className='img-serv mb-3'>
                  <img src={financieroimg} alt='Estados financieros' className='border-rad img-serv'/>
                </div>
                <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600 mb-3">Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.</p>
                <button className='btn-serv'>Más información</button>
              </div>
          </div>
          <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10">
              <div className="p-6 px-8 text-center">
                <i class="bi bi-receipt"></i>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" class="bi bi-receipt" viewBox="0 0 16 16">
                  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27m.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0z"/>
                  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"/>
                </svg>
                <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-3 mt-3">Tramites</h5>
                <div className='img-serv mb-3'>
                  <img src={tramitesimg} alt='Tramites' className='border-rad img-serv'/>
                </div>
                <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600 mb-3">Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.</p>
                <a href='/Servicios/Tramites'>
                  <button className='btn-serv'>Más información</button>
                </a>
              </div>
          </div>
          <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10">
              <div className="p-6 px-8 text-center">
                <i class="bi bi-box-seam-fill"></i>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" class="bi bi-box-seam-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"/>
                </svg>
                <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-3 mt-3">Servicios aduaneros</h5>
                <div className='img-serv mb-3'>
                  <img src={aduanaimg} alt='Servicios aduaneros' className='border-rad img-serv'/>
                </div>
                <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600 mb-3">Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.</p>
                <button className='btn-serv'>Más información</button>
              </div>
          </div>
        </div>
     </div>
   </div>
   </>
  );
}

export default Servicios;
