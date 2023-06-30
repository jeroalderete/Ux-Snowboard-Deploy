import React from "react";
import "./UxSnowboard.css";
import "../Eventos/normalize.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { CartContextProvider } from "../../Context/CartContext";

import HeroSection from "../../components/HeroSection/HeroSection";
import { ProdContextProvider } from "../../Context/ProdContext";
import HeroImage from "../../components/HeroImage/HeroImage";

const UxSnowboard = () => {
  return (
    <>
      <ProdContextProvider>
        <CartContextProvider>
          <Navbar />

          <HeroSection />

          <div className="second-text-intro pt-40">
            <div className="section pb-20" id="teacher">
              <div className="grid sm:grid-cols-2 place-items-center gap-8">
                <div className="pl-5 text-mob">
                  <p className="text-sm leading-7 text-gray mb-5 pt-20 text-default-grey">
                    Con un mejor entendimiento de todos los aspectos de nuestros{" "}
                    <br></br>productos con Ux Snowboard, mejoraras rapido y{" "}
                    <br></br>podras tener mas diversion en la nieve. <br></br>{" "}
                    No te pierdas nuestros ultimos lanzamientos.
                  </p>
                  <div className="gallery__content">
                    <a className="primary-button font-primary" href="#">
                      TIENDA
                    </a>
                  </div>
                </div>
                <div className="p-4 md:w-3/4 lg:w-full">
                  <img src="https://i.ibb.co/Bs2MFTq/snow14.jpg" alt="" />
                </div>
              </div>
            </div>

            {/*  SHOP CONTAINER  */}

            <div className="shop-container-wrapper">
              <div className="shop-heading shop-wrapper pt-20 text-center title-container">
                <span className="heading__subtitle font-primary">Shop</span>
                <h2 className="heading__title font-secondary">UX Snowboards</h2>
              </div>

              <div className="shop-container shop-wrapper ">
                <div className="md:flex minishop-container ">
                  <img
                    className=""
                    src="https://i.ibb.co/Yp2NcvB/board1.png"
                    alt="tabla de snowboard"
                  />

                  <div>
                    <p className="content__subtitle font-tertiary">
                      <span className="pt-10 align-start">Snowboard</span>{" "}
                      <br></br>{" "}
                      <span className="content__title font-secondary pt-5">
                        Vans Ux Edition
                      </span>{" "}
                      <br></br>
                      <span className="content__price font-tertiary">$850</span>
                    </p>
                    <button className="content__buy font-primary text-xl pt-10">
                      Buy
                    </button>
                  </div>
                </div>

                <div className="md:flex minishop-container">
                  <img
                    src="https://i.ibb.co/tDzkz8M/board11.png"
                    alt="tabla de snowboard 2"
                  />
                  <div>
                    <p className="content__subtitle font-tertiary">
                      <span className="pt-10 align-start">Snowboard</span>{" "}
                      <br></br>{" "}
                      <span className="content__title font-secondary pt-5">
                        Ping UX Deluxe
                      </span>{" "}
                      <br></br>
                      <span className="content__price font-tertiary">$950</span>
                    </p>
                    <button className="content__buy font-primary text-xl pt-10">
                      Buy
                    </button>
                  </div>
                </div>

                <div className="md:flex minishop-container">
                  <img
                    className="catalog__snow-image3"
                    src="https://i.ibb.co/3WQ12zT/board3.png"
                    alt="tabla de snowboard 3"
                  />

                  <div>
                    <p className="content__subtitle font-tertiary">
                      <span className="pt-10 align-start">Snowboard</span>{" "}
                      <br></br>{" "}
                      <span className="content__title font-secondary pt-5">
                        Prime UX Ray
                      </span>{" "}
                      <br></br>
                      <span className="content__price font-tertiary">$670</span>
                    </p>
                    <button className="content__buy font-primary text-xl pt-10">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/*   SECTION SNOW 1  */}

            <div className="section pt-20 pb-40 last-text-ux" id="teacher">
              <div className="grid sm:grid-cols-2 place-items-center gap-1">
                <div></div>
                <div></div>
                <div className="pl-5 text-mob">
                  <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 title-mob">
                    Entrenamiento
                  </div>
                  <p className="text-sm leading-7 text-gray mb-5 pt-20 text-default-grey text-mob">
                    El deporte del snowboard es uno de los mas faciles de
                    aprender, su entrenamiento comprende dominar el equilibrio
                    entre los talones y punta de los pies. Se trabaja mucho la
                    administracion del oxigeno y la resistencia. Se recomienda
                    obtener un entrenamiento previo con uno profesional antes de
                    iniciar el deporte.
                  </p>
                  <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
                    Get Started
                  </button>
                </div>
                <div className="p-4 md:w-3/4 lg:w-full switch-order">
                  <img src="https://i.ibb.co/HV9vB63/snow15.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="section new-container" id="about">
              <div className="grid md:grid-cols-2  gap-8 place-items-center">
                <div className="border-[3px] border-solid border-Teal rounded-lg">
                  <img
                    className="p-4"
                    src="https://i.ibb.co/TWSch8d/snow16.jpg"
                    alt="persona saltando en snowboard"
                  />
                </div>

                <div>
                  <p className="text-sm leading-7 text-gray mb-40 text-default-grey text-mob ">
                    Dentro de los mejores lugares para andar, se recomienda
                    visitar Kartalkaya - Turquia, Yuzawa - Japon, Laax - Suiza,
                    Les Menuires - Francia. Para los principiantes, se
                    recomiendan lugares mas tranquilos como Andorra, Aspen y
                    Cerro Castor. <br></br> Comenza tu aventura con tu UX.
                  </p>
                </div>
              </div>
            </div>

            <HeroImage />

            <div className="section new-container" id="about">
              <div className="grid md:grid-cols-2  gap-8 place-items-center">
                <div className="border-[3px] border-solid border-Teal rounded-lg">
                  <img
                    className="p-4"
                    src="https://i.ibb.co/fvV6Cyd/mountain2.jpg"
                    alt="persona saltando en snowboard"
                  />
                </div>

                <div className="pt-40 last-text-ux">
                  <p className="text-sm leading-7 text-gray mb-40 text-default-grey text-mob">
                    Aprender, es un entretenimiento con la naturaleza que
                    comprende dominar el equilibrio entre los escenarios de la
                    vida.<br></br>
                    Visita nuestro establecimiento y senti todo el confort.{" "}
                    <br></br>
                    <br></br> Se trabaja mucho la comodidad de nuestros clientes
                    y su privacidad. Se recomienda reservar con anticipacion
                    previo a la confirmacion. <br></br> <br></br> OUR CAMP
                    Bariloche 33401, ARG El Condor Resort 360.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </CartContextProvider>
      </ProdContextProvider>
    </>
  );
};

export default UxSnowboard;
