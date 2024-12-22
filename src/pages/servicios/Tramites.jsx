import React, { useState } from "react";

function Tramites() {
  const [detalles, setDetalles] = useState({
    titulo: "Detalles del Servicio",
    descripcion: "Selecciona un servicio para ver detalles aquí.",
  });

  const datosServicios = {
    AperturayCierre: {
      titulo:
        "Apertura y cierre de empresas individuales y sociedades anónimas.",
      descripcion:
        "Consultoría y asesoría tributaria y contable para optimizar tus finanzas.",
    },
    HabilitacionDeCodigos: {
      titulo: "Habilitaciones de códigos de importador y exportador.",
      descripcion:
        "Defensa fiscal efectiva y atención personalizada en reparos.",
    },
    HabilitacionDeLibros: {
      titulo:
        "Habilitaciones de libros contables ante la SAT y Registro Mercantil.",
      descripcion:
        "Auditorías detalladas a estados financieros para garantizar transparencia.",
    },
    ActualizacionesRTU: {
      titulo: "Actualizaciones de RTU.",
      descripcion: "Procesamiento, control y actualización contable eficiente.",
    },
    Inscripciones: {
      titulo: "Inscripciones al Seguro Social.",
      descripcion:
        "Asesoría fiscal para elegir los impuestos más convenientes para tu negocio.",
    },
    Reglamentos: {
      titulo: "Reglamentos de trabajo",
      descripcion:
        "Orientación especializada para obtener y gestionar líneas de crédito.",
    },
    ResidenciaExtranjeros: {
      titulo: "Residencias para extranjeros.",
      descripcion: "Preparación y revisión de estados financieros auditados.",
    },
    CeseActividades: {
      titulo: "Cese de actividades.",
      descripcion: "",
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
            <h2 className="cormorant-sc-bold text-3xl text-white mb-3 font-black animate__animated animate__fadeInDown">
              TRAMITES
            </h2>
          </div>
        </div>
      </div>
      <div className="section-spacing">
        <div className="container mx-auto">
          <div className="mb-12 block antialiased tracking-normal font-sans text-3xl leading-tight font-black text-center">
            <h2></h2>
          </div>
          <div className="opt-serv antialiased font-inter text-base leading-relaxed font-normal text-blue-gray-600">
            <div className="opt">
              <div
                className="mb-3 list-borde"
                onClick={() => manejarClick("AperturayCierre")}
              >
                <i class="bi bi-buildings-fill"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-buildings-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z" />
                </svg>
                <span className="px-2">
                  Apertura y cierre de empresas individuales y sociedades
                  anónimas.
                </span>
              </div>
              <div
                className="mb-3 list-borde"
                onClick={() => manejarClick("HabilitacionDeCodigos")}
              >
                <i class="bi bi-truck"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-truck"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                </svg>
                <span className="px-2">
                  Habilitaciones de códigos de importador y exportador.
                </span>
              </div>
              <div
                className="mb-3 list-borde"
                onClick={() => manejarClick("HabilitacionDeLibros")}
              >
                <i class="bi bi-journal-bookmark-fill"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-journal-bookmark-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"
                  />
                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                </svg>
                <span className="mx-2">
                  Habilitaciones de libros contables ante la SAT y Registro
                  Mercantil.
                </span>
              </div>
              <div
                className="mb-3 list-borde"
                onClick={() => manejarClick("ActualizacionesRTU")}
              >
                <i class="bi bi-pencil-square"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                  />
                </svg>
                <span className="mx-2">Actualizaciones de RTU.</span>
              </div>
              <div
                className="mb-3 list-borde"
                onClick={() => manejarClick("Inscripciones")}
              >
                <i class="bi bi-person-fill-check"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-person-fill-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                </svg>
                <span className="mx-2">Inscripciones al Seguro Social.</span>
              </div>
              <div
                className="mb-3 list-borde"
                onClick={() => manejarClick("Reglamentos")}
              >
                <i class="bi bi-file-earmark-text"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-file-earmark-text"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                </svg>
                <span className="mx-2">Reglamentos de trabajo.</span>
              </div>
              <div
                className="mb-3 list-borde"
                onClick={() => manejarClick("ResidenciaExtranjeros")}
              >
                <i class="bi bi-globe-americas"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-globe-americas"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                </svg>
                <span className="mx-2">Residencias para extranjeros.</span>
              </div>
              <div
                className="mb-3 list-borde"
                onClick={() => manejarClick("CeseActividades")}
              >
                <i class="bi bi-x-circle-fill"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-x-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                </svg>
                <span className="mx-2">Cese de actividades.</span>
              </div>
            </div>
            <div
              id="detalles"
              className="mt-3 p-6 bg-gray-100 rounded-lg shadow more-info"
            >
              <h3 className="text-lg font-bold cormorant-sc-bold">
                Detalles del Servicio
              </h3>
              <h2 className="text-center mt-3 text-xl font-black cormorant-sc-bold">
                {detalles.titulo}
              </h2>
              <p className="mt-4">{detalles.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tramites;
