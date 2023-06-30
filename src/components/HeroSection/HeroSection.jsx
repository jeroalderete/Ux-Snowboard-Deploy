import {
  HeroContainer,
  HeroBg,
  HeroImg,
  Absolute,
  Text,
  SubText,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <HeroImg type="image/jpeg" />
        <Absolute type="text">
          <div className=" pb-10">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem]  text-center pt-20">
              <span className="subtitle font-primar pt-40">vivi una</span>
              <span className="title font-secondary text-Teal pt-5 pb-5 text-center">
                Experiencia Unica
              </span>
            </div>
            <div className="text-sm lg:text-center  leading-7  text-center">
              <Text>
                <q className="font-tertiary text-center w-fit">
                  Una de las grandes cualidades sobre el deporte del Snowboard
                  es que solo necesitas 3 cosas. <span></span> Tu cuerpo, una
                  tabla y una montaña.
                </q>
              </Text>
            </div>
          </div>
        </Absolute>
        <SubText>
          <div className="quote">
            <q className="quote__content font-secondary">
              Ux Snowboard proporciona la ultima tecnologia en sus productos.{" "}
              <br></br>
              Expertos en fibra de carbono brindamos las mejores tablas de
              snowboard para los grandes competidores. <span></span>{" "}
              <span></span> Es una eleccion en el paraiso.
            </q>
            <span className="quote__author font-primary">
              Shaun UxerGham White
            </span>
          </div>
        </SubText>
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
