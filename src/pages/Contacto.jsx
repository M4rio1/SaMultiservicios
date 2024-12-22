import React from "react";
import "./contacto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";

function Contacto() {
  return (
    <>
      <div className="bg-banner mb-12">
        <div class="overlay bg-black/60">
          <div class="container">
            <h1 className="cormorant-sc-bold text-3xl text-white mt-8 font-black animate__animated animate__fadeInDown">
              CONTACTO
            </h1>
          </div>
        </div>
      </div>
      <section className="section-spacing container contact-section">
        <form class="form">
          <p class="title">Formulario de contacto</p>
          <p class="message">Ingrese sus datos para enviar un mensaje</p>
          <div class="flex">
            <label>
              <span className="span">Nombre:</span>
              <input required="" placeholder="" type="text" class="input" />
            </label>
            <label>
              <span className="span">Apellidos:</span>
              <input required="" placeholder="" type="text" class="input" />
            </label>
          </div>
          <label>
            <span className="span">Empresa:</span>
            <input required="" placeholder="" type="text" class="input" />
          </label>
          <label>
            <span className="span">Numero de telefono</span>
            <input required="" placeholder="" type="text" class="input" />
          </label>

          <label>
            <span className="span">Email:</span>
            <input required="" placeholder="" type="email" class="input" />
          </label>
          <label>
            <span className="span">Mensaje:</span>
            <textarea required="" placeholder="" class="input"></textarea>
          </label>
          <button class="submit">Enviar</button>
        </form>
        <div class="contact-info">
          <div className="contact-info-item">
            <FontAwesomeIcon icon={faPhone} size="2x" className="icon-info" />
            <span className="mx-2">
              <strong>Teléfono:</strong> +502 1234 5678
            </span>
          </div>
          <div className="contact-info-item">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              className="icon-info"
            />
            <span className="mx-2">
              <strong>Email:</strong> contacto@empresa.com
            </span>
          </div>
          <div className="contact-info-item">
            <FontAwesomeIcon
              icon={faStreetView}
              size="2x"
              className="icon-info"
            />
            <span className="mx-2">
              <strong>Ubicacion: </strong>Calle 123, 123 123 Ciudad, Estado
            </span>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1107.0552994417626!2d-90.51322765815475!3d14.642151459634285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sgt!4v1734322275158!5m2!1ses-419!2sgt"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacto;
