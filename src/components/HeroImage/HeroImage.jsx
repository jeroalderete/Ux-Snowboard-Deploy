import { HeroContainer, HeroBg, HeroImg, Text } from "./HeroElementsImg";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <HeroImg type="image/jpeg" />
        <Text>
          <div
            className="section pt-40 newsletter-container last-text-ux"
            id="contact"
          >
            <div className="text-center  max-w-[600px] mx-auto">
              <div className="sm:text-3xl text-2xl font-bold mb-5 ">
                <h3 className="join__movimiento font-secondary ">
                  Unite Al Movimiento
                </h3>
              </div>

              <div className="text-sm leading-7 text-gray">
                <p className="join__newsletter font-tertiary">
                  Ingresa tu e-mail y participa de nuestros descuentos y ultimos
                  lanzamientos.
                  <span></span>
                  Ux snowboard es mas que un deporte , es un estilo de vida.
                </p>
              </div>

              <motion.form
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-5"
              >
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60"
                />
                <button className="text-sm text-white bg-black sm:p-3 p-2 shadow-md font-bold">
                  Subscribe
                </button>
              </motion.form>
            </div>
          </div>
        </Text>
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroImage;
