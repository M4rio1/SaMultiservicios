import React from "react";
import "./NotFound.css";

function NotFound() {
  return (
    <>
      <div class="flex h-screen content-center items-center justify-center mb-home">
        <div className="absolute top-0 h-full w-full bg-banner  bg-cover bg-center"></div>
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center"></div>
        <div className="container absolute mx-auto ">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12 ">
              <div className="mb-3">
                <i class="bi bi-eye-slash-fill"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="white"
                  class="bi bi-eye-slash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                </svg>
              </div>
              <h1 className="block antialiased tracking-normal font-sans text-5xl leading-tight text-white mb-4 font-black ">
                Error page 404
              </h1>
              <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white opacity-90 mb-8">
                Sorry, the page not found
              </p>
              <br />
              <a href="/">
                <button className="btn-404">VOLVER AL INICIO</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
