import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import FloatingWhatsApp from "./contact-btn";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: "70vh", padding: "0px" }}>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default Layout;
