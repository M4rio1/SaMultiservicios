import React, { useState } from "react";

function ServiciosContables(){

    const [detalles, setDetalles] = useState({
        titulo: "Detalles del Servicio",
        descripcion: "Selecciona un servicio para ver detalles aquí.",
        lista: [

        ]
      });

      const datosServicios = {
        contribuyentes: {
          titulo: "Pequeños contribuyentes, servicios y comerciantes.",
          descripcion: "Ofrecemos asesoramiento especializado para pequeños contribuyentes y comerciantes, garantizando el cumplimiento de obligaciones fiscales y optimizando los procesos administrativos.",
          lista: [
            "Simplificación en la presentación de declaraciones y pagos fiscales.",
            "Cumplimiento con las normativas tributarias sin complicaciones.",
            "Ahorro de tiempo en trámites contables y administrativos.",
            "Mejor planificación financiera para el crecimiento del negocio.",
          ]
        },
        importadores: {
          titulo: "Importadores de vehículos y mercaderías.",
          descripcion: "Brindamos soporte contable y fiscal a importadores para que gestionen sus operaciones comerciales con total confianza y apego a la legislación vigente.",
          lista: [
            "Asesoría en la gestión de impuestos de importación y exportación.",
            "Reducción de riesgos de multas o sanciones fiscales.",
            "Control eficiente de costos y gastos relacionados con la actividad comercial.",
            "Mayor rentabilidad en la operación de importación.",
          ]
        },
        constructores: {
          titulo: "Constructores.",
          descripcion: "Diseñamos soluciones fiscales y contables adaptadas a las necesidades del sector de la construcción, ayudando a gestionar recursos financieros y cumplir con la normativa del sector.",
          lista: [
            "Cumplimiento con normativas fiscales específicas del sector.",
            "Optimización de costos en proyectos de construcción.",
            "Mayor claridad en los flujos financieros del negocio.",
            "Reducción de riesgos en auditorías y supervisiones legales.",
          ]
        },
        serviciosPro: {
          titulo: "Servicios Profesionales.",
          descripcion: "Ofrecemos servicios contables diseñados para profesionales independientes, ayudándolos a organizar sus finanzas y cumplir con sus responsabilidades tributarias.",
          lista: [
            "Control efectivo de ingresos y gastos para maximizar ganancias.",
            "Ahorro de tiempo en la gestión de impuestos y declaraciones.",
            "Mayor enfoque en la actividad profesional al delegar tareas contables.",
            "Evitación de problemas legales derivados de incumplimientos fiscales.",
          ]
        },
        SectorPrimario: {
          titulo: "Sector Primario y Agropecuario.",
          descripcion: "Apoyamos a productores del sector agropecuario con estrategias fiscales y contables que optimizan la rentabilidad de sus actividades.",
          lista: [
            "Reducción de costos operativos mediante beneficios fiscales específicos.",
            "Gestión adecuada de créditos y financiamientos para el sector.",
            "Cumplimiento de requisitos legales para exportación e importación de productos.",
            "Mayor control sobre las finanzas de la operación agropecuaria.",
          ]
        },
        PropiedadHorizontal: {
          titulo: "Propiedad Horizontal, Asociaciones y entidades no lucrativas.",
          descripcion: "Proporcionamos servicios de contabilidad y fiscalización para asociaciones, entidades sin fines de lucro y propiedades horizontales, adaptándonos a sus características particulares.",
          lista: [
            "Cumplimiento eficiente con las normativas legales aplicables.",
            "Transparencia en la gestión de recursos y fondos.",
            "Mayor confianza entre los socios o miembros de la organización.",
            "Asesoría especializada para evitar sanciones por incumplimiento fiscal.",
          ]
        },
      };
  
    const manejarClick = (clave) => {
        setDetalles(datosServicios[clave]);

        const detallesElemento = document.getElementById("detalles");
        if (detallesElemento) {
        detallesElemento.scrollIntoView({ behavior: "smooth" });
        }
    };

 return(
  <>
    <div className="bg-banner mb-12">
        <div class="overlay bg-black/60">
			<div class="container">
				<h2 className="cormorant-sc-bold text-3xl text-white mb-3 mt-3 font-black animate__animated animate__fadeInDown">SERVICIOS CONTABLES</h2>
			</div>
		</div>
    </div>
    <div className="section-spacing">
        <div className="container mx-auto">
            <div className="mb-12 block antialiased tracking-normal cormorant-sc-bold text-3xl leading-tight font-black text-center animate__animated animate__fadeInDown">
                <h2>Sectores que atendemos</h2>
            </div>
            <div className='separator mb-12'></div>
            <div className="opt-serv antialiased font-inter text-base leading-relaxed font-normal text-blue-gray-600">
                <div className="opt">
                    <div className="mb-3 list-borde" onClick={() => manejarClick("contribuyentes")}>
                        <i class="bi bi-person-fill"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                        <span className="mx-2">Pequeños contribuyentes, servicios y comerciantes.</span>
                    </div>
                    <div className="mb-3 list-borde" onClick={() => manejarClick("importadores")}>
                        <i class="bi bi-truck"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                        </svg>
                        <span className="mx-2">Importadores de vehículos y mercaderías.</span>
                    </div>
                    <div className="mb-3 list-borde" onClick={() => manejarClick("constructores")}>
                        <i class="bi bi-house-door-fill"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                        </svg>
                        <span className="mx-2">Constructores.</span>
                    </div>
                    <div className="mb-3 list-borde" onClick={() => manejarClick("serviciosPro")}>
                        <i class="bi bi-tools"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                        <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
                        </svg>
                        <span className="mx-3">Servicios Profesionales.</span>
                    </div>
                    <div className="mb-3 list-borde" onClick={() => manejarClick("SectorPrimario")}>
                        <i class="bi bi-tree-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-tree-fill" viewBox="0 0 16 16">
                        <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777z"/>
                        </svg>
                        <span className="mx-2">Sector Primario y Agropecuario.</span>
                    </div>
                    <div className="mb-3 list-borde" onClick={() => manejarClick("PropiedadHorizontal")}>
                        <i class="bi bi-building-fill"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-building-fill" viewBox="0 0 16 16">
                        <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"/>
                        </svg>
                        <span className="mx-2">Propiedad Horizontal, Asociaciones y entidades no lucrativas.</span>
                    </div>
                </div>
                <div id="detalles" className="mt-3 p-6 bg-gray-100 rounded-lg shadow more-info">
                        <h3 className="text-lg font-bold cormorant-sc-bold">Detalles del Servicio</h3>
                        <h2 className="text-center mt-3 text-xl font-black cormorant-sc-bold">{detalles.titulo}</h2>
                        <p className="mt-4">{detalles.descripcion}</p>
                        <h3 className="mt-3 mb-3 font-black cormorant-sc-bold">Beneficios del servicio:</h3>
                        <ul>
                            {detalles.lista.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
            </div>
        </div>
    </div>
    
 </>
    )
}

export default ServiciosContables;