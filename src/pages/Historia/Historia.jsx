import React from "react";
import "./Historia.css";
import "../Eventos/normalize.css";
import Footer from "../../components/Footer/Footer";
import { CartContextProvider } from "../../Context/CartContext";
import Navbar from "../../components/Navbar/Navbar";

import { ProdContextProvider } from "../../Context/ProdContext";

const Historia = () => {
  return (
    <>
      <ProdContextProvider>
        <CartContextProvider>
          <Navbar />
          <div className="wrapper7">
            <div className="new-container pt-10">
              <div className="font-bold sm:text-[1.875rem] text-[1.5rem]  text-center ">
                <div className="quote pt-5">
                  <q className="quote__content font-secondary">
                    El snowboard, conocido inicialmente como <span></span> surf
                    de la nieve es un deporte extremo que nació en los años 60
                    del siglo XX en Estados Unidos.
                  </q>
                  <span className="quote__author font-primary">
                    Ryan Hardy - CEO UX SNOWBOARDING
                  </span>
                </div>
              </div>
            </div>

            <div className="shop-container-wrapper">
              <div className="shop-heading shop-wrapper text-center title-container">
                <h2 className="heading__title font-secondary">UX Snowboards</h2>
              </div>

              <div className="shop-container shop-wrapper">
                <img
                  className="gallery__image-col-1"
                  src="https://i.ibb.co/qRCzXgJ/snow2page.jpg"
                  alt="persona saltando en snowboard"
                />

                <div className="gallery__col-2">
                  <img
                    className="gallery__image-col-2"
                    src="https://i.ibb.co/s1r5sd4/snowpage3.jpg"
                    alt="persona saltando en snowboard"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 place-items-center ml-20 pb-20 main-text-container">
                <div className="pl-20 pt-5 text-container-intro button-mob">
                  <p className="text-sm leading-7 sm:text-center text-gray mb-5 pt-20 text-default-grey ">
                    Con un mejor entendimiento de todos los aspectos de nuestros{" "}
                    <br></br>productos con Ux Snowboard, mejoraras rapido y{" "}
                    <br></br>
                    podras tener mas diversion en la nieve. <br></br> No te
                    pierdas nuestros ultimos lanzamientos.
                  </p>

                  <a className="primary-button font-primary" href="#">
                    LEER MAS
                  </a>
                </div>
              </div>
            </div>

            <div className="section pb-20" id="teacher">
              <div className="grid md:grid-cols-2 gap-8 place-items-center">
                <div className="pl-5">
                  <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-center">
                    Un Poco De Historia
                  </div>
                  <p className="text-sm leading-7 text-gray mb-5 pt-20 text-default-grey text-container-intro ">
                    Las primeras evidencias de snowboard se remontan a
                    principios del 1910, cuando la gente quería fijar sus pies a
                    un tablón de madera contrachapada mediante cuerdas de pesca
                    y riendas de caballos para poder bajar por las pendientes de
                    las montañas nevadas. Actualmente se realiza cada año impar,
                    y desde la edición de 2015 se efectúa conjuntamente con el
                    Campeonato Mundial de Esquí Acrobático.
                  </p>
                  <div className="gallery__content pt-5 button-mob">
                    <div className="button-top-mob">
                      <a className="primary-button font-primary" href="#">
                        TIENDA
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-3/4 lg:w-full switch-order ">
                  <img src="https://i.ibb.co/Qcqm7ps/snowtorneo.jpg" alt="" />
                </div>
              </div>
            </div>

            {/*  SHOP CONTAINER  */}

            {/*   SECTION SNOW 1  */}

            <div className="section new-container pt-20 pb-20" id="about">
              <div className="grid md:grid-cols-2 gap-8 place-items-center">
                <div className="border-[3px] border-solid border-Teal rounded-lg">
                  <img
                    className="p-4"
                    src="https://i.ibb.co/w6FkvyB/snow4.jpg"
                    alt="persona saltando en snowboard"
                  />
                </div>
                <div>
                  <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 title-mob">
                    INICIOS
                  </div>
                  <div className="button-mob">
                    <p className="text-sm leading-7 text-gray mb-10 text-default-grey text-container-intro">
                      En 1963, un estudiante norteamericano de 13 años de edad
                      llamado Tom Sims (1950-2012), surfista y esquiador, adaptó
                      la idea del monopatín de madera para deslizarse por la
                      nieve e inventó la primera tabla de snowboard de la
                      historia.
                    </p>
                    <div className="button-top-mob">
                      <a className="primary-button font-primary " href="#">
                        LEER MAS
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section new-container " id="about">
              <div className="grid md:grid-cols-2 gap-8 place-items-center">
                <div className="border-[3px] border-solid border-Teal rounded-lg">
                  <img
                    className="p-2"
                    src="https://i.ibb.co/HV9vB63/snow15.jpg"
                    alt="persona saltando en snowboard"
                  />
                </div>

                <div className="pt-10">
                  <p className="text-sm leading-7 text-gray mb-40 text-default-grey text-container-intro">
                    Aprender, es un entretenimiento con la naturaleza que
                    comprende dominar el equilibrio entre los escenarios de la
                    vida.<br></br>
                    Visita nuestro establecimiento y senti todo el confort.{" "}
                    <br></br>
                    Se trabaja mucho la comodidad de nuestros clientes y su
                    privacidad. Se recomienda reservar con anticipacion previo a
                    la confirmacion. <br></br> <br></br> OUR CAMP Bariloche
                    33401, ARG El Condor Resort 360.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-40"></div>
          </div>
          <Footer />
        </CartContextProvider>
      </ProdContextProvider>
    </>
  );
};

export default Historia;
