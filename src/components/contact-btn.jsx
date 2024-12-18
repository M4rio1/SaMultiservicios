import React from 'react';
import './contact-btn.css';

function FloatingWhatsApp() {
  return (
        <>
            <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            />
    
            <a
            href="https://wa.me/1234567890"
            class="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
            >
                <i class="fa-brands fa-whatsapp"></i>
            </a>
    
        </>
    );
}

export default FloatingWhatsApp;
