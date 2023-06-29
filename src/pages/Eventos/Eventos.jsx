import React from "react";
import "./Eventos.css";
import "./normalize.css";
import Footer from "../../components/Footer/Footer";

import { CartContextProvider } from "../../Context/CartContext";
import Navbar from "../../components/Navbar/Navbar";

import { ProdContextProvider } from "../../Context/ProdContext";

const Eventos = () => {
  return (
    /*  MAIN SECTION  */
    <>
      <ProdContextProvider>
        <CartContextProvider>
          <Navbar />
          <div className="wrapper3">
            <div className="section-media-content2">
              <div className="quote">
                <h1 className="quote__content font-secondary p-5">EVENTOS</h1>
              </div>

              <article className="gallery gallery-hero">
                <img
                  className="gallery__image-col-3"
                  src="https://i.ibb.co/YRhQ0Hw/snowevent.jpg"
                  alt="snowboarder haciendo piruetas"
                />

                <div className="gallery__content-events text-container mx-3 pt-5">
                  <p className="gallery__text font-tertiary text-center pt-5">
                    Los campeonatos del mundo de snowboard se han celebrado cada
                    dos años desde 1997 , por lo que en años impares, y coronan
                    a sus ganadores en una sola carrera. La FIS formalizó esta
                    competición en 1996 . Es una de las tres competiciones de
                    snowboard más importantes del redil de la FIS junto con los
                    Juegos Olímpicos de Invierno y la Copa del Mundo . Fuera de
                    FIS, los X Games Winter también son populares.{" "}
                  </p>
                </div>
              </article>
            </div>

            <section className="section-alpha group">
              <img
                className="section-alpha__image right"
                src="https://i.ibb.co/yBTrtTB/snowevent4.jpg"
                width="700"
                height="439"
                alt="snowboarder compitiendo"
              />

              <article className="promo-box-pop promo-box--left">
                <span className="promo-box__sup font-primary">01</span>
                <h3 className="promo-box__title font-secondary">
                  Eventos Populares
                </h3>
                <p className="promo-box__text font-tertiary">
                  En 1990 se fundó la Federación Internacional e Snowboard (ISF)
                  para regular las competiciones de forma universal.{" "}
                  <span></span>
                  Los torneos mas populares son : ELDORADO Freeride Junior
                  Series, Freeride Grandvalira, Freeride World Tour Vallnord
                  Ordino-Arcalís, Mundiales Sierra Nevada y Grandvalira Total
                  Fight.
                </p>
                <article className="primary-button font-primary" href="#">
                  read more
                </article>
              </article>
            </section>

            <section className="section-betha group py-5">
              <div className="section-betha__aside">
                <div className="surf-camps__title vertical-text font-primary">
                  X-Games ESPN
                </div>
              </div>

              <img
                className="section-betha__image left"
                src="https://i.ibb.co/ZNrQW4q/event12.jpg"
                alt="snowboarder saltando"
              />

              <article className="promo-box-event promo-box--right right">
                <span className="promo-box__sup font-primary">02</span>
                <h3 className="promo-box__title font-secondary">Modalidades</h3>
                <p className="promo-box__text font-tertiary">
                  A lo largo del mundo , se compite a travez de varias
                  modalidades:
                  <span></span>
                  <span>Duel</span>, duelo 1 contra 1, una carrera a
                  contrareloj. <span></span>
                  <span>Carving</span> , es la competicion mas rapida , se
                  desarrolla en una pista de 150 y 300 metros. <span></span>
                  <span>Halfpipe</span>, estilo en el que se compite por hacer
                  la mayor cantidad de piruetas en el aires , realizar el salto
                  mas alto y demostrar el mejor estilo. <span></span>
                  <span>Cross</span>, compiten 4 corredores, tanto alpinos como
                  de freesytle. Se deslizan por una pista repleta de obstaculos
                  muy variados, se toman los tiempos de cada uno.
                </p>
                <a className="primary-button font-primary" href="#">
                  read more
                </a>
              </article>
            </section>

            <section className="section-alpha group">
              <img
                className="section-alpha__image right"
                src="https://i.ibb.co/Z8HQBMb/cup.jpg"
                width="700"
                height="439"
                alt="snowboarders recibiendo premios"
              />

              <article className="promo-box-campeones promo-box--left">
                <span className="promo-box__sup font-primary">01</span>
                <h3 className="promo-box__title font-secondary">
                  Campeones del Mundo
                </h3>
                <p className="promo-box__text font-tertiary">
                  Entre los competidores mas famosos, encontramos leyendas desde
                  Shaun White, Maëlle Ricker, Heidi Renoth, Richard Richardsson,
                  Fabien Rohrer, Karine Ruby, Manuela Riegler y Thomas Prugger.
                </p>
                <a className="primary-button font-primary" href="#">
                  read more
                </a>
              </article>
            </section>
          </div>
          <Footer />
        </CartContextProvider>
      </ProdContextProvider>
    </>
  );
};

export default Eventos;
