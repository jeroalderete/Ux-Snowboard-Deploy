import "./HeroImage.css";

const HeroImage = ({
  heroImageBackground,
  title,
  title2,
  text1,
  text2,
  imgSrc,
  children,
}) => {
  return (
    <div className="md:flex justify-center">
      <div
        style={{
          height: "22vh",
          width: "75%",
          backgroundImage: `url(${imgSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right",
          objectFit: "cover",
        }}
        className="pb-5 "
      ></div>
      <img className="pb-5 text-start"></img>
      <div className="main-hero-image">
        <section className="hero-content"></section>
      </div>
    </div>
  );
};

export default HeroImage;
