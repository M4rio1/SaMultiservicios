import React, { useState } from "react";

function AsesoriaFinanciera() {
  const [detalles, setDetalles] = useState({
    titulo: "Detalles del Servicio",
    descripcion: "Selecciona un servicio para ver detalles aquí.",
    lista: [],
  });

  const datosServicios = {
    consultoria: {
      titulo: "Consultoría y Asesoría Contable",
      descripcion:
        "Ofrecemos soluciones contables y fiscales personalizadas para optimizar la gestión financiera de tu negocio, garantizando cumplimiento legal y mejor control de recursos.",
      lista: [
        "Garantía de cumplimiento de normativas legales fiscales y contables.",
        "Mejora en la toma de decisiones financieras estratégicas.",
        "Ahorro de tiempo y reducción de errores en gestiones contables.",
        "Optimización de recursos económicos en tu empresa.",
      ],
    },
    defensaFiscal: {
      titulo: "Defensa Fiscal",
      descripcion:
        "Te representamos en procesos fiscales y atendemos reparos con estrategias sólidas, protegiendo tus intereses y reduciendo riesgos legales.",
      lista: [
        "Reducción de riesgos de sanciones fiscales.",
        "Protección de tus derechos frente a autoridades tributarias.",
        "Resolución ágil y efectiva de conflictos fiscales.",
        "Asesoría personalizada para cada caso específico.",
      ],
    },
    auditoria: {
      titulo: "Auditoría de Estados Financieros",
      descripcion:
        "Realizamos auditorías exhaustivas para garantizar la transparencia y precisión de tus estados financieros, impulsando la confianza de inversionistas y socios.",
      lista: [
        "Transparencia en la información financiera de tu negocio.",
        "Mayor credibilidad ante inversionistas, socios y entidades financieras.",
        "Identificación de áreas de mejora en la gestión financiera.",
        "Cumplimiento de requisitos legales para empresas auditadas.",
      ],
    },
    contable: {
      titulo: "Procesamiento, control y actualización contable.",
      descripcion:
        "Nos encargamos de llevar tus registros contables al día, asegurando un control financiero efectivo para la toma de decisiones estratégicas.",
      lista: [
        "Mantén tus registros financieros siempre al día.",
        "Reducción de errores en reportes contables.",
        "Mejora en el análisis de desempeño financiero.",
        "Base sólida para decisiones estratégicas futuras.",
      ],
    },
    impuestos: {
      titulo: "Asesoría Fiscal",
      descripcion:
        "Diseñamos estrategias fiscales ajustadas a tu actividad, minimizando costos tributarios y maximizando tus beneficios.",
      lista: [
        "Reducción de la carga fiscal mediante estrategias personalizadas.",
        "Cumplimiento de normativas tributarias aplicables a tu sector.",
        "Aprovechamiento de deducciones y beneficios fiscales.",
        "Maximización de recursos para reinversión en tu negocio.",
      ],
    },
    creditos: {
      titulo: "Asesoría en Línea de Créditos",
      descripcion:
        "Te ayudamos a identificar y gestionar opciones de crédito ideales para tus necesidades, fortaleciendo la liquidez y expansión de tu negocio.",
      lista: [
        "Identificación de créditos con tasas de interés más convenientes.",
        "Mejor planificación de pagos para evitar endeudamiento excesivo.",
        "Incremento de liquidez para operar y expandir tu negocio.",
        "Optimización del perfil crediticio de tu empresa.",
      ],
    },
    estadosAuditados: {
      titulo: "Estados Financieros Auditados",
      descripcion:
        "Preparamos y auditamos tus estados financieros con precisión profesional, mejorando tu acceso a financiamiento y oportunidades comerciales.",
      lista: [
        "Acceso a financiamiento con información financiera confiable",
        "Mayor confianza para atraer clientes e inversionistas.",
        "Cumplimiento de requisitos legales y regulatorios.",
        "Identificación de áreas de riesgo en las operaciones financieras.",
      ],
    },
  };

  const manejarClick = (clave) => {
    setDetalles(datosServicios[clave]);

    const detallesElemento = document.getElementById("detalles");
    if (detallesElemento) {
      detallesElemento.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bg-banner mb-12">
        <div class="overlay bg-black/60">
          <div class="container">
            <h1 className="cormorant-sc-bold text-3xl text-white mb-3 mt-3 font-black animate__animated animate__fadeInDown">
              Asesoria financiera y fiscal
            </h1>
          </div>
        </div>
      </div>
      <div className="section-spacing">
        <div className="container mx-auto">
          <div className="mb-12 block antialiased tracking-normal cormorant-sc-bold text-3xl leading-tight font-black text-center animate__animated animate__fadeInDown">
            <h2>Soluciones personalizadas para hacer crecer tu negocio</h2>
          </div>
          <div className="separator mb-12"></div>
          <div className="opt-serv antialiased font-inter text-base leading-relaxed font-normal text-blue-gray-600">
            <div className="opt">
              <div
                className="mb-3 list-borde"
                onClick={() => manejarClick("consultoria")}
              >
                <i class="bi bi-clipboard-data-fill"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-clipboard-data-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zM10 8a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1" />
                </svg>
                <span className="mx-2">
                  Consultoría y asesoría tributaria y contable.
                </span>
              </div>
              <div
                className="mb-3 list-borde"
                onClick={() => manejarClick("defensaFiscal")}
              >
                <i class="bi bi-shield-fill-check"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-shield-fill-check"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"
                  />
                </svg>
                <span className="mx-2">
                  Defensa fiscal y atención de reparos.
                </span>
              </div>
              <div
                className="mb-3 list-borde"
                onClick={() => manejarClick("auditoria")}
              >
                <i class="bi bi-bar-chart-line-fill"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-bar-chart-line-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z" />
                </svg>
                <span className="mx-2">Auditoria de estados financieros.</span>
              </div>
              <div
                className="mb-3 list-borde"
                onClick={() => manejarClick("contable")}
              >
                <i class="bi bi-calculator-fill"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-calculator-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 .5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5m0 4v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 12.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M7.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM7 9.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM10 6.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m.5 2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5z" />
                </svg>
                <span className="mx-2">
                  Procesamiento, control y actualización contable.
                </span>
              </div>
              <div
                className="mb-3 list-borde"
                onClick={() => manejarClick("impuestos")}
              >
                <i class="bi bi-receipt"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-receipt"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27m.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0z" />
                  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" />
                </svg>
                <span className="mx-2">
                  Asesoria de impuestos que mas le convenga según actividad
                  económica y giro del negocio.
                </span>
              </div>
              <div
                className="mb-3 list-borde"
                onClick={() => manejarClick("creditos")}
              >
                <i class="bi bi-credit-card-fill"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-credit-card-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1" />
                </svg>
                <span className="mx-2">Asesoría en linea de créditos.</span>
              </div>
              <div
                className="mb-3 list-borde"
                onClick={() => manejarClick("estadosAuditados")}
              >
                <i class="bi bi-file-earmark-bar-graph-fill"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-file-earmark-bar-graph-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m.5 10v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5m-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z" />
                </svg>
                <span className="mx-2">Estados Financieros Auditados.</span>
              </div>
            </div>
            <div
              id="detalles"
              className="mt-3 p-6 bg-gray-100 rounded-lg shadow more-info"
            >
              <h3 className="text-lg font-black cormorant-sc-bold">
                Detalles del Servicio
              </h3>
              <h2 className="text-center mt-3 text-xl font-black cormorant-sc-bold">
                {detalles.titulo}
              </h2>
              <p className="mt-4">{detalles.descripcion}</p>
              <h3 className="mt-3 mb-3 font-black cormorant-sc-bold">
                Beneficios del servicio:
              </h3>
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
  );
}

export default AsesoriaFinanciera;
