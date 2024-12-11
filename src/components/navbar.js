import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./navbar.css";
import logo from '../LOGO3.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand img" href="/">
           <img src={logo} alt='logo'
           className='navbar-logo'
           />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="">
          <FontAwesomeIcon icon={faBars}/>
          </i>
        </button>
        <div className="collapse navbar-collapse nav-links" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto nav-links font-sans font-semibold">
            <li className="nav-item">
              <a href="/" className="nav-link">Inicio</a>
            </li>
            <li className="nav-item">
              <a href="/Nosotros" className="nav-link">Nosotros</a>
            </li>
            <li className="nav-item">
              <a href="/Servicios" className="nav-link">Servicios</a>
            </li>
            <li className="nav-item">
              <a href="/Blog" className="nav-link">Blog</a>
            </li>
            <li className="nav-item">
              <a href="/Contacto" className="nav-link">Contacto</a>
            </li>
            <div class="paste-button nav-item">
              <a class="btn-s nav-link">Sitios de interes ▼</a>
              <div class="dropdown-content">
                <a id="top" href="https://declaraguate.sat.gob.gt/declaraguate-web/" target='_blank'>declaraguate</a>
                <a id="middle" href="https://portal.sat.gob.gt/portal/verificador-integrado/" target='_blank'>verificador integrado</a>
                <a id="bottom" href="https://portal.sat.gob.gt/portal/" target='_blank'>Agencia Virtual</a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;