import React from "react";
import "./Lugares.css";
import "../Eventos/normalize.css";
import Footer from "../../components/Footer/Footer";

import { CartContextProvider } from "../../Context/CartContext";
import Navbar from "../../components/Navbar/Navbar";

import { ProdContextProvider } from "../../Context/ProdContext";

const Lugares = () => {
  return (
    <>
      <ProdContextProvider>
        <CartContextProvider>
          <Navbar />
          <div className="wrapper4">
            <main>
              <section className="primary-slider group d-lg-flex flex-lg-row justify-content-lg-center d-xl-flex justify-content-xl-end ">
                <div className="primary-slider__content">
                  <h1 className="primary-slider__title font-secondary">
                    Paraisos <span></span>{" "}
                  </h1>
                  <h2 className="display-1">Perfectos</h2>
                  <p className="primary-slider__paragraph font-tertiary">
                    Los mejores lugares de snowboard del planeta recomendados
                    por corredores profesionales.
                  </p>
                </div>
                <img
                  className="primary-slider__image right "
                  src="https://i.ibb.co/ys3vKjF/lugares11.jpg"
                  alt="Montanias y una cabania"
                />
              </section>

              <div className="section-media-content2">
                <article className="gallery">
                  <img
                    className="gallery__image-col-1"
                    src="https://i.ibb.co/6YFZdpB/lugares2.jpg"
                    alt="montanias"
                  />
                  <div className="gallery__col-2">
                    <img
                      className="gallery__image-col-2"
                      src="https://i.ibb.co/VMcW2m5/lugares3.jpg"
                      alt="una joven snowboarder sonriendo"
                    />
                  </div>
                  <div className="gallery__content">
                    <p className="gallery__text font-tertiary mx-5">
                      <span>T</span>okio, el centro de esquí de Yuzawa recibe
                      tanto visitas nacionales como internacionales, y de todos
                      los niveles. <span></span>La ciudad en sí misma se mantuvo
                      al margen del desarrollo turístico, por lo que quienes la
                      visitan pueden sumergirse de inmediato en una cálida
                      comunidad de snowboarders.{" "}
                    </p>
                    <a className="primary-button font-primary" href="#">
                      Read More
                    </a>
                  </div>
                </article>
              </div>

              <section className="section-alpha group">
                <img
                  className="section-alpha__image right"
                  src="https://i.ibb.co/t89HPhv/lugares4.jpg"
                  width="762"
                  height="439"
                  alt="montanias"
                />

                <article className="promo-box-lugares promo-box--left">
                  <span className="promo-box__sup font-primary">01</span>
                  <h3 className="promo-box__title font-secondary">
                    Alpes Suizos
                  </h3>
                  <p className="promo-box__text font-tertiary">
                    <span>L</span>aax es una de las regiones para hacer
                    snowboard con condiciones más estables, y dado que muchas de
                    sus pendientes están entre los 2000 y los 3000 metros de
                    altura, la nieve está casi garantizada. Los centros de esquí
                    en los alrededores de esta ciudad suiza satisfacen a todos
                    los niveles de adeptos al snowboard, ya que entre sus 224 km
                    de pendientes y sus 4 parques de nieve hay pistas azules,
                    rojas y negras.
                  </p>
                  <a className="primary-button font-primary" href="#">
                    read more
                  </a>
                </article>
              </section>

              <section className="section-join">
                <h3 className="join__title font-secondary">Ski Resort</h3>
              </section>

              <section className="section-contact group">
                <img
                  className="section-contact__image"
                  src="https://i.ibb.co/bbb1qZq/skiresort.jpg"
                  alt="ski resort"
                  width="720"
                  height="475"
                />

                <div className="contact-content right">
                  <span className="contact-content__sup font-primary pb-5">
                    {" "}
                    Francia{" "}
                  </span>
                  <h3>Les Menuires</h3>
                  <p className="contact-content__address  promo-box__text font-tertiary">
                    <span>L</span>es Menuires es un verdadero paraíso tanto para
                    snowboarders con experiencia como para principiantes.
                    Algunas de las pistas azules favoritas incluyen la Boulevard
                    Cumin y la Pluviometre. <span></span> Los paisajes en los
                    alrededores de Les Menuires son tan hermosos que muchas
                    personas prefieren no usar los medios de elevación y caminar
                    para apreciar la vista.
                  </p>
                  <a className="primary-button font-primary" href="#">
                    More info
                  </a>
                </div>
              </section>
            </main>
          </div>
          <Footer />
        </CartContextProvider>
      </ProdContextProvider>
    </>
  );
};

export default Lugares;
